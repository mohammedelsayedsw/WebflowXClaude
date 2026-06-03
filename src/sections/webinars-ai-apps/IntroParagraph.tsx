"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function IntroParagraph() {
  return (
    <section
      id="the-shift"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap max-w-[860px]">
        <Reveal>
          <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
            <span className="text-[var(--sw-black)]/55">1</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>The shift</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] max-w-[24ch]">
            Buyers now ask{" "}
            <span className="text-[var(--sw-blue)]">
              ChatGPT and Claude
            </span>{" "}
            what your business used to answer
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-9 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
            When the App Store launched in 2008, the brands that built early
            owned their category for years. ChatGPT and Claude reached that
            same moment now. Hundreds of millions of people already ask them
            what to buy, where to book, and how to get support.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-5 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed">
            Both platforms opened a new app layer. People use brand apps inside
            the chat to search products, place orders, get quotes, and manage
            their accounts. The first brands went live already.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-5 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed">
            In this webinar, scandiweb&apos;s COO Rolands Popovs walks you
            through a working ChatGPT and Claude app for a real eCommerce
            business, shows how it connects to your systems, and explains what
            it takes to go live in under two weeks.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-9 font-head font-semibold text-[var(--sw-black)] text-[17px] md:text-[19px]">
            Tuesday, June 17, 2026 at 10:00 AM (GMT)
          </p>
        </Reveal>
      </div>
    </section>
  );
}
