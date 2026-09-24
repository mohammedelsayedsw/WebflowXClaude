"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Host() {
  return (
    <section
      id="your-host"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
            <span className="text-[var(--sw-black)]/55">10</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>Your host</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            Meet the person{" "}
            <span className="text-[var(--sw-blue)]">who built it</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-14 grid gap-8 lg:gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <Reveal delay={0.12}>
            <div className="flex gap-5 md:gap-6 rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:p-7">
              {/* TODO: speaker photo for Dmitrijs Tarasovs, in this 4px box. */}
              <div
                aria-hidden
                className="h-24 w-24 md:h-28 md:w-28 shrink-0 rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] flex items-center justify-center font-head text-[var(--sw-black)]/35 text-[22px]"
              >
                DT
              </div>
              <div>
                <div className="font-head font-bold text-[var(--sw-black)] text-[19px] md:text-[22px] leading-tight">
                  Dmitrijs Tarasovs
                </div>
                <div className="mt-1 text-[var(--sw-black)]/60 text-[14px] md:text-[15px]">
                  Founder of LegacyBridge
                </div>
                {/* Left as a marked placeholder on purpose. The brief rules out
                    inventing credentials, so nothing stands here until his own
                    two sentences arrive. */}
                <p className="mt-4 font-mono text-[13px] leading-relaxed text-[var(--sw-orange)]">
                  [ADD: two short sentences from Dmitrijs, for example his
                  background and what he has built]
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <figure className="border-l-2 border-[var(--sw-blue)] pl-6 md:pl-8">
              <blockquote className="font-head text-[var(--sw-black)] text-[22px] md:text-[28px] lg:text-[32px] leading-[1.25] tracking-[-0.01em]">
                &ldquo;We built LegacyBridge so nobody has to retype an invoice
                again.&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-[var(--sw-black)]/55 text-[14px] md:text-[15px]">
                Dmitrijs Tarasovs
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
