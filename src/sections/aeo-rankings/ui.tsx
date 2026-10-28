"use client";

/** Shared bits for /aeo-rankings in the Baltic Brand Forum look (bbf.css): chips and the rank table. */
import { Go } from "./nav";
import { fmt, pct, type CC } from "./data";

/** A row of toggle chips. Disabled chips stay visible so the set never changes shape. */
export function Chips<T extends string>({
  options,
  value,
  onChange,
  label,
}: {
  options: { v: T; label: string; disabled?: boolean }[];
  value: T;
  onChange: (v: T) => void;
  label: string;
}) {
  return (
    <div role="group" aria-label={label} className="chips">
      {options.map((o) => (
        <button key={o.v} type="button" className="chip" disabled={o.disabled} aria-pressed={o.v === value} onClick={() => onChange(o.v)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

export type TableRow = {
  k: string; n: string; dom: string | null; ind?: string;
  sc: number; vis: number | null; sen: number | null; pos: number | null;
  rank: number;
};

/** Companies in one country: place, name, industry, visibility, sentiment, average position, score. A null row draws a gap. */
export function RankTable({ rows, cc, showInd, me }: { rows: (TableRow | null)[]; cc: CC; showInd: boolean; me?: string }) {
  return (
    <div className="tbl-wrap">
      <table className="tbl">
        <thead>
          <tr>
            <th>#</th>
            <th>Company</th>
            {showInd && <th className="hide-s">Industry</th>}
            <th>Visibility</th>
            <th className="n hide-s">Sentiment</th>
            <th className="n hide-s">Avg. position</th>
            <th className="n">Score</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) =>
            r ? (
              <tr key={r.k} className={r.k === me ? "me" : undefined}>
                <td className="pos">{r.rank}</td>
                <td className="nm">
                  <Go to={{ kind: "company", k: r.k, cc }}>{r.n}</Go>
                  {r.dom && <span className="sub">{r.dom}</span>}
                </td>
                {showInd && <td className="hide-s ind">{r.ind}</td>}
                <td>
                  <span className="bar"><i style={{ width: `${Math.min(100, r.vis ?? 0)}%` }} /></span>
                  {pct(r.vis)}
                </td>
                <td className="n hide-s">{pct(r.sen)}</td>
                <td className="n hide-s">{r.pos == null ? "·" : fmt(r.pos)}</td>
                <td className="n sc">{fmt(r.sc)}</td>
              </tr>
            ) : (
              <tr key={`gap${i}`} className="gap" aria-hidden>
                <td colSpan={7}>···</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
