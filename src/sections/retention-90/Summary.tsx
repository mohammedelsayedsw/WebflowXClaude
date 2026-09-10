"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { COPY, MATCH_ASSETS, T, img } from "./copy";
import { computeLeak, computeScore, fmt, fmtK, gapTiers } from "./scoring";
import { HOST_NAME } from "./status";

type Props = {
  store: string;
  answers: Record<string, number>;
  labels: Record<string, string>;
  onBook: () => void;
};

function useCountUp(target: number, dur: number) {
  const [v, setV] = useState(0);
  useEffect(() => {
    let raf = 0; let t0: number | null = null;
    const step = (ts: number) => {
      if (t0 === null) t0 = ts;
      const p = Math.min(1, (ts - t0) / dur);
      setV(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, dur]);
  return v;
}

export function Summary({ store, answers, labels, onBook }: Props) {
  const score = computeScore(answers);
  const leak = computeLeak(answers);
  const critical = score < 40;
  const bandKey = critical ? "critical" : score < 60 ? "leaking" : score < 78 ? "average" : "strong";
  const band = COPY.bands[bandKey];
  const scoreV = useCountUp(score, 1300);
  const leakV = useCountUp(leak, 1500);
  const [arcOn, setArcOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setArcOn(true), 150); return () => clearTimeout(t); }, []);
  const C = 2 * Math.PI * 78;
  const date = useMemo(() => new Date().toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" }), []);

  return (
    <div id="screen-summary">
      <div className="inner">
        <div className="dtop">
          <button className="btn" onClick={onBook}>Fix my revenue leak</button>
        </div>
        <div className="scanline"><span className="lbl">RETENTION SCAN</span><span className="dom">{store}</span><span className="dt">{date}</span></div>
        <div className="subline">Benchmarked against 2026 lifecycle performance data across 183,000 ecommerce brands</div>
        <div className="dgrid">

          <div className={"dcard leakcard resultcard" + (!critical && score >= 60 ? " ok" : "")}>
            <h2>{T(band.head, { store })}</h2>
            <div className="twoup">
              <div className={"ring" + (critical ? " critical" : "")}>
                <svg width="180" height="180" viewBox="0 0 180 180">
                  <defs>
                    <linearGradient id="rg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#6ef76e" /><stop offset="100%" stopColor="#3fd97a" /></linearGradient>
                    <linearGradient id="rgRed" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#ff7a6a" /><stop offset="100%" stopColor="#e04f4f" /></linearGradient>
                  </defs>
                  <circle cx="90" cy="90" r="78" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="15" />
                  <circle cx="90" cy="90" r="78" fill="none" stroke={critical ? "url(#rgRed)" : "url(#rg)"} strokeWidth="15" strokeLinecap="round"
                    strokeDasharray={C} strokeDashoffset={arcOn ? C * (1 - score / 100) : C}
                    style={{ transition: "stroke-dashoffset 1.4s cubic-bezier(.2,.7,.3,1)" }} />
                </svg>
                <div className="rv"><b>{scoreV}</b><em>{COPY.score.outOf}</em><span>{COPY.score.label}</span></div>
              </div>
              <div className="money">
                <div className="big">{fmt(leakV)}/mo</div>
                <div className="per">{COPY.leak.label}</div>
              </div>
            </div>
            <p className="basis">{T(answers.share >= 0.3 ? COPY.leak.atBenchmark : COPY.leak.basis, { share: Math.round(answers.share * 100), rev: labels.rev, leak: fmt(leak) })}</p>
            <details className="method"><summary>How this was calculated</summary>
              <ul>
                <li>Benchmark share of revenue from email + SMS: 30% (Klaviyo 2026 median for brands your size is 25 to 30%).</li>
                <li>Leak = your monthly revenue × (30% − your current share) × 60% attainment. The 60% is deliberately conservative.</li>
                <li>If your share is already at benchmark, the leak switches to a per-recipient quality gap: average cart flow $3.65/recipient vs top decile $28.89.</li>
                <li>Score = weighted sum of share (30), flow coverage (20), cart recovery (10), SMS (10), replenishment fit (10), discount dependence (10), ownership (10).</li>
                <li>These are estimates from your answers, not an audit. The audit is what the call is for.</li>
              </ul>
            </details>
          </div>

          <Chart answers={answers} leak={leak} />
          <Gaps answers={answers} labels={labels} />
          <Match rev={answers.rev} />
          <Tiles answers={answers} leak={leak} />

          <div className={"dcta" + (critical ? " critical" : "")}>
            <h3>{T(COPY.cta.h, { store })}</h3>
            <p>{T(COPY.cta.p, { store })}</p>
            <button className="btn big" onClick={onBook}>Fix my revenue leak →</button>
            <div><span className="host"><img src={img("andres-reitsnik.webp")} alt="" /><span>You’ll speak directly with <b>{HOST_NAME}</b>, who leads the lifecycle team.</span></span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- projection chart ---------- */
function Chart({ answers, leak }: { answers: Record<string, number>; leak: number }) {
  const W = 640, H = 270, L = 74, R = 20, TOP = 26, B = 42;
  const revNow = Math.max(1, answers.rev * answers.share);
  const revTarget = revNow + leak;
  const maxY = revTarget * 1.15;
  const X = (d: number) => L + (W - L - R) * (d / 120);
  const Y = (v: number) => TOP + (H - TOP - B) * (1 - v / maxY);
  const { cur, wit } = useMemo(() => {
    const cur: [number, number][] = [], wit: [number, number][] = [];
    for (let d = 0; d <= 120; d += 6) {
      cur.push([d, revNow * (1 - 0.0005 * d)]);
      const p = d <= 20 ? 0.02 * (d / 20) : 0.02 + 0.98 * (1 - Math.exp(-(d - 20) / 38));
      wit.push([d, revNow + (revTarget - revNow) * Math.min(1, p)]);
    }
    return { cur, wit };
  }, [revNow, revTarget]);
  const path = (pts: [number, number][]) => "M" + pts.map((p) => X(p[0]).toFixed(1) + "," + Y(p[1]).toFixed(1)).join(" L ");
  const area = path(wit) + " L " + X(120).toFixed(1) + "," + Y(0) + " L " + X(0).toFixed(1) + "," + Y(0) + " Z";
  const d90 = X(90);
  const lineRef = useRef<SVGPathElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [len, setLen] = useState(0);
  useEffect(() => {
    if (lineRef.current) setLen(lineRef.current.getTotalLength());
    const t = setTimeout(() => setDrawn(true), 250);
    return () => clearTimeout(t);
  }, []);
  const [hover, setHover] = useState<{ day: number; px: number } | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const onMove = (ev: React.MouseEvent<SVGSVGElement>) => {
    const r = svgRef.current!.getBoundingClientRect();
    const sx = (ev.clientX - r.left) * (W / r.width);
    if (sx < L || sx > W - R) { setHover(null); return; }
    let day = Math.round(((sx - L) / (W - L - R) * 120) / 6) * 6;
    day = Math.max(0, Math.min(120, day));
    setHover({ day, px: Math.min(r.width - 160, Math.max(0, (X(day) / W) * r.width + 12)) });
  };

  return (
    <div className="dcard">
      <h3>{COPY.chart.title}</h3>
      <div className="cs">{COPY.chart.sub}</div>
      <div className="chartwrap">
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }} onMouseMove={onMove} onMouseLeave={() => setHover(null)}>
          <defs><linearGradient id="af" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6ef76e" stopOpacity=".22" /><stop offset="100%" stopColor="#6ef76e" stopOpacity="0" /></linearGradient></defs>
          {[0.25, 0.5, 0.75, 1].map((f) => (
            <g key={f}>
              <line x1={L} x2={W - R} y1={Y(maxY * f)} y2={Y(maxY * f)} stroke="rgba(255,255,255,.06)" />
              <text x={L - 8} y={Y(maxY * f) + 4} textAnchor="end" fontSize="10.5" fill="#8d91a8">{fmt(Math.round((maxY * f) / 100) * 100)}</text>
            </g>
          ))}
          <line x1={L} x2={W - R} y1={Y(0)} y2={Y(0)} stroke="rgba(255,255,255,.14)" />
          <path d={area} fill="url(#af)" />
          <line x1={d90} x2={d90} y1={TOP} y2={Y(0)} stroke="rgba(255,255,255,.55)" strokeDasharray="4 4" />
          <text x={d90} y={TOP - 8} textAnchor="middle" fontSize="10.5" fill="rgba(255,255,255,.85)" fontWeight="700" letterSpacing=".08em">{COPY.chart.marker}</text>
          <path d={path(cur)} fill="none" stroke="#7e83a0" strokeWidth="2.5" strokeDasharray="6 5" />
          <path ref={lineRef} d={path(wit)} fill="none" stroke="#6ef76e" strokeWidth="3.5" strokeLinecap="round"
            style={len ? { strokeDasharray: len, strokeDashoffset: drawn ? 0 : len, transition: "stroke-dashoffset 1.6s ease" } : undefined} />
          <circle cx={X(0)} cy={Y(wit[0][1])} r="5" fill="#6ef76e" stroke="#10132c" strokeWidth="2" />
          <circle cx={X(120)} cy={Y(wit[wit.length - 1][1])} r="6" fill="#6ef76e" stroke="#10132c" strokeWidth="2" />
          <text x={X(120) - 8} y={Y(wit[wit.length - 1][1]) - 14} textAnchor="end" fontSize="13" fontWeight="800" fill="#ffffff">{fmt(Math.round(revTarget / 100) * 100)}/mo</text>
          <text x={X(120) - 8} y={Y(cur[cur.length - 1][1]) + 18} textAnchor="end" fontSize="11" fill="#8d91a8">{fmt(Math.round(revNow / 100) * 100)}/mo today</text>
          <text x={L} y={H - 10} fontSize="10.5" fill="#8d91a8">Day 0</text>
          <text x={X(60)} y={H - 10} textAnchor="middle" fontSize="10.5" fill="#8d91a8">Day 60</text>
          <text x={d90} y={H - 10} textAnchor="middle" fontSize="10.5" fill="#ffffff" fontWeight="700">Day 90</text>
          <text x={W - R} y={H - 10} textAnchor="end" fontSize="10.5" fill="#8d91a8">Day 120</text>
          {hover && <line x1={X(hover.day)} x2={X(hover.day)} y1={TOP} y2={Y(0)} stroke="rgba(255,255,255,.25)" />}
        </svg>
        {hover && (
          <div className="tip" style={{ display: "block", left: hover.px, top: 18 }}>
            <span style={{ color: "#8d91a8" }}>Day {hover.day}</span><br />With flows: <b>{fmt(Math.round(wit[hover.day / 6][1]))}</b><br />
            <span style={{ color: "#8d91a8" }}>Current: {fmt(Math.round(cur[hover.day / 6][1]))}</span>
          </div>
        )}
      </div>
      <div className="legend">
        <span><i className="sw-up" /><span>{COPY.chart.legendUp}</span></span>
        <span><i className="sw-now" /><span>{COPY.chart.legendNow}</span></span>
        <span><i className="sw-90" /><span>{COPY.chart.legend90}</span></span>
      </div>
      <p className="bench" style={{ marginTop: 8 }}>{COPY.chart.note}</p>
    </div>
  );
}

/* ---------- gap rows ---------- */
export function gapRows(answers: Record<string, number>, labels: Record<string, string>) {
  const G = COPY.gaps;
  const { ci, si, ri, di } = gapTiers(answers);
  const rows = [
    { g: G[0], you: Math.min(100, Math.round((answers.share / 0.3) * 100)), lbl: Math.round(answers.share * 100) + "%", tier: answers.share >= 0.3 ? 0 : answers.share >= 0.2 ? 1 : 2, v: answers.share >= 0.3 ? G[0].v[0] : G[0].v[1] },
    { g: G[1], you: Math.min(100, Math.round((answers.flows / 10) * 100)), lbl: (labels.flows || "") + " live", tier: answers.flows >= 8 ? 0 : answers.flows >= 4 ? 1 : 2, v: answers.flows >= 8 ? G[1].v[0] : G[1].v[1] },
    { g: G[2], you: [90, 45, 8][ci], lbl: G[2].lbl![ci], v: G[2].v[ci], tier: ci },
    { g: G[3], you: [85, 30, 5][si], lbl: G[3].lbl![si], v: G[3].v[si], tier: si },
    { g: G[4], you: [90, 20, 60][ri], lbl: G[4].lbl![ri], v: G[4].v[ri], tier: ri === 2 ? 0 : ri },
    { g: G[5], you: [90, 50, 15][di], lbl: G[5].lbl![di], v: G[5].v[di], tier: di },
  ];
  const count = rows.filter((r) => r.tier > 0).length;
  rows.sort((a, b) => b.tier - a.tier || a.you - b.you);
  return { rows, count };
}

function Gaps({ answers, labels }: { answers: Record<string, number>; labels: Record<string, string> }) {
  const { rows } = useMemo(() => gapRows(answers, labels), [answers, labels]);
  const [on, setOn] = useState(false);
  useEffect(() => { const t = setTimeout(() => setOn(true), 300); return () => clearTimeout(t); }, []);
  const BAR = ["#6ef76e", "#f0b15a", "#e04f4f"], TXT = ["#6ef76e", "#f0c58e", "#ff8f83"];
  return (
    <div className="dcard">
      <h3>{COPY.gapsUI.title}</h3>
      <div className="cs">{COPY.gapsUI.sub}</div>
      <div>
        {rows.map((r) => (
          <div className="gaprow" key={r.g.n}>
            <div className="gn">{r.g.n}<small>{r.g.bench}</small></div>
            <div className="gaptrack"><div className="gapfill" style={{ background: BAR[r.tier], width: on ? r.you + "%" : 0 }} /></div>
            <div className="gapres"><b>{r.lbl}</b><span style={{ color: TXT[r.tier] }}>{r.v}</span></div>
          </div>
        ))}
      </div>
      <p className="bench">{COPY.gapsUI.footer}</p>
    </div>
  );
}

/* ---------- comparable brand ---------- */
function Match({ rev }: { rev: number }) {
  const key = rev <= 100000 ? "small" : rev <= 700000 ? "mid" : "large";
  const c = COPY.match[key];
  return (
    <div className="dcard">
      <h3>{COPY.matchUI.title}</h3>
      <div className="cs">{COPY.matchUI.why}</div>
      <div className="pmatch">
        <div className="pshot"><img src={MATCH_ASSETS[key].shot} alt="" /></div>
        <div><div className="pk">{c.k}</div><div className="pd">{c.d}</div><p>{c.p}</p></div>
      </div>
    </div>
  );
}

/* ---------- tiles ---------- */
function Tiles({ answers, leak }: { answers: Record<string, number>; leak: number }) {
  const TL = COPY.tiles;
  const n = gapRows(answers, {}).count;
  const gapTxt = T(n === 0 ? TL.gapsValueNone : n === 1 ? TL.gapsValueOne : TL.gapsValue, { n });
  const gapLbl = n === 0 ? TL.gapsLabelNone : TL.gapsLabel;
  return (
    <div className="tiles">
      <div className="tile"><div className="tv"><em>+{fmtK(leak)}</em>/mo</div><div className="tl">{TL.liftLabel}</div></div>
      <div className="tile"><div className="tv"><em>{gapTxt}</em></div><div className="tl">{gapLbl}</div></div>
      <div className="tile"><div className="tv">{TL.daysValue}</div><div className="tl">{TL.daysLabel}</div></div>
    </div>
  );
}
