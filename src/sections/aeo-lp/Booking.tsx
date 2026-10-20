"use client";

import { useEffect, useRef, useState } from "react";
import { HOST, UPDATE_ENDPOINT } from "./config";
import type { FunnelCfg, QuizData } from "./types";
import { str } from "./types";
import { track } from "./track";
import { img } from "./ui";

type CalApi = ((...a: unknown[]) => void) & { ns: Record<string, (...a: unknown[]) => void>; loaded?: boolean; q?: unknown[] };
type CalWin = Window & { Cal?: CalApi };

/* Cal.com's standard embed loader (app.cal.com/embed/embed.js), namespaced "janis". */
export function loadCal(onBooked: () => void, onReady: () => void): CalApi {
  const w = window as CalWin;
  if (!w.Cal) {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function (...ar: any[]) {
        const cal = C.Cal;
        if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; }
        if (ar[0] === L) {
          const api: any = function (...a: any[]) { p(api, a); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");
    /* eslint-enable @typescript-eslint/no-explicit-any */
    const Cal = (window as CalWin).Cal!;
    Cal("init", "janis", { origin: "https://cal.com" });
    Cal.ns.janis("on", { action: "bookingSuccessfulV2", callback: onBooked });
    Cal.ns.janis("on", { action: "linkReady", callback: onReady });
  }
  return (window as CalWin).Cal!;
}

/* Janis's calendar, inline, in the site colours. Prefill: name, email, notes. */
export function mountCal(Cal: CalApi, el: HTMLElement, pre: { name?: string; email?: string; notes?: string }) {
  el.innerHTML = "";
  const config: Record<string, string> = { layout: "month_view", theme: "dark" };
  if (pre.name) config.name = pre.name;
  if (pre.email) config.email = pre.email;
  if (pre.notes) config.notes = pre.notes;
  Cal.ns.janis("inline", { elementOrSelector: el, calLink: HOST.calLink, layout: "month_view", config });
  Cal.ns.janis("ui", {
    theme: "dark", hideEventTypeDetails: true, layout: "month_view",
    cssVarsPerTheme: { dark: { "cal-brand": "#6ef76e", "cal-brand-text": "#0b0e22", "cal-bg": "#171a38", "cal-bg-muted": "#1f2346", "cal-bg-subtle": "#1f2346", "cal-bg-emphasis": "#2b3060", "cal-border": "#3a3f6b", "cal-border-subtle": "#2a2e57", "cal-border-booker": "#2a2e57", "cal-text": "#e6e7ef", "cal-text-emphasis": "#ffffff", "cal-text-muted": "#8d91a8", "cal-text-subtle": "#8d91a8" } },
  });
}

/* Booked: Meta Schedule + Omnisend "<prefix>-booked" (stops the selling emails, starts the thank-you). */
export function reportBooked(cfg: FunnelCfg, email: string, where: string) {
  track("cal_booked", { where });
  try { if (typeof window.fbq === "function") window.fbq("track", "Schedule", { content_name: cfg.pixel.call }); } catch {}
  if (!email) return;
  try {
    fetch(UPDATE_ENDPOINT, {
      method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
      body: JSON.stringify({ funnel: cfg.fn.replace("aeo-", ""), kind: "booked", email }),
    }).then((r) => track("book_omni", { res: r.headers.get("x-omnisend") || String(r.status), where })).catch(() => track("book_omni", { res: "network", where }));
  } catch {}
}

export function Booking({ cfg, open, onClose, data }: { cfg: FunnelCfg; open: boolean; onClose: () => void; data: QuizData }) {
  const calRef = useRef<HTMLDivElement>(null);
  const mounted = useRef<string | null>(null);
  const [ready, setReady] = useState(false);
  const [booked, setBooked] = useState(false);
  const bookedRef = useRef(false);
  const emailRef = useRef("");
  emailRef.current = str(data, "email").trim();

  useEffect(() => {
    if (!open || !calRef.current) return;
    const Cal = loadCal(
      () => {
        if (bookedRef.current) return;
        bookedRef.current = true;
        setBooked(true);
        reportBooked(cfg, emailRef.current, "modal");
      },
      () => { setReady(true); track("cal_view"); },
    );
    const name = str(data, "name").trim(), email = str(data, "email").trim();
    const co = str(data, cfg.quiz.companyKey).trim(), site = str(data, "website").trim();
    const key = name + "|" + email;
    if (mounted.current === key) return;
    mounted.current = key;
    mountCal(Cal, calRef.current, { name, email, notes: co ? cfg.quiz.companyLabel + ": " + co + (site ? " (" + site + ")" : "") : "" });
  }, [open, data, cfg]);

  return (
    <div className={"ov" + (open ? " on" : "")} aria-hidden={!open}>
      <div className={"mdl bk" + (booked ? " booked" : "")} role="dialog" aria-modal="true" aria-label="Book a call">
        <button type="button" className="x" aria-label="Close" onClick={onClose}>&#x2715;</button>
        <div className="bk-grid">
          <div className="bk-host">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img(HOST.photo)} alt={HOST.name} />
            <div className="nm">{HOST.name}</div>
            <div className="ttl">{HOST.role}</div>
            <div className="ev">AEO discovery call · 30 min</div>
            <h3>{cfg.book.title}</h3>
            <p>{cfg.book.body}</p>
            <ul className="checks">{cfg.book.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <p className="fine">Calendar not loading? <a href={"https://cal.com/" + HOST.calLink} target="_blank" rel="noopener noreferrer">Open it in a new tab &rarr;</a></p>
          </div>
          <div className="bk-cal">
            {!ready && <div className="ld">Loading Janis’s calendar…</div>}
            <div ref={calRef} style={{ width: "100%", height: "100%", overflow: "auto" }} />
          </div>
          <div className="bk-done">
            <div>
              <div className="tick"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#0b0e22" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
              <h3>You’re booked in.</h3>
              <p>Janis will see you then. The calendar invite and reminders come from Cal.com.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
