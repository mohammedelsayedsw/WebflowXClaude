"use client";

import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const steps = [
  "Browse",
  "Search",
  "Add to cart",
  "Place an order",
  "Order update",
  "Support ticket",
];

export function LiveDemoTeaser() {
  return (
    <section
      id="the-demo"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="max-w-[860px]">
          <Reveal>
            <SectionLabel index="4">The demo</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-[1.05] tracking-[-0.01em]">
              A full order, placed and tracked,
              <br />
              <span style={{ color: "var(--sw-mint)" }}>
                without opening your website
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 text-white/80 text-[15px] md:text-[17px] leading-relaxed max-w-[64ch]">
              AI commerce sounds abstract until you watch it run. The demo
              will walk through every step a customer can take, and shows
              both sides: what they see in the chat, and what happens inside
              your business.
            </p>
          </Reveal>
        </div>

        {/* Horizontal stepper — light chips with dark text */}
        <div className="mt-12 md:mt-14 flex flex-wrap items-center gap-4 md:gap-5">
          {steps.map((s, i) => (
            <Fragment key={s}>
              <Reveal delay={0.1 + i * 0.05} className="contents">
                <div className="inline-flex items-center rounded-[2px] border border-white/15 bg-white px-5 py-3 md:px-6 md:py-3.5 transition-all hover:border-[var(--sw-mint)]/60 hover:-translate-y-0.5">
                  <span className="font-head text-[15px] md:text-[17px] font-semibold text-[var(--sw-black)] leading-none">
                    {s}
                  </span>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <Reveal delay={0.12 + i * 0.05} className="contents">
                  <ArrowRight
                    className="h-5 w-5 md:h-6 md:w-6 text-white/45 shrink-0"
                    strokeWidth={2.25}
                  />
                </Reveal>
              )}
            </Fragment>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-14 md:mt-16 text-white/70 text-[15px] md:text-[17px] leading-relaxed">
            Once you see a real order placed and tracked live, you can decide
            whether this is right for your store.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
