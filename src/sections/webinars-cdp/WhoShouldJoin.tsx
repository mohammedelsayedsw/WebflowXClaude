"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const rows: string[] = [
  "You run marketing or eCommerce for a retail brand and want more from your customer data",
  "You manage a CDP or marketing automation tool, or are about to choose one",
  "You run multiple markets, languages, or store views, and want personalization that works across all of them",
  "You want honest numbers on what a CDP does and doesn't deliver",
];

export function WhoShouldJoin() {
  return (
    <section
      id="who-should-join"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em] mb-12 md:mb-16">
            Join if any of these is you
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {rows.map((r, i) => (
            <Reveal key={r} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-white/12 bg-white/[0.03] p-7 md:p-8 flex gap-4">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sw-mint)]"
                  strokeWidth={2}
                />
                <p className="text-white/75 text-[16px] md:text-[18px] leading-snug">
                  {r}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
