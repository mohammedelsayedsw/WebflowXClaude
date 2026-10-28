// Builds src/sections/aeo-rankings/summary.json (the server-rendered home lists) from public/aeo-rankings/data.json.
// data.json is the Baltic AI Brand Ranking dataset (AnswerRank, published September 2026). Run after replacing it:
//   node scripts/aeo-rankings-summary.mjs
import { readFileSync, writeFileSync } from "node:fs";

const CC = ["LV", "EE", "LT"];
const TOP = 10;
const D = JSON.parse(readFileSync("public/aeo-rankings/data.json", "utf8"));
const name = (i) => D.names[i][0];
const key = (i) => D.names[i][1];
const ind = (i) => D.industries[i];

const score = {};
const domains = {};
CC.forEach((cc) =>
  D.countries[cc].forEach(([b, , dom, sc]) => {
    (score[b] ??= {})[cc] = sc;
    if (dom && !domains[b]) domains[b] = dom;
  }),
);

const baltic = D.baltic.slice(0, TOP).map(([b, i, sc]) => ({
  k: key(b), n: name(b), dom: domains[b] ?? null, ind: ind(i), sc, cs: score[b],
}));

const country = {};
const industries = {};
CC.forEach((cc) => {
  const rows = D.countries[cc];
  country[cc] = rows.slice(0, TOP).map(([b, i, dom, sc, vis, sen, pos]) => ({
    k: key(b), n: name(b), dom, ind: ind(i), sc, vis, sen, pos,
  }));
  const groups = new Map();
  rows.forEach(([b, i, , sc]) => {
    if (!groups.has(i)) groups.set(i, []);
    groups.get(i).push({ k: key(b), n: name(b), sc });
  });
  industries[cc] = [...groups]
    .map(([i, list]) => ({ ind: ind(i), count: list.length, top: list.slice(0, 3) }))
    .sort((a, b) => a.ind.localeCompare(b.ind));
});

const companies = new Set(CC.flatMap((cc) => D.countries[cc].map((r) => r[0]))).size;
const questions = Object.values(D.prompts).reduce((s, p) => s + CC.reduce((t, cc) => t + p[cc].length, 0), 0);

const out = {
  totals: { companies, industries: D.industries.length, questions, baltic: D.baltic.length, ...Object.fromEntries(CC.map((cc) => [cc, D.countries[cc].length])) },
  baltic,
  country,
  industries,
};
writeFileSync("src/sections/aeo-rankings/summary.json", JSON.stringify(out));
console.log(out.totals);
