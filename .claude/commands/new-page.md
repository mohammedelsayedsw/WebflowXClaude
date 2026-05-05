# /new-page

Generate a new LP page that matches **`50-examples.md`** (same archetype as `school-photography` / `school-uniform`).

**Args:** `$ARGUMENTS` — short product name + slug hint (e.g. “higher-ed commerce → higher-ed”).

## Mandatory flow

1. Read `CLAUDE.md` then **`context/`** files **in the order listed there**.
2. Branch `feat/page-<slug>` from up-to-date `main`.
3. **Duplicate** `src/app/pages/school-photography/` → `src/app/pages/<slug>/` and `src/sections/school-photography/` → `src/sections/<slug>/` (adjust imports). Prefer copy over rewriting from scratch.
4. Edit **section content only** unless the brief explicitly requires structural change (then update `21-sections.md` first).
5. Output route file **`src/app/pages/<slug>/page.tsx`** — **not** `src/app/<slug>/page.tsx`.
6. Obey **`context/40-rules.md`** (no duplicate Header/footer, `assetUrl`, no stray `webflow` imports).
7. From repo root, run checks **inside `custom-pages/`**:

```bash
cd custom-pages && npm run lint && npm run build
```

8. Commit, push, open PR; **do not merge** unless repo policy allows.
