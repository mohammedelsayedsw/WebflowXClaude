# 00 — Overview

## Purpose

This repo is a Next.js 15 app that renders custom landing pages embedded inside the main Webflow site (scandiweb.com). Each page is a standalone industry/solution landing page — a deep-dive sales page targeting a specific vertical (e.g. school photography, school uniform). Pages are deployed as a sub-app served under the Webflow domain; the Webflow site handles the global Header/Footer shell.

The workflow is fully content-driven: a non-technical content author describes a page in plain language, Claude generates all files, commits to a feature branch, pushes to GitHub, and the branch is reviewed + merged by a developer.

## Pipeline

```
Content prompt
  → Claude reads context/ files in order
  → git checkout -b feat/page-<slug>
  → Claude writes src/sections/<slug>/*.tsx  (one file per section)
  → Claude writes src/app/pages/<slug>/page.tsx
  → npm run build  (must pass, fix any lint/type errors)
  → git add + commit
  → git push -u origin feat/page-<slug>
  → Developer opens PR on GitHub → review → merge → deploy
```

**The agent never asks clarifying questions.** All decisions are resolved by these context files. When content is missing, use placeholder lorem ipsum and flag it in a comment `{/* TODO: replace placeholder */}`.
