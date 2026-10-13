"use client";

import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { PlanLink } from "./plan";
import { scrollToId } from "./scrollTo";
import { BETTERANSWER_URL, PLANS } from "./status";
import { Arrow, BTN_DARK, BTN_LIGHT, BTN_SIZE, Eyebrow, LINE_DARK, LINK, WRAP } from "./ui";

const CARD_LIST = [
  "AI visibility and competitor tracking",
  "Website content tailored to AI search questions",
  "Five AI visibility article drafts per month",
  "Monthly AI visibility and progress report",
];

export function Hero() {
  return (
    <section id="hero" className="relative z-10 bg-white py-12 lg:py-20">
      <div className={`${WRAP} grid grid-cols-[minmax(0,1fr)] gap-8 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-14 items-start`}>
        <Reveal>
          <Eyebrow className="mb-5 text-[13px] min-[26.3125rem]:text-[14px]">For existing scandiweb clients</Eyebrow>
          <h1 className="max-w-[850px] text-wrap font-head font-bold text-[var(--sw-black)] text-[43px] min-[26.3125rem]:text-[48px] md:text-[clamp(46px,4.5vw,65px)] leading-[1.06] tracking-[-0.035em]">
            The minimum coverage your business needs for <span className="text-[var(--sw-blue)]">AI search</span>
          </h1>
          <p className="mt-7 max-w-[620px] text-[21px] md:text-[23px] font-medium leading-[1.5]">
            Make visibility in ChatGPT and other AI tools part of running your business.
          </p>
          <p className="mt-6 max-w-[650px] text-[18px] md:text-[17px] lg:text-[19px] leading-[1.6]">
            Know where your brand appears, where competitors appear instead, and what needs to improve. Get monthly
            content drafts and a clear action plan, alongside your existing SEO and marketing.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 min-[26.3125rem]:gap-6">
            <PlanLink plan="core" className={`${BTN_LIGHT} ${BTN_SIZE} text-[16px] min-[26.3125rem]:text-[17px]`}>
              Request a call <Arrow />
            </PlanLink>
            <a href="#coverage" onClick={scrollToId("coverage")} className={`${LINK} text-[15px] font-semibold`}>
              See what’s included
            </a>
          </div>
          <p className="mt-4 max-w-[560px] text-[14px]">Or ask your scandiweb account manager about AI Visibility Core.</p>
          <p className="mt-8 text-[14px]">
            Delivered by{" "}
            <a href={BETTERANSWER_URL} target="_blank" rel="noopener noreferrer" className={`${LINK} font-semibold`}>
              BetterAnswer.ai
            </a>
            , part of <strong className="font-semibold">scandiweb</strong>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <aside aria-label="AI Visibility Core package" className="bg-[var(--sw-black)] p-[26px] min-[26.3125rem]:p-7 md:p-6 lg:p-8 text-white lg:mt-2">
            <h2 className="mb-4 font-head font-bold text-white text-[28px] leading-[1.06] tracking-[-0.025em]">{PLANS.core.name}</h2>
            <div className="font-head font-bold text-[48px] min-[24.4375rem]:text-[52px] leading-[1.1] tracking-[-0.04em]">
              {PLANS.core.price}
              <span className="font-body font-normal text-[16px] tracking-normal"> / month</span>
            </div>
            <ul className="mt-7 mb-3">
              {CARD_LIST.map((t) => (
                <li key={t} className={`flex items-baseline gap-3 border-t ${LINE_DARK} py-[17px] text-[16px] leading-[1.45]`}>
                  <span aria-hidden className="shrink-0 font-bold text-[var(--sw-mint)]">+</span>
                  {t}
                </li>
              ))}
            </ul>
            <a href="#coverage" onClick={scrollToId("coverage")} className={`${LINK} mb-7 inline-flex items-center gap-1 text-[14px]`}>
              See everything included <ArrowDown aria-hidden className="h-3.5 w-3.5" />
            </a>
            <PlanLink plan="core" className={`${BTN_DARK} ${BTN_SIZE} w-full`}>
              Request a call <Arrow />
            </PlanLink>
            <p className="mt-4 text-[13px] leading-[1.5] text-[#dadcf1]">Drafts for your team or agency to approve and publish.</p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
