"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Mail } from "lucide-react";
import { H2, Rise, useSeq } from "@/sections/operalayer/kit/parts";
import { AppButton, C, Tag, Tick, Window, ease } from "@/sections/operalayer/kit/ui";

/* 1. Brand order sheets and supplier emails */
function Sources() {
  const { ref, t } = useSeq(3, 450, 200);
  const mails = [
    "Re: SS26 order confirmation, revised",
    "New delivery dates for March",
    "Invoice attached, see updated prices",
  ];
  return (
    <div ref={ref} style={{ containerType: "inline-size" }}>
      <div className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[4%] items-start" style={{ fontSize: "clamp(10px,1.5cqw,14px)" }}>
        <div className="grid grid-cols-6 gap-[0.5em]">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="aspect-[0.8] rounded-[2px] p-[12%] flex flex-col gap-[14%]"
              style={{ background: "#e9ecf5" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: t >= 1 ? 1 : 0, y: t >= 1 ? 0 : 8 }}
              transition={{ delay: (i % 12) * 0.03 + Math.floor(i / 12) * 0.05, duration: 0.4 }}
            >
              <span className="h-[12%] w-[70%] rounded-[1px]" style={{ background: "#1d6f42" }} />
              {[0, 1, 2].map((k) => (
                <span key={k} className="h-[8%] rounded-[1px] bg-black/15" style={{ width: `${85 - k * 15}%` }} />
              ))}
            </motion.div>
          ))}
          <div className="col-span-6 mt-[0.6em]" style={{ color: C.faint }}>
            One order sheet per supplier brand
          </div>
        </div>
        <Window title="Buyer inbox">
          {mails.map((m, i) => (
            <motion.div
              key={m}
              className="flex items-center gap-[0.8em] px-[1.2em] py-[1em] border-t first:border-t-0"
              style={{ borderColor: C.line }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: t >= 2 ? 1 : 0, x: t >= 2 ? 0 : 10 }}
              transition={{ delay: i * 0.12, duration: 0.4, ease }}
            >
              <Mail style={{ width: "1.1em", height: "1.1em", color: C.blue }} />
              <span className="truncate">{m}</span>
            </motion.div>
          ))}
          <motion.div
            className="px-[1.2em] py-[0.9em] border-t"
            style={{ borderColor: C.line, color: C.orange, fontSize: "0.9em" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: t >= 3 ? 1 : 0 }}
          >
            Copied into the brand sheets by hand
          </motion.div>
        </Window>
      </div>
    </div>
  );
}

/* 2. Orders read from Business Central */
function Orders() {
  const { ref, t } = useSeq(5, 280, 200);
  const pos = [
    ["PO-26-0412", "Running footwear", "€640,200"],
    ["PO-26-0413", "Outdoor apparel", "€412,750"],
    ["PO-26-0419", "Team sports", "€288,100"],
    ["PO-26-0427", "Kids", "€153,900"],
  ];
  return (
    <div ref={ref} style={{ containerType: "inline-size", fontSize: "clamp(10px,1.45cqw,14px)" }}>
      <Window title="Microsoft Business Central / purchase orders">
        {pos.map(([no, cat, amt], i) => (
          <div key={no} className="grid grid-cols-[6.5em_minmax(0,1fr)_6.5em_auto] gap-[1em] items-center px-[1.4em] py-[0.95em] border-t first:border-t-0" style={{ borderColor: C.line }}>
            <span className="font-mono" style={{ color: C.dim }}>
              {no}
            </span>
            <span className="truncate">{cat}</span>
            <span className="font-mono text-right tabular-nums">{amt}</span>
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: t > i ? 1 : 0 }} transition={{ duration: 0.3 }}>
              <Tag tone="mint">In OperaLayer</Tag>
            </motion.span>
          </div>
        ))}
        <div className="px-[1.4em] py-[0.9em] border-t" style={{ borderColor: C.line, color: C.faint, fontSize: "0.9em" }}>
          Read on a schedule. Nothing is changed in Business Central.
        </div>
      </Window>
    </div>
  );
}

/* 3. One season, month by month */
function Timeline() {
  const { ref, t } = useSeq(1, 0, 200);
  const months = [
    { m: "Jan", c: 0.55, d: 0.55 },
    { m: "Feb", c: 0.9, d: 0.86 },
    { m: "Mar", c: 1, d: 0.82 },
    { m: "Apr", c: 0.78, d: 0.44 },
    { m: "May", c: 0.62, d: 0.12 },
    { m: "Jun", c: 0.4, d: 0 },
  ];
  return (
    <div ref={ref} style={{ containerType: "inline-size", fontSize: "clamp(10px,1.45cqw,14px)" }}>
      <Window title="SS26 / deliveries by month">
        <div className="px-[1.6em] pt-[1.4em] pb-[1em]">
          <div className="flex items-end gap-[4%] h-[14em]">
            {months.map((x, i) => (
              <div key={x.m} className="flex-1 flex flex-col items-center justify-end h-full gap-[0.6em]">
                <div className="relative w-full h-full flex items-end">
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 rounded-[1px] origin-bottom"
                    style={{ height: `${x.c * 100}%`, boxShadow: `inset 0 0 0 1px ${C.line}`, background: "rgba(255,255,255,0.04)" }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: t ? 1 : 0 }}
                    transition={{ duration: 0.7, ease, delay: i * 0.06 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-[18%] right-[18%] rounded-[1px] origin-bottom"
                    style={{ height: `${x.d * 100}%`, background: C.mint }}
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: t ? 1 : 0 }}
                    transition={{ duration: 0.8, ease, delay: 0.3 + i * 0.06 }}
                  />
                </div>
                <span style={{ color: C.faint }}>{x.m}</span>
              </div>
            ))}
          </div>
          <div className="mt-[1.2em] flex gap-[1.6em]" style={{ color: C.dim, fontSize: "0.9em" }}>
            <span className="inline-flex items-center gap-[0.5em]">
              <span className="h-[0.7em] w-[0.7em] rounded-[1px]" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.4)" }} /> Committed
            </span>
            <span className="inline-flex items-center gap-[0.5em]">
              <span className="h-[0.7em] w-[0.7em] rounded-[1px]" style={{ background: C.mint }} /> Delivered
            </span>
          </div>
        </div>
      </Window>
    </div>
  );
}

/* 4. Invoice against the confirmed order */
function InvoiceCheck() {
  const { ref, t } = useSeq(4, 550, 300);
  const rows = [
    { k: "Item", a: "Trail shoe, men, 42", b: "Trail shoe, men, 42", ok: true },
    { k: "Quantity", a: "120 pairs", b: "120 pairs", ok: true },
    { k: "Unit price", a: "€18.40", b: "€19.90", ok: false },
  ];
  return (
    <div ref={ref} style={{ containerType: "inline-size", fontSize: "clamp(10px,1.45cqw,15px)" }}>
      <Window title="Invoice check / Outdoor apparel">
        <div className="px-[1.6em] pt-[1.2em]">
          <div className="grid grid-cols-[6em_minmax(0,1fr)_minmax(0,1fr)_1.6em] gap-[1em] pb-[0.7em]" style={{ color: C.faint, fontSize: "0.85em" }}>
            <span />
            <span>Confirmed order</span>
            <span>Supplier invoice</span>
            <span />
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={r.k}
              className="grid grid-cols-[6em_minmax(0,1fr)_minmax(0,1fr)_1.6em] gap-[1em] items-center py-[0.9em] border-t"
              style={{ borderColor: C.line }}
              initial={false}
              animate={{ backgroundColor: !r.ok && t > i ? "rgba(255,90,49,0.08)" : "rgba(0,0,0,0)" }}
            >
              <span style={{ color: C.dim }}>{r.k}</span>
              <span className="truncate">{r.a}</span>
              <span className="truncate" style={{ color: !r.ok && t > i ? C.orange : C.text }}>
                {r.b}
              </span>
              <Tick on={t > i} bad={!r.ok} />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-[1em] flex flex-wrap items-center justify-between gap-[1em] px-[1.6em] py-[1em] border-t"
          style={{ borderColor: C.line }}
          initial={{ opacity: 0 }}
          animate={{ opacity: t >= 4 ? 1 : 0 }}
        >
          <span style={{ color: C.orange }}>Flagged before the goods reach the shelves</span>
          <AppButton state={t >= 4 ? 1 : 0} idle="Ask for a corrected invoice" busy="Ask for a corrected invoice" done="Sent" />
        </motion.div>
      </Window>
    </div>
  );
}

/* 5. Forecast and a draft reorder */
function Forecast() {
  const { ref, t } = useSeq(3, 900, 300);
  const actual = [30, 36, 33, 41, 46, 44, 52, 57];
  const fc = [57, 61, 66, 64, 71, 75];
  const all = actual.length + fc.length - 1;
  const X = (i: number) => (i / (all - 1)) * 100;
  const Y = (v: number) => 56 - (v / 90) * 56;
  const line = (vals: number[], off: number) => vals.map((v, i) => `${i ? "L" : "M"}${X(off + i).toFixed(1)} ${Y(v).toFixed(1)}`).join(" ");
  const off = actual.length - 1;
  const band =
    fc.map((v, i) => `${i ? "L" : "M"}${X(off + i).toFixed(1)} ${Y(v + 3 + i * 1.5).toFixed(1)}`).join(" ") +
    fc
      .slice()
      .reverse()
      .map((v, j) => {
        const i = fc.length - 1 - j;
        return ` L${X(off + i).toFixed(1)} ${Y(v - 3 - i * 1.5).toFixed(1)}`;
      })
      .join("") +
    " Z";
  return (
    <div ref={ref} style={{ containerType: "inline-size", fontSize: "clamp(10px,1.45cqw,14px)" }}>
      <Window title="Demand forecast / Running footwear">
        <div className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="p-[1.4em]">
            <div className="flex justify-between" style={{ color: C.faint, fontSize: "0.85em" }}>
              <span>Weekly sales</span>
              <Tag tone="blue">Being added</Tag>
            </div>
            <svg viewBox="0 0 100 56" preserveAspectRatio="none" className="mt-[0.8em] w-full h-[11em]" aria-hidden>
              <motion.path d={band} fill="rgba(110,247,110,0.12)" initial={{ opacity: 0 }} animate={{ opacity: t >= 1 ? 1 : 0 }} transition={{ delay: 0.6 }} />
              <motion.path d={line(actual, 0)} fill="none" stroke="white" strokeWidth={1.6} vectorEffect="non-scaling-stroke" initial={{ opacity: 0 }} animate={{ opacity: t >= 1 ? 1 : 0 }} transition={{ duration: 0.6 }} />
              <motion.path d={line(fc, off)} fill="none" stroke={C.mint} strokeWidth={1.6} strokeDasharray="3 3" vectorEffect="non-scaling-stroke" initial={{ opacity: 0 }} animate={{ opacity: t >= 1 ? 1 : 0 }} transition={{ delay: 0.9 }} />
            </svg>
          </div>
          <div className="p-[1.4em] border-t sm:border-t-0 sm:border-l flex flex-col gap-[0.8em]" style={{ borderColor: C.line }}>
            <div style={{ color: C.faint, fontSize: "0.85em" }}>Draft reorder</div>
            <div className="font-semibold">Trail shoe, men</div>
            <div style={{ color: C.dim }}>Stock covers 5 more weeks at the forecast pace.</div>
            <div className="mt-auto">
              <AppButton state={t >= 3 ? 2 : t >= 2 ? 1 : 0} idle="Approve" busy="Approve" done="Approved by buyer" />
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
}

const STEPS = [
  {
    tab: "Sources",
    title: "Brand sheets and supplier emails come in",
    body: "Every supplier brand had its own order sheet, and changes arrived by email. Buyers copied them across by hand.",
    Visual: Sources,
  },
  {
    tab: "Orders",
    title: "Orders are read from Business Central",
    body: "OperaLayer reads the purchase orders on a schedule. Business Central stays the system of record.",
    Visual: Orders,
  },
  {
    tab: "Season",
    title: "The season becomes one view",
    body: "Commitments and deliveries for every brand sit in one place, month by month.",
    Visual: Timeline,
  },
  {
    tab: "Invoices",
    title: "Every invoice is checked against the confirmed order",
    body: "A price or quantity that does not agree is flagged before the goods reach the shelves.",
    Visual: InvoiceCheck,
  },
  {
    tab: "Reorders",
    title: "Next, forecasts draft the reorder",
    body: "The retailer is now adding demand forecasts. Each suggested order waits for a buyer to approve it.",
    Visual: Forecast,
  },
];

export function How() {
  const [i, setI] = useState(0);
  const s = STEPS[i];
  return (
    <section id="how" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <Rise>
          <h2 className={H2}>How it works</h2>
        </Rise>
        <div className="mt-10 overflow-x-auto -mx-5 px-5">
          <div className="inline-flex rounded-[2px] border border-white/20 p-1">
            {STEPS.map((x, j) => (
              <button
                key={x.tab}
                type="button"
                onClick={() => setI(j)}
                className={`h-9 px-4 text-[14px] font-semibold rounded-[2px] transition whitespace-nowrap ${
                  j === i ? "bg-[var(--sw-beige)] text-[var(--sw-black)]" : "text-white/70 hover:text-white"
                }`}
              >
                {j + 1}. {x.tab}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={s.tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="mt-12 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            <div className="lg:col-span-4">
              <h3 className="font-head text-white text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.015em]">{s.title}</h3>
              <p className="mt-5 text-white/70 text-[17px] leading-[1.6]">{s.body}</p>
              {i < STEPS.length - 1 && (
                <button type="button" onClick={() => setI(i + 1)} className="mt-8 font-head font-semibold text-[16px] text-[var(--sw-mint)] hover:text-white transition">
                  Next: {STEPS[i + 1].tab} →
                </button>
              )}
            </div>
            <div className="lg:col-span-8">
              <s.Visual />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
