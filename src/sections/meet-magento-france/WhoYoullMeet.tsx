"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

export function WhoYoullMeet() {
  return (
    <section id="who" className="bg-[var(--sw-black)] py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <SectionLabel index="02">Who you&apos;ll meet</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-6 max-w-[18ch]">
            From scandiweb,{" "}
            <span style={{ color: "var(--sw-mint)" }}>Michael Bliah</span>.
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-start">
          <Reveal delay={0.2}>
            {/* TODO: replace placeholder avatar with real photo of Michael Bliah */}
            <div className="h-32 w-32 md:h-40 md:w-40 rounded-[4px] bg-white/10 border border-white/15 flex items-center justify-center">
              <span className="font-head text-white/85 text-[44px] md:text-[56px] leading-none">
                MB
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div>
              <div className="label-code text-[var(--sw-mint)]">
                VP, NORTH AMERICA &amp; B2B
              </div>
              <p className="text-white/85 text-[17px] md:text-[20px] leading-relaxed mt-4 max-w-[60ch]">
                Michael runs scandiweb&apos;s North America and B2B practice,
                focused on Adobe Commerce and headless work across the US and
                Canada.
              </p>
              <p className="text-white/80 text-[15px] md:text-[17px] leading-relaxed mt-4 max-w-[60ch]">
                He&apos;s a useful person to grab time with if you&apos;re
                weighing US market entry, sitting mid-migration on B2B Adobe
                Commerce, sizing a re-platforming decision, or comparing
                partners for a multi-year build. Direct conversations, no
                scripted pitch.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
