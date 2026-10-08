"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "./SectionLabel";

/* TODO before publish: confirm the agenda with the speakers. */
const POINTS: string[] = [
  "Why most Magento stores are slower than they need to be",
  "What a store that's twice as fast means for your shoppers",
  "A live demo of the same store on Magento and on Expedio, side by side",
  "How to make your own store at least twice as fast, without replatforming",
  "What changes for your team, and what stays exactly the same",
  "How Expedio works with Hyvä and with any Magento hosting",
  "Time for your questions",
];

export function Agenda() {
  return (
    <section id="agenda" className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <Reveal>
              <SectionLabel n={1}>The agenda</SectionLabel>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                What we&apos;ll cover{" "}
                <span className="text-[var(--sw-blue)]">during the webinar</span>
              </h2>
            </Reveal>
          </div>

          <ul className="flex flex-col gap-4 md:gap-5">
            {POINTS.map((item, i) => (
              <Reveal key={item} delay={i * 0.06}>
                <li className="flex gap-4 border-b border-[var(--sw-black)]/10 pb-4 md:pb-5">
                  <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--sw-blue)" }} strokeWidth={2} />
                  <span className="text-[var(--sw-black)]/75 text-[16px] md:text-[18px] leading-snug text-pretty">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
