# CLAUDE.md

Entry point for AI: read **in order**, then follow **`context/30-page-recipe.md`**.

## Read in order

1. `context/00-overview.md` — **prompt → live** + anti-hallucination
2. `context/10-architecture.md`
3. `context/15-page-template.md`
4. `context/20-components.md`
5. `context/21-sections.md`
6. `context/30-page-recipe.md`
7. `context/40-rules.md`
8. `context/50-examples.md`

## Golden rules

- **Clone** `school-photography` or `school-uniform` → new `<slug>`; do not invent a new section lineup.
- **Never** put Header/footer inside `page.tsx` — layouts provide chrome.
- **Always** `assetUrl()` for public assets; run commands from **`custom-pages/`** (`npm run lint`, `npm run build`).
- After **`webflow devlink export`**, run **`npm run css:parse-urls`** once.
