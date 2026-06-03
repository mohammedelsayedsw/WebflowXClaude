"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const items = [
  "A clear picture of what an app inside ChatGPT and Claude looks like for a business like yours",
  "The one workflow that makes the strongest first app for you",
  "A realistic view of what connects to your systems and how long it takes",
  "The confidence to decide whether to build now or wait",
];

export function WalkAwayWith() {
  return (
    <section
      id="walk-away-with"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/55 mb-5">
              <span className="text-[var(--sw-black)]/55">5</span>
              <span className="inline-block h-px w-6 bg-[var(--sw-black)]/20 mx-3 align-middle" />
              <span>The takeaway</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-2 max-w-[22ch]">
              What you&apos;ll{" "}
              <span className="text-[var(--sw-blue)]">walk away with</span>
            </h2>
          </Reveal>
        </div>

        <ul className="grid gap-5 md:gap-6 md:grid-cols-2 max-w-[88ch]">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <li className="flex items-start gap-4 rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5 md:p-6">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border border-[var(--sw-black)]/15 bg-white">
                  <Check className="h-4 w-4 text-[var(--sw-blue)]" />
                </span>
                <span className="text-[var(--sw-black)]/80 text-[15px] md:text-[17px] leading-relaxed">
                  {t}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
