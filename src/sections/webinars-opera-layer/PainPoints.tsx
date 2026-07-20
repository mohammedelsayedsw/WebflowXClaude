"use client";

import { Reveal } from "@/components/primitives/Reveal";

const stats: { value: string; label: string; source: string }[] = [
  {
    value: "40%+",
    label:
      "of wholesale distributors still run on standalone systems, manual processes, and spreadsheets",
    source: "Klipboard distribution benchmark",
  },
  {
    value: "55%",
    label:
      "have bought ERP, CRM, and eCommerce systems, and most have never connected them",
    source: "Distribution Strategy Group, 2026",
  },
  {
    value: "22%",
    label: "of invoices need a person to stop and fix a mismatch",
    source: "AP industry benchmarks",
  },
];

export function PainPoints() {
  return (
    <section id="the-pain" className="bg-lp-bright py-28 md:py-36 scroll-mt-20">
      <div className="wrap">
        <div className="mb-12 md:mb-16 max-w-[760px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">3</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The pain</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em]">
              More systems,{" "}
              <span className="text-[var(--sw-blue)]">more gaps between them</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
              That story is not unusual. The average distributor or B2B seller
              runs a stack of specialised systems, and each one is good in its
              lane. The cost lives in the space between them: the work that no
              single system owns, done by hand.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08}>
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 sm:p-7">
                <div className="font-head font-bold text-[var(--sw-blue)] text-[40px] md:text-[52px] leading-none tabular-nums">
                  {s.value}
                </div>
                <p className="mt-4 text-[var(--sw-black)]/75 text-[14px] md:text-[15px] leading-relaxed">
                  {s.label}
                </p>
                <div className="mt-4 text-[var(--sw-black)]/45 text-[11px] leading-snug">
                  {s.source}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
