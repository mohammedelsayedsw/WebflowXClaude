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
        <div className="max-w-[46rem]">
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
      </div>
    </section>
  );
}
