# 40 — Rules

## Git

- Never commit to `main`; use `feat/page-<slug>`.
- No force-push to shared branches.
- Prefer not merging your own PR without review.

## No hallucination

- **Clone an existing page folder** (`school-photography` / `school-uniform`) when building a new LP — do not improvise a new section lineup.
- **Do not** import arbitrary `src/webflow/*` components unless listed in `20-components.md`.
- **Do not** add `Header`, Webflow footer, or duplicate site chrome inside `page.tsx` or sections — see `10-architecture.md`.

## Code structure

- Page file = imports + `<main>` + sections only (`15-page-template.md`).
- One section component per file under `src/sections/<slug>/`.
- Reusable blocks → `src/components/` or `src/sections/_shared/` after second use.

## Assets

- **`assetUrl("/path")`** from `@/lib/assets` for everything under `public/`.
- Page assets under `public/pages/<slug>/`; shared under `public/shared/`.
- Never hardcode `basePath` (`/app`) in JSX strings.

## Styling

- Prefer Tailwind + existing tokens in `globals.css`.
- Avoid huge inline `style={{}}` unless matching an existing section pattern.

## Webflow / DevLink

- Generated files: keep `// @ts-nocheck` where present; avoid manual edits.
- After export, run **`npm run css:parse-urls`** (from **`custom-pages/`**) if CSS was regenerated.

## CI

- Do not push if **`npm run lint`** or **`npm run build`** fails locally.
