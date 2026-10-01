"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { useCycle } from "@/sections/operalayer/shared/useCycle";

/**
 * From a rule change to a live storefront price. The rail fills to the
 * active step; each step shows what the pricing team sees at that moment.
 */
const STEPS = [
  {
    title: "A rule changes",
    body: "A new supplier cost, excise rate, or margin is entered once in OperaLayer.",
    panel: [
      ["Rule", "Excise, California"],
      ["Old rate", "$5.20 per unit"],
      ["New rate", "$5.75 per unit"],
      ["Changed by", "Pricing manager"],
    ],
  },
  {
    title: "Every state recalculates",
    body: "All 8 margin types are worked out again for each of the 50 states as soon as the rule is saved.",
    panel: [
      ["Products affected", "1,284"],
      ["States", "50"],
      ["Margin types", "8"],
      ["Prices changed", "3,912"],
    ],
  },
  {
    title: "You review the changes",
    body: "Old and new prices sit side by side, and your team approves them before anything is scheduled.",
    panel: [
      ["Largest increase", "+$1.50"],
      ["Largest decrease", "None"],
      ["Waiting for", "Commercial director"],
      ["Status", "Approved"],
    ],
  },
  {
    title: "The update goes out on schedule",
    body: "At the set time, OperaLayer sends the new prices to Magento as a CSV export through the Magento API.",
    panel: [
      ["Scheduled for", "Tonight, 02:00"],
      ["Format", "CSV through Magento API"],
      ["Rows", "3,912"],
      ["Result", "Imported"],
    ],
  },
  {
    title: "Customers see the new price",
    body: "Each state shows its updated price on the storefront, and nobody has to import a file by hand.",
    panel: [
      ["Storefront", "Magento 2"],
      ["States live", "50 of 50"],
      ["Manual steps", "0"],
      ["Next export", "Tomorrow, 02:00"],
    ],
  },
];

export function Schedule() {
  const { ref, index, pick } = useCycle(STEPS.length, 3400);
  const step = STEPS[index];

  return (
    <section id="schedule" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20 items-end">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/50 mb-5">From rule to storefront</div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[46px] lg:text-[52px] leading-[1.05] max-w-[18ch]">
              How a price change reaches your Magento store
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="flex items-end gap-5 lg:justify-end">
              <div className="font-head text-[var(--sw-blue)] text-[88px] md:text-[112px] leading-[0.8]">8</div>
              <div className="text-[15px] md:text-[16px] text-[var(--sw-black)]/70 leading-snug max-w-[22ch] pb-1">
                margin types recalculated for every state, the moment a rule changes
              </div>
            </div>
          </Reveal>
        </div>

        <div ref={ref} className="mt-16 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          <ol className="relative">
            <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-[var(--sw-black)]/10" aria-hidden />
            <motion.div
              aria-hidden
              className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-[var(--sw-blue)] origin-top"
              initial={false}
              animate={{ scaleY: index / (STEPS.length - 1) }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            {STEPS.map((s, i) => {
              const active = i === index;
              const past = i < index;
              return (
                <li key={s.title} className="relative pl-12 pb-7 last:pb-0">
                  <button onClick={() => pick(i)} className="text-left w-full group">
                    <span
                      className="absolute left-0 top-0.5 h-6 w-6 rounded-full border-2 flex items-center justify-center font-head text-[11px] font-semibold transition-colors bg-[var(--sw-beige)]"
                      style={{
                        borderColor: active || past ? "var(--sw-blue)" : "rgba(16,19,44,0.2)",
                        color: active || past ? "var(--sw-blue)" : "rgba(16,19,44,0.45)",
                      }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`block font-head text-[18px] md:text-[21px] leading-[1.2] transition-colors ${
                        active ? "text-[var(--sw-black)]" : "text-[var(--sw-black)]/45 group-hover:text-[var(--sw-black)]/75"
                      }`}
                    >
                      {s.title}
                    </span>
                    <motion.span
                      initial={false}
                      animate={{ height: active ? "auto" : 0, opacity: active ? 1 : 0 }}
                      transition={{ duration: 0.35 }}
                      className="block overflow-hidden"
                    >
                      <span className="block pt-2 text-[15px] md:text-[16px] text-[var(--sw-black)]/70 leading-relaxed max-w-[46ch]">
                        {s.body}
                      </span>
                    </motion.span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="rounded-[4px] bg-[var(--sw-black)] text-white overflow-hidden border border-[var(--sw-black)]">
            <div className="flex items-center justify-between px-5 h-10 border-b border-white/10">
              <span className="label-code text-white/55">
                operalayer.app <span className="text-white/25">/</span> <span className="text-white/90">price-run</span>
              </span>
              <span className="label-code text-white/45">Step {index + 1} of {STEPS.length}</span>
            </div>
            <motion.dl
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="px-5 py-2"
            >
              {step.panel.map(([k, v], i) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                  className="flex items-baseline justify-between gap-6 py-4 border-b border-white/10 last:border-b-0"
                >
                  <dt className="text-white/55 text-[14px]">{k}</dt>
                  <dd className="font-head text-[16px] md:text-[18px] text-right tabular-nums">
                    {v === "Approved" || v === "Imported" ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[var(--sw-mint)]" />
                        {v}
                      </span>
                    ) : (
                      v
                    )}
                  </dd>
                </motion.div>
              ))}
            </motion.dl>
            <div className="px-5 pb-4 label-code text-white/35">Example figures</div>
          </div>
        </div>
      </div>
    </section>
  );
}
