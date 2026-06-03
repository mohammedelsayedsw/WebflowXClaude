"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const items: { title: string; body?: string }[] = [
  { title: "Why this is the App Store moment for AI, and why timing matters" },
  {
    title: "A live demo: a full eCommerce flow inside ChatGPT and Claude",
    body: "Browse, search, add to cart, place an order, request an order update, submit a support ticket.",
  },
  { title: "Which workflows make the best first app for your business type" },
  { title: "What systems connect, and how long it takes" },
  { title: "The three-tier build path: proof point, full launch, or enterprise suite" },
  {
    title: "Live Q&A",
    body: "Bring your use case and we'll map it on the call.",
  },
];

export function WhatYoullLearn() {
  return (
    <section
      id="what-youll-learn"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/55 mb-5">
              <span className="text-[var(--sw-black)]/55">5</span>
              <span className="inline-block h-px w-6 bg-[var(--sw-black)]/20 mx-3 align-middle" />
              <span>Agenda</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-2 max-w-[18ch]">
              What you&apos;ll{" "}
              <span className="text-[var(--sw-blue)]">learn</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed max-w-[60ch]">
              In this session, we&apos;ll cover:
            </p>
          </Reveal>
        </div>

        <ul className="space-y-5 md:space-y-6 max-w-[72ch]">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <li className="flex items-start gap-4">
                <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border border-[var(--sw-black)]/15 bg-white">
                  <Check className="h-4 w-4 text-[var(--sw-blue)]" />
                </span>
                <div>
                  <div className="font-head text-[var(--sw-black)] text-[16px] md:text-[18px] leading-[1.4]">
                    {it.title}
                  </div>
                  {it.body && (
                    <p className="mt-1.5 text-[var(--sw-black)]/65 text-[14px] md:text-[15px] leading-relaxed">
                      {it.body}
                    </p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
