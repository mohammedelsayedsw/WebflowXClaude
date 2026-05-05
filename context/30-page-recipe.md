# 30 — Page Recipe

Deterministic checklist. Follow every step in order. Do not skip any step. Do not ask the user clarifying questions — resolve every ambiguity using the rules below or with a placeholder.

---

## Step 0 — Branch first

```bash
git checkout -b feat/page-<slug>
```

Do this **before writing any files**. The slug is the kebab-case URL path (e.g. `school-photography` → `feat/page-school-photography`).

---

## Step 1 — Restate intent

Write one sentence: what industry/vertical does this page target, and what is the primary CTA?
Example: "Page for school uniform distributors; CTA is a 30-min fit-assessment form."

---

## Step 2 — Derive the slug

Slug = kebab-case of the vertical name. Examples:
- School Photography → `school-photography`
- School Uniform → `school-uniform`
- E-commerce Demo → `ecommerce-demo`

---

## Step 3 — Pick sections

Start with the required set: **Hero + CTA**. Then add from the standard list in `21-sections.md` based on what content was provided. Typical full page order:

1. Hero
2. AtAGlance
3. Problems
4. Features (or Differentiator)
5. Testimonials (or ReferenceCase)
6. HowWeWork
7. FAQ
8. CTA

If the brief mentions a specific section type not in the list, create it and give it a descriptive name.

---

## Step 4 — Write sections

For each section:
1. Create `src/sections/<slug>/<SectionName>.tsx`.
2. Follow the template in `15-page-template.md` for that section type.
3. Alternate dark/light backgrounds (see rhythm table in `10-architecture.md`).
4. Wrap all visible content in `<Reveal>`. Stagger sibling cards/items with `delay={i * 0.07}`.
5. Map content from the brief → section props. For missing content, use lorem ipsum + `{/* TODO */}`.
6. Check: does the section have an unescaped apostrophe? Replace `'` → `&apos;` in JSX text.

---

## Step 5 — Write the page file

Create `src/app/pages/<slug>/page.tsx` using the skeleton in `15-page-template.md`. Import every section from step 4. No logic, no inline JSX — sections only.

---

## Step 6 — Build check

```bash
npm run build
```

Fix **all errors** (the build will not pass with ESLint errors). Warnings about `<img>` and unused vars are pre-existing and acceptable.

---

## Step 7 — Commit and push

```bash
git add src/app/pages/<slug>/ src/sections/<slug>/
git commit -m "feat: add <slug> page"
git push -u origin feat/page-<slug>
```

---

## Step 8 — Report to user

State:
- Branch name
- URL path (`/pages/<slug>`)
- Sections created (list)
- Any TODOs (missing content, placeholder HubSpot form IDs, etc.)
