# Setting up the Lovable side of the college-explorer sync

This repo (Navo-1) already has a workflow (`.github/workflows/sync-college-explorer.yml`)
that pulls the `/college-explorer` page out of the client's Lovable project
(`https://github.com/Nav-o/love-spark-v2`, Vite + React) on every push, adapts
it for Next.js, and commits it here.

For that to fire automatically, the **Lovable repo** needs one workflow added
to it: a small "notify" workflow that pokes Navo-1 whenever college-explorer
changes.

## What to add to the Lovable repo (Nav-o/love-spark-v2)

Create this exact file in that repo, at this exact path:

    .github/workflows/notify-main-site.yml

Paste this entire block as the contents:

```yaml
name: notify-main-site

on:
  push:
    branches: [main]
    paths:
      - 'src/routes/college-explorer/**'
      - 'src/pages/college-explorer/**'
      - 'src/views/CollegeExplorer/**'
      - 'src/components/CollegeExplorer/**'
      - 'src/components/college-explorer/**'

jobs:
  notify:
    runs-on: ubuntu-latest
    steps:
      - name: Fire repository_dispatch on Navo-1
        run: |
          curl --fail -X POST \
            -H "Authorization: token ${{ secrets.MAIN_REPO_TOKEN }}" \
            -H "Accept: application/vnd.github.v3+json" \
            https://api.github.com/repos/saifullah-max/Navo-1/dispatches \
            -d '{"event_type":"lovable-sync"}'
```

Commit it directly to `main` in the Lovable repo.

> **Add `MAIN_REPO_TOKEN` secret to this repo — your developer will provide
> this token.** See `docs/github-secrets-setup.md` in Navo-1 for exactly how
> that token is generated and what permissions it needs.

## What this does, end to end

1. The client edits `/college-explorer` in Lovable and pushes to `main` on
   `Nav-o/love-spark-v2`.
2. GitHub Actions runs `notify-main-site.yml` in that repo. It fires a
   `repository_dispatch` event of type `lovable-sync` at Navo-1, authenticated
   with `MAIN_REPO_TOKEN`.
3. Navo-1's `sync-college-explorer.yml` receives the dispatch, checks out both
   repos, detects where the page/components live in the Lovable checkout,
   runs `scripts/adapt-lovable-to-nextjs.js` to rewrite the Vite/TanStack code
   into Next.js App Router code, and commits the result to Navo-1's `main`
   with `chore: sync college-explorer from Lovable [skip ci]`.
4. Vercel picks up the new commit on Navo-1's `main` and redeploys.

The `paths:` filter above only matches the conventional Lovable locations for
this page. If the client's page structure doesn't match any of those paths,
the notify workflow simply won't fire on unrelated pushes - which is fine,
since `sync-college-explorer.yml` in Navo-1 can also always be triggered
manually via `workflow_dispatch` (Actions tab -> "sync-college-explorer" ->
"Run workflow").

## Rules for the client

The sync only works reliably if the college-explorer page in Lovable stays
self-contained:

- Don't rename the `/college-explorer` route or its folder.
- Keep page code under one of: `src/routes/college-explorer/`,
  `src/pages/college-explorer/`, or `src/views/CollegeExplorer/`.
- Keep any dedicated components under `src/components/CollegeExplorer/` (or
  `src/components/college-explorer/`) — or inline in the page file itself.
- Avoid importing app-wide providers, custom hooks, or utilities that live
  outside those folders; the adapter only copies/transforms what's inside
  the detected page and component paths, so anything imported from elsewhere
  in the Lovable repo won't exist in Navo-1 after the sync.

If a sync fails, check the Navo-1 repo's Actions log for
`sync-college-explorer` — it explains which step failed (usually "couldn't
find a college-explorer page" or a missing dependency warning).
