"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Check } from "lucide-react";

/**
 * The hero image: a supplier's German invoice on paper, and the OperaLayer
 * card that checks it against the purchase order from Navision.
 * Data is the Cascade Cable Works invoice from the OperaLayer demo app.
 * Plays once when it comes into view: each paper line lights up, then its
 * row in the card gets a tick, then the card is ready to post.
 */
const LINES = [
  { pos: "01", nr: "W-5G4-H07RNF", name: "H07RN-F 5G4mm² control cable, black", qty: "80.0", unit: "M", price: "2.85", sum: "228.00", erp: "CC-CBL-5X4" },
  { pos: "02", nr: "CC-GLAND-M20", name: "Cable gland M20 IP68", qty: "40", unit: "PC", price: "1.15", sum: "46.00", erp: "CC-GLAND-M20" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Paper({ lit }: { lit: number }) {
  return (
    <div
      className="relative bg-white rounded-[3px] px-[7%] py-[7%] text-[var(--sw-black)]"
      style={{
        boxShadow: "0 1px 0 rgba(16,19,44,0.04), 0 30px 60px -28px rgba(16,19,44,0.28), 0 0 0 1px rgba(16,19,44,0.06)",
        fontSize: "clamp(7px, 1.05cqw, 11px)",
      }}
    >
      <div className="flex justify-between items-start gap-4">
        <div>
          <div className="font-semibold tracking-[0.02em]" style={{ fontSize: "1.55em" }}>
            CASCADE CABLE WORKS
          </div>
          <div className="mt-1 text-[var(--sw-black)]/55 leading-snug">
            Industriestraße 48, 42107 Wuppertal
            <br />
            USt-IdNr. DE291837465
          </div>
        </div>
        <div className="text-right">
          <div className="font-semibold tracking-[0.06em]" style={{ fontSize: "1.55em", color: "#c8581f" }}>
            RECHNUNG
          </div>
          <div className="mt-1 font-mono text-[var(--sw-black)]/60">INV-CC-3420</div>
        </div>
      </div>
      <div className="mt-[6%] h-[2px]" style={{ background: "#c8581f" }} />
      <div className="mt-[6%] grid grid-cols-2 gap-4 text-[var(--sw-black)]/60">
        <div>
          <div className="text-[0.8em] tracking-[0.08em] text-[var(--sw-black)]/40">RECHNUNGSEMPFÄNGER</div>
          <div className="mt-1 text-[var(--sw-black)]/80">SIA ESELO, Rīga, Latvia</div>
        </div>
        <div className="text-right">
          <div className="text-[0.8em] tracking-[0.08em] text-[var(--sw-black)]/40">IHRE BESTELL-NR.</div>
          <div className="mt-1 font-mono text-[var(--sw-black)]/80">I-PAS100202</div>
        </div>
      </div>

      <div className="mt-[7%]">
        <div className="grid grid-cols-[2em_1fr_3.6em_3.6em] gap-x-3 px-2 py-[0.6em] bg-[var(--sw-black)] text-white font-semibold" style={{ fontSize: "0.9em" }}>
          <span>POS.</span>
          <span>BEZEICHNUNG</span>
          <span className="text-right">MENGE</span>
          <span className="text-right">BETRAG</span>
        </div>
        {LINES.map((l, i) => (
          <div key={l.pos} className="relative grid grid-cols-[2em_1fr_3.6em_3.6em] gap-x-3 px-2 py-[0.75em] border-b border-[var(--sw-black)]/10">
            <motion.span
              aria-hidden
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: lit > i ? 1 : 0 }}
              transition={{ duration: 0.4 }}
              style={{ background: "rgba(63,74,175,0.08)", boxShadow: "inset 2px 0 0 var(--sw-blue)" }}
            />
            <span className="relative text-[var(--sw-black)]/50">{l.pos}</span>
            <span className="relative truncate">{l.name}</span>
            <span className="relative text-right font-mono">{l.qty}</span>
            <span className="relative text-right font-mono">{l.sum}</span>
          </div>
        ))}
        <div className="mt-[5%] flex justify-end gap-6 font-semibold">
          <span className="text-[var(--sw-black)]/60">Gesamtbetrag</span>
          <span className="font-mono">326.06 EUR</span>
        </div>
      </div>
    </div>
  );
}

function Card({ ticked, ready }: { ticked: number; ready: boolean }) {
  return (
    <div
      className="rounded-[4px] text-white overflow-hidden"
      style={{
        background: "#10132c",
        boxShadow: "0 40px 80px -30px rgba(16,19,44,0.55), 0 0 0 1px rgba(255,255,255,0.06)",
        fontSize: "clamp(9px, 1.25cqw, 14px)",
      }}
    >
      <div className="px-[6%] pt-[5%] pb-[4%] flex items-start justify-between gap-3">
        <div>
          <div className="text-white/50" style={{ fontSize: "0.85em" }}>
            Checked against purchase order
          </div>
          <div className="mt-1 font-semibold">I-PAS100202 in Navision</div>
        </div>
        <span
          className="shrink-0 rounded-[3px] px-2 py-1 font-semibold"
          style={{ fontSize: "0.8em", background: "rgba(110,247,110,0.12)", color: "var(--sw-mint)" }}
        >
          88% sure
        </span>
      </div>
      <div className="border-t border-white/10">
        {LINES.map((l, i) => (
          <div key={l.pos} className="px-[6%] py-[3.6%] border-b border-white/10 flex items-center gap-3">
            <div className="min-w-0 flex-1">
              <div className="truncate">{l.name}</div>
              <div className="mt-0.5 text-white/45 font-mono" style={{ fontSize: "0.82em" }}>
                {l.qty} {l.unit.toLowerCase()} at €{l.price} · ERP {l.erp}
              </div>
            </div>
            <motion.span
              className="shrink-0 inline-flex items-center justify-center rounded-full"
              style={{ width: "1.7em", height: "1.7em" }}
              initial={false}
              animate={{
                backgroundColor: ticked > i ? "rgba(110,247,110,1)" : "rgba(255,255,255,0.08)",
                scale: ticked > i ? [0.6, 1.15, 1] : 1,
              }}
              transition={{ duration: 0.45, ease }}
            >
              <Check className="h-[0.95em] w-[0.95em]" style={{ color: ticked > i ? "#10132c" : "transparent" }} strokeWidth={3} />
            </motion.span>
          </div>
        ))}
      </div>
      <div className="px-[6%] py-[5%] flex items-center justify-between gap-3">
        <span className="text-white/60" style={{ fontSize: "0.9em" }}>
          {ready ? "Both lines agree with the order" : "Reading the invoice"}
        </span>
        <motion.span
          className="rounded-[3px] px-3 py-1.5 font-semibold"
          style={{ fontSize: "0.85em" }}
          initial={false}
          animate={{
            backgroundColor: ready ? "#6ef76e" : "rgba(255,255,255,0.06)",
            color: ready ? "#10132c" : "rgba(255,255,255,0.35)",
          }}
          transition={{ duration: 0.4 }}
        >
          Post to Navision
        </motion.span>
      </div>
    </div>
  );
}

export function InvoiceMoment() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) return setT(5);
    const ids = [700, 1300, 1900, 2500, 3200].map((ms, i) => window.setTimeout(() => setT(i + 1), ms));
    return () => ids.forEach((id) => window.clearTimeout(id));
  }, [inView, reduce]);

  // t: 1 paper line 1, 2 card line 1, 3 paper line 2, 4 card line 2, 5 ready
  const lit = t >= 3 ? 2 : t >= 1 ? 1 : 0;
  const ticked = t >= 4 ? 2 : t >= 2 ? 1 : 0;

  return (
    <div ref={ref} className="relative w-full aspect-[1.2] select-none" style={{ containerType: "inline-size" }} aria-hidden>
      <motion.div
        className="absolute left-0 top-[2%] w-[70%]"
        initial={{ opacity: 0, y: 24, rotate: -2.5 }}
        animate={inView ? { opacity: 1, y: 0, rotate: -2.5 } : {}}
        transition={{ duration: 0.9, ease }}
      >
        <Paper lit={lit} />
      </motion.div>
      <motion.div
        className="absolute right-0 top-[44%] w-[60%]"
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease, delay: 0.25 }}
      >
        <Card ticked={ticked} ready={t >= 5} />
      </motion.div>
    </div>
  );
}
