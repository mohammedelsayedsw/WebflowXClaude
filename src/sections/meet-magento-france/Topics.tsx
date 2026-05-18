"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const topics = [
  {
    title: "Adobe Commerce and headless",
    body: "What's working in production, what's slowing teams down.",
  },
  {
    title: "AI in eCommerce",
    body: "Where it's earning its keep, where it's still noise.",
  },
  {
    title: "Re-platforming",
    body: "Magento, Shopify, headless, or stay where you are.",
  },
  {
    title: "CRO that moves the number",
    body: "Programs that change the number, not just the heatmap.",
  },
];

export function Topics() {
  return (
    <section id="topics" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <SectionLabel index="01">What we want to talk about</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-6 max-w-[22ch]">
            Things we&apos;ve been{" "}
            <span className="text-[var(--sw-blue)]">deep in</span> this year.
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 gap-4 md:gap-6">
          {topics.map((t, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="relative bg-white border border-[var(--sw-black)]/8 rounded-[4px] p-6 md:p-8 h-full">
                <div className="absolute top-0 left-0 h-1 w-12 bg-[var(--sw-blue)]" />
                <h3 className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.15]">
                  {t.title}
                </h3>
                <p className="text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed mt-3">
                  {t.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed mt-12 md:mt-16 max-w-[60ch]">
            This is a conversation, not a pitch. We leave the deck at the hotel.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
