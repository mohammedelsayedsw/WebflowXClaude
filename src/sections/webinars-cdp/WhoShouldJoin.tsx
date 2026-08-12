"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const rows: string[] = [
  "You run marketing or eCommerce at a retailer and want more from your customer data",
  "You own a CDP or marketing automation setup, or are about to choose one",
  "You run multiple markets, languages, or store views",
  "You want honest numbers on what a CDP does, and does not, deliver",
];

export function WhoShouldJoin() {
  return (
    <section
      id="who-should-join"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em] mb-12 md:mb-16">
            Join if any of these is you
          </h2>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {rows.map((r, i) => (
            <Reveal key={r} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8 flex gap-4">
                <Check
                  className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sw-blue)]"
                  strokeWidth={2}
                />
                <p className="text-[var(--sw-black)]/75 text-[16px] md:text-[18px] leading-snug">
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
