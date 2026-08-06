"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const points: string[] = [
  "Where teams lose hours between systems",
  "Why you don't need to replace your ERP",
  "How OperaLayer takes over the manual work",
  "What data and access it needs",
  "What's realistic in the first 72 hours",
  "How to measure the time and money saved",
  "When OperaLayer is, and isn't, the right fit",
  "If reconciliation isn't your first step, where else OperaLayer can start",
];

export function Agenda() {
  return (
    <section
      id="what-youll-learn"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* LEFT · heading */}
          <div>
            <Reveal>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                What you will hear{" "}
                <span className="text-[var(--sw-blue)]">during the webinar</span>
              </h2>
            </Reveal>
          </div>

          {/* RIGHT · checklist */}
          <ul className="flex flex-col gap-4 md:gap-5">
            {points.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <li className="flex gap-4 border-b border-[var(--sw-black)]/10 pb-4 md:pb-5">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sw-blue)]"
                    strokeWidth={2}
                  />
                  <span className="text-[var(--sw-black)]/75 text-[16px] md:text-[18px] leading-snug">
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
