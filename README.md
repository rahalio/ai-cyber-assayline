# Assayline

Validation factory operating system for bank model risk functions.

OpenAPI-first DDD monorepo (`@assayline/*`). Product specs: [PRODUCT.md](PRODUCT.md), [USER_STORIES.md](USER_STORIES.md), [WEBAPP.md](WEBAPP.md).

## Quick start

```bash
# Local codegen tool (never commit .codegen/)
# If missing: rsync from zero-apps-codegen-scaffold .codegen/

pnpm install
pnpm lint:openapi && pnpm bundle:openapi
pnpm codegen:paths
pnpm build
pnpm dev:api
# Health: curl http://127.0.0.1:4000/health
# Demo key: X-API-Key: assayline_demo_local_dev_key
```

## Layout

```
packages/openapi-core  →  packages/core  →  platform/services  →  platform/adapters  →  platform/api-server
         ↑ OpenAPI source of truth
platform/webapp        →  generated clients + features (then product pages)
```

## Codegen rules

1. **New domain** → full multi-layer generate once (Mode A).
2. **YAML edit on existing domain** → regenerate **core only**, handwrite below (Mode B).
3. **`.codegen/` must never be pushed to GitHub.**

See `docs/CODEGEN.md` and `.cursor/skills/`.
