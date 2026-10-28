import { CC, COUNTRY, fmt, slug, type CC as CCode, type Summary } from "./data";
import { Expand } from "./Expand";
import { Go } from "./nav";

type Entry = { k: string; n: string; ind: string; sc: number };
export type Podium = { id: string; scope: string; cc: CCode | null; top: Entry[] };

/** Winner (#1) and finalists (#2 to #5) for the Baltic ranking and each country. */
export function podiums(summary: Summary): Podium[] {
  return [
    { id: "baltics", scope: "The Baltics", cc: null, top: summary.baltic.slice(0, 5) },
    ...CC.map((cc) => ({ id: COUNTRY[cc].toLowerCase(), scope: COUNTRY[cc], cc, top: summary.country[cc].slice(0, 5) })),
  ];
}

/** The #1 company in every industry, side by side for the three countries. */
export function industryWinners(summary: Summary) {
  const names = [...new Set(CC.flatMap((cc) => summary.industries[cc].map((r) => r.ind)))].sort((a, b) => a.localeCompare(b));
  return names.map((ind) => ({
    ind,
    win: Object.fromEntries(CC.map((cc) => [cc, summary.industries[cc].find((r) => r.ind === ind)?.top[0] ?? null])) as Record<CCode, { k: string; n: string; sc: number } | null>,
  }));
}

export function WinnersHero() {
  return (
    <section className="hero" id="hero">
      <div className="sq sq1" /><div className="sq sq2" /><div className="sq sq3" />
      <div className="hero-in">
        <p className="kick">Most AI recommended brands 2026</p>
        <h1 className="big">Winners &amp;<br />finalists</h1>
        <p className="hero-lead">
          The winner of each ranking is the brand ChatGPT, Gemini, and Perplexity recommend most. Finalists hold places 2 to 5.
        </p>
      </div>
    </section>
  );
}

export function Podiums({ list }: { list: Podium[] }) {
  return (
    <section className="band dark" id="podiums">
      <div className="wrap">
        <div className="podiums">
          {list.map((p) => {
            const [win, ...fin] = p.top;
            return (
              <article key={p.id} id={p.id} className="podium">
                <h2 className="mid sm">{p.scope}</h2>
                <div className="win">
                  <span className="lbl">Winner</span>
                  <Go to={{ kind: "company", k: win.k, cc: p.cc }} className="win-n">{win.n}</Go>
                  <span className="win-x">{win.ind} · score {fmt(win.sc)}</span>
                </div>
                <p className="lbl fin-l">Finalists</p>
                <ol className="fin">
                  {fin.map((f, i) => (
                    <li key={f.k}>
                      <b>{i + 2}</b>
                      <span>
                        <Go to={{ kind: "company", k: f.k, cc: p.cc }} className="fin-n">{f.n}</Go>
                        <span className="sub">{f.ind}</span>
                      </span>
                      <span className="fin-s">{fmt(f.sc)}</span>
                    </li>
                  ))}
                </ol>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function IndustryWinners({ rows }: { rows: ReturnType<typeof industryWinners> }) {
  return (
    <section className="band white" id="industry-winners">
      <div className="wrap">
        <div className="head-row">
          <div>
            <h2 className="mid">Winners in every industry</h2>
            <p className="lbl" style={{ marginTop: 10 }}>{rows.length} industries · the company AI names first in each country</p>
          </div>
        </div>
        <Expand label={`Show all ${rows.length} industries`}>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>Industry</th>
                {CC.map((cc) => <th key={cc}>{COUNTRY[cc]}</th>)}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.ind} className={i >= 20 ? "more-row" : undefined}>
                  <td className="nm">
                    <Go to={{ kind: "industry", slug: slug(r.ind), cc: CC.find((cc) => r.win[cc]) ?? null }}>{r.ind}</Go>
                  </td>
                  {CC.map((cc) => {
                    const w = r.win[cc];
                    return (
                      <td key={cc} className="top3">
                        {w ? (
                          <>
                            <Go to={{ kind: "company", k: w.k, cc }} className="lk">{w.n}</Go>
                            <span className="sub">Score {fmt(w.sc)}</span>
                          </>
                        ) : (
                          "·"
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </Expand>
      </div>
    </section>
  );
}
