#!/usr/bin/env bash
# Local fallback for the college-explorer sync - does the same detect +
# adapt work as .github/workflows/sync-college-explorer.yml, but:
#   - runs on a developer machine instead of GitHub Actions
#   - does NOT commit or push; leaves the working tree dirty for human review
#
# Use this to preview what the next sync would produce, or to debug a failing
# CI run locally.
#
# Usage:
#   ./scripts/sync-college-explorer.sh [lovable-repo-url]
#   ./scripts/sync-college-explorer.sh https://github.com/Navoed/fresh-start.git
#   ./scripts/sync-college-explorer.sh                # reads LOVABLE_REPO_URL from .env.sync
#   ./scripts/sync-college-explorer.sh --lovable-token <pat>   # for a private repo

set -euo pipefail

# ---------- resolve repo root (script may be invoked from anywhere) ----------
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

# ---------- load .env.sync if present (see .env.sync.example) ----------
if [[ -f "$REPO_ROOT/.env.sync" ]]; then
  # shellcheck disable=SC1091
  source "$REPO_ROOT/.env.sync"
fi

LOVABLE_REPO="${LOVABLE_REPO_URL:-}"
LOVABLE_TOKEN="${LOVABLE_REPO_TOKEN:-}"

# ---------- argument parsing ----------
# A bare positional arg overrides LOVABLE_REPO_URL from .env.sync.
POSITIONAL_URL=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --lovable-token)
      LOVABLE_TOKEN="$2"
      shift 2
      ;;
    -h|--help)
      sed -n '1,15p' "$0" | sed 's/^# \{0,1\}//'
      exit 0
      ;;
    *)
      POSITIONAL_URL="$1"
      shift
      ;;
  esac
done
[[ -n "$POSITIONAL_URL" ]] && LOVABLE_REPO="$POSITIONAL_URL"

if [[ -z "$LOVABLE_REPO" ]]; then
  echo "ERROR: no Lovable repo URL given. Pass it as an argument or set LOVABLE_REPO_URL in .env.sync (see .env.sync.example)." >&2
  exit 1
fi

# ---------- temp folder + cleanup trap ----------
TMP_DIR="${TMPDIR:-/tmp}/lovable-sync-temp"
cleanup() { rm -rf "$TMP_DIR"; }
trap cleanup EXIT

# ---------- clone Lovable repo ----------
rm -rf "$TMP_DIR"
echo "Cloning $LOVABLE_REPO into $TMP_DIR ..."

CLONE_URL="$LOVABLE_REPO"
if [[ -n "$LOVABLE_TOKEN" ]]; then
  # Inject token into HTTPS URL for private repos: https://<token>@github.com/owner/repo.git
  CLONE_URL="$(echo "$LOVABLE_REPO" | sed -E "s#^https://#https://${LOVABLE_TOKEN}@#")"
fi

if ! git clone --depth 1 "$CLONE_URL" "$TMP_DIR" >/dev/null 2>&1; then
  echo "ERROR: failed to clone $LOVABLE_REPO" >&2
  exit 1
fi

# ---------- detect source paths (mirrors the workflow's detection step) ----------
cd "$TMP_DIR"

LOVABLE_PAGE_PATH=""
if [[ -d "src/routes/college-explorer" ]]; then
  LOVABLE_PAGE_PATH="$TMP_DIR/src/routes/college-explorer"
elif [[ -d "src/pages/college-explorer" ]]; then
  LOVABLE_PAGE_PATH="$TMP_DIR/src/pages/college-explorer"
elif [[ -d "src/views/CollegeExplorer" ]]; then
  LOVABLE_PAGE_PATH="$TMP_DIR/src/views/CollegeExplorer"
else
  MATCH="$(find src -type f -name '*.tsx' \( -ipath '*college-explorer*' -o -ipath '*CollegeExplorer*' \) 2>/dev/null | sort | head -n 1 || true)"
  if [[ -n "$MATCH" ]]; then
    LOVABLE_PAGE_PATH="$TMP_DIR/$(dirname "$MATCH")"
  fi
fi

if [[ -z "$LOVABLE_PAGE_PATH" ]]; then
  echo "ERROR: could not find a college-explorer page in $LOVABLE_REPO (checked src/routes/college-explorer, src/pages/college-explorer, src/views/CollegeExplorer, and a repo-wide *.tsx search)." >&2
  exit 2
fi
echo "Detected Lovable page path: $LOVABLE_PAGE_PATH"

LOVABLE_COMPONENT_PATH=""
if [[ -d "src/components/CollegeExplorer" ]]; then
  LOVABLE_COMPONENT_PATH="$TMP_DIR/src/components/CollegeExplorer"
elif [[ -d "src/components/college-explorer" ]]; then
  LOVABLE_COMPONENT_PATH="$TMP_DIR/src/components/college-explorer"
fi

if [[ -n "$LOVABLE_COMPONENT_PATH" ]]; then
  echo "Detected Lovable component path: $LOVABLE_COMPONENT_PATH"
else
  echo "No dedicated component folder found - assuming components are inline in the page file."
fi

cd "$REPO_ROOT"

# ---------- run the adapter (page + components -> app/, components/) ----------
DEST_PAGE_PATH="$REPO_ROOT/app/college-explorer"
DEST_COMPONENT_PATH="$REPO_ROOT/components/CollegeExplorer"

echo
echo "Running adapter ..."
LOVABLE_PAGE_PATH="$LOVABLE_PAGE_PATH" \
LOVABLE_COMPONENT_PATH="$LOVABLE_COMPONENT_PATH" \
DEST_PAGE_PATH="$DEST_PAGE_PATH" \
DEST_COMPONENT_PATH="$DEST_COMPONENT_PATH" \
node "$REPO_ROOT/scripts/adapt-lovable-to-nextjs.js"

# ---------- summary ----------
echo
echo "========================================"
echo "college-explorer sync complete (not committed)"
echo "========================================"
echo "Lovable source:     $LOVABLE_REPO"
echo "Page target:        app/college-explorer"
echo "Components target:  components/CollegeExplorer"
echo
echo "Review the result before committing:"
git -C "$REPO_ROOT" status -s -- app/college-explorer components/CollegeExplorer
