"use client";

import { AnimatePresence, motion } from "motion/react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { AppFrame } from "@/sections/operalayer/shared/AppFrame";
import { useCycle } from "@/sections/operalayer/shared/useCycle";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";

const SYSTEMS = [
  "ERP",
  "CRM",
  "eCommerce",
  "Warehouse and OMS",
  "Finance",
  "Marketing",
  "Spreadsheets",
];

const VIEWS = [
  { key: "overview", label: "Executive view", group: "Insight" },
  { key: "invoices", label: "Invoice matching", group: "Procurement" },
  { key: "purchasing", label: "Supplier purchasing", group: "Procurement" },
  { key: "pricing", label: "Pricing control", group: "Pricing" },
] as const;

function HeroBg() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 700px at 50% 0%, #1d2566 0%, #141a48 38%, #0c1030 72%, #080b22 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(700px 500px at 82% 62%, rgba(63,74,175,0.35), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div className="absolute inset-0 -z-10 grid-backdrop opacity-30" />
    </>
  );
}

function Spark({ points, color }: { points: number[]; color: string }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const d = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * 100;
      const y = 28 - ((p - min) / (max - min || 1)) * 24;
      return `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  return (
    <svg viewBox="0 0 100 30" className="w-full h-8" preserveAspectRatio="none" aria-hidden>
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}

function Overview() {
  const tiles = [
    { k: "Net revenue, week", v: "€1.84M", d: "+4.2% WoW", pts: [3, 4, 3.6, 4.4, 4.1, 4.9, 5.2] },
    { k: "Gross margin", v: "38.6%", d: "+0.8 pts", pts: [5, 4.8, 5.1, 5, 5.3, 5.4, 5.6] },
    { k: "Open purchase orders", v: "€3.12M", d: "214 orders", pts: [4, 4.4, 4.2, 4.9, 5.3, 5, 5.4] },
    { k: "Stock at risk", v: "37 SKUs", d: "within 14 days", pts: [2, 2.4, 3.1, 2.9, 3.6, 4.2, 4.6], warn: true },
  ];
  return (
    <div className="grid grid-cols-2 gap-px bg-white/10">
      {tiles.map((t) => (
        <div key={t.k} className="bg-[#121633] p-4 md:p-5">
          <div className="label-code text-white/50">{t.k}</div>
          <div className="mt-2 font-head text-white text-[22px] md:text-[28px] leading-none">{t.v}</div>
          <div
            className="mt-1.5 text-[12px]"
            style={{ color: t.warn ? "var(--sw-orange)" : "var(--sw-mint)" }}
          >
            {t.d}
          </div>
          <div className="mt-2">
            <Spark points={t.pts} color={t.warn ? "#ff5a31" : "#6ef76e"} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Invoices() {
  const rows = [
    { v: "Cable and wire supplier", inv: "INV-20931", lines: 14, st: "Agrees with PO", ok: true, c: 99 },
    { v: "Lighting supplier", inv: "88-4410", lines: 6, st: "Price differs", ok: false, c: 72 },
    { v: "Fixings supplier", inv: "BF/2209", lines: 22, st: "Agrees with PO", ok: true, c: 97 },
    { v: "Switchgear supplier", inv: "OS-1187", lines: 3, st: "Quantity short", ok: false, c: 64 },
    { v: "Tools supplier", inv: "LS-77120", lines: 9, st: "Agrees with PO", ok: true, c: 98 },
  ];
  return (
    <div className="p-4 md:p-5">
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <div className="font-head text-white text-[15px] md:text-[16px]">Today&apos;s supplier invoices</div>
        <div className="label-code text-[var(--sw-mint)]">87% checked automatically</div>
      </div>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {rows.map((r, i) => (
          <motion.div
            key={r.inv}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="grid grid-cols-[1fr_auto] sm:grid-cols-[1.4fr_0.8fr_auto] items-center gap-3 py-2.5 text-[12px] md:text-[13px]"
          >
            <div className="min-w-0">
              <div className="text-white truncate">{r.v}</div>
              <div className="text-white/45">{r.inv} · {r.lines} lines</div>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-1 flex-1 bg-white/10 rounded-[2px] overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{ background: r.ok ? "var(--sw-mint)" : "var(--sw-orange)" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${r.c}%` }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
                />
              </div>
              <span className="text-white/55 tabular-nums w-8 text-right">{r.c}%</span>
            </div>
            <span
              className="label-code px-2 py-1 rounded-[2px] border whitespace-nowrap"
              style={{
                color: r.ok ? "var(--sw-mint)" : "var(--sw-orange)",
                borderColor: r.ok ? "rgba(110,247,110,0.35)" : "rgba(255,90,49,0.45)",
              }}
            >
              {r.st}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Purchasing() {
  const rows = [
    { c: "Running footwear", com: 8.4, del: 0.62 },
    { c: "Outdoor apparel", com: 7.1, del: 0.48 },
    { c: "Team sports", com: 5.6, del: 0.71 },
    { c: "Swimwear", com: 3.2, del: 0.35, flag: true },
    { c: "Kids", com: 4.9, del: 0.55 },
  ];
  return (
    <div className="p-4 md:p-5">
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <div className="font-head text-white text-[15px] md:text-[16px]">SS26 commitments by category</div>
        <div className="label-code text-white/55">€34M tracked</div>
      </div>
      <div className="space-y-2.5">
        {rows.map((r, i) => (
          <div key={r.c} className="grid grid-cols-[7.5rem_1fr_auto] sm:grid-cols-[9rem_1fr_auto] items-center gap-3 text-[12px] md:text-[13px]">
            <div className="text-white/80 truncate">{r.c}</div>
            <div className="relative h-2.5 bg-white/10 rounded-[2px] overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-white/25"
                initial={{ width: 0 }}
                animate={{ width: `${(r.com / 8.4) * 100}%` }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
              />
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{ background: r.flag ? "var(--sw-orange)" : "var(--sw-mint)" }}
                initial={{ width: 0 }}
                animate={{ width: `${(r.com / 8.4) * r.del * 100}%` }}
                transition={{ delay: 0.3 + i * 0.07, duration: 0.7 }}
              />
            </div>
            <div className="text-white/60 tabular-nums w-14 text-right">€{r.com.toFixed(1)}M</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1 label-code text-white/45">
        <span className="flex items-center gap-2"><span className="h-2 w-2 bg-white/25" />Committed</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 bg-[var(--sw-mint)]" />Delivered</span>
        <span className="flex items-center gap-2"><span className="h-2 w-2 bg-[var(--sw-orange)]" />Invoice variance</span>
      </div>
    </div>
  );
}

function Pricing() {
  const rows = [
    { s: "California", p: "$24.90", m: "Margin type 3", ch: "+$0.40" },
    { s: "Texas", p: "$21.50", m: "Margin type 1", ch: "No change" },
    { s: "New York", p: "$26.20", m: "Margin type 3", ch: "+$0.60" },
    { s: "Florida", p: "$22.10", m: "Margin type 2", ch: "+$0.20" },
    { s: "Illinois", p: "$23.80", m: "Margin type 5", ch: "No change" },
  ];
  return (
    <div className="p-4 md:p-5">
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <div className="font-head text-white text-[15px] md:text-[16px]">Scheduled price update</div>
        <div className="label-code text-white/55">Goes live Mon 06:00</div>
      </div>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {rows.map((r, i) => (
          <motion.div
            key={r.s}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.08 }}
            className="grid grid-cols-[1fr_auto_auto] sm:grid-cols-[1fr_1fr_auto_auto] items-center gap-3 py-2.5 text-[12px] md:text-[13px]"
          >
            <span className="text-white">{r.s}</span>
            <span className="hidden sm:block text-white/45">{r.m}</span>
            <span className="text-white tabular-nums">{r.p}</span>
            <span
              className="tabular-nums w-[4.5rem] text-right"
              style={{ color: r.ch.startsWith("+") ? "var(--sw-mint)" : "rgba(255,255,255,0.4)" }}
            >
              {r.ch}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProductMock() {
  const { ref, index, pick } = useCycle(VIEWS.length, 4200);
  const view = VIEWS[index].key;
  return (
    <div ref={ref} className="w-full min-w-0 max-w-[1040px]">
      <AppFrame module={VIEWS[index].label.toLowerCase()} status="connected to 6 systems">
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[210px_minmax(0,1fr)]">
          <nav className="min-w-0 flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r border-white/10 p-2 md:p-3 gap-1">
            {VIEWS.map((v, i) => (
              <button
                key={v.key}
                type="button"
                onClick={() => pick(i)}
                className={`relative shrink-0 text-left rounded-[2px] px-3 py-2 md:py-2.5 transition ${
                  i === index ? "bg-white/[0.07] text-white" : "text-white/55 hover:text-white/85"
                }`}
              >
                {i === index && (
                  <motion.span
                    layoutId="ol-hero-active"
                    className="absolute left-0 top-2 bottom-2 w-[2px] bg-[var(--sw-mint)] hidden md:block"
                  />
                )}
                <span className="hidden md:block label-code text-white/35 mb-0.5">{v.group}</span>
                <span className="text-[13px] whitespace-nowrap">{v.label}</span>
              </button>
            ))}
          </nav>
          <div className="min-w-0 min-h-[300px] md:min-h-[320px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={view}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {view === "overview" && <Overview />}
                {view === "invoices" && <Invoices />}
                {view === "purchasing" && <Purchasing />}
                {view === "pricing" && <Pricing />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </AppFrame>
      <div className="mt-3 label-code text-white/35 text-center">Example data</div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col">
      <HeroBg />
      <div className="wrap w-full relative z-10 pt-36 md:pt-44 pb-14 md:pb-16 text-center flex flex-col items-center">
        <div className="inline-flex items-center rounded-full border border-white/25 px-3.5 py-1.5 mb-8">
          <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase">
            OperaLayer by scandiweb
          </span>
        </div>

        <h1 className="font-head text-white text-[36px] sm:text-[50px] md:text-[64px] lg:text-[78px] leading-[1.0] tracking-[-0.02em] max-w-[16ch] text-balance">
          Apps for the Work That Falls{" "}
          <span style={{ color: "var(--sw-mint)" }}>Between Your Systems</span>
        </h1>

        <p className="mt-7 text-[17px] md:text-[20px] text-white/75 max-w-[56ch] leading-relaxed text-balance">
          OperaLayer connects to the systems you already run and adds focused apps
          for the jobs none of them were built to do. Your ERP and your store stay
          exactly as they are.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
          <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
            Talk to us about a gap
          </a>
          <a
            href="#architecture"
            onClick={scrollToSection("architecture")}
            className="inline-flex items-center gap-2 text-white/75 hover:text-white transition font-head font-semibold text-[15px]"
          >
            See how it works
          </a>
        </div>

        <div className="mt-14 md:mt-20 w-full flex justify-center">
          <ProductMock />
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="wrap py-6 md:py-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <div className="label-code text-white/45 shrink-0">Connects to what you run</div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {SYSTEMS.map((s) => (
              <li key={s} className="font-head text-white/75 text-[14px] md:text-[15px]">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
