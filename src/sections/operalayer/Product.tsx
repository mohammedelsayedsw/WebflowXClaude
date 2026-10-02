"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Check, X } from "lucide-react";
import { OL, Window, Pill, Tick, ease, SectionHead } from "@/sections/operalayer/ui";

/* Plays a short sequence once the visual is on screen. */
function useSteps(n: number, gap = 550) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });
  const reduce = useReducedMotion();
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) return setT(n);
    const ids = Array.from({ length: n }, (_, i) => window.setTimeout(() => setT(i + 1), 400 + i * gap));
    return () => ids.forEach((id) => window.clearTimeout(id));
  }, [inView, reduce, n, gap]);
  return { ref, t };
}

/* 1. Reads any document */
export function ReadVisual() {
  const { ref, t } = useSteps(5, 420);
  const docs = [
    { title: "RECHNUNG", who: "Cascade Cable Works", color: "#c8581f", lang: "German" },
    { title: "INVOICE", who: "Ferrum Metalworks", color: "#14151c", lang: "English" },
    { title: "PAVADZĪME", who: "Baltic Fasteners", color: "#3f4aaf", lang: "Latvian" },
  ];
  const fields = [
    ["Supplier", "Cascade Cable Works GmbH", "99%"],
    ["Invoice number", "INV-CC-3420", "99%"],
    ["Purchase order", "I-PAS100202", "97%"],
    ["Net amount", "274,00 €", "96%"],
  ];
  return (
    <div ref={ref} className="relative" style={{ containerType: "inline-size" }}>
      <div className="relative" style={{ height: "62cqw", maxHeight: 460 }}>
        {docs.map((d, i) => (
          <motion.div
            key={d.title}
            className="absolute w-[36%] h-[78%] bg-white rounded-[4px] p-[3%] text-[#14151c] overflow-hidden"
            style={{
              left: `${i * 9}%`,
              top: `${i * 8}%`,
              zIndex: 3 - i,
              fontSize: "clamp(6px,1.1cqw,10px)",
              boxShadow: "0 0 0 1px rgba(16,19,44,0.07), 0 24px 50px -24px rgba(16,19,44,0.35)",
            }}
            initial={{ opacity: 0, y: 20, rotate: -3 + i * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 + i * 2 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease, delay: i * 0.1 }}
          >
            <div className="flex justify-between font-bold">
              <span>{d.who}</span>
              <span style={{ color: d.color }}>{d.title}</span>
            </div>
            <div className="mt-[6%] h-[2px]" style={{ background: d.color }} />
            <div className="mt-[8%] space-y-[0.7em]">
              {[70, 55].map((w, k) => (
                <div key={k} className="h-[0.5em] rounded-full bg-black/[0.07]" style={{ width: `${w}%` }} />
              ))}
            </div>
            <div className="mt-[10%] h-[1.4em] rounded-[2px]" style={{ background: d.color, opacity: 0.85 }} />
            <div className="space-y-[0.2em]">
              {[0, 1, 2].map((k) => (
                <div key={k} className="flex justify-between gap-2 py-[0.6em] border-b border-black/[0.06]">
                  <span className="h-[0.5em] w-[50%] rounded-full bg-black/[0.08]" />
                  <span className="h-[0.5em] w-[18%] rounded-full bg-black/[0.08]" />
                </div>
              ))}
            </div>
            <div className="absolute bottom-[4%] left-[6%] text-black/40">{d.lang}</div>
          </motion.div>
        ))}

        <div className="absolute right-0 top-[14%] w-[60%] z-10" style={{ fontSize: "clamp(10px,1.45cqw,14px)" }}>
          <Window>
            <div className="p-[5%]">
              <div className="flex items-center justify-between">
                <span style={{ color: OL.dim }}>Read from the PDF</span>
                <Pill tone={t >= 5 ? "mint" : "amber"}>{t >= 5 ? "88% confident" : "Reading"}</Pill>
              </div>
              <div className="mt-[5%] divide-y" style={{ borderColor: OL.line }}>
                {fields.map(([k, v, c], i) => (
                  <motion.div
                    key={k}
                    className="flex items-center justify-between gap-3 py-[0.75em] border-t"
                    style={{ borderColor: OL.line }}
                    initial={{ opacity: 0.25 }}
                    animate={{ opacity: t > i ? 1 : 0.25 }}
                  >
                    <span style={{ color: OL.faint }}>{k}</span>
                    <span className="flex items-center gap-2 min-w-0">
                      <span className="truncate font-medium">{t > i ? v : "…"}</span>
                      <span className="font-mono" style={{ color: OL.mint, fontSize: "0.8em" }}>
                        {t > i ? c : ""}
                      </span>
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </Window>
        </div>
      </div>
    </div>
  );
}

/* 2. Checks every line against the ERP */
export function CheckVisual() {
  const { ref, t } = useSteps(4, 600);
  const rows = [
    { label: "Item", inv: "FX-MP-1006", po: "FX-MP-1006", ok: true },
    { label: "Quantity", inv: "3 pc", po: "3 pc", ok: true },
    { label: "Unit price", inv: "832,00 €", po: "640,00 €", ok: false },
  ];
  return (
    <div ref={ref} style={{ containerType: "inline-size", fontSize: "clamp(10px,1.5cqw,15px)" }}>
      <Window title="Ferrum Metalworks · INV-demo-inv-pair-blocked">
        <div className="p-[5%]">
          <div className="grid grid-cols-[1fr_1fr_1fr_2em] gap-x-4 pb-[0.8em]" style={{ color: OL.faint, fontSize: "0.85em" }}>
            <span />
            <span>On the invoice</span>
            <span>Purchase order in Navision</span>
            <span />
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={r.label}
              className="grid grid-cols-[1fr_1fr_1fr_2em] gap-x-4 items-center py-[0.9em] border-t"
              style={{ borderColor: OL.line }}
              initial={false}
              animate={{ backgroundColor: !r.ok && t > i ? "rgba(248,113,113,0.08)" : "rgba(0,0,0,0)" }}
            >
              <span style={{ color: OL.dim }}>{r.label}</span>
              <span className="font-mono" style={{ color: !r.ok && t > i ? OL.coral : OL.text }}>
                {r.inv}
              </span>
              <span className="font-mono">{r.po}</span>
              <span className="flex justify-end">
                {r.ok ? (
                  <Tick on={t > i} />
                ) : (
                  <motion.span
                    className="inline-flex items-center justify-center rounded-full"
                    style={{ width: "1.5em", height: "1.5em" }}
                    initial={false}
                    animate={{ backgroundColor: t > i ? OL.coral : "rgba(255,255,255,0.07)" }}
                  >
                    <X style={{ width: "0.9em", height: "0.9em", color: t > i ? "#0f1014" : "transparent" }} strokeWidth={3.2} />
                  </motion.span>
                )}
              </span>
            </motion.div>
          ))}
          <motion.div
            className="mt-[4%] flex items-center justify-between gap-3 rounded-[2px] px-[1em] py-[0.8em]"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: t >= 4 ? 1 : 0, y: t >= 4 ? 0 : 6 }}
            style={{ background: "rgba(248,113,113,0.1)", boxShadow: `inset 0 0 0 1px rgba(248,113,113,0.3)` }}
          >
            <span style={{ color: OL.coral }}>Large price difference, +192,00 € on this line</span>
            <Pill tone="coral">Export blocked</Pill>
          </motion.div>
        </div>
      </Window>
    </div>
  );
}

/* 3. A person handles only the exceptions */
export function ApproveVisual() {
  const { ref, t } = useSteps(3, 900);
  const rows = [
    { who: "Ferrum Metalworks Ltd", what: "Price 192,00 € above the order", tone: "coral" as const },
    { who: "Cascade Cable Works GmbH", what: "Looks like INV-19022, already received", tone: "amber" as const },
    { who: "Elektra Components UAB", what: "Quantity does not match the delivery", tone: "amber" as const },
    { who: "Polarveld Industrial Oy", what: "No matching purchase order", tone: "dim" as const },
  ];
  return (
    <div ref={ref} style={{ containerType: "inline-size", fontSize: "clamp(10px,1.45cqw,14px)" }}>
      <Window title="Needs review · 4 of 22 invoices">
        <div className="divide-y" style={{ borderColor: OL.line }}>
          {rows.map((r, i) => {
            const done = i === 0 && t >= 2;
            return (
              <motion.div
                key={r.who}
                className="flex items-center gap-[1em] px-[5%] py-[1.05em] border-t first:border-t-0"
                style={{ borderColor: OL.line }}
                initial={false}
                animate={{ opacity: done && t >= 3 ? 0.45 : 1 }}
              >
                <span className="h-2 w-2 rounded-full shrink-0" style={{ background: r.tone === "dim" ? OL.faint : OL[r.tone] }} />
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium">{r.who}</div>
                  <div className="truncate" style={{ color: OL.dim, fontSize: "0.9em" }}>
                    {r.what}
                  </div>
                </div>
                {i === 0 ? (
                  <motion.span
                    className="inline-flex items-center gap-1 rounded-[2px] px-[0.9em] py-[0.45em] font-semibold"
                    initial={false}
                    animate={{
                      backgroundColor: done ? OL.mint : t >= 1 ? "#f8f4ef" : "rgba(255,255,255,0.06)",
                      color: t >= 1 ? "#05070f" : "#fff",
                      scale: t === 1 ? [1, 0.94, 1] : 1,
                    }}
                    transition={{ duration: 0.35 }}
                  >
                    {done && <Check style={{ width: "1em", height: "1em" }} strokeWidth={3} />}
                    {done ? "Approved" : "Approve"}
                  </motion.span>
                ) : (
                  <span className="rounded-[2px] px-[0.9em] py-[0.45em]" style={{ background: "rgba(255,255,255,0.06)", color: OL.dim }}>
                    Review
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
        <div className="px-[5%] py-[0.9em] border-t flex justify-between" style={{ borderColor: OL.line, color: OL.faint, fontSize: "0.9em" }}>
          <span>Everything else went straight through</span>
          <span style={{ color: OL.mint }}>Auto-confirmed</span>
        </div>
      </Window>
    </div>
  );
}

/* 4. One live view */
export function SeeVisual() {
  const { ref, t } = useSteps(4, 300);
  const tiles = [
    { k: "Money at risk", v: "6 080 €", s: "13 invoices with open mismatches", tone: OL.coral },
    { k: "Purchase orders outstanding", v: "23 112 €", s: "17 open orders", tone: OL.text },
    { k: "Needs review", v: "14", s: "no change since yesterday", tone: OL.amber },
    { k: "Navision sync", v: "Success", s: "9 minutes ago, 0 errors", tone: OL.mint },
  ];
  return (
    <div ref={ref} style={{ containerType: "inline-size", fontSize: "clamp(10px,1.4cqw,14px)" }}>
      <Window title="Dashboard">
        <div className="p-[4%]">
          <motion.div
            className="rounded-[2px] px-[4%] py-[3.5%] flex flex-wrap items-center gap-x-[2em] gap-y-1"
            style={{ background: "rgba(248,113,113,0.08)", boxShadow: "inset 0 0 0 1px rgba(248,113,113,0.35)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: t >= 1 ? 1 : 0 }}
          >
            <span style={{ color: OL.coral }}>Critical alerts</span>
            <span>
              <b className="font-semibold" style={{ color: OL.coral, fontSize: "1.3em" }}>
                2
              </b>{" "}
              duplicates
            </span>
            <span>
              <b className="font-semibold" style={{ color: OL.coral, fontSize: "1.3em" }}>
                11
              </b>{" "}
              open mismatches
            </span>
          </motion.div>
          <div className="mt-[3%] grid grid-cols-2 gap-[3%]">
            {tiles.map((x, i) => (
              <motion.div
                key={x.k}
                className="rounded-[2px] p-[6%]"
                style={{ background: OL.panel, boxShadow: `inset 0 0 0 1px ${OL.line}` }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: t >= 2 ? 1 : 0, y: t >= 2 ? 0 : 8 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease }}
              >
                <div style={{ color: OL.faint, fontSize: "0.9em" }}>{x.k}</div>
                <div className="mt-[0.4em] font-semibold" style={{ color: x.tone, fontSize: "1.9em" }}>
                  {x.v}
                </div>
                <div style={{ color: OL.faint, fontSize: "0.85em" }}>{x.s}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Window>
    </div>
  );
}

const BLOCKS = [
  {
    title: "Reads any supplier document",
    body: "PDFs, scans, and phone photos in any layout or language. OperaLayer pulls out every field and tells you how sure it is.",
    points: ["Up to 50 files per upload", "Learns each supplier's layout over time"],
    Visual: ReadVisual,
  },
  {
    title: "Checks every line against your ERP",
    body: "Each line is compared with the purchase order in your ERP. A price or quantity that does not agree stops the document before it is posted.",
    points: ["Item codes mapped to your ERP codes", "Price and quantity tolerances you set"],
    Visual: CheckVisual,
  },
  {
    title: "Sends a person only the exceptions",
    body: "Your team gets a short list of what needs a decision, with the reason on every row. Everything that agrees goes through by itself.",
    points: ["Duplicates flagged on upload", "Every decision kept in the audit trail"],
    Visual: ApproveVisual,
  },
  {
    title: "Shows the whole operation on one screen",
    body: "Money at risk, open orders, and the health of the ERP sync, live, for the people who run the business.",
    points: ["A dashboard you arrange yourself", "Critical alerts pinned to the top"],
    Visual: SeeVisual,
  },
];

export function Product() {
  return (
    <section id="product" className="bg-white py-28 md:py-36 scroll-mt-10">
      <div className="wrap">
        <SectionHead
          center
          title="One platform for the work between your systems"
          lede="The same four parts power every OperaLayer app. Here they are on supplier invoices, the first app most teams start with."
        />
        <div className="mt-20 md:mt-28 space-y-28 md:space-y-36">
          {BLOCKS.map((b, i) => (
            <div
              key={b.title}
              className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-12 lg:gap-20 items-center"
            >
              <motion.div
                className={i % 2 ? "lg:order-2" : ""}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, ease }}
              >
                <div className="font-head text-[var(--sw-blue)] text-[15px] font-semibold">{`${i + 1} of 4`}</div>
                <h3 className="mt-3 font-head text-[var(--sw-black)] text-[30px] md:text-[38px] leading-[1.08] tracking-[-0.015em] max-w-[16ch]">
                  {b.title}
                </h3>
                <p className="mt-5 text-[var(--sw-black)]/65 text-[17px] md:text-[18px] leading-relaxed max-w-[40ch]">{b.body}</p>
                <ul className="mt-7 space-y-3">
                  {b.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-[15px] md:text-[16px] text-[var(--sw-black)]/80">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[var(--sw-blue)]/10">
                        <Check className="h-3 w-3 text-[var(--sw-blue)]" strokeWidth={3} />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                className={i % 2 ? "lg:order-1" : ""}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease }}
              >
                <b.Visual />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
