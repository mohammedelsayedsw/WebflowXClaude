"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { BODY_DARK, Eyebrow, H2_DARK, SECTION_Y } from "./ui";

const STEPS = [
  {
    title: "We create the content",
    body: "AI search findings guide the FAQ answers, category descriptions, supporting page information and five monthly article drafts.",
  },
  {
    title: "Your approver checks it",
    body: "Your nominated approver checks accuracy, product claims, brand tone and language before your team or agency publishes.",
  },
  {
    title: "We track what happens next",
    body: "Whether content is awaiting approval or published, and how it performs in AI search later.",
  },
];

export function HowItWorks() {
  return (
    <section id="delivery" className={`relative z-10 bg-[var(--sw-black)] ${SECTION_Y}`}>
      <div className="wrap w-full grid gap-10 lg:grid-cols-2 lg:gap-24 items-center">
        <Reveal>
          <Eyebrow tone="mint">Languages and delivery</Eyebrow>
          <h2 className={`${H2_DARK} mt-4`}>
            We prepare the drafts.{" "}
            <span className="block" style={{ color: "var(--sw-mint)" }}>
              Your team publishes.
            </span>
          </h2>
          <p className={`${BODY_DARK} mt-5 md:mt-6 max-w-[44ch]`}>
            Content is delivered as drafts for your team or agency to approve and publish. The approval and publication
            status stays visible throughout.
          </p>
          <p className="mt-5 md:mt-6 max-w-[48ch] text-[14px] leading-relaxed text-white/55 max-md:hidden">
            <span className="font-head font-semibold text-white">Agreed languages.</span> Content can be prepared in agreed
            languages. Language versions count toward the same monthly content allowances.
          </p>
        </Reveal>
        <div className="border-t border-white/15">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="grid grid-cols-[40px_minmax(0,1fr)] md:grid-cols-[64px_minmax(0,1fr)] gap-4 border-b border-white/15 py-5 max-md:[@media(max-height:700px)]:py-3 md:py-[clamp(18px,3.5vh,28px)]">
                <span className="font-head font-bold text-[26px] md:text-[34px] leading-none" style={{ color: "var(--sw-mint)" }}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-head font-bold text-white text-[19px] md:text-[22px] leading-[1.2]">{s.title}</h3>
                  <p className="mt-1.5 text-white/65 text-[14px] md:text-[16px] leading-relaxed max-md:[@media(max-height:700px)]:hidden">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
