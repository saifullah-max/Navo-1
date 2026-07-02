# College-Explorer Auto-Sync: Step-by-Step Setup

Do these steps once, in order. After step 8, every push to `/college-explorer`
in the client's Lovable project (Vite + React, TanStack Router) auto-syncs
into Navo-1 and redeploys on Vercel.

You need access to:
- This repo (Navo-1) on GitHub, as `saifullah-max`
- The client's Lovable repo, `Nav-o/love-spark-v2`, on GitHub

How the pieces fit together:
- `.github/workflows/sync-college-explorer.yml` — runs in Navo-1, detects the
  page/component paths in the Lovable checkout, and calls the adapter.
- `scripts/adapt-lovable-to-nextjs.js` — rewrites Vite/TanStack Router source
  into Next.js App Router source (router imports, `'use client'`,
  `import.meta.env` → `process.env`, etc). See that file's header comment for
  the exact rewrites it does.
- `scripts/sync-college-explorer.sh` — same detection + adapter, run locally
  for a preview; never commits.
- `docs/lovable-sync-setup.md` — the notify workflow to add to the Lovable
  repo.
- `docs/github-secrets-setup.md` — the two PATs this depends on.


## Step 1. Confirm the Lovable page exists

Log into the client's Lovable project (`Nav-o/love-spark-v2`) and confirm
`/college-explorer` exists. Unlike a straight file copy, the adapter doesn't
require Lovable to use any particular framework — it's built for Lovable's
Vite + React output (TanStack Router) and rewrites it for Next.js. It looks
for the page under `src/routes/college-explorer/`, `src/pages/college-explorer/`,
`src/views/CollegeExplorer/`, or (as a fallback) any `.tsx` file whose path
contains "college-explorer" / "CollegeExplorer".


## Step 2. Create the first GitHub token (LOVABLE_REPO_TOKEN)

This token lets Navo-1 read the Lovable repo. Full steps in
`docs/github-secrets-setup.md`. Short version:

1. <https://github.com/settings/personal-access-tokens/new>, fine-grained,
   scoped to `Nav-o/love-spark-v2` only, **Contents: Read-only**.
2. Add it to Navo-1: <https://github.com/saifullah-max/Navo-1/settings/secrets/actions>
   as `LOVABLE_REPO_TOKEN`.


## Step 3. Create the second GitHub token (MAIN_REPO_TOKEN)

This token lets the Lovable repo poke Navo-1 to trigger a sync. Full steps in
`docs/github-secrets-setup.md`. Short version:

1. <https://github.com/settings/personal-access-tokens/new>, fine-grained,
   scoped to `Navo-1` only, **Contents: Read/write** + **Actions: Read/write**.
2. Add it to the Lovable repo: `https://github.com/Nav-o/love-spark-v2/settings/secrets/actions`
   as `MAIN_REPO_TOKEN`.


## Step 4. Add the notify workflow to the Lovable repo

Follow `docs/lovable-sync-setup.md` — it has the exact
`.github/workflows/notify-main-site.yml` contents to commit to
`Nav-o/love-spark-v2`.


## Step 5. Commit and push the Navo-1 side

In a terminal at `C:\projects\Navo-1\`:

    git add .github docs scripts .gitignore .env.sync.example
    git commit -m "feat: add Lovable-to-Next.js sync for college-explorer"
    git push origin main


## Step 6. Test it manually (no Lovable edit needed)

1. Open <https://github.com/saifullah-max/Navo-1/actions>
2. Click "sync-college-explorer" in the left sidebar
3. Click "Run workflow" → "Run workflow"
4. Watch the log: it should print the detected page/component paths, every
   file the adapter wrote and which transformations it applied, and finish
   green.
5. Check the Actions tab: a new commit should appear with message
   `chore: sync college-explorer from Lovable [skip ci]` (only if the source
   actually differs from what's already in Navo-1 — otherwise it logs "No
   changes detected, skipping commit" and exits clean).
6. Confirm Vercel started a redeploy of navo.work.


## Step 7. Preview a sync locally (optional, no commit)

From the Navo-1 repo root:

    cp .env.sync.example .env.sync   # fill in LOVABLE_REPO_TOKEN if the repo is private
    ./scripts/sync-college-explorer.sh

This clones the Lovable repo to a temp dir, runs the same detection +
adapter as CI, writes into `app/college-explorer/` and
`components/CollegeExplorer/`, and stops — leaving the working tree dirty so
you can `git diff` before deciding to commit.


## Step 8. Test the full end-to-end flow

1. Open the client's Lovable college-explorer project.
2. Make a trivial change (e.g., edit a heading).
3. Push to GitHub from Lovable.
4. Watch `Nav-o/love-spark-v2`'s Actions tab — `notify-main-site` should run
   green within seconds.
5. Watch Navo-1's Actions tab — `sync-college-explorer` should fire, run the
   adapter, and finish green shortly after.
6. Vercel redeploys navo.work.


## Step 9. Tell the client the rules

See the "Rules for the client" section in `docs/lovable-sync-setup.md`. In
short: keep `/college-explorer` self-contained under the detected page and
component folders, and don't import app-wide providers/hooks/utilities from
elsewhere in the Lovable repo — the adapter only sees what's inside those two
folders.


## Troubleshooting

**Workflow fails at "Detect source paths in Lovable repo" with "Could not
find a college-explorer page"**
The client renamed/deleted the page, or moved it somewhere the detection
logic doesn't check. Confirm the page's actual path and, if it's a genuinely
new convention, add it to the detection list in both
`.github/workflows/sync-college-explorer.yml` and
`scripts/sync-college-explorer.sh`.

**Adapter log shows `WARNING: unsupported TanStack Router import "X"`**
The page imports something from `@tanstack/react-router` the adapter doesn't
know how to rewrite (only `useNavigate`, `Link`, and `useParams` are
handled). The adapter leaves a `// TODO(lovable-sync)` comment at that import
— open the generated file in `app/college-explorer/` and port that usage by
hand.

**Adapter log shows `WARNING: removed import { useParams } ...`**
Expected — Next.js App Router pages receive route params as function props,
not via a hook. Find the `useParams()` call sites in the generated file and
convert the page to accept `{ params }` as a prop instead.

**Sync runs but Navo-1 build fails on Vercel**
Usually a missing dependency (check the workflow's "Warn about Lovable-only
dependencies" step log) or an import that reaches outside
`app/college-explorer/` / `components/CollegeExplorer/` into something that
was never copied. Move the missing piece into one of the two synced Lovable
folders, or replicate it in Navo-1 by hand.

**Notify workflow on the Lovable side fails with 401 or 404**
`MAIN_REPO_TOKEN` is wrong, expired, or doesn't have access to Navo-1.
Regenerate it and re-add it per `docs/github-secrets-setup.md`.


## When Navo-1 transfers to the client

After ownership transfer:
1. Update the hardcoded `saifullah-max/Navo-1` references in:
   - `.github/workflows/sync-college-explorer.yml` (checkout ref is fine, but
     if the repo is renamed update this doc's URLs)
   - `docs/lovable-sync-setup.md` (the `curl` target URL in the pasted
     `notify-main-site.yml` snippet, and the secrets URL)
   - `docs/setup.md` (this file)
2. Regenerate `MAIN_REPO_TOKEN` from an account that owns the new repo path,
   re-add it to the Lovable repo's secrets.
3. `LOVABLE_REPO_TOKEN` stays the same since the Lovable repo doesn't change.
