"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "./SectionLabel";

function Block({ layer, name }: { layer: string; name: string }) {
  return (
    <div className="relative z-10 flex-1 rounded-[4px] border border-[var(--sw-black)]/10 bg-white px-6 py-8 md:py-10 text-center">
      <div className="label-code text-[var(--sw-black)]/55">{layer}</div>
      <div className="mt-3 font-head font-bold text-[var(--sw-black)] text-[28px] md:text-[34px] leading-none tracking-[-0.02em]">
        {name}
      </div>
    </div>
  );
}

export function FullStack() {
  return (
    <section id="the-full-stack" className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <SectionLabel n={4}>The full stack</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                Hyvä for the frontend,{" "}
                <span className="text-[var(--sw-blue)]">Expedio for the backend</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[56ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
                Hyvä makes the page faster in the shopper&apos;s browser. Expedio makes it faster on your
                server, before it is sent. A store can run both, and Expedio also works on Luma and custom
                themes.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.14}>
            <div className="relative flex flex-col sm:flex-row items-stretch gap-8 sm:gap-10">
              {/* the thin line joining the two blocks */}
              <span aria-hidden className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-[var(--sw-black)]/25 sm:hidden" />
              <span aria-hidden className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 bg-[var(--sw-black)]/25 hidden sm:block" />
              <Block layer="Frontend" name="Hyvä" />
              <Block layer="Backend" name="Expedio" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
