"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function TheGap() {
  return (
    <section id="the-gap" className="bg-lp-bright py-28 md:py-36 scroll-mt-20">
      <div className="wrap">
        <div className="max-w-[820px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">3</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>Why it matters</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] mt-6 max-w-[20ch]">
              The work is not the decisions,{" "}
              <span className="text-[var(--sw-blue)]">it is the digging</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-9 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed max-w-[62ch]">
              You know what to do once you see the full picture. The time goes
              into building that picture, opening analytics, checking stock,
              reading tickets, and matching it all up by hand before you can act.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div
              className="mt-9 md:mt-10 pl-5 md:pl-6 border-l-2"
              style={{ borderColor: "var(--sw-blue)" }}
            >
              <p className="font-head font-semibold text-[19px] md:text-[24px] lg:text-[28px] leading-[1.25] tracking-[-0.005em]">
                <span className="text-[var(--sw-blue)]">
                  Connect those systems to the chat, and you ask once.
                </span>{" "}
                <span className="text-[var(--sw-black)]">
                  The app reads across all of them and acts on your call.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
