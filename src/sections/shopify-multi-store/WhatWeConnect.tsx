"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const ROTATE_MS = 4000;

const rows = [
  {
    title: "See every store in one view",
    body: "Orders, stock, app costs, and alerts from all of your stores on one screen, instead of logging into each admin.",
  },
  {
    title: "Connect the systems behind them",
    body: "ERP, CMS, orders, and warehouse linked to Shopify with proven connectors, kept in sync so prices and stock stop disagreeing.",
  },
  {
    title: "Catch problems before customers do",
    body: "Site speed, failed syncs, checkout, and feeds watched across every store, so issues surface early, not after they cost you.",
  },
  {
    title: "Support that sees the whole picture",
    body: "Every issue read against the full setup, with clear ownership between teams and systems, so nothing falls through the gap.",
  },
];

/* ---------- right-side product panels (single card, no outer box) ---------- */

function Card({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div
      className="w-full rounded-[14px] bg-white text-[var(--sw-black)] overflow-hidden"
      style={{ boxShadow: "0 40px 90px -30px rgba(7,10,30,0.85)" }}
    >
      <div className="px-6 py-6 border-b border-[var(--sw-black)]/8">
        <div className="font-head font-semibold text-[16px] leading-none">{title}</div>
        {sub && <div className="text-[12px] text-[var(--sw-black)]/45 mt-1.5">{sub}</div>}
      </div>
      <div className="px-6">{children}</div>
    </div>
  );
}

function Line({ children }: { children: React.ReactNode }) {
  return <div className="flex items-center justify-between py-[18px] border-b border-[var(--sw-black)]/[0.06] last:border-0">{children}</div>;
}

function MockOneView() {
  const s = [
    { n: "UK store", p: "Shopify Plus", v: "£12.4k", warn: false },
    { n: "EU store", p: "Shopify Plus", v: "€9.8k", warn: true },
    { n: "US store", p: "Advanced", v: "$15.1k", warn: false },
    { n: "B2B store", p: "Shopify Plus", v: "$7.2k", warn: false },
    { n: "Outlet", p: "Basic", v: "$3.0k", warn: false },
  ];
  return (
    <Card title="Operating view" sub="5 Shopify stores, connected">
      {s.map((r) => (
        <Line key={r.n}>
          <span className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full" style={{ background: r.warn ? "#e0a93f" : "#22c55e" }} />
            <span className="text-[14px] font-medium">{r.n}</span>
            <span className="text-[12px] text-[var(--sw-black)]/40">{r.p}</span>
          </span>
          <span className="text-[13px] tabular-nums text-[var(--sw-black)]/65">{r.v}</span>
        </Line>
      ))}
      <div className="grid grid-cols-3 -mx-6 border-t border-[var(--sw-black)]/8">
        {[["Orders today", "1,284"], ["Revenue", "$47.5k"], ["Failed syncs", "0"]].map((k, i) => (
          <div key={k[0]} className={`px-6 py-5 ${i > 0 ? "border-l border-[var(--sw-black)]/8" : ""}`}>
            <div className="text-[10px] text-[var(--sw-black)]/45">{k[0]}</div>
            <div className="font-head font-semibold text-[17px] mt-1 tabular-nums">{k[1]}</div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function MockConnect() {
  const c = [
    { n: "NetSuite ERP", t: "synced 2m ago", r: "8,412 orders" },
    { n: "Sanity CMS", t: "synced 5m ago", r: "1,290 pages" },
    { n: "ShipBob WMS", t: "synced 1m ago", r: "stock live" },
    { n: "Akeneo PIM", t: "synced 9m ago", r: "44k SKUs" },
    { n: "Klaviyo", t: "synced 3m ago", r: "events live" },
  ];
  return (
    <Card title="Connections" sub="Shopify, kept in sync with your systems">
      {c.map((x) => (
        <Line key={x.n}>
          <span>
            <span className="text-[14px] font-medium">
              Shopify <span className="text-[var(--sw-black)]/30">↔</span> {x.n}
            </span>
            <span className="block text-[11px] text-[var(--sw-black)]/40 mt-0.5">{x.t} · {x.r}</span>
          </span>
          <span className="inline-flex items-center gap-1.5 text-[12px]" style={{ color: "#16a34a" }}>
            <Check className="h-3.5 w-3.5" /> ok
          </span>
        </Line>
      ))}
    </Card>
  );
}

function MockAlerts() {
  const a = [
    { t: "EU store", m: "page speed dropped to 3.1s", c: "#e0a93f", w: "12m ago" },
    { t: "US store", m: "order webhook failed", c: "#e04f4f", w: "26m ago" },
    { t: "UK store", m: "product feed rejected 4 items", c: "#e0a93f", w: "1h ago" },
    { t: "B2B store", m: "checkout tracking gap", c: "#e0a93f", w: "2h ago" },
    { t: "Outlet", m: "app update pending review", c: "#9aa0b5", w: "3h ago" },
  ];
  return (
    <Card title="Alerts" sub="Watched across every store, around the clock">
      {a.map((r) => (
        <Line key={r.t + r.m}>
          <span className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full" style={{ background: r.c }} />
            <span className="text-[14px]"><span className="font-medium">{r.t}</span> <span className="text-[var(--sw-black)]/55">· {r.m}</span></span>
          </span>
          <span className="text-[11px] text-[var(--sw-black)]/35 shrink-0">{r.w}</span>
        </Line>
      ))}
      <div className="-mx-6 border-t border-[var(--sw-black)]/8 px-6 py-3.5 text-[12px] text-[var(--sw-black)]/55">
        14 issues resolved this week · 0 reached customers
      </div>
    </Card>
  );
}

function MockSupport() {
  return (
    <Card title="Support" sub="One issue, read against the whole setup">
      <div className="py-4">
        <div className="text-[14px] font-medium">EU orders not reaching the ERP</div>
        <div className="mt-4 flex flex-wrap items-center gap-2 text-[12px]">
          <span className="rounded-[5px] px-2.5 py-1.5" style={{ background: "rgba(34,197,94,0.12)", color: "#16a34a" }}>Shopify ok</span>
          <span className="text-[var(--sw-black)]/25">→</span>
          <span className="rounded-[5px] px-2.5 py-1.5" style={{ background: "rgba(34,197,94,0.12)", color: "#16a34a" }}>OperaLayer ok</span>
          <span className="text-[var(--sw-black)]/25">→</span>
          <span className="rounded-[5px] px-2.5 py-1.5" style={{ background: "rgba(224,79,79,0.12)", color: "#c2410c" }}>ERP failing</span>
        </div>
      </div>
      {[
        ["Owner", "scandiweb support"],
        ["Affected", "EU store"],
        ["Also checked", "UK, US, B2B"],
        ["Same root cause", "found in 1 other store"],
      ].map((x) => (
        <Line key={x[0]}>
          <span className="text-[13px] text-[var(--sw-black)]/50">{x[0]}</span>
          <span className="text-[13px] font-medium">{x[1]}</span>
        </Line>
      ))}
    </Card>
  );
}

const visuals = [<MockOneView key="0" />, <MockConnect key="1" />, <MockAlerts key="2" />, <MockSupport key="3" />];

export function WhatWeConnect() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setActive((a) => (a + 1) % rows.length), ROTATE_MS);
    return () => clearTimeout(id);
  }, [active, paused]);

  return (
    <section id="view" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">what we do</div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.04] max-w-[18ch]">
            One team for your whole{" "}
            <span style={{ color: "var(--sw-mint)" }}>Shopify setup</span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-12 lg:gap-20 lg:grid-cols-[0.95fr_1.05fr] items-center">
          {/* left: auto-advancing rows */}
          <Reveal>
            <div>
              {rows.map((r, i) => {
                const on = i === active;
                return (
                  <button
                    key={r.title}
                    onClick={() => { setPaused(true); setActive(i); }}
                    onMouseEnter={() => setPaused(true)}
                    className="relative block w-full text-left py-6 transition"
                    style={{ paddingLeft: "22px" }}
                  >
                    {/* base divider */}
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
                    {/* left rail (active) */}
                    {on && <span className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/15" />}
                    {/* progress rail along the bottom while auto-rotating */}
                    {on && !paused && (
                      <motion.span
                        key={active}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: ROTATE_MS / 1000, ease: "linear" }}
                        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left"
                        style={{ background: "var(--sw-mint)" }}
                      />
                    )}
                    {on && paused && (
                      <span className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: "var(--sw-mint)" }} />
                    )}
                    <div
                      className="font-head font-semibold text-[19px] md:text-[22px] leading-tight transition"
                      style={{ color: on ? "#fff" : "rgba(255,255,255,0.5)" }}
                    >
                      {r.title}
                    </div>
                    <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: on ? "120px" : "0", opacity: on ? 1 : 0 }}>
                      <p className="mt-3 text-[14px] md:text-[15px] text-white/70 leading-relaxed max-w-[46ch]">{r.body}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          {/* right: single product card, no outer box */}
          <Reveal delay={0.1}>
            <div className="flex items-center justify-center min-h-[480px] lg:min-h-[520px]">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-[480px]"
              >
                {visuals[active]}
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
