# 15 — Page Template

<!-- Canonical structure every generated page follows for consistency. -->
<!-- TODO: fill in. Skeleton example below. -->

## File location

`src/app/<slug>/page.tsx`

## Skeleton

```tsx
"use client";

// 1. Local sections (auto-generated inventory)
// 2. Webflow sections (allowlist)

export default function Page() {
  return (
    <>
      {/* sections in order */}
    </>
  );
}
```

## Rules of thumb

<!-- TODO -->

- Sections only at the top level; no inline JSX trees.
- Props inlined per section, no shared globals.
