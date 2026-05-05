# 10 — Architecture

## File conventions

| Path | Purpose |
|---|---|
| `src/app/layout.tsx` | Root layout: fonts, `DevLinkProvider`, **Webflow footer** (`v7Layout/Footer`), embed runner. |
| `src/app/pages/layout.tsx` | **Header** (`components/site/Header`) for every route under `/pages/*`. |
| `src/app/globals.css` | Design tokens + base styles. |
| `src/app/pages/<slug>/page.tsx` | Thin page: imports sections only. |
| `src/sections/<slug>/<Name>.tsx` | Page-specific section. |
| `src/sections/_shared/<Name>.tsx` | Shared section (promote when used on 2+ pages). |
| `src/components/site/<Name>.tsx` | Site pieces (Header implementation, forms, etc.). |
| `src/components/ui/<Name>.tsx` | UI primitives. |
| `src/components/primitives/<Name>.tsx` | Animation / layout primitives. |
| `src/webflow/` | DevLink-generated UI. **Do not edit by hand** except rare fixes; prefer allowlist in `20-components.md`. |
| `src/lib/assets.ts` | **`assetUrl()`** — required for `/public` paths under `basePath`. |
| `public/pages/<slug>/…` | Page-specific assets. |
| `public/shared/…` | Shared assets. |

## Routing

- **`next.config.ts`** sets `basePath` and `assetPrefix` to **`/app`**.
- File `src/app/pages/foo/page.tsx` → URL path **`/app/pages/foo`** (plus your domain).
