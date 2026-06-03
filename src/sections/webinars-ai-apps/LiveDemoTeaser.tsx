"use client";

import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

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
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="max-w-[820px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">3</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The demo</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[32px] sm:text-[36px] md:text-[44px] lg:text-[50px] leading-[1.05] tracking-[-0.01em] max-w-[22ch]">
              A full order, placed and tracked,{" "}
              <span className="text-[var(--sw-blue)]">
                without opening your website
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed max-w-[64ch]">
              On the call, Rolands runs a single customer journey end to end
              inside the chat:
            </p>
          </Reveal>
        </div>

        {/* Horizontal stepper */}
        <div className="mt-12 md:mt-14 flex flex-wrap items-center gap-3 md:gap-4">
          {steps.map((s, i) => (
            <Fragment key={s}>
              <Reveal delay={0.1 + i * 0.05} className="contents">
                <div className="inline-flex items-center rounded-[2px] border border-[var(--sw-black)]/15 bg-white px-3.5 py-2 md:px-4 md:py-2.5">
                  <span className="font-head text-[13px] md:text-[14px] font-semibold text-[var(--sw-black)] leading-none">
                    {s}
                  </span>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <Reveal delay={0.12 + i * 0.05} className="contents">
                  <ArrowRight
                    className="h-4 w-4 text-[var(--sw-black)]/35 shrink-0"
                    strokeWidth={2.25}
                  />
                </Reveal>
              )}
            </Fragment>
          ))}
        </div>

        <Reveal delay={0.4}>
          <p className="mt-14 md:mt-16 text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed max-w-[68ch]">
            You watch the full flow run live on June 17. How it connects to
            your catalog, orders, and helpdesk gets covered on the call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
