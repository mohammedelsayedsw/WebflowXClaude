"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SPEAKERS } from "./details";
import { assetUrl } from "@/lib/assets";
import { SectionLabel } from "./SectionLabel";

export function Speakers() {
  return (
    <section id="the-speakers" className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <Reveal>
          <SectionLabel n={6}>The speakers</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            Who&apos;s running <span className="text-[var(--sw-blue)]">the session</span>
          </h2>
        </Reveal>

        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 md:grid-cols-2">
          {SPEAKERS.map((s, i) => (
            <Reveal key={s.name} delay={0.1 + i * 0.07} className="h-full">
              <li className="flex h-full items-center gap-5 md:gap-7 rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5 md:p-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl(s.photo)}
                  alt={s.name}
                  loading="lazy"
                  className="h-28 w-28 sm:h-36 sm:w-36 md:h-40 md:w-40 shrink-0 rounded-[4px] border border-[var(--sw-black)]/10 object-cover"
                />
                <div>
                  <div className="font-head font-bold text-[var(--sw-black)] text-[20px] md:text-[24px] leading-tight">
                    {s.name}
                  </div>
                  <div className="mt-1.5 text-[var(--sw-black)]/60 text-[15px] md:text-[16px]">{s.title}</div>
                  {s.bio && (
                    <p className="mt-3 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">{s.bio}</p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
