# 45 — Page Shell (metadata, favicon, header, footer)

How every page on scandiweb.com/app/* gets its outer chrome and identity. This is the contract Claude must follow when generating new pages.

## What "page shell" means

The shell is everything that's not the page-specific body:

1. **Site identity** — `<html lang>`, fonts, body class
2. **Metadata** — `<title>`, description, OG/Twitter cards, canonical, robots
3. **Favicon + theme color**
4. **Header / nav** — top of page
5. **Footer** — bottom of page
6. **DevLink runtime** — required wrapper for any Webflow component to render

Items 1-3, 5, and 6 are set **once** in `src/app/layout.tsx` and apply to every page. Item 4 (header) is currently AI-generated per the project decision; items 2 (specific page metadata) is overridden per page.

## Per-page contract

Every page Claude generates at `src/app/<slug>/page.tsx` MUST:

1. Export a `metadata` object that overrides the root defaults with page-specific:
   - `title`
   - `description`
   - `openGraph.title`, `openGraph.description`, `openGraph.url`
   - `twitter.title`, `twitter.description`
   - `alternates.canonical` — the production URL (e.g., `https://scandiweb.com/app/pages/test-1`)
2. Use scandiweb design tokens from `src/webflow/css/variables.css` (e.g., `var(--blue)`, `var(--sw-red)`, `var(--mint-green)`, `var(--black)`, `var(--white)`, `var(--gray-bg)`).
3. Use the brand fonts: Golos Text (heads) via `var(--font-golos)`, Inter (body) via `var(--font-inter)`. Both are loaded in the root layout.
4. Wrap the page body in a `<main>` element so the footer appears below.
5. NOT import the header — it's part of the layout shell.
6. NOT import the footer — it's part of the layout shell.

## Footer integration (the OG scandiweb.com footer)

The live scandiweb.com v7 footer is exported via Webflow DevLink at `src/webflow/FooterDeprecated.tsx`. **Do not be misled by the "Deprecated" suffix** — it refers to the Webflow component's name in the source site, not its production status. The class hooks (`.v7-footer_wrapper`) and interactions (consultation block + newsletter + menu accordion) match scandiweb.com.

### Steps to mount it

1. Ensure `src/app/globals.css` imports the Webflow CSS bundle: `@import "../webflow/css/global.css" layer(webflow);`.
2. Ensure `src/app/layout.tsx` wraps `{children}` in `<DevLinkProvider>` (already in place).
3. Inside the layout, render `<FooterDeprecated />` after `{children}` with default props. The defaults give you: consultation CTA block, newsletter, "All services" link.
4. To re-pull the latest from Webflow when the Webflow team updates the footer:
   ```bash
   webflow login           # one-time, requires access to scandiweb.com Webflow site
   webflow devlink export  # writes into src/webflow/, including FooterDeprecated.tsx
   ```

### When to override Footer props

`<FooterDeprecated />` accepts the following props (all optional, sensible defaults):

| Prop | Default | When to override |
|---|---|---|
| `consultation` | `true` | Hide consultation block on pages that have their own bottom CTA |
| `newsletter` | `true` | Hide on pages where newsletter is irrelevant |
| `redSection` | `false` | Set `true` to use red variant (rare) |
| `variant` | `"Base"` | `"upper-padding"`, `"lower-padding"`, `"no-padding"` for spacing tweaks |
| `consultationConsultationTitle` | `"Let's build"` | Override consultation headline |

For test pages and standard LPs, **render with no props** and accept defaults.

## Header / nav (current decision)

Per project decision (2026-05-05): the header in this repo is **AI-generated and lives in the root layout**, not pulled from Webflow DevLink. The Webflow site has `HeaderScandilytics` exported, but that's the Scandilytics product header, not main scandiweb.com. The main scandiweb.com header is not currently in DevLink.

If/when this decision changes:
1. Run `webflow devlink export` after the Webflow team adds the main header as a reusable component.
2. Replace the AI-generated nav in `layout.tsx` with the new component import.
3. Update this guide.

## Favicon + theme

scandiweb's live favicon URLs (CDN-hosted, set via metadata `icons`):
- Icon: `https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/6277b7d3d3ca4eb3c978a38c_favicon-1.svg`
- Apple touch: `https://cdn.prod.website-files.com/61387043ab1e4143deac1e21/6277b7d683e32b624480ab6a_favicon.svg`
- Theme color: `#ffffff`

These are set in the root layout's `metadata` export. Do not duplicate in page-level metadata.

## Root metadata defaults (set in `layout.tsx`)

Root layout sets sensible scandiweb defaults so a page that forgets to override still ships with a reasonable title/description. Page-level `metadata` overrides take precedence.

```ts
// src/app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://scandiweb.com"),
  title: {
    default: "scandiweb",
    template: "%s | scandiweb",
  },
  description:
    "Full service eCommerce agency for digital growth and development.",
  icons: { /* ... */ },
  // ...
};
```

## Verification checklist (run before committing)

- [ ] Page renders at `localhost:3000/app/<slug>` with `npm run dev`
- [ ] Page-level metadata overrides root (check `<title>` and `<meta name="description">` in DOM)
- [ ] Favicon shows scandiweb logo, not the Next.js default
- [ ] Footer renders with consultation block + newsletter visible
- [ ] No console errors related to DevLink or Webflow scope class
- [ ] Body uses Golos for heads, Inter for body (visual check)
