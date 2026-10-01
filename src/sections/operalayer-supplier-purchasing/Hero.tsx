"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "motion/react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { AppFrame } from "@/sections/operalayer/shared/AppFrame";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";
import { CATEGORIES, TOTAL, eur } from "./data";

/**
 * Buyer view of the SS26 season. The total counts up to €34 million on first
 * view, then the table keeps ticking: deliveries and invoices creep forward and
 * the variance flag moves from row to row, the way a buyer sees it during the
 * season.
 */
const FLAGS = [
  { row: 1, text: "Price differs" },
  { row: 4, text: "Qty short" },
  { row: 0, text: "Not on order" },
  { row: 5, text: "Price differs" },
];

function Bar({ value, tone }: { value: number; tone: "mint" | "blue" }) {
  return (
    <div className="h-1 w-full rounded-[1px] bg-white/10 overflow-hidden">
      <motion.div
        className="h-full rounded-[1px]"
        style={{ background: tone === "mint" ? "var(--sw-mint)" : "#8f97e6" }}
        initial={{ width: 0 }}
        animate={{ width: `${Math.round(value * 100)}%` }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
}

function BuyerView() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [total, setTotal] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setTotal(TOTAL);
      return;
    }
    const c = animate(0, TOTAL, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setTotal(v),
    });
    const t = window.setInterval(() => setTick((n) => n + 1), 2600);
    return () => {
      c.stop();
      window.clearInterval(t);
    };
  }, [inView]);

  const flag = FLAGS[tick % FLAGS.length];
  // Deliveries and invoices move forward a little each tick, then reset.
  const step = tick % 6;
  const flagged = 3 + (tick % 3);

  return (
    <div ref={ref} className="w-full max-w-[860px]">
      <AppFrame module="supplier purchasing" status="live">
        <div className="px-4 md:px-6 pt-5 pb-4 flex flex-wrap items-end justify-between gap-4 border-b border-white/10">
          <div>
            <div className="label-code text-white/45">Season SS26 · all supplier brands</div>
            <div className="mt-1.5 font-head text-white text-[30px] md:text-[40px] leading-none tabular-nums">
              €{total.toFixed(1)}M
              <span className="ml-2 text-[13px] md:text-[14px] font-normal text-white/50 align-middle">
                committed
              </span>
            </div>
          </div>
          <div className="flex gap-5 md:gap-8 text-[12px] md:text-[13px]">
            <div>
              <div className="label-code text-white/45">Brands</div>
              <div className="mt-1 font-head text-white text-[18px] md:text-[20px]">50+</div>
            </div>
            <div>
              <div className="label-code text-white/45">Open flags</div>
              <div className="mt-1 font-head text-[18px] md:text-[20px] text-[var(--sw-orange)] tabular-nums">
                {flagged}
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 md:px-6 py-2">
          <div className="grid grid-cols-[1.3fr_0.7fr_1fr] sm:grid-cols-[1.4fr_0.7fr_1fr_1fr] gap-x-4 py-2 label-code text-white/40">
            <span>Category</span>
            <span className="text-right">Committed</span>
            <span>Delivered</span>
            <span className="hidden sm:block">Invoiced</span>
          </div>
          {CATEGORIES.map((c, i) => {
            const bump = Math.min(0.97, c.delivered + step * 0.025);
            const ibump = Math.min(bump, c.invoiced + step * 0.022);
            const isFlag = flag.row === i;
            return (
              <div
                key={c.name}
                className="grid grid-cols-[1.3fr_0.7fr_1fr] sm:grid-cols-[1.4fr_0.7fr_1fr_1fr] gap-x-4 items-center py-2.5 border-t border-white/[0.07] text-[12px] md:text-[13px]"
              >
                <div className="min-w-0 flex items-center gap-2">
                  <span className="truncate text-white/85">{c.name}</span>
                  {isFlag && (
                    <motion.span
                      key={tick}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="hidden md:inline-flex shrink-0 rounded-[2px] border border-[var(--sw-orange)]/50 px-1.5 py-0.5 text-[10px] font-medium text-[var(--sw-orange)]"
                    >
                      {flag.text}
                    </motion.span>
                  )}
                  {isFlag && (
                    <span className="md:hidden h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sw-orange)]" />
                  )}
                </div>
                <span className="text-right text-white tabular-nums">{eur(c.committed)}</span>
                <div className="flex items-center gap-2.5">
                  <Bar value={bump} tone="mint" />
                  <span className="w-8 shrink-0 text-right text-white/60 tabular-nums">
                    {Math.round(bump * 100)}%
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-2.5">
                  <Bar value={ibump} tone="blue" />
                  <span className="w-8 shrink-0 text-right text-white/60 tabular-nums">
                    {Math.round(ibump * 100)}%
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="px-4 md:px-6 py-3 border-t border-white/10 flex items-center justify-between gap-4 text-[11px] md:text-[12px] text-white/45">
          <span>Synced from Business Central</span>
          <span className="label-code">Example data</span>
        </div>
      </AppFrame>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden flex flex-col">
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
          background: "radial-gradient(700px 500px at 15% 70%, rgba(110,247,110,0.08), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="wrap w-full relative z-10 pt-36 md:pt-44 pb-20 md:pb-28">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-14 lg:gap-16 lg:grid-cols-[0.9fr_1.1fr] items-center">
          <div>
            <div className="inline-flex items-center rounded-full border border-white/25 px-3.5 py-1.5 mb-8">
              <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                OperaLayer for procurement
              </span>
            </div>
            <h1 className="font-head text-white text-[34px] sm:text-[46px] md:text-[56px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] max-w-[16ch] text-balance">
              Supplier Purchasing Intelligence for{" "}
              <span style={{ color: "var(--sw-mint)" }}>Microsoft Business Central</span>
            </h1>
            <p className="mt-7 text-[17px] md:text-[19px] text-white/75 max-w-[48ch] leading-relaxed">
              Business Central keeps your books in order. OperaLayer gives your buyers one view
              of seasonal commitments, deliveries, and invoices across every supplier brand.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-6">
              <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
                Talk to us about purchasing
              </a>
              <a
                href="#season"
                onClick={scrollToSection("season")}
                className="inline-flex items-center gap-2 text-white/75 hover:text-white transition font-head font-semibold text-[15px]"
              >
                See the season view
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <BuyerView />
          </div>
        </div>
      </div>
    </section>
  );
}
