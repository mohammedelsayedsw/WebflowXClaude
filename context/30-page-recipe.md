# 30 — Page Recipe

Deterministic flow for humans and AI. **Read `00-overview.md` first** for the shortest “prompt → live” path.

## Minimal path (prompt → live)

| Step | Action |
|------|--------|
| 1 | Branch `feat/page-<slug>` from latest `main`. |
| 2 | Duplicate **`school-photography`** (or **`school-uniform`**) → rename to `<slug>`: `src/app/pages/<slug>/page.tsx` + `src/sections/<slug>/`. |
| 3 | Edit section files only (copy, links, `assetUrl` images). Keep structure/classes aligned with the reference. |
| 4 | Run **`npm run lint`** and **`npm run build`** inside **`custom-pages/`**. |
| 5 | Push, open PR, wait for CI + review. |

Optional: after **`webflow devlink export`**, run **`npm run css:parse-urls`** in **`custom-pages/`**.

## Full checklist

### 0. Git

1. Clean tree, update `main`.
2. `git checkout -b feat/page-<slug>`.

### 1. Plan

3. One-sentence goal + pick reference archetype (`school-photography` or `school-uniform`).
4. Section list **must match** `21-sections.md` unless stakeholder explicitly changes it.

### 2. Implement

5. Clone folder structure; replace content; **no** new invented sections without updating `21-sections.md` + `40-rules.md`.
6. No Header/Footer in page — layouts own chrome (`15-page-template.md`).

### 3. Verify (same as CI)

From **`custom-pages/`**:

```bash
npm run lint
npm run build
```

### 4. Ship

7. Commit, push, open PR (`gh pr create --fill` if available).
8. **Do not merge** your own PR; wait for CI + review.
