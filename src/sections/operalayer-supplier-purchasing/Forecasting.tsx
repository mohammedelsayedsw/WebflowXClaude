"use client";

import { Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { AppFrame } from "@/sections/operalayer/shared/AppFrame";
import { useCycle } from "@/sections/operalayer/shared/useCycle";

/**
 * The second phase the retailer is building now: SKU level demand forecasts
 * and reorder suggestions drafted as purchase orders. The chart draws actual
 * weekly sales, then the forecast with its range; below it the draft orders
 * get approved one by one, because a buyer approves every order.
 */
const W = 620;
const H = 220;
const ACTUAL = [42, 48, 45, 53, 60, 58, 66, 74, 71, 80, 86, 83, 92];
const FORECAST = [92, 98, 104, 101, 110, 116, 112, 106, 98];
const N = ACTUAL.length + FORECAST.length - 1;
const MAX = 140;
const x = (i: number) => 16 + (i / (N - 1)) * (W - 32);
const y = (v: number) => 14 + (1 - v / MAX) * (H - 40);

const line = (vals: number[], offset: number) =>
  vals.map((v, i) => `${i === 0 ? "M" : "L"}${x(i + offset).toFixed(1)} ${y(v).toFixed(1)}`).join(" ");

const fOff = ACTUAL.length - 1;
const band = (() => {
  const up = FORECAST.map((v, i) => `${x(i + fOff).toFixed(1)} ${y(v * (1 + 0.025 * i)).toFixed(1)}`);
  const down = FORECAST.map((v, i) => `${x(i + fOff).toFixed(1)} ${y(v * (1 - 0.025 * i)).toFixed(1)}`).reverse();
  return `M${up.join(" L")} L${down.join(" L")} Z`;
})();

const DRAFTS = [
  { item: "Trail running shoes", qty: "640 pairs", why: "Forecast passes stock in week 19" },
  { item: "Rain jackets, adult", qty: "380 units", why: "Spring campaign starts in week 17" },
  { item: "Swim shorts, kids", qty: "520 units", why: "Season peak four weeks earlier than last year" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Forecasting() {
  const { ref, index } = useCycle(DRAFTS.length + 2, 1700);
  const approved = Math.min(index, DRAFTS.length);

  return (
    <section id="next" className="bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="label-code text-white/50 mb-5">What comes next</div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[52px] leading-[1.05] max-w-[16ch]">
              What the retailer is building next
            </h2>
            <p className="mt-6 text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[46ch]">
              With every supplier brand in one place, the retailer is now adding demand forecasts for
              each SKU. The forecasts take seasonality and planned campaigns into account.
            </p>
            <p className="mt-4 text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[46ch]">
              OperaLayer turns the forecast into reorder suggestions drafted as purchase orders. A
              buyer approves each one before anything is ordered.
            </p>
          </Reveal>

          <div ref={ref}>
            <AppFrame module="demand forecast" status="weekly">
              <div className="px-3 md:px-5 pt-4">
                <div className="flex items-center justify-between gap-4 px-1 text-[12px] text-white/55">
                  <span>Trail running shoes, all sizes</span>
                  <span className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="h-[2px] w-4 bg-white/80" /> Sold
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="h-[2px] w-4 bg-[var(--sw-mint)]" /> Forecast
                    </span>
                  </span>
                </div>
                <svg viewBox={`0 0 ${W} ${H}`} className="mt-2 w-full h-auto" aria-label="Weekly sales and forecast">
                  {[0.25, 0.5, 0.75].map((t) => (
                    <line key={t} x1={16} x2={W - 16} y1={14 + t * (H - 40)} y2={14 + t * (H - 40)} stroke="rgba(255,255,255,0.07)" />
                  ))}
                  <motion.path
                    d={band}
                    fill="rgba(110,247,110,0.12)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                  />
                  <motion.path
                    d={line(ACTUAL, 0)}
                    fill="none"
                    stroke="rgba(255,255,255,0.85)"
                    strokeWidth={2}
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 1.4, ease }}
                  />
                  <motion.path
                    d={line(FORECAST, fOff)}
                    fill="none"
                    stroke="var(--sw-mint)"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                  />
                  <line x1={x(fOff)} x2={x(fOff)} y1={8} y2={H - 26} stroke="rgba(255,255,255,0.25)" strokeDasharray="2 4" />
                  <text x={x(fOff) + 6} y={20} fontSize="11" fill="rgba(255,255,255,0.55)">
                    Today
                  </text>
                  <text x={16} y={H - 6} fontSize="11" fill="rgba(255,255,255,0.4)">
                    Week 6
                  </text>
                  <text x={W - 16} y={H - 6} textAnchor="end" fontSize="11" fill="rgba(255,255,255,0.4)">
                    Week 27
                  </text>
                </svg>
              </div>

              <div className="border-t border-white/10 px-4 md:px-5 py-2">
                <div className="label-code text-white/45 py-2">Draft purchase orders</div>
                {DRAFTS.map((d, i) => {
                  const done = i < approved;
                  return (
                    <div
                      key={d.item}
                      className="grid grid-cols-[1fr_auto] sm:grid-cols-[1.2fr_0.6fr_auto] gap-x-4 items-center py-3 border-t border-white/[0.07]"
                    >
                      <div className="min-w-0">
                        <div className="text-white text-[13px] md:text-[14px] truncate">{d.item}</div>
                        <div className="text-white/45 text-[11px] md:text-[12px] truncate">{d.why}</div>
                      </div>
                      <div className="hidden sm:block text-right text-white/75 text-[13px] tabular-nums">{d.qty}</div>
                      <div className="w-[104px] flex justify-end">
                        <AnimatePresence mode="wait" initial={false}>
                          {done ? (
                            <motion.span
                              key="done"
                              initial={{ opacity: 0, scale: 0.92 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0 }}
                              className="inline-flex items-center gap-1.5 rounded-[2px] px-2.5 py-1.5 text-[12px] font-medium text-[var(--sw-mint)] bg-[var(--sw-mint)]/10"
                            >
                              <Check className="h-3.5 w-3.5" /> Approved
                            </motion.span>
                          ) : (
                            <motion.span
                              key="todo"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="inline-flex items-center rounded-[2px] border border-[var(--sw-beige)]/60 px-2.5 py-1.5 text-[12px] font-medium text-[var(--sw-beige)]"
                            >
                              Approve
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="px-4 md:px-5 py-3 border-t border-white/10 flex justify-between gap-3 text-[12px] text-white/45">
                <span>Nothing is ordered until a buyer approves it</span>
                <span className="label-code hidden sm:inline">Example data</span>
              </div>
            </AppFrame>
          </div>
        </div>
      </div>
    </section>
  );
}
