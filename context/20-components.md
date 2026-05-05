# 20 — Components

Allowlist for AI/agents: **only import what appears here** (plus sections from `21-sections.md`). Everything else is off-limits unless you add an entry here first.

## Site (`src/components/site/`)

<!-- BEGIN: site -->

- **`Header`** — top bar + drawer (implementation used by `src/app/pages/layout.tsx` for all `/pages/*` routes). Do **not** duplicate inside Hero unless matching an existing reference pattern (currently: **not** in Hero).
- **`Footer`** — legacy React footer component exists but **production shell uses Webflow** — root layout renders **`Footer` from `src/webflow/v7Layout/Footer`**. Do not add a second footer in pages.
- **`HubSpotForm`** — HubSpot embed (styled via `globals.css`).
- **`EmbedScriptRunner`** — wired in root layout; do not duplicate per page.

<!-- END: site -->

## UI primitives (`src/components/ui/`)

<!-- BEGIN: ui -->

- `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`
- `Badge`
- `Button`
- `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`
- `Separator`

<!-- END: ui -->

## Animation / layout primitives (`src/components/primitives/`)

<!-- BEGIN: primitives -->

- `Reveal`, `DrawnPath`, `SectionLabel`, `Stat`
- `buttonStyles.ts` — `btnPrimary`, `btnSecondary`, etc.

<!-- END: primitives -->

## Webflow (`src/webflow/`)

<!-- BEGIN: webflow -->

**Default: off-limits** for new LP sections (generated markup, easy to break). Exceptions must be listed here explicitly before use.

<!-- END: webflow -->

## Local (auto-generated)

<!-- BEGIN: local -->

_Regenerate with inventory script when added._

<!-- END: local -->
