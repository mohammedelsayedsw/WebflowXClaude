# 00 — Overview

## Purpose

Next.js app (`custom-pages/`) with **`basePath` `/app`**. Production URLs look like **`/app/pages/<slug>`**. Content lives in `src/sections/<slug>/`; Webflow DevLink output lives in `src/webflow/` (treat as legacy unless allowlisted).

## Prompt → live page (minimal)

1. **Branch:** `feat/page-<slug>` from up-to-date `main`.
2. **Clone the archetype:** copy `src/app/pages/school-photography/page.tsx` and `src/sections/school-photography/` → new `<slug>` names (or mirror `school-uniform`). Do **not** invent a new section order from scratch.
3. **Replace copy/assets only** inside the new `src/sections/<slug>/` files; keep Tailwind + patterns from the reference sections.
4. **Never put Header/Footer in the page file** — `src/app/pages/layout.tsx` adds `Header`; root `src/app/layout.tsx` adds the Webflow footer.
5. **Assets:** only `assetUrl("/…")` from `@/lib/assets` for public files.
6. **Verify:** from `custom-pages/`, `npm run lint` and `npm run build` both pass.
7. **Ship:** commit, push, open PR; merge only after CI green + review.
8. **Deploy:** Webflow Cloud (or your pipeline) after merge.

After **`webflow devlink export`**, run **`npm run css:parse-urls`** once (fixes broken multi-line `url()` in exported CSS).

## Anti-hallucination (agents)

- **Do not** invent new section types or reorder arbitrarily — follow **`21-sections.md`** and clone **`50-examples.md`**.
- **Do not** import random `src/webflow/*` unless listed in **`20-components.md`**.
- **Do not** add Header/Footer/Webflow chrome inside section files unless an existing reference page does.

## Pipeline (full)

```
prompt → feat/page-<slug> → clone archetype + edit sections → lint + build
       → push → PR → CI → review → merge → deploy
```

## Non-negotiables

- Never commit directly to `main`.
- Branch + PR for every page.
- CI green before merge.
