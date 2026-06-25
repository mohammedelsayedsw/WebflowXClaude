"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { assetUrl } from "@/lib/assets";
import { SPEAKER } from "./details";

const stats: [string, string][] = [
  ["#1 certified", "Magento team since 2009"],
  ["600+", "migrations"],
];

export function SpeakerBio() {
  return (
    <section
      id="your-host"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.3fr] items-center">
          {/* LEFT · portrait */}
          <Reveal>
            <div className="flex justify-center lg:justify-start">
              <div
                className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-[4px] overflow-hidden border border-white/15 bg-white/[0.03]"
              >
                {/* TODO(announce): replace placeholder headshot via SPEAKER.photo in details.ts */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl(SPEAKER.photo)}
                  alt={SPEAKER.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* RIGHT · copy */}
          <div>
            <Reveal>
              <SectionLabel index="6">The speaker</SectionLabel>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[30px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.01em] mt-6">
                Led by a senior strategist,
                <br />
                <span style={{ color: "var(--sw-mint)" }}>
                  not a sales rep
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              {/* TODO(announce): swap in the real speaker bio once confirmed. */}
              <p className="mt-7 text-white/80 text-[15px] md:text-[17px] leading-relaxed max-w-[62ch]">
                Someone who has helped teams make this move many times, sharing
                what works and what to watch for &mdash; not a pitch.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-9 md:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {stats.map(([k, l]) => (
                  <div
                    key={k}
                    className="rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-3.5"
                  >
                    <div className="font-head text-white text-[20px] md:text-[22px] leading-tight tabular-nums">
                      {k}
                    </div>
                    <div className="label-code text-white/55 text-[10px] mt-2 leading-snug">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
