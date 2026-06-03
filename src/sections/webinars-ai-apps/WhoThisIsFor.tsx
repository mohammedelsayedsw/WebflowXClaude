"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const items = [
  "eCommerce brands that want to move early on the AI app layer",
  "Businesses where customers browse, order, and ask for support online",
  "Teams that want a working proof point before they commit a budget",
  "B2B sellers with account pricing, reorders, and quotes",
];

export function WhoThisIsFor() {
  return (
    <section
      id="who-this-is-for"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <SectionLabel index="6">Audience</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-6 max-w-[18ch]">
              Who this is{" "}
              <span style={{ color: "var(--sw-mint)" }}>for</span>
            </h2>
          </Reveal>
        </div>

        <ul className="grid gap-5 md:gap-6 md:grid-cols-2 max-w-[88ch]">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <li className="flex items-start gap-4 rounded-[4px] border border-white/10 bg-white/[0.03] p-5 md:p-6">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border border-white/15 bg-white/[0.04]">
                  <Check className="h-4 w-4 text-[var(--sw-mint)]" />
                </span>
                <span className="text-white/85 text-[15px] md:text-[17px] leading-relaxed">
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
