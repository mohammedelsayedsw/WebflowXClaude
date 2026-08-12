"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Format() {
  return (
    <section
      id="the-format"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <Reveal>
              <div className="label-code mb-4 text-[var(--sw-black)]/55">
                The format
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em]">
                An honest conversation,{" "}
                <span className="text-[var(--sw-blue)]">with real numbers</span>
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <p className="text-[var(--sw-black)]/75 text-[16px] md:text-[19px] leading-[1.6] max-w-[60ch]">
              Each section opens with a short intro from scandiweb or
              Bloomreach, then turns into questions for the Sportland team on
              what they actually built and ran. Real results, honest lessons,
              and what they would tell a Baltic retailer starting the same
              journey today. Questions are shared with the panel in advance, so
              there is nothing to prepare to attend.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
