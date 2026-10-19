"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";
import { assetUrl } from "@/lib/assets";
import { PlanLink } from "./plan";
import { PLANS } from "./status";
import { BODY_LIGHT, Eyebrow, H2_LIGHT, LAVENDER, LINE_LIGHT, SECTION_Y } from "./ui";

const SCOPE = ["Expert-reviewed content", "Technical improvements", "Outreach and authority building", "Broader market coverage"];

export function Leader() {
  return (
    <section id="industry-leader" className={`relative z-10 ${SECTION_Y}`} style={{ background: LAVENDER }}>
      <div className="wrap w-full grid gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16 items-center">
        <Reveal>
          <Eyebrow>Looking to go further?</Eyebrow>
          <h2 className={`${H2_LIGHT} mt-4 max-w-[16ch]`}>
            Become an industry leader in{" "}
            <span className="inline-block whitespace-nowrap" style={{ color: "var(--sw-blue)" }}>
              AI search
            </span>
          </h2>
          <p className={`${BODY_LIGHT} mt-5 max-w-[50ch] max-md:[@media(max-height:700px)]:hidden`}>
            AI Visibility Core covers the baseline. For merchants who want to lead their industry in AI search, we offer a
            tailored, hands-on program that goes further.
          </p>
          <p className={`${BODY_LIGHT} mt-3 max-w-[50ch] max-md:hidden`}>
            Beyond monitoring and recommendations, we build a strategy around your industry, competitors and commercial
            goals, with execution planned around what your business needs.
          </p>
          <p className="mt-5 max-w-[50ch] border-l-2 border-[var(--sw-blue)] pl-4 text-[14px] md:text-[15px] leading-relaxed text-[var(--sw-black)]/70 max-md:hidden">
            Already have the core covered, through us or your existing team? We build from there, without duplicating work
            or charging twice for overlapping coverage.
          </p>
          <div className="mt-6 md:mt-[clamp(20px,4vh,40px)] flex items-center gap-4 max-md:[@media(max-height:700px)]:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/ai-visibility-package/lina-ivanova.jpg")}
              alt="Lina Ivanova"
              loading="lazy"
              className="h-16 w-16 rounded-full object-cover object-[60%_25%]"
            />
            <div>
              <div className="font-head font-bold text-[var(--sw-black)] text-[16px]">Lina Ivanova</div>
              <div className="text-[14px] text-[var(--sw-black)]/60">BetterAnswer co-founder and traffic acquisition expert</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-[2px] p-5 max-md:[@media(max-height:700px)]:p-4 md:p-8 lg:ml-auto lg:max-w-[460px]">
            <h3 className="font-head font-bold text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.15] tracking-[-0.02em]">
              {PLANS.leader.name}
            </h3>
            <div className="mt-2 md:mt-3 flex items-baseline gap-2">
              <span className="text-[var(--sw-black)]/60 text-[16px]">from</span>
              <span className="font-head font-bold text-[var(--sw-blue)] text-[44px] md:text-[52px] leading-none tracking-[-0.03em]">
                {PLANS.leader.price}
              </span>
              <span className="text-[var(--sw-black)]/60 text-[16px]">/ month</span>
            </div>
            <p className="mt-5 md:mt-6 text-[14px] text-[var(--sw-black)]/60">Your tailored scope can include:</p>
            <ul className={`mt-2 border-t ${LINE_LIGHT}`}>
              {SCOPE.map((t) => (
                <li key={t} className={`flex items-center gap-3 border-b ${LINE_LIGHT} py-2 md:py-[clamp(8px,1.6vh,14px)] text-[15px] md:text-[16px] text-[var(--sw-black)]`}>
                  <Check aria-hidden className="h-4 w-4 shrink-0 text-[var(--sw-blue)]" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </ul>
            <PlanLink plan="leader" className={`${btnLight} mt-5 max-md:[@media(max-height:700px)]:mt-4 md:mt-6 w-full h-auto min-h-12 py-3 px-4`}>
              Speak with an AI strategist
            </PlanLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
