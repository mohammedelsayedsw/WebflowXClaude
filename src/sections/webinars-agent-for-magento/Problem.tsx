"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Problem() {
  return (
    <section
      id="the-problem"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[52rem]">
          <Reveal>
            <div className="label-code mb-5 text-[var(--sw-black)]/50">
              The way it works today
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              Every change on a Magento store starts with a wait
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-6 md:mt-8 text-[var(--sw-black)]/75 text-[16px] md:text-[18px] leading-relaxed max-w-[62ch]">
              A banner needs changing, a price rule is wrong, a size guide is
              missing. You write a ticket. You wait for a quote. Somewhere
              behind that ticket sit forty more, and the seasonal campaign you
              wanted last month is now next quarter&apos;s problem. The work is
              small. The queue is what costs you.
            </p>
          </Reveal>
        </div>

        {/* The anchor names the cost of the problem before the page names the
            fix, so it carries more weight than the body copy around it.
            TODO: verify the 8 days and $6,000 figures at publish time. */}
        <Reveal delay={0.2}>
          <div className="mt-12 md:mt-16 rounded-[4px] border-l-2 border-[var(--sw-blue)] bg-white/60 py-8 px-7 md:py-10 md:px-10">
            <p className="font-head text-[var(--sw-black)] text-[20px] sm:text-[24px] md:text-[30px] lg:text-[34px] leading-[1.2] tracking-[-0.015em] max-w-[26ch] sm:max-w-none">
              A typical Magento store waits{" "}
              <span style={{ color: "var(--sw-blue)" }}>8 days</span> for a
              change and spends around{" "}
              <span style={{ color: "var(--sw-blue)" }}>$6,000 a month</span> on
              development
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mt-10 md:mt-12 text-[var(--sw-black)]/70 text-[17px] md:text-[19px] leading-relaxed">
            That is the part that just changed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
