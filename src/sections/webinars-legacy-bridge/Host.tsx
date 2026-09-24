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

        <div className="mt-10 md:mt-14 grid gap-8 lg:gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal delay={0.12}>
            <div className="flex gap-5 md:gap-6 rounded-[4px] border border-white/10 bg-white/[0.03] p-6 md:p-7">
              {/* TODO: speaker photo for Dmitrijs Tarasovs, in this 4px box. */}
              <div
                aria-hidden
                className="h-24 w-24 md:h-28 md:w-28 shrink-0 rounded-[4px] border border-white/10 bg-white/[0.06] flex items-center justify-center font-head text-white/35 text-[22px]"
              >
                DT
              </div>
              <div>
                <div className="font-head font-bold text-white text-[19px] md:text-[22px] leading-tight">
                  Dmitrijs Tarasovs
                </div>
                <div className="mt-1 text-white/60 text-[14px] md:text-[15px]">
                  Founder of LegacyBridge
                </div>
                <p className="mt-4 text-white/70 text-[14px] md:text-[15px] leading-relaxed">
                  Dmitrijs spent almost five years at scandiweb as a lead
                  software engineer, connecting online stores to the business
                  systems behind them. In 2025 he started LegacyBridge so teams
                  can stop typing documents into the AS/400.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <figure className="border-l-2 pl-6 md:pl-8" style={{ borderColor: "var(--sw-mint)" }}>
              <blockquote className="font-head text-white text-[22px] md:text-[28px] lg:text-[32px] leading-[1.25] tracking-[-0.01em]">
                &ldquo;We built LegacyBridge so nobody has to retype an invoice
                again.&rdquo;
              </blockquote>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
