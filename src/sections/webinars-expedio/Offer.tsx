"use client";

import { Gift } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "./SectionLabel";

/* TODO before publish: the offer itself. Everything in [brackets] is a placeholder. */
export function Offer() {
  return (
    <section id="the-offer" className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <Reveal>
          <SectionLabel n={8} dark>The offer</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            A special offer <span style={{ color: "var(--sw-mint)" }}>for attendees</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <div
            className="mt-10 md:mt-14 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-8 rounded-[4px] border bg-white/[0.03] p-6 md:p-10"
            style={{ borderColor: "var(--sw-mint)" }}
          >
            <span
              aria-hidden
              className="inline-flex h-14 w-14 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-[4px] border border-white/10 bg-white/[0.05]"
              style={{ color: "var(--sw-mint)" }}
            >
              <Gift className="h-7 w-7 md:h-8 md:w-8" strokeWidth={1.75} />
            </span>
            <div>
              <div className="font-head font-bold text-white text-[20px] md:text-[26px] leading-tight">
                [Offer title]
              </div>
              <p className="mt-2.5 max-w-[68ch] text-white/70 text-[15px] md:text-[17px] leading-relaxed">
                [Offer details: what attendees get, and until when]
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
