# 30 — Page Recipe

<!-- Deterministic checklist Claude follows for every page. -->
<!-- TODO: fill in steps. Example shape below. -->

1. Restate intent in one sentence.
2. Pick archetype.
3. List sections in order.
4. For each section, pick from allowlist (`21-sections.md`).
   - If nothing fits and the block is reusable, create it in `src/sections/<Name>.tsx` and flag it.
   - Same rule for components → `src/components/<Name>.tsx`.
5. Map prompt content to section props.
6. Write the page following `15-page-template.md`.
7. Self-check against `40-rules.md`.
