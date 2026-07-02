#!/usr/bin/env node
'use strict';

// scripts/adapt-lovable-to-nextjs.js
//
// Transforms Vite + React (TanStack Router) source files from the client's
// Lovable project into Next.js App Router compatible files, and writes them
// into this repo at app/college-explorer/ and components/CollegeExplorer/.
//
// Called by .github/workflows/sync-college-explorer.yml and by
// scripts/sync-college-explorer.sh for local runs. No dependencies beyond
// Node builtins (fs, path) - works on Node 18+.
//
// Env vars:
//   LOVABLE_PAGE_PATH       (required) - dir in the Lovable checkout holding the page
//   LOVABLE_COMPONENT_PATH  (optional) - dir in the Lovable checkout holding components
//   DEST_PAGE_PATH          (required) - dir in this repo to write the page into
//   DEST_COMPONENT_PATH     (optional) - dir in this repo to write components into
//
// Usage:
//   LOVABLE_PAGE_PATH=/tmp/lovable-source/src/routes/college-explorer \
//   LOVABLE_COMPONENT_PATH=/tmp/lovable-source/src/components/CollegeExplorer \
//   DEST_PAGE_PATH=app/college-explorer \
//   DEST_COMPONENT_PATH=components/CollegeExplorer \
//   node scripts/adapt-lovable-to-nextjs.js

const fs = require('fs');
const path = require('path');

const CODE_EXTENSIONS = new Set(['.ts', '.tsx']);

// Presence of any of these in a file's source means it must be a client component.
const CLIENT_MARKERS = [
  'useState',
  'useEffect',
  'useRef',
  'useContext',
  'onClick',
  'onChange',
  'useNavigate',
  'useRouter',
  'useParams',
];

/**
 * Runs every Vite/TanStack -> Next.js rewrite on one file's source and
 * returns both the transformed code and a human-readable log of what changed.
 * Kept separate from transform() so the CLI can print details without
 * changing transform()'s simple string-in/string-out contract.
 */
function applyTransform(fileContent) {
  const log = [];
  let code = fileContent;

  // Strip any 'use client' directive already present so re-running this
  // script never stacks up duplicate directives (idempotency).
  const useClientRe = /^['"]use client['"];?\s*\n?/;
  code = code.replace(useClientRe, '');

  let usesNavigateHook = false;

  // Rewrite (or drop) every named import pulled from '@tanstack/react-router'.
  // Handles both single-line and multi-line `import { a, b } from '...'` forms.
  const tanstackImportRe = /import\s*\{([^}]*)\}\s*from\s*['"]@tanstack\/react-router['"];?\s*\n?/g;
  code = code.replace(tanstackImportRe, (_match, specifierList) => {
    const specifiers = specifierList
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);

    const outLines = [];
    for (const spec of specifiers) {
      // Ignore `as` aliases when identifying the symbol - keep the logic simple.
      const name = spec.split(/\s+as\s+/)[0].trim();

      if (name === 'useNavigate') {
        outLines.push("import { useRouter } from 'next/navigation';");
        usesNavigateHook = true;
        log.push(
          "Replaced `import { useNavigate } from '@tanstack/react-router'` -> `import { useRouter } from 'next/navigation'`"
        );
      } else if (name === 'Link') {
        outLines.push("import Link from 'next/link';");
        log.push("Replaced `import { Link } from '@tanstack/react-router'` -> `import Link from 'next/link'`");
      } else if (name === 'useParams') {
        log.push(
          "WARNING: removed `import { useParams } from '@tanstack/react-router'` - Next.js passes route params as page props, so useParams() call sites need manual porting to `params` props"
        );
        // No replacement import written - Next.js has no drop-in equivalent hook.
      } else {
        outLines.push(
          `// TODO(lovable-sync): "${name}" was imported from '@tanstack/react-router' and has no automatic Next.js equivalent. Port it by hand.`
        );
        log.push(`WARNING: unsupported TanStack Router import "${name}" left as a TODO comment - needs manual porting`);
      }
    }
    return outLines.length ? outLines.join('\n') + '\n' : '';
  });

  if (usesNavigateHook) {
    // Rewrite `const x = useNavigate();` (let/var too) in one shot, renaming
    // the variable itself to `router` - not just the hook call - so later
    // `x(...)` call sites can become `router.push(...)` and actually resolve.
    const declRe = /\b(const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*useNavigate\(\)\s*;?/;
    const declMatch = code.match(declRe);
    let navigateVarName = 'navigate';

    if (declMatch) {
      navigateVarName = declMatch[2];
      code = code.replace(declRe, `${declMatch[1]} router = useRouter();`);
      log.push(`Replaced \`${declMatch[1]} ${navigateVarName} = useNavigate()\` -> \`${declMatch[1]} router = useRouter()\``);
    } else if (/\buseNavigate\(\)/.test(code)) {
      // No obvious `const x = useNavigate()` declaration found - just swap the
      // hook call and fall back to assuming the conventional `navigate` name
      // for the call-site rewrite below.
      code = code.replace(/\buseNavigate\(\)/g, 'useRouter()');
      log.push('Replaced `useNavigate()` call -> `useRouter()`');
    }

    // navigate('/path') -> router.push('/path') for whichever variable name
    // actually held the useNavigate() result.
    const callRe = new RegExp(`\\b${navigateVarName}\\(`, 'g');
    if (callRe.test(code)) {
      code = code.replace(callRe, 'router.push(');
      log.push(`Replaced \`${navigateVarName}(...)\` calls -> \`router.push(...)\``);
    }
  }

  // import.meta.env.VITE_FOO -> process.env.NEXT_PUBLIC_FOO
  if (/import\.meta\.env\.VITE_/.test(code)) {
    code = code.replace(/import\.meta\.env\.VITE_([A-Za-z0-9_]+)/g, 'process.env.NEXT_PUBLIC_$1');
    log.push('Replaced `import.meta.env.VITE_*` -> `process.env.NEXT_PUBLIC_*`');
  }

  // Client components: add the directive if the source (pre- or post-transform)
  // uses any hook/handler that requires the browser runtime.
  const needsUseClient = CLIENT_MARKERS.some((marker) => code.includes(marker));
  if (needsUseClient) {
    code = `'use client';\n\n${code}`;
    log.push("Added `'use client';` as the first line");
  }

  return { code, log };
}

/**
 * Pure text transform: Vite/TanStack Router source -> Next.js App Router source.
 * Exported on its own (string in, string out) so it's trivial to unit test.
 */
function transform(fileContent) {
  return applyTransform(fileContent).code;
}

// ---------------------------------------------------------------------------
// CLI: walk the detected Lovable source dirs, transform code files, copy
// everything else untouched, and write the result into this repo.
// ---------------------------------------------------------------------------

function isCodeFile(filePath) {
  return CODE_EXTENSIONS.has(path.extname(filePath));
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full));
    } else if (entry.isFile()) {
      out.push(full);
    }
  }
  return out;
}

function rimraf(target) {
  if (fs.existsSync(target)) {
    fs.rmSync(target, { recursive: true, force: true });
  }
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

/**
 * Wipes destDir, then copies (and transforms) every file from srcDir into it.
 * Wiping first is what makes reruns idempotent and lets file deletions in
 * Lovable propagate - it only ever touches destDir, nothing else in the repo.
 */
function syncTree(srcDir, destDir, label) {
  if (!srcDir) {
    console.log(`[adapt-lovable-to-nextjs] no ${label} source path provided, skipping.`);
    return { entryCandidates: [] };
  }
  if (!fs.existsSync(srcDir)) {
    console.log(`[adapt-lovable-to-nextjs] ${label} source path "${srcDir}" does not exist, skipping.`);
    return { entryCandidates: [] };
  }

  rimraf(destDir);
  ensureDir(destDir);

  const entryCandidates = [];
  const sourceFiles = walk(srcDir);

  if (sourceFiles.length === 0) {
    console.log(`[adapt-lovable-to-nextjs] ${label} source path "${srcDir}" is empty, nothing to sync.`);
    return { entryCandidates };
  }

  for (const srcFile of sourceFiles) {
    const rel = path.relative(srcDir, srcFile);
    const destFile = path.join(destDir, rel);
    ensureDir(path.dirname(destFile));

    if (isCodeFile(srcFile)) {
      const original = fs.readFileSync(srcFile, 'utf8');
      const { code, log } = applyTransform(original);
      fs.writeFileSync(destFile, code, 'utf8');
      console.log(`[adapt-lovable-to-nextjs] wrote ${destFile}`);
      if (log.length === 0) {
        console.log('    - no transformations needed');
      } else {
        for (const line of log) console.log(`    - ${line}`);
      }
      entryCandidates.push({ rel, code });
    } else {
      fs.copyFileSync(srcFile, destFile);
      console.log(`[adapt-lovable-to-nextjs] copied ${destFile} (untouched, non-code file)`);
    }
  }

  return { entryCandidates };
}

/** Best-effort detection of the identifier a file default-exports. */
function detectDefaultExportName(code) {
  let m = code.match(/export\s+default\s+function\s+([A-Za-z_$][\w$]*)/);
  if (m) return m[1];
  m = code.match(/export\s+default\s+class\s+([A-Za-z_$][\w$]*)/);
  if (m) return m[1];
  m = code.match(/export\s+default\s+([A-Za-z_$][\w$]*)\s*;/);
  if (m) return m[1];
  return null;
}

/** Picks which transformed file is "the" page component, in order of preference. */
function pickEntryFile(entryCandidates, pageDirName) {
  if (entryCandidates.length === 0) return null;
  const byBaseName = (name) =>
    entryCandidates.find((c) => path.basename(c.rel, path.extname(c.rel)).toLowerCase() === name.toLowerCase());

  return (
    entryCandidates.find((c) => c.rel === 'page.tsx' || c.rel === 'page.ts') ||
    byBaseName('index') ||
    byBaseName(pageDirName) ||
    entryCandidates.find((c) => !c.rel.includes(path.sep)) ||
    entryCandidates[0]
  );
}

/**
 * Next.js requires the route entry file to be literally named page.tsx.
 * If the synced files didn't already include one, generate one that
 * re-exports the detected main component as the default export.
 */
function ensurePageEntry(destPageDir, entryCandidates) {
  const pageTsxPath = path.join(destPageDir, 'page.tsx');
  if (fs.existsSync(pageTsxPath)) {
    console.log('[adapt-lovable-to-nextjs] page.tsx already present after sync, leaving it as the route entry.');
    return;
  }

  const entry = pickEntryFile(entryCandidates, path.basename(destPageDir));
  if (!entry) {
    console.log('[adapt-lovable-to-nextjs] WARNING: no page.tsx exists and no source files were found to generate one from.');
    return;
  }

  const exportName = detectDefaultExportName(entry.code);
  if (!exportName) {
    console.log(
      `[adapt-lovable-to-nextjs] WARNING: could not detect a default export in ${entry.rel}; generating page.tsx that re-exports its default anyway.`
    );
  }

  const importPath = './' + entry.rel.replace(/\.(tsx|ts)$/, '').split(path.sep).join('/');
  const generated = `export { default } from '${importPath}';\n`;

  fs.writeFileSync(pageTsxPath, generated, 'utf8');
  console.log(`[adapt-lovable-to-nextjs] generated page.tsx re-exporting the default export from ${importPath}`);
}

function main() {
  const { LOVABLE_PAGE_PATH, LOVABLE_COMPONENT_PATH, DEST_PAGE_PATH, DEST_COMPONENT_PATH } = process.env;

  if (!LOVABLE_PAGE_PATH || !DEST_PAGE_PATH) {
    console.error('[adapt-lovable-to-nextjs] LOVABLE_PAGE_PATH and DEST_PAGE_PATH are required env vars.');
    process.exit(1);
  }

  console.log('[adapt-lovable-to-nextjs] starting sync');
  console.log(`  LOVABLE_PAGE_PATH      = ${LOVABLE_PAGE_PATH}`);
  console.log(`  LOVABLE_COMPONENT_PATH = ${LOVABLE_COMPONENT_PATH || '(not set)'}`);
  console.log(`  DEST_PAGE_PATH         = ${DEST_PAGE_PATH}`);
  console.log(`  DEST_COMPONENT_PATH    = ${DEST_COMPONENT_PATH || '(not set)'}`);

  const pageResult = syncTree(LOVABLE_PAGE_PATH, DEST_PAGE_PATH, 'page');
  ensurePageEntry(DEST_PAGE_PATH, pageResult.entryCandidates);

  if (LOVABLE_COMPONENT_PATH && DEST_COMPONENT_PATH) {
    syncTree(LOVABLE_COMPONENT_PATH, DEST_COMPONENT_PATH, 'component');
  } else {
    console.log(
      '[adapt-lovable-to-nextjs] no component path set (LOVABLE_COMPONENT_PATH/DEST_COMPONENT_PATH), skipping - components may be inline in the page file.'
    );
  }

  console.log('[adapt-lovable-to-nextjs] done.');
}

module.exports = { transform, applyTransform };

if (require.main === module) {
  main();
}
