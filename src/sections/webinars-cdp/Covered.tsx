"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const points: string[] = [
  "What a customer data platform actually does, in plain words",
  "How Sportland grew revenue on 21% less marketing spend",
  "Why Sportland moved off Klaviyo to Bloomreach",
  "Personalization across three markets, run from one platform",
  "Where retail personalization is heading, and what AI changes",
  "What the build really takes, and what to automate",
  "Live Q&A with all three teams",
];

export function Covered() {
  return (
    <section
      id="what-well-cover"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          {/* LEFT · heading */}
          <div>
            <Reveal>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                What we&apos;ll cover{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  during the webinar
                </span>
              </h2>
            </Reveal>
          </div>

          {/* RIGHT · checklist */}
          <ul className="flex flex-col gap-4 md:gap-5">
            {points.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <li className="flex gap-4 border-b border-white/10 pb-4 md:pb-5">
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0"
                    strokeWidth={2}
                    style={{ color: "var(--sw-mint)" }}
                  />
                  <span className="text-white/75 text-[16px] md:text-[18px] leading-snug">
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
