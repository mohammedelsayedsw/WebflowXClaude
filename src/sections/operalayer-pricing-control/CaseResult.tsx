"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { AppFrame } from "@/sections/operalayer/shared/AppFrame";
import { useCycle } from "@/sections/operalayer/shared/useCycle";
import { usd } from "./data";

/**
 * The client result, then the competitor price feed the retailer is adding
 * now. The feed mock flags products whose gap to the lowest competitor
 * passes a set limit and leaves the repricing call to a person.
 */
const GAPS = [
  { sku: "Product 1042", state: "TX", ours: 29.99, theirs: 27.49 },
  { sku: "Product 2210", state: "CA", ours: 41.99, theirs: 41.49 },
  { sku: "Product 0877", state: "NY", ours: 18.49, theirs: 16.99 },
  { sku: "Product 3301", state: "FL", ours: 24.99, theirs: 25.99 },
  { sku: "Product 1590", state: "OH", ours: 33.99, theirs: 33.49 },
];
const LIMIT = 5;

function GapFeed() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const alerts = GAPS.map((g, i) => ({ ...g, i, gap: ((g.ours - g.theirs) / g.ours) * 100 })).filter(
    (g) => g.gap > LIMIT
  );
  const { ref: cycleRef, index, pick } = useCycle(alerts.length, 2600);
  const focus = alerts[index];

  return (
    <div ref={ref}>
      <AppFrame module="competitor-gaps" status="Feed live">
        <div ref={cycleRef}>
          <div className="hidden sm:grid grid-cols-[1.3fr_0.5fr_0.8fr_0.8fr_1fr] gap-3 px-5 py-2.5 label-code text-white/40 border-b border-white/10">
            <span>Product</span>
            <span>State</span>
            <span className="text-right">Your price</span>
            <span className="text-right">Lowest rival</span>
            <span className="text-right">Gap</span>
          </div>
          {GAPS.map((g, i) => {
            const gap = ((g.ours - g.theirs) / g.ours) * 100;
            const alert = gap > LIMIT;
            const isFocus = focus && focus.i === i;
            return (
              <motion.button
                key={g.sku}
                type="button"
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
                onClick={() => {
                  const k = alerts.findIndex((a) => a.i === i);
                  if (k >= 0) pick(k);
                }}
                className={`w-full grid grid-cols-[1fr_auto] sm:grid-cols-[1.3fr_0.5fr_0.8fr_0.8fr_1fr] gap-x-3 gap-y-1 px-5 py-3.5 border-b border-white/10 text-left text-[14px] tabular-nums transition-colors ${
                  isFocus ? "bg-white/[0.06]" : ""
                } ${alert ? "cursor-pointer" : "cursor-default"}`}
              >
                <span className="font-head text-white">{g.sku}</span>
                <span className="text-white/55 text-right sm:text-left">{g.state}</span>
                <span className="text-white/80 sm:text-right">{usd(g.ours)}</span>
                <span className="text-white/80 text-right">{usd(g.theirs)}</span>
                <span className="col-span-2 sm:col-span-1 sm:text-right">
                  {alert ? (
                    <span className="inline-flex items-center gap-2 text-[var(--sw-orange)]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--sw-orange)]" />
                      {gap.toFixed(1)}% above rival
                    </span>
                  ) : (
                    <span className="text-white/45">{gap > 0 ? `${gap.toFixed(1)}% above` : `${Math.abs(gap).toFixed(1)}% below`}</span>
                  )}
                </span>
              </motion.button>
            );
          })}
          {focus && (
            <motion.div
              key={focus.sku}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-5 py-4 flex flex-wrap items-center justify-between gap-4"
            >
              <div className="text-[14px] text-white/70 leading-snug max-w-[34ch]">
                {focus.sku} in {focus.state} is more than {LIMIT}% above the lowest rival. A person decides.
              </div>
              <div className="flex gap-2">
                <span className="h-9 px-4 inline-flex items-center rounded-[2px] border border-[var(--sw-beige)] text-[var(--sw-beige)] font-head font-semibold text-[13px]">
                  Approve {usd(Math.ceil(focus.theirs + 0.5) - 0.01)}
                </span>
                <span className="h-9 px-4 inline-flex items-center rounded-[2px] border border-white/25 text-white/75 font-head font-semibold text-[13px]">
                  Keep price
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </AppFrame>
      <div className="label-code text-white/35 mt-3 text-right">Example data</div>
    </div>
  );
}

export function CaseResult() {
  return (
    <section id="case" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(900px 600px at 10% 90%, rgba(63,74,175,0.2), transparent 60%)" }}
      />
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">Client result</div>
          <h2 className="font-head text-white text-[34px] md:text-[46px] lg:text-[52px] leading-[1.05] max-w-[20ch]">
            A US specialty retailer now prices{" "}
            <span style={{ color: "var(--sw-mint)" }}>all 50 states</span> live
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[1fr_1fr_1.2fr] border-t border-white/10">
          <Reveal className="py-8 md:pr-8 border-b md:border-b-0 border-white/10">
            <div className="font-head text-white text-[64px] md:text-[80px] leading-none">50</div>
            <div className="mt-3 text-white/65 text-[15px] leading-snug max-w-[26ch]">
              US states priced live from one set of rules
            </div>
          </Reveal>
          <Reveal delay={0.07} className="py-8 md:px-8 border-b md:border-b-0 md:border-l border-white/10">
            <div className="font-head text-white text-[64px] md:text-[80px] leading-none">8</div>
            <div className="mt-3 text-white/65 text-[15px] leading-snug max-w-[26ch]">
              live margin types, recalculated per state
            </div>
          </Reveal>
          <Reveal delay={0.14} className="py-8 md:pl-8 md:border-l border-white/10">
            <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed">
              The retailer sells direct to consumers in all 50 states on Magento 2.
              Magento runs the storefront well, but state pricing had outgrown Excel.
            </p>
            <p className="mt-4 text-white/80 text-[16px] md:text-[17px] leading-relaxed">
              Excel and the manual formulas are now gone from the pricing process.
            </p>
          </Reveal>
        </div>

        <div className="mt-24 md:mt-32 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1fr_1.25fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="label-code text-white/55 mb-5">What the retailer is adding now</div>
            <h3 className="font-head text-white text-[26px] md:text-[34px] leading-[1.1] max-w-[20ch]">
              Competitor prices and gap alerts on the products that matter
            </h3>
            <p className="mt-6 text-white/75 text-[16px] md:text-[17px] leading-relaxed max-w-[46ch]">
              We are building a live feed of competitor prices for the retailer&apos;s
              most important products. When a rival&apos;s price moves past a set gap,
              the right person gets an alert.
            </p>
            <p className="mt-4 text-white/75 text-[16px] md:text-[17px] leading-relaxed max-w-[46ch]">
              OperaLayer suggests a new price that keeps the margin in view. A person
              approves the calls that matter before anything changes on the store.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <GapFeed />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
