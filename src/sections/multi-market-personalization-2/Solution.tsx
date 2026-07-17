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

const CAPABILITIES = [
  "Unified customer data platform (CDP)",
  "Market-specific data structure",
  "Web behavior and backend orders in one view",
  "Email and journey automation",
  "Predictive segmentation and product recommendations",
  "Paid audience sync (Meta, Google)",
  "Consent management per market",
  "Reporting dashboards (Bloomreach, Looker Studio)",
];

export function Solution() {
  return (
    <section id="solution" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT · outcomes */}
          <div>
            <Reveal>
              <span className="label-code mb-5 block text-[var(--sw-black)]/50">
                The solution
              </span>
              <h2 className="font-head max-w-[22ch] text-[30px] leading-[1.08] text-[var(--sw-black)] md:text-[40px]">
                We solve it by replacing your siloed market tools with one{" "}
                <span className="text-[var(--sw-blue)]">
                  Multi-Market Personalization Engine
                </span>
                .
              </h2>
              <span className="label-code mt-10 block text-[var(--sw-black)]/50">
                Results you can expect
              </span>
            </Reveal>

            <ul className="mt-6 flex flex-col gap-6">
              {OUTCOMES.map((o, i) => (
                <Reveal key={o.title} delay={i * 0.07}>
                  <li className="border-l-2 border-[var(--sw-blue)]/25 pl-5">
                    <h3 className="font-head text-[17px] leading-[1.25] text-[var(--sw-black)] md:text-[19px]">
                      {o.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-relaxed text-[var(--sw-black)]/65 md:text-[15px]">
                      <span
                        aria-hidden
                        className="mr-1.5 font-semibold text-[var(--sw-blue)]"
                      >
                        &rarr;
                      </span>
                      {o.how}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          {/* RIGHT · capability box */}
          <div className="lg:pt-16">
            <Reveal delay={0.1}>
              <div className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:p-8">
                <span className="mb-5 block h-px w-10 bg-[var(--sw-blue)]" />
                <h3 className="font-head text-[19px] leading-[1.2] text-[var(--sw-black)] md:text-[22px]">
                  Multi-Market Personalization Engine
                </h3>
                <ul className="mt-6 flex flex-col gap-3.5">
                  {CAPABILITIES.map((c) => (
                    <li
                      key={c}
                      className="flex gap-3 text-[14px] leading-snug text-[var(--sw-black)]/75 md:text-[15px]"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[var(--sw-blue)]" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
