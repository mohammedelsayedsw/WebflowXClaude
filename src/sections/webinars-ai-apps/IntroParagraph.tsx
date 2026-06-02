"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function IntroParagraph() {
  return (
    <section
      id="intro"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap max-w-[820px]">
        <Reveal>
          <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
            <span className="text-[var(--sw-black)]/55">01</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>The shift</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="text-[var(--sw-black)] text-[18px] md:text-[22px] leading-[1.5] font-head font-medium">
            When the App Store launched, the brands that moved first built
            distribution advantages that took years to replicate. The same
            shift is happening now, inside{" "}
            <span className="text-[var(--sw-blue)]">ChatGPT and Claude</span>.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-7 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed">
            Both platforms have opened a new app layer. Users don&apos;t just
            ask questions anymore, they use brand apps directly inside the chat
            to search products, place orders, get quotes, and manage accounts.
            The first wave of brands is already live.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-5 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed">
            In this webinar, scandiweb&apos;s COO Rolands Popovs will show you exactly
            what a ChatGPT and Claude App looks like for a real eCommerce
            business, how it connects to your existing systems, and what it
            takes to go live in under two weeks.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-9 font-head font-semibold text-[var(--sw-black)] text-[17px] md:text-[19px]">
            June 17, 2026 at 10:00 AM (GMT)
          </p>
        </Reveal>
      </div>
    </section>
  );
}
