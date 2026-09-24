"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { TypingRace } from "./TypingRace";

export function Problem() {
  return (
    <section
      id="the-problem"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
            <span className="text-[var(--sw-black)]/55">2</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>The problem</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[26ch]">
            Someone on your team types{" "}
            <span className="text-[var(--sw-blue)]">every document in by hand</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          {/* No width cap: the line fits the content column whole, and the
              62ch it used to carry broke it in two for no reason. Narrower
              screens still wrap it as they need to. */}
          <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            Your AS/400 has no way to open a PDF, so a person has to read each
            one and type it in.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <TypingRace />
        </Reveal>

        <Reveal delay={0.26}>
          <p className="mt-8 md:mt-10 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            Queues grow, and skilled people spend their day on data entry.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
