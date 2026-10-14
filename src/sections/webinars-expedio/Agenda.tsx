"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const POINTS: string[] = [
  "Why most Magento stores are slower than they need to be, and how much more you could earn with a faster store",
  "A live side-by-side demo of stock Magento and Expedio on real stores",
  "Expedio tech - how it builds pages, and how your design and data stay the same",
  "Moving your store over to Expedio",
  "What's included in the free open-source package",
  "Setting up Expedio with Ari, the first agent for Magento",
  "Choosing the best way to get Expedio for your store",
  "Your questions answered live",
];

export function Agenda() {
  return (
    <section id="agenda" className="relative bg-[var(--sw-black)] border-t border-white/10 py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
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
                  <Check className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "var(--sw-mint)" }} strokeWidth={2} />
                  <span className="text-white/75 text-[16px] md:text-[18px] leading-snug text-pretty">{item}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
