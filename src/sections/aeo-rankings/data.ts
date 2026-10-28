/** Data for /aeo-rankings: the server-rendered home lists (summary.json) and the full dataset the page loads in the browser (public/aeo-rankings/data.json). */
import { assetUrl } from "@/lib/assets";

export const CC = ["LV", "EE", "LT"] as const;
export type CC = (typeof CC)[number];
export const COUNTRY: Record<CC, string> = { LV: "Latvia", EE: "Estonia", LT: "Lithuania" };
export const isCC = (v: string | null): v is CC => !!v && (CC as readonly string[]).includes(v);

/* ---------- summary.json (built by scripts/aeo-rankings-summary.mjs) ---------- */

export type BalticTop = { k: string; n: string; dom: string | null; ind: string; sc: number; cs: Partial<Record<CC, number>> };
export type CountryTop = { k: string; n: string; dom: string | null; ind: string; sc: number; vis: number | null; sen: number | null; pos: number | null };
export type IndustryTop = { ind: string; count: number; top: { k: string; n: string; sc: number }[] };
export type Summary = {
  totals: { companies: number; industries: number; questions: number; baltic: number } & Record<CC, number>;
  /** industry rankings (industry x country) and the average visibility of the leader and of fifth place in them */
  stats: { rankings: number; leaderVis: number; fifthVis: number };
  baltic: BalticTop[];
  country: Record<CC, CountryTop[]>;
  industries: Record<CC, IndustryTop[]>;
};

/* ---------- data.json ---------- */

type RawRow = [number, number, string | null, number, number | null, number | null, number | null];
type Raw = {
  names: [string, string][];
  industries: string[];
  countries: Record<CC, RawRow[]>;
  baltic: [number, number, number][];
  prompts: Record<string, Record<CC, string[]>>;
};

/** One company in one country. crank = place among all companies there, ir/iof = place in its industry there. */
export type Row = {
  b: Brand; cc: CC; ind: string; dom: string | null;
  sc: number; vis: number | null; sen: number | null; pos: number | null;
  crank: number; ir: number; iof: number;
};
export type Brand = {
  k: string; n: string; doms: string[];
  cr: Partial<Record<CC, Row>>;
  bal: { rank: number; sc: number; ind: string } | null;
  home: CC | null;
};
export type Model = {
  brands: Map<string, Brand>;
  country: Record<CC, Row[]>;
  baltic: { b: Brand; rank: number; sc: number; ind: string }[];
  industries: Map<string, { name: string; slug: string; rows: Partial<Record<CC, Row[]>>; prompts: Partial<Record<CC, string[]>> }>;
  search: { b: Brand; f: string }[];
};

export const fold = (s: string) =>
  s.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
export const slug = (s: string) => fold(s).replace(/ /g, "-");

function build(D: Raw): Model {
  const brands = D.names.map(([n, k]): Brand => ({ k, n, doms: [], cr: {}, bal: null, home: null }));
  const industries: Model["industries"] = new Map();
  D.industries.forEach((name, i) => {
    const p = D.prompts[String(i)];
    industries.set(slug(name), { name, slug: slug(name), rows: {}, prompts: p ? { ...p } : {} });
  });
  const country = {} as Record<CC, Row[]>;
  CC.forEach((cc) => {
    country[cc] = D.countries[cc].map(([bi, ii, dom, sc, vis, sen, pos], i) => {
      const b = brands[bi];
      const ind = D.industries[ii];
      const row: Row = { b, cc, ind, dom, sc, vis, sen, pos, crank: i + 1, ir: 0, iof: 0 };
      b.cr[cc] = row;
      if (dom && !b.doms.includes(dom)) b.doms.push(dom);
      const g = industries.get(slug(ind))!;
      (g.rows[cc] ??= []).push(row);
      return row;
    });
  });
  industries.forEach((g) => CC.forEach((cc) => g.rows[cc]?.forEach((r, i, list) => { r.ir = i + 1; r.iof = list.length; })));
  const baltic = D.baltic.map(([bi, ii, sc], i) => ({ b: brands[bi], rank: i + 1, sc, ind: D.industries[ii] }));
  baltic.forEach((r) => { r.b.bal = { rank: r.rank, sc: r.sc, ind: r.ind }; });
  brands.forEach((b) => {
    // the country where the company places highest in its industry
    b.home = CC.filter((cc) => b.cr[cc]).sort((x, y) => b.cr[x]!.ir - b.cr[y]!.ir || b.cr[y]!.sc - b.cr[x]!.sc)[0] ?? null;
  });
  const listed = brands.filter((b) => b.home);
  return {
    brands: new Map(listed.map((b) => [b.k, b])),
    country,
    baltic,
    industries,
    search: listed.map((b) => ({ b, f: `${fold(b.n)} ${fold(b.k)}` })),
  };
}

let loading: Promise<Model> | null = null;
/** Loads the full dataset once per page view. */
export function loadModel(): Promise<Model> {
  loading ??= fetch(assetUrl("/aeo-rankings/data.json"))
    .then((r) => {
      if (!r.ok) throw new Error(`data.json ${r.status}`);
      return r.json() as Promise<Raw>;
    })
    .then(build)
    .catch((e) => {
      loading = null;
      throw e;
    });
  return loading;
}

/** Up to eight companies for the search box: exact name, name prefix, word prefix, substring, then domain. */
export function searchBrands(m: Model, q: string): Brand[] {
  const f = fold(q);
  if (!f) return [];
  const best = (b: Brand) => Math.max(...CC.map((cc) => b.cr[cc]?.sc ?? 0));
  const hits: [number, Brand][] = [];
  for (const { b, f: hay } of m.search) {
    const name = fold(b.n);
    let s = -1;
    if (name === f) s = 0;
    else if (name.startsWith(f)) s = 1;
    else if (` ${hay}`.includes(` ${f}`)) s = 2;
    else if (hay.includes(f)) s = 3;
    else if (b.doms.some((d) => d.startsWith(f))) s = 4;
    if (s >= 0) hits.push([s, b]);
  }
  hits.sort((a, b) => a[0] - b[0] || (b[1].bal ? 1 : 0) - (a[1].bal ? 1 : 0) || best(b[1]) - best(a[1]));
  return hits.slice(0, 8).map((h) => h[1]);
}

/* ---------- formatting ---------- */

export const fmt = (n: number, d = 1) => n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
export const pct = (n: number | null) => (n == null ? "·" : `${fmt(n, n >= 10 || n === 0 ? 0 : 1)}%`);
export const num = (n: number) => n.toLocaleString("en-US");
/** Industry name inside a sentence: lowercase, but acronyms (IPTV, DIY) stay as they are. */
export const lc = (s: string) => s.split(" ").map((w) => (/^[A-Z0-9&/.-]{2,}$/.test(w) ? w : w.toLowerCase())).join(" ");
