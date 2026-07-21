"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function InShort() {
  return (
    <section id="in-short" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="max-w-[64rem]">
          <Reveal>
            <span className="label-code block text-[var(--sw-black)]/50">
              In short
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head mt-5 max-w-[24ch] text-[28px] leading-[1.1] text-[var(--sw-black)] md:text-[40px]">
              What the Multi-Market Personalization Engine is
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-7 max-w-[68ch] text-[16px] leading-relaxed text-[var(--sw-black)]/70 md:text-[18px]">
              It is a customer data platform set up for retailers selling in more
              than one market. It pulls customer data out of the separate tools
              each market runs, joins it into one view of the customer, and uses
              that to personalise email, ads, and your site. Each market keeps
              its own store view, language, and assortment, so nothing gets mixed
              up.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-[68ch] text-[16px] leading-relaxed text-[var(--sw-black)]/70 md:text-[18px]">
              Your store, ERP, and POS stay as they are. This sits across them.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
