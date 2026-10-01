"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

const SYSTEMS = [
  { name: "ERP", job: "Books, ledger, and orders" },
  { name: "CRM", job: "Leads and accounts" },
  { name: "eCommerce", job: "Storefront and checkout" },
  { name: "Warehouse", job: "Stock and fulfillment" },
  { name: "Finance", job: "Reporting and close" },
];

const GAPS = [
  "Reports that need data from every system",
  "A weekly process nobody owns",
  "Decisions waiting on missing context",
  "Logic too specific for any platform",
];

const TODAY = [
  "Spreadsheets",
  "Someone's inbox",
  "A manual Monday routine",
  "Custom software from 2014",
  "A backlog item in its third year",
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Gaps() {
  return (
    <section id="gaps" className="bg-lp-bright py-28 md:py-36 overflow-hidden">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 items-end">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/50 mb-5">The pattern we keep seeing</div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[54px] leading-[1.05] max-w-[18ch]">
              Each system does its job well. The work between them{" "}
              <span className="text-[var(--sw-blue)]">has no owner.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[48ch]">
              It is too small to justify customizing a platform and too important to
              leave in a spreadsheet. So it stays where it is for years, and it costs
              your team hours every week.
            </p>
          </Reveal>
        </div>

        {/* Desktop diagram: systems on top, the gaps sit on the borders between them */}
        <div className="mt-16 md:mt-20 hidden md:block">
          <div className="grid grid-cols-5 border-t border-[var(--sw-black)]/20">
            {SYSTEMS.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.08, duration: 0.6, ease }}
                className={`pt-6 pb-8 pr-6 ${i > 0 ? "pl-6 border-l border-[var(--sw-black)]/12" : ""}`}
              >
                <div className="font-head text-[var(--sw-black)] text-[24px] lg:text-[28px] leading-none">{s.name}</div>
                <div className="mt-2 text-[14px] text-[var(--sw-black)]/55">{s.job}</div>
                <div className="mt-5 flex items-center gap-2 label-code text-[var(--sw-blue)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--sw-blue)]" />
                  Working as designed
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative px-[10%]">
            <div className="grid grid-cols-4">
              {GAPS.map((g, i) => (
                <div key={g} className="relative px-3">
                  {/* bracket reaching up to the two neighbouring systems */}
                  <svg viewBox="0 0 100 24" preserveAspectRatio="none" className="w-full h-6" aria-hidden>
                    <motion.path
                      d="M2 0 V12 H98 V0"
                      fill="none"
                      stroke="var(--sw-orange)"
                      strokeWidth={1.25}
                      vectorEffect="non-scaling-stroke"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.12, duration: 0.7, ease }}
                    />
                    <motion.path
                      d="M50 12 V24"
                      fill="none"
                      stroke="var(--sw-orange)"
                      strokeWidth={1.25}
                      vectorEffect="non-scaling-stroke"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1 + i * 0.12, duration: 0.3 }}
                    />
                  </svg>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 + i * 0.12, duration: 0.5, ease }}
                    className="border-l-2 border-[var(--sw-orange)] bg-white px-4 py-3.5"
                  >
                    <div className="label-code text-[var(--sw-orange)] mb-1.5">Between systems</div>
                    <div className="font-head text-[var(--sw-black)] text-[16px] lg:text-[17px] leading-[1.25]">{g}</div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: the same story as a stacked list */}
        <div className="mt-12 md:hidden">
          <div className="border-t border-[var(--sw-black)]/20">
            {SYSTEMS.map((s) => (
              <div key={s.name} className="flex items-baseline justify-between gap-4 py-3 border-b border-[var(--sw-black)]/10">
                <span className="font-head text-[var(--sw-black)] text-[18px]">{s.name}</span>
                <span className="text-[13px] text-[var(--sw-black)]/55 text-right">{s.job}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3">
            {GAPS.map((g, i) => (
              <Reveal key={g} delay={i * 0.07}>
                <div className="border-l-2 border-[var(--sw-orange)] bg-white px-4 py-3">
                  <div className="label-code text-[var(--sw-orange)] mb-1">Between systems</div>
                  <div className="font-head text-[var(--sw-black)] text-[16px] leading-[1.25]">{g}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-14 md:mt-16 border-t border-[var(--sw-black)]/15 pt-8 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[14rem_1fr] gap-5 md:gap-10 items-start">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/50">Where that work lives today</div>
          </Reveal>
          <ul className="flex flex-wrap gap-x-3 gap-y-3">
            {TODAY.map((t, i) => (
              <motion.li
                key={t}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.09, duration: 0.4 }}
                className="inline-flex items-center gap-2.5 rounded-[2px] border border-[var(--sw-black)]/15 bg-white px-3.5 py-2 text-[14px] md:text-[15px] text-[var(--sw-black)]/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--sw-orange)]" />
                {t}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
