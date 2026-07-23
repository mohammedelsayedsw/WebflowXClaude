"use client";

import { Reveal } from "@/components/primitives/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Get your data straight",
    body: "We connect your nursery, CRM, recruitment, marketing, and finance systems, plus outside market data, into one place. We tidy the core information, keep a record of where each number comes from, and protect sensitive family details.",
  },
  {
    n: "2",
    title: "See occupancy before it happens",
    body: "We build a forward view of children joining and leaving, planned and unplanned, then show how full each room will be, flag capacity risks, and highlight regional patterns.",
  },
  {
    n: "3",
    title: "Decide where to grow",
    body: "We combine local demand, drive times, quality, pricing, capacity, and family types to rank the markets, sites, and acquisition targets worth a closer look.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
      <div className="wrap">
        <div className="mb-12 max-w-[60rem] md:mb-16">
          <Reveal>
            <span className="label-code mb-4 block text-white/60">
              How it works
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              Get the numbers right first, then add the{" "}
              <span className="text-[var(--sw-mint)]">
                predictions that change decisions
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col rounded-[4px] border border-white/10 bg-white/[0.02] p-6">
                <span className="font-head text-[26px] leading-none text-[var(--sw-mint)] md:text-[30px]">
                  {s.n}
                </span>
                <h3 className="font-head mt-4 text-[18px] leading-[1.2] text-white md:text-[20px]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/70 md:text-[14px]">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-[80ch] text-[14px] leading-relaxed text-white/55 md:mt-10 md:text-[15px]">
            Board reporting, family insight, recruitment analytics, and workforce
            planning are added as the foundation matures.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
