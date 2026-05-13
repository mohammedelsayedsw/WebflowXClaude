"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Scenario = {
  label: string;
  size: string;
  team: string;
  marketRate: string;
  marketMonthly: string;
  ourRate: string;
  ourMonthly: string;
  delta: string;
  note: string;
};

const scenarios: Scenario[] = [
  {
    label: "Scenario 1",
    size: "Under €10M GMV",
    team: "1 dev · 160 hrs/month",
    marketRate: "€55/hr",
    marketMonthly: "€8,800",
    ourRate: "€19/hr",
    ourMonthly: "€3,040",
    delta: "−65%",
    note: "Productized full-time developer. Same hours, same person every month, fraction of the bill.",
  },
  {
    label: "Scenario 2",
    size: "€10–50M GMV",
    team: "3 dev · 1 PM · 1 QA · 800 hrs/month",
    marketRate: "€65/hr",
    marketMonthly: "€52,000",
    ourRate: "€29/hr",
    ourMonthly: "€23,200",
    delta: "−55%",
    note: "Blended team rate. PM and QA included. BA / PO billed at €58/hr only when scoping new work.",
  },
  {
    label: "Scenario 3",
    size: "Over €50M GMV",
    team: "12-person in-house Magento team · 2,000 hrs/month",
    marketRate: "€70/hr",
    marketMonthly: "€140,000",
    ourRate: "€29/hr",
    ourMonthly: "€58,000",
    delta: "−59%",
    note: "Half the bill. Same throughput as your current 12-person setup, on the same release cadence. Math on the table.",
  },
];

export function TheMath() {
  return (
    <section id="math" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            the math, on paper
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[28ch]">
            Three real shapes.{" "}
            <span className="text-[var(--sw-blue)]">Three real numbers</span>{" "}
            against the market rate.
          </h2>
          <p className="mt-7 max-w-[68ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            Market rates below are typical Western European Adobe Commerce
            agency rates as of 2026. Your current contract may be higher or
            lower &mdash; bring it to the math call and we&apos;ll run the
            comparison against your actual numbers, not these.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 space-y-6 md:space-y-8">
          {scenarios.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <article className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white overflow-hidden">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-0">
                  <div className="p-7 md:p-9 lg:border-r border-b lg:border-b-0 border-[var(--sw-black)]/10 bg-[var(--sw-black)]/[0.02]">
                    <div className="label-code text-[var(--sw-black)]/55 mb-3">
                      {s.label}
                    </div>
                    <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.15]">
                      {s.size}
                    </h3>
                    <div className="mt-4 text-[13px] md:text-[14px] text-[var(--sw-black)]/70 leading-relaxed">
                      {s.team}
                    </div>
                    <p className="mt-6 pt-5 border-t border-[var(--sw-black)]/10 text-[13px] md:text-[14px] text-[var(--sw-black)]/65 leading-relaxed">
                      {s.note}
                    </p>
                  </div>

                  <div className="p-7 md:p-9 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-center">
                    <div>
                      <div className="label-code text-[var(--sw-black)]/55 mb-2">
                        market rate
                      </div>
                      <div className="font-head text-[var(--sw-black)]/45 text-[26px] md:text-[34px] leading-none tabular-nums line-through">
                        {s.marketMonthly}
                      </div>
                      <div className="mt-2 text-[12px] md:text-[13px] text-[var(--sw-black)]/55">
                        at {s.marketRate}
                      </div>
                    </div>
                    <div className="md:border-l md:border-r border-[var(--sw-black)]/10 md:px-8">
                      <div className="label-code text-[var(--sw-blue)] mb-2">
                        our rate
                      </div>
                      <div className="font-head text-[var(--sw-black)] text-[32px] md:text-[44px] leading-none tabular-nums">
                        {s.ourMonthly}
                      </div>
                      <div className="mt-2 text-[12px] md:text-[13px] text-[var(--sw-black)]/55">
                        at {s.ourRate}
                      </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <div className="label-code text-[var(--sw-black)]/55 mb-2">
                        monthly delta
                      </div>
                      <div className="font-head text-[var(--sw-blue)] text-[32px] md:text-[44px] leading-none tabular-nums">
                        {s.delta}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-[13px] md:text-[14px] text-[var(--sw-black)]/55 leading-relaxed max-w-[78ch]">
            Numbers shown are illustrative monthly totals at common team shapes.
            Bring your last support invoice to the math call; we&apos;ll do the
            comparison against your real spend, your real team, your real hour
            count.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
