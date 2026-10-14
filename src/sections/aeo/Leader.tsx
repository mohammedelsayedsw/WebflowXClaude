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
          <h2 className={`${H2_LIGHT} max-w-[16ch]`}>Lead your industry in AI search</h2>
          <p className={`${BODY_LIGHT} mt-5 max-w-[46ch]`}>
            A hands-on program built around your industry, competitors and goals. We build on the coverage you already have,
            without charging twice.
          </p>
          <div className="mt-6 md:mt-10 flex items-center gap-4 max-md:[@media(max-height:700px)]:hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/aeo/lina-ivanova.jpg")}
              alt="Lina Ivanova"
              loading="lazy"
              className="h-16 w-16 rounded-full object-cover object-[60%_25%]"
            />
            <div>
              <div className="font-head font-bold text-[var(--sw-black)] text-[16px]">Lina Ivanova</div>
              <div className="text-[14px] text-[var(--sw-black)]/60">Co-founder, BetterAnswer</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="bg-white rounded-[2px] p-5 max-md:[@media(max-height:700px)]:p-4 md:p-8 lg:ml-auto lg:max-w-[460px]">
            <Eyebrow>{PLANS.leader.name}</Eyebrow>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-[var(--sw-black)]/60 text-[16px]">from</span>
              <span className="font-head font-bold text-[var(--sw-blue)] text-[44px] md:text-[52px] leading-none tracking-[-0.03em]">
                {PLANS.leader.price}
              </span>
              <span className="text-[var(--sw-black)]/60 text-[16px]">/ month</span>
            </div>
            <ul className={`mt-7 border-t ${LINE_LIGHT}`}>
              {SCOPE.map((t) => (
                <li key={t} className={`flex items-center gap-3 border-b ${LINE_LIGHT} py-2.5 max-md:[@media(max-height:700px)]:py-2 md:py-3.5 text-[15px] md:text-[16px] text-[var(--sw-black)]`}>
                  <Check aria-hidden className="h-4 w-4 shrink-0 text-[var(--sw-blue)]" strokeWidth={3} />
                  {t}
                </li>
              ))}
            </ul>
            <PlanLink plan="leader" className={`${btnLight} mt-5 max-md:[@media(max-height:700px)]:mt-4 md:mt-7 w-full h-auto min-h-12 py-3 px-4`}>
              Speak with an AI strategist
            </PlanLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
