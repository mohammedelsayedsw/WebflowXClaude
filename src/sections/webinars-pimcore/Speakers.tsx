"use client";

import { Reveal } from "@/components/primitives/Reveal";

/**
 * Only confirmed speakers are rendered. A card that reads "TBC" never goes out,
 * so while both names are pending the section carries the heading and the
 * supporting line alone. Adding a name to SPEAKERS renders its card.
 *
 * TODO: scandiweb speaker name, role, and portrait. A Pimcore speaker was
 * offered on the call and is still to be confirmed.
 */
const SPEAKERS: { name: string; role: string; photo?: string }[] = [];

export function Speakers() {
  return (
    <section
      id="speakers"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-white/60">
            <span className="text-white/55">8</span>
            <span className="h-px w-6 bg-white/15" />
            <span>The speakers</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            Who&apos;s{" "}
            <span style={{ color: "var(--sw-mint)" }}>running the session</span>
          </h2>
        </Reveal>

        {SPEAKERS.length > 0 ? (
          <div className="mt-10 md:mt-14 grid gap-3 md:gap-4 sm:grid-cols-2 lg:max-w-[62rem]">
            {SPEAKERS.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.07} className="h-full">
                <div className="flex h-full items-center gap-5 rounded-[4px] border border-white/12 bg-white/[0.035] p-6 md:p-7">
                  <div
                    aria-hidden
                    className="h-20 w-20 md:h-24 md:w-24 shrink-0 rounded-[4px] border border-white/12 bg-white/[0.05]"
                  />
                  <div>
                    <div className="font-head font-bold text-white text-[17px] md:text-[19px] leading-tight">
                      {s.name}
                    </div>
                    <div className="mt-1.5 text-white/65 text-[14px] md:text-[15px]">
                      {s.role}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : null}

        <Reveal delay={0.12}>
          <p className="mt-8 md:mt-10 max-w-[72ch] text-white/70 text-[16px] md:text-[18px] leading-relaxed">
            scandiweb is a certified Pimcore Platinum Solution Partner and builds
            product data and commerce systems for brands and manufacturers with
            large catalogs. Pimcore is the platform the demos run on.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
