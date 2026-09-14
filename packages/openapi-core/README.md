# @assayline/openapi-core

OpenAPI source of truth for Assayline. One YAML (+ schemas) per domain under `src/`.

| Domain | File | Code |
|--------|------|------|
| identity | identity.yaml | idn |
| inventory | inventory.yaml | inv |
| tiering | tiering.yaml | tir |
| submissions | submissions.yaml | sub |
| validation | validation.yaml | val |
| findings | findings.yaml | fnd |
| conservatism | conservatism.yaml | cns |
| use | use.yaml | use |
| monitoring | monitoring.yaml | mon |
| quantification | quantification.yaml | qnt |
| supervisory | supervisory.yaml | spv |

```bash
pnpm lint:domains
pnpm bundle:domains
```

**Rule:** After routine YAML edits, regenerate **core only** and handwrite lower layers.
