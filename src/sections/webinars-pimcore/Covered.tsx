"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const POINTS: string[] = [
  "Where fragmented product data drains hours and revenue",
  "What a single source of truth looks like in practice, not in theory",
  "Live demos, from a rejected marketplace listing to a clean multi-channel launch",
  "Why most AI projects stall on product data, and what fixes that",
  "How multilingual catalogs stay current as you add markets",
  "What a PIM project takes, and what it does not",
  "Real examples from catalogs of 80,000 products and more",
  "Live Q&A with the team",
];

export function Covered() {
  return (
    <section
      id="what-well-cover"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <Reveal>
              <div className="label-code mb-4 inline-flex items-center gap-3 text-white/60">
                <span className="text-white/55">4</span>
                <span className="h-px w-6 bg-white/15" />
                <span>The agenda</span>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                What we&apos;ll cover{" "}
                <span style={{ color: "var(--sw-mint)" }}>during the webinar</span>
              </h2>
            </Reveal>
          </div>

          <ul className="flex flex-col gap-4 md:gap-5">
            {POINTS.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <li className="flex gap-4 border-b border-white/10 pb-4 md:pb-5">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0"
                    strokeWidth={2}
                    style={{ color: "var(--sw-mint)" }}
                  />
                  <span className="text-white/80 text-[16px] md:text-[18px] leading-snug">
                    {item}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
