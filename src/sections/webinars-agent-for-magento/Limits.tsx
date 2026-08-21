"use client";

import { Reveal } from "@/components/primitives/Reveal";

/**
 * Handles the objection before the reader has to raise it. Deliberately plain,
 * no cards, no accent color on the body, so it reads as a straight answer
 * rather than another sales panel.
 */
export function Limits() {
  return (
    <section
      id="what-it-will-not-do"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.25fr] lg:items-start">
          <div>
            <Reveal>
              <div className="label-code mb-5 text-[var(--sw-black)]/50">
                The honest part
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                Where a person still makes the call
              </h2>
            </Reveal>
          </div>

          <div className="flex flex-col gap-6 md:gap-7">
            <Reveal delay={0.1}>
              <p className="text-[var(--sw-black)]/75 text-[16px] md:text-[18px] leading-relaxed max-w-[64ch]">
                An agent with access to a live store is a fair thing to be
                careful about. Ari prepares changes, it does not release them.
                It cannot push to production on its own, and every change
                arrives as a pull request with a preview and a plain list of
                what changed. Decisions about your business, your data, and your
                release stay with your team.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="text-[var(--sw-black)]/60 text-[16px] md:text-[18px] leading-relaxed max-w-[64ch]">
                We&apos;ll cover exactly where the line sits, and take your
                questions on it live.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
