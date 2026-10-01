"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { useCycle } from "@/sections/operalayer/shared/useCycle";
import { STATE_PRICES, usd } from "./data";

/**
 * Price waterfall per state. Each step is a bar that starts where the
 * previous one ended, so the eye reads cost plus excise plus margin plus
 * rounding as one line to the shelf price.
 */
const MAX = 36;

export function PriceBuild() {
  const { ref, index, pick } = useCycle(STATE_PRICES.length, 3600);
  const s = STATE_PRICES[index];
  const rounding = +(s.shelf - s.cost - s.excise - s.margin).toFixed(2);

  const steps = [
    { label: "Base cost", note: "Supplier cost for the product", value: s.cost, start: 0, tone: "rgba(255,255,255,0.55)" },
    { label: "State excise", note: `Excise rule for ${s.name}`, value: s.excise, start: s.cost, tone: "#8d97ff" },
    { label: "Margin", note: `Margin type ${s.marginType} of 8`, value: s.margin, start: s.cost + s.excise, tone: "rgba(110,247,110,0.55)" },
    { label: "Rounding rule", note: "Rounded to the store's price ending", value: rounding, start: s.cost + s.excise + s.margin, tone: "rgba(255,255,255,0.3)" },
  ];

  return (
    <section id="price" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-16">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(800px 500px at 85% 20%, rgba(63,74,175,0.22), transparent 60%)" }}
      />
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">How a price is built</div>
          <h2 className="font-head text-white text-[34px] md:text-[46px] lg:text-[52px] leading-[1.05] max-w-[20ch]">
            Every state price follows the same steps
          </h2>
          <p className="mt-6 text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[56ch]">
            OperaLayer holds the rules that used to sit inside the spreadsheet. Pick a
            state to see how one product ends up with a different shelf price.
          </p>
        </Reveal>

        <div ref={ref} className="mt-14">
          <Reveal>
            <div role="tablist" aria-label="Choose a state" className="flex flex-wrap gap-2">
              {STATE_PRICES.map((x, i) => (
                <button
                  key={x.code}
                  role="tab"
                  aria-selected={i === index}
                  onClick={() => pick(i)}
                  className={`h-10 px-4 rounded-[2px] border font-head font-semibold text-[14px] transition ${
                    i === index
                      ? "border-[var(--sw-mint)] text-[var(--sw-mint)]"
                      : "border-white/15 text-white/60 hover:text-white hover:border-white/40"
                  }`}
                >
                  {x.name}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="mt-8 border-t border-white/10">
              {steps.map((st) => (
                <div
                  key={st.label}
                  className="grid grid-cols-[1fr_auto] md:grid-cols-[220px_1fr_90px] gap-x-6 gap-y-2 items-center py-4 md:py-5 border-b border-white/10"
                >
                  <div>
                    <div className="font-head text-white text-[16px] md:text-[18px]">{st.label}</div>
                    <div className="text-white/50 text-[13px] mt-0.5">{st.note}</div>
                  </div>
                  <div className="font-head text-white/85 text-[16px] tabular-nums text-right md:order-3">
                    +{usd(st.value)}
                  </div>
                  <div className="col-span-2 md:col-span-1 md:order-2 relative h-7 md:h-8">
                    <div className="absolute inset-y-[45%] inset-x-0 border-t border-dashed border-white/10" />
                    <motion.div
                      className="absolute inset-y-0 rounded-[2px]"
                      style={{ background: st.tone }}
                      initial={false}
                      animate={{
                        left: `${(st.start / MAX) * 100}%`,
                        width: `${Math.max(0.6, (st.value / MAX) * 100)}%`,
                      }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
              <div className="grid grid-cols-[1fr_auto] md:grid-cols-[220px_1fr_90px] gap-x-6 gap-y-2 items-center py-5 md:py-6">
                <div className="font-head text-white text-[18px] md:text-[20px]">Shelf price in {s.name}</div>
                <motion.div
                  key={s.code}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-head text-[var(--sw-mint)] text-[22px] md:text-[26px] tabular-nums text-right md:order-3"
                >
                  {usd(s.shelf)}
                </motion.div>
                <div className="col-span-2 md:col-span-1 md:order-2 relative h-8 md:h-9">
                  <motion.div
                    className="absolute inset-y-0 left-0 rounded-[2px] border border-[var(--sw-mint)]/70"
                    initial={false}
                    animate={{ width: `${(s.shelf / MAX) * 100}%` }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ background: "rgba(110,247,110,0.12)" }}
                  />
                </div>
              </div>
            </div>
          </Reveal>
          <p className="mt-4 label-code text-white/40">
            Example figures. Real state excise and sales tax rules differ by state and change over time.
          </p>
        </div>
      </div>
    </section>
  );
}
