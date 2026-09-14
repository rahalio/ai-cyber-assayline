---
name: assayline-codegen-hygiene
description: >-
  Assayline repo hygiene for zero-codegen: .codegen must never be pushed to
  GitHub; refuse commits that stage .codegen, codegen/, or **/zero_codegen/.
  Use when committing, pushing, staging files, running codegen, or setting up
  this monorepo locally.
---

# Assayline codegen hygiene

## HARD RULE

**.codegen should never be pushed to GitHub**

Do not `git add` `.codegen/`, `codegen/`, or `**/zero_codegen/`.
Do not include those paths in commits, PRs, or force-adds (`-f`).
If a commit or staged set contains them, refuse and unstage before continuing.

Also never push regenerated OpenAPI bundles under `packages/openapi-core/src/.bundled/` or `platform/tests/postman/generated/`.

## Local setup

`.codegen/` is gitignored. Agents and developers obtain the tool locally:

```bash
rsync -a --delete /Users/nrahal/@code/zero-apps/zero-apps-codegen-scaffold/.codegen/ .codegen/
pnpm codegen:paths
```

Refresh from that scaffold when the tool is missing or outdated. Do not commit the refreshed tree.

## Package scope

npm packages use short **`@assayline/*`** only (never `@ai-…` scopes).

## Related ignores

Confirm `.gitignore` retains:

```
.codegen/
codegen/
**/zero_codegen/
packages/openapi-core/src/.bundled/
platform/tests/postman/generated/
```
