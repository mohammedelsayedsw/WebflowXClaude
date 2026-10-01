"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { AppFrame } from "@/sections/operalayer/shared/AppFrame";
import { useCycle } from "@/sections/operalayer/shared/useCycle";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";
import { INVOICES, type SampleInvoice } from "./data";
import { StatusChip } from "./StatusChip";

function HeroBg() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1100px 700px at 70% 10%, #1d2566 0%, #141a48 38%, #0c1030 72%, #080b22 100%)",
        }}
      />
      <div className="absolute inset-0 -z-10 grid-backdrop opacity-30" />
    </>
  );
}

/** A small drawing of a supplier PDF. Each layout differs, the way real supplier invoices do. */
function DocThumb({ inv, active }: { inv: SampleInvoice; active: boolean }) {
  const reduce = useReducedMotion();
  const bar = (w: string, o = 0.35) => (
    <div className="h-[3px] rounded-full bg-[var(--sw-black)]" style={{ width: w, opacity: o }} />
  );
  return (
    <div
      className="relative h-[124px] w-[92px] shrink-0 overflow-hidden rounded-[2px] bg-white p-2.5 transition-all duration-500"
      style={{
        opacity: active ? 1 : 0.35,
        transform: active ? "translateY(-6px)" : "none",
        boxShadow: active ? "0 0 0 1px var(--sw-mint), 0 18px 30px -16px rgba(0,0,0,0.6)" : "none",
      }}
    >
      {inv.layout === "classic" && (
        <div className="flex flex-col gap-1.5">
          <div className="flex justify-between">
            <div className="h-3 w-6 rounded-[1px] bg-[var(--sw-blue)]/70" />
            <div className="flex flex-col items-end gap-1">{bar("28px")}{bar("20px", 0.2)}</div>
          </div>
          <div className="mt-2 flex flex-col gap-1">{bar("60%", 0.2)}{bar("45%", 0.2)}</div>
          <div className="mt-2 flex flex-col gap-[5px] border-t border-[var(--sw-black)]/15 pt-1.5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="flex justify-between">{bar("44px", 0.3)}{bar("12px", 0.3)}</div>
            ))}
          </div>
        </div>
      )}
      {inv.layout === "banded" && (
        <div className="flex flex-col gap-1.5">
          <div className="-mx-2.5 -mt-2.5 mb-1 h-5 bg-[var(--sw-orange)]/70" />
          {bar("50%", 0.4)}
          <div className="mt-1.5 flex flex-col gap-[3px]">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className={`flex justify-between px-1 py-[3px] ${i % 2 ? "" : "bg-[var(--sw-black)]/[0.06]"}`}>
                {bar("36px", 0.3)}{bar("14px", 0.3)}
              </div>
            ))}
          </div>
        </div>
      )}
      {inv.layout === "compact" && (
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <div className="h-4 w-4 rounded-full bg-[var(--sw-black)]/70" />
            {bar("40%", 0.45)}
          </div>
          <div className="mt-1 grid grid-cols-2 gap-1">{bar("90%", 0.18)}{bar("70%", 0.18)}{bar("80%", 0.18)}{bar("60%", 0.18)}</div>
          <div className="mt-2 grid grid-cols-[1fr_auto] gap-x-2 gap-y-[5px] border border-[var(--sw-black)]/15 p-1">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="contents">{bar("90%", 0.28)}{bar("10px", 0.28)}</div>
            ))}
          </div>
        </div>
      )}
      {active && !reduce && (
        <motion.div
          key={inv.number}
          className="absolute inset-x-0 h-6"
          style={{
            background: "linear-gradient(180deg, transparent, rgba(110,247,110,0.35), transparent)",
          }}
          initial={{ top: "-20%" }}
          animate={{ top: "105%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

function HeroMock() {
  const { ref, index } = useCycle(INVOICES.length, 6500);
  const inv = INVOICES[index];
  const agree = inv.lines.filter((l) => l.status === "agrees").length;

  return (
    <div ref={ref} className="w-full">
      <AppFrame module="invoice matching" status="Navision connected">
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[150px_1fr]">
          {/* incoming PDFs */}
          <div className="border-b md:border-b-0 md:border-r border-white/10 p-4 md:p-5">
            <div className="label-code text-white/45 mb-4">Incoming PDFs</div>
            <div className="flex md:flex-col gap-3 items-start">
              {INVOICES.map((d, i) => (
                <DocThumb key={d.number} inv={d} active={i === index} />
              ))}
            </div>
          </div>

          {/* extracted lines vs PO */}
          <div className="p-4 md:p-5 min-w-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={inv.number}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="font-head text-white text-[15px] md:text-[16px]"
                >
                  {inv.supplier} <span className="text-white/45">· {inv.number}</span>
                </motion.div>
              </AnimatePresence>
              <div className="label-code text-white/55">
                <span className="text-[var(--sw-mint)]">{agree}</span> of {inv.lines.length} lines agree
              </div>
            </div>

            <div className="overflow-x-auto -mx-1 px-1">
              <table className="w-full min-w-[460px] text-[12px] md:text-[13px]">
                <thead>
                  <tr className="label-code text-white/40 text-left">
                    <th className="font-normal pb-2 pr-3">Line</th>
                    <th className="font-normal pb-2 pr-3">Invoice</th>
                    <th className="font-normal pb-2 pr-3">PO in NAV</th>
                    <th className="font-normal pb-2 pr-3">Status</th>
                    <th className="font-normal pb-2 text-right">Conf.</th>
                  </tr>
                </thead>
                <tbody key={inv.number}>
                  {inv.lines.map((l, i) => (
                    <motion.tr
                      key={l.item}
                      className="border-t border-white/[0.08]"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.0 + i * 0.35, duration: 0.35 }}
                    >
                      <td className="py-2.5 pr-3 text-white/85 whitespace-nowrap">{l.item}</td>
                      <td className="py-2.5 pr-3 text-white/70 tabular-nums whitespace-nowrap">{l.inv}</td>
                      <td
                        className="py-2.5 pr-3 tabular-nums whitespace-nowrap"
                        style={{ color: l.status === "agrees" ? "rgba(255,255,255,0.7)" : "var(--sw-orange)" }}
                      >
                        {l.po}
                      </td>
                      <td className="py-2.5 pr-3">
                        <StatusChip status={l.status} />
                      </td>
                      <td className="py-2.5 text-right text-white/55 tabular-nums">{l.conf}%</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AppFrame>
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <HeroBg />
      <div className="wrap relative z-10 pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-14 lg:gap-12 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="label-code text-white/55 mb-6">OperaLayer · procurement module</div>
            <h1 className="font-head text-white text-[38px] sm:text-[48px] md:text-[60px] lg:text-[64px] leading-[1.02] tracking-[-0.015em] max-w-[14ch]">
              AI Invoice Matching for{" "}
              <span style={{ color: "var(--sw-mint)" }}>Microsoft Dynamics NAV</span>
            </h1>
            <p className="mt-7 text-white/75 text-[17px] md:text-[19px] leading-relaxed max-w-[48ch]">
              OperaLayer reads every supplier PDF and checks each line against the purchase order in
              Navision. Your team only opens the lines that need a decision.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
                Talk to us about your invoices
              </a>
              <a
                href="#how-it-works"
                onClick={scrollToSection("how-it-works")}
                className="font-head font-semibold text-[15px] text-white/70 hover:text-white transition"
              >
                See how it works
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="min-w-0"
          >
            <HeroMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
