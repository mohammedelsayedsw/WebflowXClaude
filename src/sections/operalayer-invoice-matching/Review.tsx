"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { AppFrame } from "@/sections/operalayer/shared/AppFrame";
import { StatusChip } from "./StatusChip";
import type { LineStatus } from "./data";

type Exception = {
  supplier: string;
  item: string;
  status: LineStatus | "low";
  field: string;
  invoice: string;
  po: string;
  conf: number;
};

const EXCEPTIONS: Exception[] = [
  { supplier: "Cable supplier", item: "NYM-J 5x2.5 cable, 50 m", status: "price", field: "Unit price", invoice: "88.90", po: "84.50", conf: 97 },
  { supplier: "Lighting supplier", item: "Emergency exit light", status: "qty", field: "Quantity", invoice: "8", po: "10", conf: 94 },
  { supplier: "Switchgear supplier", item: "DIN rail enclosure, 24 modules", status: "price", field: "Unit price", invoice: "58.00", po: "52.00", conf: 96 },
  { supplier: "Fixings supplier", item: "Anchor bolts M10, 50 pcs", status: "low", field: "Item code", invoice: "AB-M1O-50", po: "AB-M10-50", conf: 61 },
];

type Decision = "approved" | "rejected" | undefined;

function Chip({ status }: { status: Exception["status"] }) {
  if (status === "low")
    return (
      <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-[2px] bg-[var(--sw-blue)]/10 px-2 py-0.5 text-[11px] font-medium text-[var(--sw-blue)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--sw-blue)]" />
        Low confidence
      </span>
    );
  return <StatusChip status={status} light />;
}

/** Counts up to 87 when the split comes into view. */
function Split() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setN(87);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / 1400);
      setN(Math.round(87 * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, reduce]);

  return (
    <div ref={ref}>
      <div className="flex items-end gap-6">
        <div className="font-head text-[var(--sw-black)] text-[72px] md:text-[96px] leading-none tabular-nums">
          {n}%
        </div>
        <div className="pb-3 text-[var(--sw-black)]/65 text-[15px] leading-snug max-w-[20ch]">
          auto-match rate at the client, with the rest sent to people
        </div>
      </div>
      <div className="mt-8 flex h-3 w-full overflow-hidden rounded-[2px] bg-[var(--sw-black)]/10">
        <motion.div
          className="h-full bg-[var(--sw-blue)]"
          initial={{ width: 0 }}
          animate={{ width: inView ? "87%" : 0 }}
          transition={{ duration: reduce ? 0 : 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="h-full bg-[var(--sw-orange)]"
          initial={{ width: 0 }}
          animate={{ width: inView ? "13%" : 0 }}
          transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 1.3 }}
        />
      </div>
      <div className="mt-3 flex justify-between label-code text-[var(--sw-black)]/55">
        <span>Checked automatically</span>
        <span style={{ color: "var(--sw-orange)" }}>13% to review</span>
      </div>
    </div>
  );
}

function Queue() {
  const [sel, setSel] = useState(0);
  const [decisions, setDecisions] = useState<Record<number, Decision>>({});
  const ex = EXCEPTIONS[sel];
  const decide = (d: Decision) => setDecisions((m) => ({ ...m, [sel]: d }));
  const open = EXCEPTIONS.length - Object.values(decisions).filter(Boolean).length;

  return (
    <AppFrame module="review queue" status={`${open} open`} tone="light">
      <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[1fr_1fr]">
        <ul className="border-b md:border-b-0 md:border-r border-[var(--sw-black)]/10">
          {EXCEPTIONS.map((e, i) => {
            const d = decisions[i];
            return (
              <li key={e.item}>
                <button
                  type="button"
                  onClick={() => setSel(i)}
                  className={`w-full text-left px-4 md:px-5 py-3.5 border-b border-[var(--sw-black)]/[0.07] transition ${
                    i === sel ? "bg-[var(--sw-blue)]/[0.06]" : "hover:bg-[var(--sw-black)]/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="label-code text-[var(--sw-black)]/50 truncate">{e.supplier}</span>
                    {d ? (
                      <span
                        className="label-code"
                        style={{ color: d === "approved" ? "#1f8a3a" : "var(--sw-orange)" }}
                      >
                        {d}
                      </span>
                    ) : (
                      <Chip status={e.status} />
                    )}
                  </div>
                  <div
                    className={`mt-1 text-[14px] truncate ${
                      d ? "text-[var(--sw-black)]/40 line-through" : "text-[var(--sw-black)]"
                    }`}
                  >
                    {e.item}
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="p-5 md:p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={sel}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="font-head text-[var(--sw-black)] text-[17px] leading-snug">{ex.item}</div>
              <div className="mt-1 label-code text-[var(--sw-black)]/50">{ex.field}</div>
              <div className="mt-5 grid grid-cols-2 border-y border-[var(--sw-black)]/10">
                <div className="py-3 pr-3 border-r border-[var(--sw-black)]/10">
                  <div className="label-code text-[var(--sw-black)]/45">Invoice</div>
                  <div className="mt-1 text-[20px] tabular-nums" style={{ color: "var(--sw-orange)" }}>
                    {ex.invoice}
                  </div>
                </div>
                <div className="py-3 pl-4">
                  <div className="label-code text-[var(--sw-black)]/45">PO in NAV</div>
                  <div className="mt-1 text-[20px] tabular-nums text-[var(--sw-black)]">{ex.po}</div>
                </div>
              </div>
              <div className="mt-5">
                <div className="flex justify-between label-code text-[var(--sw-black)]/50 mb-2">
                  <span>Read confidence</span>
                  <span>{ex.conf}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-[var(--sw-black)]/10 overflow-hidden">
                  <motion.div
                    className="h-full"
                    style={{ background: ex.conf < 80 ? "var(--sw-orange)" : "var(--sw-blue)" }}
                    initial={{ width: 0 }}
                    animate={{ width: `${ex.conf}%` }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => decide("approved")}
                  className="rounded-[2px] border border-[var(--sw-blue)] px-4 py-2 text-[13px] font-head font-semibold text-[var(--sw-blue)] hover:bg-[var(--sw-blue)] hover:text-white transition"
                >
                  Approve
                </button>
                <button
                  type="button"
                  onClick={() => decide("rejected")}
                  className="rounded-[2px] border border-[var(--sw-black)]/25 px-4 py-2 text-[13px] font-head font-semibold text-[var(--sw-black)]/70 hover:border-[var(--sw-black)]/60 transition"
                >
                  Reject
                </button>
                {decisions[sel] && (
                  <button
                    type="button"
                    onClick={() => decide(undefined)}
                    className="px-2 py-2 text-[13px] text-[var(--sw-black)]/50 hover:text-[var(--sw-black)] transition"
                  >
                    Undo
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AppFrame>
  );
}

export function Review() {
  return (
    <section id="review" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[0.85fr_1.15fr] gap-14 lg:gap-20 items-center">
          <div>
            <Reveal>
              <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[54px] leading-[1.05] max-w-[14ch]">
                Your team reviews only the exceptions
              </h2>
              <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[46ch]">
                Every line carries a confidence score. When a line disagrees with the PO, or the read
                itself is uncertain, it waits for a person to approve or reject it.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-12">
              <Split />
            </Reveal>
          </div>
          <Reveal delay={0.1} className="min-w-0">
            <Queue />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
