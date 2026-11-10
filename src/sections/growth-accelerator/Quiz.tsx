"use client";

import { useEffect, useState } from "react";
import type { ScanResult } from "@/app/api/growth/scan/route";
import { QUESTIONS } from "./copy";
import type { Answers } from "./scoring";

const KEYS = "ABCDEFGHI";

/* What the scan strip says while the questions are answered. Items appear one by one. */
function scanLines(store: string, s: ScanResult | null): string[] {
  if (s === null) return [`Reading ${store}…`];
  if (!s.ok) return [`We couldn’t read ${store} from outside. We’ll score from your answers and check the site on the call.`];
  const out: string[] = [];
  out.push(s.platform ? `Platform: ${s.platform}` : "Platform: custom or not detected");
  out.push(`Homepage answered in ${((s.ms ?? 0) / 1000).toFixed(1)} s`);
  out.push(s.metaPixel || s.googleTag ? `Tracking: ${[s.googleTag && "Google tag", s.metaPixel && "Meta pixel", s.tiktok && "TikTok pixel"].filter(Boolean).join(", ")}` : "Tracking: no ad pixels found");
  out.push(s.esp ? `Email platform: ${s.esp}` : "Email platform: none found");
  out.push(s.orgSchema ? "Store data for Google and AI: found" : "Store data for Google and AI: not found");
  out.push(s.reviews ? `Reviews: ${s.reviews}` : "Reviews: none found");
  return out;
}

export function Quiz({ store, qi, answers, scan, onPick, onBack }: {
  store: string; qi: number; answers: Answers; scan: ScanResult | null;
  onPick: (k: string, v: string | string[], label: string) => void; onBack: () => void;
}) {
  const Q = QUESTIONS[qi];
  const pct = Math.round(((qi + 1) / (QUESTIONS.length + 2)) * 100);
  const [multi, setMulti] = useState<string[]>([]);
  const [shown, setShown] = useState(1);
  const lines = scanLines(store, scan);

  useEffect(() => { setMulti(Array.isArray(answers[Q.k as keyof Answers]) ? (answers[Q.k as keyof Answers] as string[]) : []); }, [qi, Q.k, answers]);
  /* reveal one scan finding every 0.9 s so the scan visibly works */
  useEffect(() => {
    if (shown >= lines.length) return;
    const t = setTimeout(() => setShown((n) => n + 1), 900);
    return () => clearTimeout(t);
  }, [shown, lines.length]);

  useEffect(() => {
    if (Q.multi) return;
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && /input|textarea/i.test(t.tagName)) return;
      const i = KEYS.indexOf(e.key.toUpperCase());
      if (i > -1 && i < Q.o.length) onPick(Q.k, Q.o[i].v, Q.o[i].l);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [Q, onPick]);

  const toggle = (v: string) => setMulti((m) => (m.includes(v) ? m.filter((x) => x !== v) : [...m, v]));

  return (
    <section className="ga-quiz" id="screen-quiz">
      <div className="ga-qhead">
        <div className="ga-wrap ga-qtop">
          <button className="ga-back" onClick={onBack}>&larr; Back</button>
          <span className="ga-store">{store}</span>
        </div>
        <div className="ga-prog"><i style={{ width: pct + "%" }} /></div>
      </div>
      <div className="ga-wrap ga-qbody">
        <div className="ga-scan" aria-live="polite">
          <div className="ga-scan-h"><span className={"ga-dot" + (scan === null ? " busy" : "")} />{scan === null ? "Scanning your store" : "Scan of your homepage"}</div>
          <ul>{lines.slice(0, Math.max(1, Math.min(shown, lines.length))).map((l) => <li key={l}>{l}</li>)}</ul>
        </div>
        <div className="ga-qcard" key={qi}>
          <div className="ga-qn">Question {qi + 1} of {QUESTIONS.length}</div>
          <h2 className="ga-qq">{Q.q}</h2>
          {Q.h ? <p className="ga-qh">{Q.h}</p> : null}
          <div className="ga-opts">
            {Q.o.map((o, i) => {
              const on = Q.multi ? multi.includes(o.v) : answers[Q.k as keyof Answers] === o.v;
              return (
                <button key={o.v} className={"ga-opt" + (on ? " on" : "")} aria-pressed={on}
                  onClick={() => (Q.multi ? toggle(o.v) : onPick(Q.k, o.v, o.l))}>
                  <span className="ga-key">{Q.multi ? (on ? "✓" : "") : KEYS[i]}</span>{o.l}
                </button>
              );
            })}
          </div>
          {Q.multi && (
            <button className="ga-btn ga-next" disabled={!multi.length}
              onClick={() => onPick(Q.k, multi, Q.o.filter((o) => multi.includes(o.v)).map((o) => o.l).join(", "))}>
              Continue &rarr;
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
