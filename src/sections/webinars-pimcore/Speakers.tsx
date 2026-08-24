"use client";

import { User } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

/**
 * Both cards are placeholders. The scandiweb speaker is being assigned, and a
 * Pimcore speaker is likely but not yet confirmed, so the second card carries a
 * to-be-confirmed marker rather than being hidden.
 *
 * TODO: real names, roles, and portraits before publish.
 */
const SPEAKERS: { name: string; role: string; tbc?: boolean }[] = [
  { name: "[Speaker name TBC]", role: "[Role] at scandiweb" },
  { name: "[Speaker name TBC]", role: "Pimcore", tbc: true },
];

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
            Who&apos;s <span style={{ color: "var(--sw-mint)" }}>running the session</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-14 grid gap-3 md:gap-4 sm:grid-cols-2 lg:max-w-[62rem]">
          {SPEAKERS.map((s, i) => (
            <Reveal key={`${s.role}-${i}`} delay={i * 0.07} className="h-full">
              <div className="flex h-full items-center gap-5 rounded-[4px] border border-white/12 bg-white/[0.035] p-6 md:p-7">
                {/* TODO: real portrait */}
                <div
                  aria-hidden
                  className="flex h-20 w-20 md:h-24 md:w-24 shrink-0 items-center justify-center rounded-[4px] border border-white/12 bg-white/[0.05] text-white/30"
                >
                  <User className="h-8 w-8" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-head font-bold text-white text-[17px] md:text-[19px] leading-tight">
                    {s.name}
                  </div>
                  <div className="mt-1.5 text-white/65 text-[14px] md:text-[15px]">
                    {s.role}
                  </div>
                  {s.tbc ? (
                    <span className="mt-3 inline-flex items-center rounded-[2px] border border-white/25 px-2 py-0.5 label-code text-white/60">
                      To be confirmed
                    </span>
                  ) : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.24}>
          <p className="mt-8 md:mt-10 max-w-[72ch] text-white/70 text-[16px] md:text-[18px] leading-relaxed">
            scandiweb builds product data and commerce systems for brands and
            manufacturers with large catalogs. Pimcore is the platform the demos
            run on.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
