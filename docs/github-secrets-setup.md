# GitHub secrets needed for the college-explorer sync

Two repos, two secrets, each read by a different side of the sync.

## In Navo-1 (this repo) → Settings → Secrets and variables → Actions

| Secret | Purpose | Permissions needed |
|---|---|---|
| `LOVABLE_REPO_TOKEN` | Lets Navo-1's `sync-college-explorer.yml` check out `Nav-o/love-spark-v2` | Fine-grained PAT, **Contents: Read-only**, scoped to the Lovable repo only |

Generate this from whichever GitHub account owns/can read `Nav-o/love-spark-v2`
(usually the client's account, or ours if we have collaborator access).

## In the Lovable repo (Nav-o/love-spark-v2) → Settings → Secrets and variables → Actions

| Secret | Purpose | Permissions needed |
|---|---|---|
| `MAIN_REPO_TOKEN` | Lets `notify-main-site.yml` fire a `repository_dispatch` at Navo-1 | Fine-grained PAT, **Contents: Read and write** + **Actions: Read and write**, scoped to Navo-1 only |

We generate this one (from the account that owns Navo-1) and hand it to the
client to add as a secret in their Lovable repo.

## Step-by-step: creating a fine-grained PAT

1. Go to <https://github.com/settings/personal-access-tokens/new>, logged in
   as the account that owns the repo you're granting access **to**
   (see tables above for which account that is per token).
2. **Token name**: something identifiable, e.g. `navo-lovable-read` or
   `navo-lovable-trigger`.
3. **Expiration**: 1 year (or per your org's token policy).
4. **Repository access**: "Only select repositories" → pick the single repo
   the token needs access to. Never grant "All repositories".
5. **Permissions**: expand "Repository permissions" and set only what's
   listed in the tables above. Leave everything else "No access".
6. Click **Generate token** and copy the value immediately — GitHub only
   shows it once.
7. Add it as a repo secret: that repo → **Settings** → **Secrets and
   variables** → **Actions** → **New repository secret** → paste the name
   and value exactly as shown in the tables above.

## Rotation / transfer

If either repo changes ownership, or a token expires:

- Regenerate the token from the new owning account (same steps above).
- Update the secret value in the *other* repo (the one that uses the token),
  not the repo the token grants access to.
- `LOVABLE_REPO_TOKEN` needs updating if Navo-1's read access to the Lovable
  repo changes (e.g. Lovable repo transferred to a new org).
- `MAIN_REPO_TOKEN` needs updating if Navo-1 itself transfers to a new owner
  — regenerate from the new owner's account and re-add it to the Lovable
  repo's secrets, then update the `curl` target URL in
  `notify-main-site.yml` (see `docs/lovable-sync-setup.md`) to match the new
  `owner/repo`.
