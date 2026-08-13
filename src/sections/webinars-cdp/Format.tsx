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
                The format of webinar
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
              Every part digs into a real decision from Sportland&apos;s build.
              scandiweb and Bloomreach set up each one, then press the Sportland
              team on how it played out. You&apos;ll hear what worked, what
              didn&apos;t, and what they&apos;d tell a retailer their size
              starting out today. Bring your questions for the live Q&amp;A with
              all three teams.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
