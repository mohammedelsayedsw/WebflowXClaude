"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow, WRAP } from "./ui";

export function Gap() {
  return (
    <section id="agency" className="relative z-10 bg-[var(--sw-beige)] py-12 md:py-16">
      <div className={`${WRAP} grid grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-2 md:gap-16 items-start`}>
        <Reveal>
          <Eyebrow>The gap in your current coverage</Eyebrow>
          <h2 className="font-head font-bold text-[var(--sw-black)] text-[34px] md:text-[40px] leading-[1.06] tracking-[-0.035em]">
            You have a marketing plan.
            <br />
            <span className="text-[var(--sw-blue)]">Is AI search covered?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="text-[17px] md:text-[18px] leading-[1.6]">
          <p>
            SEO and marketing work may already be happening. But it can still be unclear whether AI tools recommend your
            business, which competitors they choose, and what your team should change.
          </p>
          <p className="mt-6">
            <strong className="font-semibold">AI Visibility Core gives this work a clear owner and measurable KPIs.</strong> We
            track the gaps, prepare content, and set the priorities each month. Your existing team or agency approves and
            publishes the work.
          </p>
          <p className="mt-6 text-[15px] font-semibold">Keep your agency. Give AI visibility an explicit place in the plan.</p>
        </Reveal>
      </div>
    </section>
  );
}
