"use client";

import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { CountUp } from "./CountUp";

/**
 * The two headline comparisons, speed and cost, as the first of the page's two
 * centrepieces. Each block reads top to bottom: the figure today, the figure
 * with Ari, then the multiple. The count-ups run once on scroll into view.
 *
 * TODO: verify 8 days, 15 minutes, $6,000 and $590 against the live Agent for
 * Magento product page before publish. Prices and figures change.
 */

function Block({
  label,
  fromValue,
  fromUnit,
  fromCaption,
  toValue,
  toUnit,
  toCaption,
  headline,
  headlineCaption,
  prefix,
}: {
  label: string;
  fromValue: number;
  fromUnit: string;
  fromCaption: string;
  toValue: number;
  toUnit: string;
  toCaption: string;
  headline: string;
  headlineCaption: string;
  prefix?: string;
}) {
  return (
    <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white/70 p-7 md:p-10 flex flex-col">
      <div className="label-code text-[var(--sw-black)]/50">{label}</div>

      <div className="mt-7 md:mt-9">
        <div className="font-head text-[var(--sw-black)]/35 text-[38px] md:text-[48px] leading-none tracking-[-0.02em]">
          <CountUp to={fromValue} prefix={prefix} />
          <span className="text-[20px] md:text-[24px] ml-1.5">{fromUnit}</span>
        </div>
        <div className="mt-2 text-[var(--sw-black)]/55 text-[14px] md:text-[15px] leading-snug max-w-[34ch]">
          {fromCaption}
        </div>
      </div>

      <div className="my-6 md:my-7 flex items-center gap-3">
        <ArrowDown
          className="h-4 w-4 shrink-0"
          strokeWidth={2}
          style={{ color: "var(--sw-blue)" }}
          aria-hidden
        />
        <span className="h-px flex-1 bg-[var(--sw-black)]/10" />
      </div>

      <div>
        <div
          className="font-head text-[52px] md:text-[68px] leading-none tracking-[-0.03em]"
          style={{ color: "var(--sw-blue)" }}
        >
          <CountUp to={toValue} prefix={prefix} />
          <span className="text-[24px] md:text-[30px] ml-1.5">{toUnit}</span>
        </div>
        <div className="mt-2 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-snug max-w-[34ch]">
          {toCaption}
        </div>
      </div>

      <div className="mt-auto pt-8 md:pt-10">
        <div className="rounded-[4px] bg-[var(--sw-black)] px-6 py-5 md:px-7 md:py-6">
          <div
            className="font-head text-[30px] md:text-[38px] leading-none tracking-[-0.02em]"
            style={{ color: "var(--sw-mint)" }}
          >
            {headline}
          </div>
          <div className="mt-2 text-white/65 text-[13px] md:text-[14px] leading-snug">
            {headlineCaption}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Numbers() {
  return (
    <section
      id="the-numbers"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[46rem]">
          <Reveal>
            <div className="label-code mb-5 text-[var(--sw-black)]/50">
              What it changes
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              Faster and cheaper, by an order nobody expected
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 md:gap-6 lg:grid-cols-2">
          <Reveal>
            <Block
              label="Speed"
              fromValue={8}
              fromUnit="days"
              fromCaption="The usual wait from asking to an approved change"
              toValue={15}
              toUnit="minutes"
              toCaption="With Ari"
              headline="768x faster"
              headlineCaption="From asking to a change waiting for approval"
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Block
              label="Cost"
              prefix="$"
              fromValue={6000}
              fromUnit="a month"
              fromCaption="Typical Magento development"
              toValue={590}
              toUnit="a month"
              toCaption="With Agent for Magento"
              headline="10x cheaper"
              headlineCaption="On the same work, run through your own pipeline"
            />
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 md:mt-12 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[70ch]">
            Both figures come from real work on real stores, and the live demo
            shows how they are possible.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
