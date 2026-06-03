"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const items = [
  "Why this is the App Store moment for AI, and why timing matters",
  "A live demo: a customer searches, orders, gets an order update, and opens a support ticket, inside the chat",
  "Which workflows make the best first app for your business",
  "What systems connect, and how long it takes",
  "The three build paths: proof point, full launch, or enterprise suite",
  "Live Q&A: bring your use case and we'll map it on the call",
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
              What this session is{" "}
              <span style={{ color: "var(--sw-mint)" }}>really about</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-white/70 text-[15px] md:text-[17px] leading-relaxed">
              We&apos;ll cover:
            </p>
          </Reveal>
        </div>

        <ul className="space-y-5 md:space-y-6 max-w-[72ch]">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
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
