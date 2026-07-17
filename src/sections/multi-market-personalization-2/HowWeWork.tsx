"use client";

import { Reveal } from "@/components/primitives/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Audit",
    body: "We map your markets, tools, and data, and find where spend and orders leak.",
  },
  {
    n: "2",
    title: "Platform selection",
    body: "We compare options against your stack and budget, platform-neutral, and pick what fits.",
  },
  {
    n: "3",
    title: "Unify",
    body: "We stand up the platform with a market-specific structure and connect your web and backend data.",
  },
  {
    n: "4",
    title: "Automation and ads",
    body: "Per-market flows and predictive audiences go live across email, web, and paid.",
  },
  {
    n: "5",
    title: "Reporting your team can read",
    body: "Dashboards your marketing team runs without touching the backend.",
  },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="mb-14 max-w-[52rem] md:mb-20">
          <Reveal>
            <span className="label-code mb-5 block text-[var(--sw-black)]/50">
              How we roll it out
            </span>
            <h2 className="font-head text-[34px] leading-[1.05] text-[var(--sw-black)] md:text-[48px] lg:text-[56px]">
              Built for your markets,{" "}
              <span className="text-[var(--sw-blue)]">not a template</span>
            </h2>
            <p className="mt-6 max-w-[72ch] text-[16px] leading-relaxed text-[var(--sw-black)]/70 md:text-[17px]">
              The same approach that unified Sportland, run against your stack.
              Platform-neutral in selection, market-specific in build.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:gap-7 md:p-7">
                <span className="font-head w-8 text-[24px] leading-none text-[var(--sw-blue)] md:w-10 md:text-[28px]">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-head text-[18px] leading-[1.2] text-[var(--sw-black)] md:text-[20px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[72ch] text-[14px] leading-relaxed text-[var(--sw-black)]/65 md:text-[15px]">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
