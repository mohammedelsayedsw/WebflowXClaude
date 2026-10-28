"use client";

import { useState } from "react";
import { CC, COUNTRY, fmt, lc, num, pct, slug, type Brand, type CC as CCode, type Model, type Row } from "./data";
import { Contact } from "./Contact";
import { Go, useGo } from "./nav";
import { Chips, RankTable, type TableRow } from "./ui";

const toTable = (r: Row): TableRow => ({ k: r.b.k, n: r.b.n, dom: r.dom, sc: r.sc, vis: r.vis, sen: r.sen, pos: r.pos, rank: r.ir });

/** Pink top band: back link, name, meta line, country chips. */
function Head({ title, meta, chips }: { title: string; meta: React.ReactNode; chips: React.ReactNode }) {
  return (
    <section className="r-head">
      <div className="sq sq3" />
      <div className="wrap">
        <Go to={{ kind: "home" }} className="r-back">← Search another company</Go>
        {/* the design sets names in capitals; the scandiweb wordmark is always lowercase */}
        <h1 className="r-name" style={title === "scandiweb" ? { textTransform: "none" } : undefined}>{title}</h1>
        <div className="r-meta">{meta}</div>
        <div className="pick">
          <span className="lbl">Country</span>
          {chips}
        </div>
      </div>
    </section>
  );
}

const countryChips = (ranked: (cc: CCode) => boolean, value: CCode, onChange: (cc: CCode) => void) => (
  <Chips label="Country" value={value} onChange={onChange} options={CC.map((cc) => ({ v: cc, label: COUNTRY[cc], disabled: !ranked(cc) }))} />
);

/** The industry list in one country: the first rows, then the highlighted company with two neighbours each side, then everything on request. */
function IndustryTable({ list, me, cc, first }: { list: Row[]; me?: Row; cc: CCode; first: number }) {
  const [all, setAll] = useState(false);
  let rows: (TableRow | null)[] = (all ? list : list.slice(0, first)).map(toTable);
  if (!all && me && me.ir > first) {
    const from = Math.max(first, me.ir - 3);
    if (from > first) rows.push(null);
    rows = rows.concat(list.slice(from, me.ir + 2).map(toTable));
  }
  return (
    <>
      <RankTable rows={rows} cc={cc} showInd={false} me={me?.b.k} />
      {!all && list.length > first && (
        <button type="button" className="btn more" onClick={() => setAll(true)}>Show all {list.length}</button>
      )}
    </>
  );
}

function Leaderboard({ list, me, cc, industry, first }: { list: Row[]; me?: Row; cc: CCode; industry: string; first: number }) {
  return (
    <section className="band white" id="leaderboard">
      <div className="wrap">
        <div className="head-row">
          <h2 className="mid">{industry} · {COUNTRY[cc]}</h2>
          <span className="lbl">{list.length} companies</span>
        </div>
        <IndustryTable key={`${industry}${cc}`} list={list} me={me} cc={cc} first={first} />
      </div>
    </section>
  );
}

function Questions({ prompts, industry, cc }: { prompts: string[]; industry: string; cc: CCode }) {
  if (!prompts.length) return null;
  return (
    <section className="band pink" id="questions">
      <div className="wrap">
        <h2 className="mid">The questions we asked AI</h2>
        <p className="lead">{prompts.length} buyer questions about {lc(industry)} in {COUNTRY[cc]}. The ranking comes from the answers.</p>
        <ol className="prompts">
          {prompts.map((p, i) => (
            <li key={i}><b>{i + 1}</b><span>{p}</span></li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- company ---------- */

export function Company({ model, b, cc }: { model: Model; b: Brand; cc: CCode }) {
  const go = useGo();
  const row = b.cr[cc]!;
  const ind = model.industries.get(slug(row.ind))!;
  const list = ind.rows[cc]!;
  const leader = list[0];
  const i = row.ir - 1;
  let around = list.slice(Math.max(0, i - 2), i + 3);
  if (!around.includes(leader)) around = [leader, ...around];
  const ahead = list[i - 1];
  const where = `${lc(row.ind)} in ${COUNTRY[cc]}`;

  const verdict =
    row.ir === 1
      ? `AI names ${b.n} first in ${where}.`
      : ahead.sc - row.sc < 0.05
        ? `${ahead.b.n} is one place ahead on the same score. ${leader.b.n} leads ${where}.`
        : `${leader.b.n} leads ${where}. ${b.n} is ${fmt(leader.sc - row.sc)} points behind.`;

  const tone = (good: boolean, bad: boolean) => (good ? "good" : bad ? "bad" : "");

  return (
    <>
      <Head
        title={b.n}
        meta={
          <>
            {row.dom && <a href={`https://${row.dom}`} target="_blank" rel="noopener noreferrer">{row.dom}</a>}
            <span>{row.ind} · {COUNTRY[cc]}</span>
            {b.bal && <span className="tag">#{b.bal.rank} in the Baltics</span>}
          </>
        }
        chips={countryChips((c) => !!b.cr[c], cc, (c) => go({ kind: "company", k: b.k, cc: c }))}
      />

      <section className="band dark" style={{ padding: 0 }}>
        <div className="stats">
          <div className="stat hl">
            <span className="lbl">Position in {row.ind}</span>
            <span className="v">#{row.ir}<small>of {row.iof}</small></span>
            <span className="d">Score {fmt(row.sc)} out of 100</span>
          </div>
          <div className="stat">
            <span className="lbl">Visibility</span>
            <span className={`v ${row.vis == null ? "" : tone(row.vis >= 60, row.vis < 20)}`}>{pct(row.vis)}</span>
            <span className="d">of AI answers mention {b.n}</span>
          </div>
          <div className="stat">
            <span className="lbl">Sentiment</span>
            <span className={`v ${row.sen == null ? "" : tone(row.sen >= 75, row.sen < 50)}`}>{pct(row.sen)}</span>
            <span className="d">how favorably AI describes you</span>
          </div>
          <div className="stat">
            <span className="lbl">Avg. position</span>
            <span className={`v ${row.pos == null ? "" : tone(row.pos <= 2, row.pos > 5)}`}>{row.pos == null ? "·" : fmt(row.pos)}</span>
            <span className="d">where you appear in the answer</span>
          </div>
        </div>
      </section>

      <section className="band pink" id="competitors">
        <div className="wrap">
          <h2 className="mid">Your competitors in AI answers</h2>
          <p className="lead">{verdict}</p>
          <div className="rivals">
            {around.map((r) => (
              <div key={r.b.k} className={`rv ${r === row ? "me" : ""}`}>
                <span className="p">#{r.ir}</span>
                <Go to={{ kind: "company", k: r.b.k, cc }} className="nm">{r.b.n}</Go>
                <span className="x">Score {fmt(r.sc)} · {pct(r.vis)} visible</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Leaderboard list={list} me={row} cc={cc} industry={row.ind} first={15} />

      <section className="band dark" id="baltics">
        <div className="wrap">
          <h2 className="mid">Across the Baltics</h2>
          <div className="geo">
            {CC.map((c) => {
              const r = b.cr[c];
              return (
                <div key={c} className={`g ${r ? "" : "off"} ${c === cc ? "cur" : ""}`}>
                  <span className="lbl">{COUNTRY[c]}{r ? ` · ${r.ind}` : ""}</span>
                  <span className="v">{r ? `#${r.ir}` : "Not ranked"}</span>
                  <span className="d">{r ? `of ${r.iof} in the industry · score ${fmt(r.sc)}` : "AI did not name the company here"}</span>
                  {r && c !== cc && (
                    <div><Go to={{ kind: "company", k: b.k, cc: c }} className="btn">Open {COUNTRY[c]}</Go></div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="baltic">
            <div className="b">
              <span className="lbl">All companies in {COUNTRY[cc]}</span>
              <span className="v">#{num(row.crank)}<small> of {num(model.country[cc].length)}</small></span>
            </div>
            <div className="b">
              <span className="lbl">Baltic ranking</span>
              {b.bal ? (
                <>
                  <span className="v">#{b.bal.rank}<small> of {model.baltic.length}</small></span>
                  <span className="d">Baltic score {fmt(b.bal.sc)}</span>
                </>
              ) : (
                <>
                  <span className="v">Not ranked</span>
                  <span className="d">The Baltic ranking lists companies AI names in all three countries</span>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Questions prompts={ind.prompts[cc] ?? []} industry={row.ind} cc={cc} />
      <Contact key={`${b.k}${cc}`} company={b.n} cc={cc} website={row.dom ?? ""} />
    </>
  );
}

/* ---------- industry ---------- */

export function Industry({ model, slug: s, cc }: { model: Model; slug: string; cc: CCode }) {
  const go = useGo();
  const ind = model.industries.get(s)!;
  const list = ind.rows[cc]!;
  return (
    <>
      <Head
        title={ind.name}
        meta={
          <>
            <span>{list.length} companies in {COUNTRY[cc]}</span>
            <span className="tag">{list[0].b.n} leads · score {fmt(list[0].sc)}</span>
          </>
        }
        chips={countryChips((c) => !!ind.rows[c], cc, (c) => go({ kind: "industry", slug: s, cc: c }))}
      />
      <Leaderboard list={list} cc={cc} industry={ind.name} first={50} />
      <Questions prompts={ind.prompts[cc] ?? []} industry={ind.name} cc={cc} />
      <Contact key={`${s}${cc}`} industry={ind.name} cc={cc} />
    </>
  );
}
