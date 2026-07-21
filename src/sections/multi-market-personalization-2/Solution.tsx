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
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:items-start">
          {/* LEFT · heading */}
          <div>
            <Reveal>
              <span className="label-code mb-5 block text-[var(--sw-black)]/50">
                The fix
              </span>
              <h2 className="font-head max-w-[20ch] text-[30px] leading-[1.08] text-[var(--sw-black)] md:text-[40px]">
                We solve it by replacing your siloed market tools with one{" "}
                <span className="text-[var(--sw-blue)]">
                  Multi-Market Personalization Engine
                </span>
                .
              </h2>
            </Reveal>
          </div>

          {/* RIGHT · results */}
          <div>
            <Reveal>
              <span className="label-code mb-6 block text-[var(--sw-black)]/50">
                Results you can expect
              </span>
            </Reveal>

            <div className="flex flex-col gap-4">
              {OUTCOMES.map((o, i) => (
                <Reveal key={o.title} delay={i * 0.07}>
                  <div className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5 md:p-6">
                    <div className="label-code text-[11px] tabular-nums text-[var(--sw-black)]/35">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-head mt-2 text-[16px] font-bold leading-[1.25] text-[var(--sw-black)] md:text-[18px]">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-[var(--sw-black)]/55 md:text-[14px]">
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
        </div>
      </div>
    </section>
  );
}
