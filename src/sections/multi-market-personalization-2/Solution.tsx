"use client";

import { Reveal } from "@/components/primitives/Reveal";

const OUTCOMES = [
  {
    title: "Get a higher return on ad spend",
    how: "by syncing real customer segments and purchase-likelihood models to Meta and Google",
  },
  {
    title: "Grow email orders and revenue",
    how: "by running per-market automation flows on one unified set of customer data",
  },
  {
    title: "Raise average order value",
    how: "by personalizing recommendations across web, email, and ads",
  },
  {
    title: "Grow repeat revenue and lean less on ads",
    how: "by triggering retention journeys from real customer behavior",
  },
  {
    title: "Run every market from one place",
    how: "by unifying siloed customer data with a market-specific structure",
  },
];

export function Solution() {
  return (
    <section id="solution" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        {/* heading · full width, transition-line scale */}
        <Reveal>
          <span className="label-code mb-4 block text-[var(--sw-black)]/50">
            The fix
          </span>
          <h2 className="font-head max-w-[38ch] text-[20px] leading-[1.15] text-[var(--sw-black)] md:text-[26px]">
            We solve it by replacing your siloed market tools with one{" "}
            <span className="text-[var(--sw-blue)]">
              Multi-Market Personalization Engine
            </span>
            .
          </h2>
        </Reveal>

        <Reveal delay={0.05}>
          <span className="label-code mt-12 mb-5 block text-[var(--sw-black)]/50 md:mt-14">
            Results you can expect
          </span>
        </Reveal>

        {/* five parallel results · 3 + 2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-4">
                <h3 className="font-head text-[16px] font-bold leading-[1.25] text-[var(--sw-black)] md:text-[17px]">
                  {o.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--sw-black)]/55">
                  <span
                    aria-hidden
                    className="mr-1.5 font-semibold text-[var(--sw-blue)]"
                  >
                    &rarr;
                  </span>
                  {o.how}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
