"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Host() {
  return (
    <section
      id="your-host"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-white">
            <span className="text-white/55">8</span>
            <span className="h-px w-6 bg-white/20" />
            <span>Your host</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            Meet the person{" "}
            <span style={{ color: "var(--sw-mint)" }}>who built the software</span>
          </h2>
        </Reveal>

        {/* One card across the width, photo left and words right. The quote
            that sat beside it is gone, so the card no longer has to share the
            row and the photo can be the size it wants to be. */}
        <Reveal delay={0.12}>
          <div className="mt-10 md:mt-14 flex flex-col gap-6 md:flex-row md:items-center md:gap-9 rounded-[4px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            {/* TODO: speaker photo for Dmitrijs Tarasovs, in this 4px box. */}
            <div
              aria-hidden
              className="w-full max-w-[280px] aspect-square md:h-[280px] md:w-[280px] shrink-0 rounded-[4px] border border-white/10 bg-white/[0.06] flex items-center justify-center font-head text-white/35 text-[44px]"
            >
              DT
            </div>
            <div>
              <div className="font-head font-bold text-white text-[22px] md:text-[28px] leading-tight">
                Dmitrijs Tarasovs
              </div>
              <div className="mt-1.5 text-white/60 text-[15px] md:text-[16px]">
                Founder of LegacyBridge
              </div>
              <p className="mt-5 max-w-[68ch] text-white/70 text-[15px] md:text-[17px] leading-relaxed">
                Dmitrijs spent almost five years at scandiweb as a lead software
                engineer, connecting online stores to the business systems
                behind them. In 2025 he started LegacyBridge so teams can stop
                typing documents into the AS/400.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
