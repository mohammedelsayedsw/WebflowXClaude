"use client";

import { CalendarClock, Gavel, Euro } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { EU_COUNTRIES } from "@/sections/widerrufsbutton/content";
import type { Content } from "@/sections/widerrufsbutton/content";

const stakeIcons = [CalendarClock, Gavel, Euro];

export function Coverage({ t }: { t: Content["coverage"] }) {
  return (
    <section
      id="coverage"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">{t.eyebrow}</div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            {t.h2}{" "}
            <span style={{ color: "var(--sw-mint)" }}>{t.h2accent}</span>
            {t.h2tail}
          </h2>
          <p className="mt-7 max-w-[68ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            {t.intro}
          </p>
        </Reveal>

        {/* country list */}
        <Reveal delay={0.1}>
          <div className="mt-12 md:mt-16 rounded-[4px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="label-code text-[var(--sw-mint)] mb-5">
              {t.countriesLabel}
            </div>
            <div className="flex flex-wrap gap-2">
              {EU_COUNTRIES.map((c) => (
                <span
                  key={c}
                  className="rounded-[2px] border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12px] md:text-[13px] text-white/70"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* stakes */}
        <Reveal delay={0.15}>
          <div className="label-code text-white/55 mt-16 md:mt-20 mb-6">
            {t.stakesLabel}
          </div>
        </Reveal>
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {t.stakes.map((s, i) => {
            const Icon = stakeIcons[i] ?? CalendarClock;
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <article
                  className="h-full rounded-[4px] border border-white/10 p-7 md:p-8"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                  }}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] bg-[var(--sw-mint)]/12 mb-5">
                    <Icon className="h-5 w-5 text-[var(--sw-mint)]" />
                  </span>
                  <h3 className="font-head text-white text-[19px] md:text-[21px] leading-[1.2]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[15px] text-white/75 leading-relaxed">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
