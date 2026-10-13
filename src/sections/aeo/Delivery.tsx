"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { LINE_LIGHT, SECTION, SectionHead, WRAP } from "./ui";

const STEPS = [
  {
    step: "Prepare",
    title: "We create the content",
    body: "AI search findings guide the FAQ answers, category descriptions, supporting page information, and five monthly article drafts.",
    tag: "Drafts delivered",
  },
  {
    step: "Approve and publish",
    title: "Your approver checks it",
    body: "Your nominated approver checks accuracy, product claims, brand tone, and language before your team or agency publishes the content.",
    tag: "Awaiting approval → Published",
  },
  {
    step: "Follow the results",
    title: "We track what happens next",
    body: "We track whether content is awaiting approval or has been published, and how it performs in AI search later.",
    tag: "Performance monitored",
  },
];

export function Delivery() {
  return (
    <section id="delivery" className={`relative z-10 bg-white ${SECTION}`}>
      <div className={WRAP}>
        <Reveal>
          <SectionHead
            eyebrow="Languages and delivery"
            title={
              <>
                We prepare the drafts.
                <br />
                <span className="text-[var(--sw-blue)]">Your team publishes.</span>
              </>
            }
            intro="Content is delivered as drafts for your team or agency to approve and publish. The approval and publication status stays visible throughout."
          />
        </Reveal>
        <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-7 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <article className={`border-t ${LINE_LIGHT} pt-6`}>
                <p className="mb-[18px] font-head font-semibold text-[15px] text-[var(--sw-blue)]">
                  {i + 1} / {s.step}
                </p>
                <h3 className="mb-4 font-head font-bold text-[var(--sw-black)] text-[26px] leading-[1.06] tracking-[-0.025em]">
                  {s.title}
                </h3>
                <p className="text-[16px] leading-[1.6]">{s.body}</p>
                <span className={`mt-4 inline-block border ${LINE_LIGHT} px-2.5 py-[5px] text-[13px] text-[var(--sw-blue)]`}>{s.tag}</span>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-8 md:mt-12 grid grid-cols-[minmax(0,1fr)] gap-4 bg-[var(--sw-beige)] p-6 md:grid-cols-[150px_minmax(0,1fr)] md:gap-6 md:px-8 md:py-7 lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-10">
            <h3 className="font-head font-bold text-[var(--sw-black)] text-[24px] leading-[1.06] tracking-[-0.025em]">Agreed languages</h3>
            <p className="max-w-[850px] leading-[1.6]">
              Content can be prepared in agreed languages. Language versions count toward the same monthly content
              allowances, rather than being unlimited additions.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
