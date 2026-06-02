"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const items = [
  "No trend talk. This is a working demo and a clear path to your first app",
  "Seeing a real eCommerce flow run live inside ChatGPT and Claude",
  "Understanding what it takes to go live in under two weeks",
];

export function WhatThisIsAbout() {
  return (
    <section
      id="what-this-is-about"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <SectionLabel index="02">The session</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-6 max-w-[20ch]">
              What this session is{" "}
              <span style={{ color: "var(--sw-mint)" }}>really about</span>
            </h2>
          </Reveal>
        </div>

        <ul className="space-y-5 md:space-y-6 max-w-[68ch]">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <li className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border border-white/15 bg-white/[0.04]">
                  <Check className="h-4 w-4 text-[var(--sw-mint)]" />
                </span>
                <span className="text-white/85 text-[16px] md:text-[18px] leading-relaxed">
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
