#!/usr/bin/env node
/**
 * Optional: run after a Webflow export if you need to fix broken multi-line url() values
 * in CSS (filenames with "(1)" etc.).
 *
 *   npm run css:parse-urls
 *   node scripts/css-parse-urls.mjs
 *
 *   url(https://...foo\(
 *       1\
 *     ).svg);
 * → url(https://...foo\(1\).svg);
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "src", "webflow");

function walkCss(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    if (fs.statSync(p).isDirectory()) walkCss(p, out);
    else if (name.endsWith(".css")) out.push(p);
  }
  return out;
}

function fix(css) {
  const lines = css.split(/\r?\n/);
  const next = [];
  for (let i = 0; i < lines.length; ) {
    const a = lines[i];
    const b = lines[i + 1];
    const c = lines[i + 2];
    // Line (c) may contain ")" inside the filename (e.g. \(1\)); use (.*) not [^)]*.
    const hit =
      /url\(https?:\/\//.test(a) &&
      /\\\(\s*$/.test(a) &&
      b &&
      /^\s*\d+\\\s*$/.test(b) &&
      c &&
      /^\s*\)(.*)\)\s*;\s*$/.test(c.trim());

    if (hit) {
      const j = a.indexOf("url(");
      const k = a.lastIndexOf("\\(");
      const decl = a.slice(0, j + 4);
      const prefix = a.slice(j + 4, k);
      const num = (b.match(/(\d+)/) || [])[1];
      const m = c.match(/^\s*\)(.*)\)\s*;\s*$/);
      if (j !== -1 && k > j + 3 && num && m) {
        next.push(`${decl}${prefix}\\(${num}\\)${m[1]});`);
        i += 3;
        continue;
      }
    }
    next.push(a);
    i++;
  }
  return next.join("\n");
}

for (const file of walkCss(root).sort()) {
  const before = fs.readFileSync(file, "utf8");
  const after = fix(before);
  if (after !== before) fs.writeFileSync(file, after, "utf8");
}
