"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Tier = {
  size: string;
  range: string;
  rate: string;
  composition: string;
  pitch: string;
  who: string;
};

const tiers: Tier[] = [
  {
    size: "Small merchants",
    range: "under €10M GMV",
    rate: "€19/hr",
    composition: "Productized full-time developer",
    pitch: "One senior Adobe Commerce engineer, dedicated to your store. Roadmap, fixes, releases, the lot. Priced to fit a small-merchant budget without forcing you onto a generic ticket system.",
    who: "Founder · Head of engineering",
  },
  {
    size: "Mid-market",
    range: "€10–50M GMV",
    rate: "€29/hr",
    composition: "Blended dev · PM · QA team",
    pitch: "A right-sized team that covers development, project management, and QA at one rate. BA / PO time priced separately at €58/hr, billed only when you need it.",
    who: "CFO · COO · CEO",
  },
  {
    size: "Enterprise",
    range: "over €50M GMV, large in-house team",
    rate: "€29/hr",
    composition: "Cut the team in half, same or better output",
    pitch: "If you run a 10–20 person Magento team, we replace the bottom half of the bill without losing throughput. The math: your current rate × your team size × twelve months, versus ours.",
    who: "CEO · CTO · CIO",
  },
];

export function AtAGlance() {
  return (
    <section id="tiers" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            three tiers · pick the one that matches your size
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            One offer, three shapes,{" "}
            <span className="text-[var(--sw-blue)]">priced for the merchant on the other end</span>
            .
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            Most agencies price one band and either over-charge small merchants
            or under-staff enterprises. This program is three distinct offers
            tuned to merchant size – so the rate, the team shape, and the
            economics actually fit.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-6 md:gap-8 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.size} delay={i * 0.07}>
              <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8 flex flex-col">
                <div className="label-code text-[var(--sw-black)]/55 mb-4">
                  {t.range}
                </div>
                <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.15]">
                  {t.size}
                </h3>
                <div className="mt-6 pt-5 border-t border-[var(--sw-black)]/10 flex items-baseline gap-3">
                  <div className="font-head text-[var(--sw-black)] text-[44px] md:text-[52px] leading-none tabular-nums">
                    {t.rate}
                  </div>
                  <div className="text-[var(--sw-black)]/55 text-[13px] md:text-[14px]">
                    blended
                  </div>
                </div>
                <div className="mt-5 text-[var(--sw-black)] font-medium text-[15px] md:text-[16px]">
                  {t.composition}
                </div>
                <p className="mt-3 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed flex-1">
                  {t.pitch}
                </p>
                <div className="mt-6 pt-5 border-t border-[var(--sw-black)]/10 label-code text-[var(--sw-black)]/55">
                  who reads this · {t.who}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12 md:mt-16 rounded-[4px] border border-[var(--sw-black)]/10 bg-white/60 px-6 md:px-8 py-5 md:py-6 text-[13px] md:text-[14px] text-[var(--sw-black)]/70 leading-relaxed">
            All three rates cover Adobe Commerce engineering, support, releases,
            integrations, and ongoing optimization. Hourly. Billed monthly.
            No retainer minimums. No setup fees. No platform lock-in.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
