"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SPEAKERS, SpeakerBox } from "./panel";

export function Speakers() {
  return (
    <section
      id="speakers"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em] mb-12 md:mb-16">
            Meet the panel
          </h2>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SPEAKERS.map((s, i) => (
            <Reveal key={`${s.company}-${i}`} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-white/12 bg-white/[0.03] p-5 md:p-6">
                <SpeakerBox speaker={s} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
