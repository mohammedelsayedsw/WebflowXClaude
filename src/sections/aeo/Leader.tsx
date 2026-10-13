"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { PlanLink } from "./plan";
import { PLANS } from "./status";
import { Arrow, BTN_DARK, BTN_SIZE, Eyebrow, LINE_DARK, SECTION, WRAP } from "./ui";

const SCOPE = ["Expert-reviewed content", "Technical improvements", "Outreach and authority building", "Broader market coverage"];

export function Leader() {
  return (
    <section id="industry-leader" className={`relative z-10 border-t ${LINE_DARK} bg-[var(--sw-black)] text-white ${SECTION}`}>
      <div className={`${WRAP} grid grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-2 md:gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-[72px] items-start`}>
        <Reveal>
          <Eyebrow>Looking to go further?</Eyebrow>
          <h2 className="font-head font-bold text-white text-[38px] md:text-[clamp(38px,4.4vw,60px)] leading-[1.06] tracking-[-0.035em]">
            Become an industry leader in <span className="text-[var(--sw-mint)]">AI search</span>
          </h2>
          <p className="mt-8 max-w-[680px] text-[20px] leading-[1.6] text-[#dadcf1]">
            AI Visibility Core covers the baseline. For merchants who want to lead their industry in AI search, we offer a
            tailored, hands-on program that goes further.
          </p>
          <p className="mt-5 leading-[1.6] text-[#dadcf1]">
            Beyond monitoring and recommendations, we build a strategy around your industry, competitors, and commercial
            goals. The scope can include expert-reviewed content, technical improvements, outreach, and broader market
            coverage, with execution planned around what your business needs.
          </p>
          <p className="mt-8 max-w-[650px] border-l-[3px] border-[var(--sw-mint)] py-1 pl-6 text-[15px] leading-[1.6] text-[#dadcf1]">
            Already have the core covered, through us or your existing team? We build from there, without duplicating work
            or charging twice for overlapping coverage.
          </p>

          <div className="mt-8 md:mt-10 mb-5">
            <h3 className="font-head font-bold text-white text-[22px] leading-[1.2] tracking-[-0.025em]">
              Meet the people behind BetterAnswer
            </h3>
            <p className="mt-2.5 text-[14px] text-[#dadcf1]">Search expertise, with people you can talk to.</p>
          </div>
          <div className="grid max-w-[620px] grid-cols-2 gap-4 min-[26.3125rem]:gap-6">
            <figure className="min-w-0">
              <div className="h-[165px] min-[26.3125rem]:h-[210px] md:h-[175px] min-[68.75rem]:h-[205px] overflow-hidden bg-[#191d38]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/aeo/lina-ivanova.jpg")}
                  alt="Lina Ivanova, BetterAnswer co-founder"
                  loading="lazy"
                  className="block h-full w-full object-cover object-[60%_30%]"
                />
              </div>
              <figcaption className="pt-3.5">
                <strong className="block text-[14px] min-[26.3125rem]:text-[16px] font-semibold">Lina Ivanova</strong>
                <span className="mt-1 block text-[12px] leading-[1.5] text-[#dadcf1]">Co-founder &amp; traffic acquisition expert</span>
              </figcaption>
            </figure>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside aria-label="AI Search Industry Leader package" className={`border ${LINE_DARK} p-6 min-[24.4375rem]:p-7 lg:p-8`}>
            <h3 className="mb-6 font-head font-bold text-white text-[30px] leading-[1.15] tracking-[-0.025em]">
              AI Search
              <br />
              Industry Leader
            </h3>
            <p className="mb-2 text-[14px]">From</p>
            <div className="font-head font-bold text-[44px] min-[24.4375rem]:text-[48px] lg:text-[56px] leading-[1.15] tracking-[-0.04em]">
              {PLANS.leader.price}
              <span className="font-body font-normal text-[16px] tracking-normal"> / month</span>
            </div>
            <p className="mt-[26px] mb-3 text-[15px]">Your tailored scope can include:</p>
            <ul className="mb-7">
              {SCOPE.map((t) => (
                <li key={t} className={`border-t ${LINE_DARK} py-3 text-[15px]`}>
                  {t}
                </li>
              ))}
            </ul>
            <PlanLink plan="leader" className={`${BTN_DARK} ${BTN_SIZE} w-full text-center`}>
              Speak with an AI strategist <Arrow />
            </PlanLink>
            <p className="mt-5 text-[14px] leading-[1.5] text-[#dadcf1]">
              Speak with our AI Search Strategist about an industry leader program for your business.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
