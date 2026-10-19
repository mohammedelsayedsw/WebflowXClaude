"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { BODY_LIGHT, Eyebrow, LINE_LIGHT, SECTION_Y } from "./ui";

/** The gap the package closes: marketing is covered, AI search has no owner. */
export function Problem() {
  return (
    <section id="agency" className={`relative z-10 bg-white ${SECTION_Y}`}>
      <div className="wrap w-full grid gap-8 lg:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] lg:gap-20 items-center">
        <Reveal>
          <Eyebrow>The gap in your current coverage</Eyebrow>
          <h2 className="mt-4 max-w-[14ch] font-head font-bold text-[var(--sw-black)] text-[32px] sm:text-[40px] md:text-[56px] leading-[1.04] tracking-[-0.02em]">
            You have a marketing plan. <span style={{ color: "var(--sw-blue)" }}>Is AI search covered?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className={BODY_LIGHT}>
            SEO and marketing work may already be happening. But it can still be unclear whether AI tools recommend your
            business, which competitors they choose, and what your team should change.
          </p>
          <p className={`${BODY_LIGHT} mt-5`}>
            <strong className="font-semibold text-[var(--sw-black)]">
              AI Visibility Core gives this work a clear owner and measurable KPIs.
            </strong>{" "}
            We track the gaps, prepare content, and set the priorities each month. Your existing team or agency approves and
            publishes the work.
          </p>
          <p className={`mt-6 md:mt-8 border-t ${LINE_LIGHT} pt-5 md:pt-6 font-head font-semibold text-[var(--sw-black)] text-[17px] md:text-[20px] leading-[1.35]`}>
            Keep your agency. Give AI visibility an explicit place in the plan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
