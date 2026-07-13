"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const items = [
  "What it means to run your store's admin work through ChatGPT and Claude",
  "A live demo on a real store, five questions, two real actions, one conversation",
  "Which systems connect, and how long setup takes",
  "Where this saves the most time for a store like yours",
  "Live Q&A: bring your use case and Rolands answers it live",
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
            <SectionLabel index="2">The session</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[1.05] mt-6 lg:whitespace-nowrap">
              What will be covered{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                during the webinar
              </span>
            </h2>
          </Reveal>
        </div>

        <ul className="space-y-5 md:space-y-6 max-w-[72ch]">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border border-white/15 bg-white/[0.04]">
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
