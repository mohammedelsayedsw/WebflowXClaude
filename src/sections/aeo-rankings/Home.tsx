"use client";

import { useMemo, useState } from "react";
import { CC, COUNTRY, fmt, num, slug, type CC as CCode, type Model, type Summary } from "./data";
import { Go } from "./nav";
import { Search } from "./Search";
import { Chips, RankTable, type TableRow } from "./ui";

type Props = { summary: Summary; model: Model | null; need: () => void };

export function Home(props: Props) {
  return (
    <>
      <Hero {...props} />
      <TopCompanies {...props} />
      <Industries {...props} />
    </>
  );
}

/* ---------- hero: the search ---------- */

function Hero({ summary, model, need }: Props) {
  const t = summary.totals;
  return (
    <section className="hero" id="hero">
      <div className="sq sq1" /><div className="sq sq2" /><div className="sq sq3" />
      <div className="hero-in">
        <p className="kick">Baltic Brand Forum 2026 &nbsp;■&nbsp; Riga</p>
        <h1 className="big">Where does AI<br />rank your brand?</h1>
        <Search model={model} need={need} />
        <ul className="facts">
          <li>{num(t.companies)} companies</li>
          <li>{t.industries} industries</li>
          <li>3 countries</li>
          <li>{num(t.questions)} AI questions</li>
        </ul>
      </div>
    </section>
  );
}

/* ---------- top companies: Baltic list or one country, the top 10 server-rendered, more from the full dataset ---------- */

type Scope = "ALL" | CCode;
const FIRST = 10;
const STEP = 50;

function TopCompanies({ summary, model, need }: Props) {
  const [scope, setScope] = useState<Scope>("ALL");
  const [shown, setShown] = useState(FIRST);
  const total = scope === "ALL" ? summary.totals.baltic : summary.totals[scope];
  const wantMore = shown > FIRST;

  const choose = (s: Scope) => { setScope(s); setShown(FIRST); };
  const more = () => { need(); setShown((n) => n + STEP); };

  let body: React.ReactNode;
  if (scope === "ALL") {
    const rows: BalticRow[] = model && wantMore
      ? model.baltic.slice(0, shown).map((r) => ({ k: r.b.k, n: r.b.n, dom: r.b.doms[0] ?? null, ind: r.ind, sc: r.sc, cs: Object.fromEntries(CC.map((cc) => [cc, r.b.cr[cc]?.sc])) }))
      : summary.baltic;
    body = <BalticTable rows={rows} />;
  } else {
    const rows: TableRow[] = model && wantMore
      ? model.country[scope].slice(0, shown).map((r) => ({ k: r.b.k, n: r.b.n, dom: r.dom, ind: r.ind, sc: r.sc, vis: r.vis, sen: r.sen, pos: r.pos, rank: r.crank }))
      : summary.country[scope].map((r, i) => ({ ...r, rank: i + 1 }));
    body = <RankTable rows={rows} cc={scope} showInd />;
  }

  return (
    <section className="band dark" id="top-companies">
      <div className="wrap">
        <div className="head-row">
          <div>
            <h2 className="mid">{scope === "ALL" ? "Baltic AI ranking" : `${COUNTRY[scope]} AI ranking`}</h2>
            <p className="lbl" style={{ marginTop: 10 }}>
              {scope === "ALL" ? `${num(total)} companies AI names in all three countries` : `${num(total)} companies`}
            </p>
          </div>
          <Chips
            label="Country"
            value={scope}
            onChange={choose}
            options={[{ v: "ALL" as Scope, label: "All Baltics" }, ...CC.map((cc) => ({ v: cc as Scope, label: COUNTRY[cc] }))]}
          />
        </div>
        {body}
        {shown < total && (
          <button type="button" className="btn more" onClick={more}>
            {wantMore && !model ? "Loading" : `Show ${Math.min(STEP, total - shown)} more`}
          </button>
        )}
      </div>
    </section>
  );
}

type BalticRow = { k: string; n: string; dom: string | null; ind: string; sc: number; cs: Partial<Record<CCode, number | undefined>> };

function BalticTable({ rows }: { rows: BalticRow[] }) {
  return (
    <div className="tbl-wrap">
      <table className="tbl">
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            <th className="hide-s">Industry</th>
            {CC.map((cc) => <th key={cc} className="n hide-s" title={COUNTRY[cc]}>{cc}</th>)}
            <th className="n">Score</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.k}>
              <td className="pos">{i + 1}</td>
              <td className="nm">
                <Go to={{ kind: "company", k: r.k, cc: null }}>{r.n}</Go>
                {r.dom && <span className="sub">{r.dom}</span>}
              </td>
              <td className="hide-s ind">{r.ind}</td>
              {CC.map((cc) => (
                <td key={cc} className="n hide-s">
                  {r.cs[cc] == null ? "·" : <Go to={{ kind: "company", k: r.k, cc }} className="lk" title={`${r.n} in ${COUNTRY[cc]}`}>{fmt(r.cs[cc]!)}</Go>}
                </td>
              ))}
              <td className="n sc">{fmt(r.sc)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- industries: the top three in every industry, per country ---------- */

function Industries({ summary }: Props) {
  const [cc, setCc] = useState<CCode>("LV");
  const [q, setQ] = useState("");
  const [all, setAll] = useState(false);
  const list = summary.industries[cc];
  const found = useMemo(() => {
    const f = q.trim().toLowerCase();
    return f ? list.filter((r) => r.ind.toLowerCase().includes(f)) : list;
  }, [list, q]);
  const rows = all || q.trim() ? found : found.slice(0, 12);

  return (
    <section className="band pink" id="industries">
      <div className="wrap">
        <div className="head-row">
          <div>
            <h2 className="mid">Leaders in every industry</h2>
            <p className="lbl" style={{ marginTop: 10 }}>{list.length} industries in {COUNTRY[cc]}</p>
          </div>
          <div className="tools">
            <Chips label="Country" value={cc} onChange={(v) => { setCc(v); setAll(false); }} options={CC.map((c) => ({ v: c, label: COUNTRY[c] }))} />
            <input className="find" type="search" placeholder="Find an industry" aria-label="Find an industry" value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        </div>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Industry</th>
                <th>1st</th>
                <th className="hide-m">2nd</th>
                <th className="hide-m">3rd</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.ind}>
                  <td className="nm">
                    <Go to={{ kind: "industry", slug: slug(r.ind), cc }}>{r.ind}</Go>
                    <span className="sub">{r.count} companies</span>
                  </td>
                  {[0, 1, 2].map((i) => {
                    const t = r.top[i];
                    return (
                      <td key={i} className={`top3 ${i ? "hide-m" : ""}`}>
                        {t && (
                          <>
                            <Go to={{ kind: "company", k: t.k, cc }} className="lk">{t.n}</Go>
                            <span className="sub">Score {fmt(t.sc)}</span>
                          </>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
              {rows.length === 0 && (
                <tr><td colSpan={4}>No industry called &ldquo;{q.trim()}&rdquo; in {COUNTRY[cc]}</td></tr>
              )}
            </tbody>
          </table>
        </div>
        {!all && !q.trim() && found.length > rows.length && (
          <button type="button" className="btn more" onClick={() => setAll(true)}>Show all {found.length} industries</button>
        )}
      </div>
    </section>
  );
}
