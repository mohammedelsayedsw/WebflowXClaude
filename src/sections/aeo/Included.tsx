"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { ANSWERRANK_URL } from "./status";
import { LINE_DARK, LINK, SECTION, SectionHead, WRAP } from "./ui";

const PARTS: { step: string; title: string; body: React.ReactNode }[] = [
  {
    step: "Monitor",
    title: "AI visibility and competitor tracking",
    body: (
      <>
        <a href={ANSWERRANK_URL} target="_blank" rel="noopener noreferrer" className={LINK}>
          AnswerRank
        </a>{" "}
        tracks whether your brand is mentioned or recommended for the customer questions we monitor, which competitors
        appear instead, and how your business is described. Inaccurate information and negative sentiment are flagged for
        your attention.
      </>
    ),
  },
  {
    step: "Improve your pages",
    title: "Website content tailored to AI search questions",
    body: "We prepare FAQ answers and category descriptions around relevant customer questions and gaps identified through AI search monitoring. This includes supporting meta titles, meta descriptions, and internal-link recommendations for the selected pages.",
  },
  {
    step: "Create useful content",
    title: "Five AI visibility article drafts per month",
    body: "Article drafts optimized for AI search, addressing relevant product questions, comparisons, and buying decisions. Topics are selected from AI search findings and content gaps, rather than producing generic blog content to meet a monthly quota.",
  },
  {
    step: "Set priorities",
    title: "AI visibility gap audit and action plan",
    body: "An initial audit establishes your starting position. Monthly checks identify missing answers, unclear website information, and questions where competitors appear but your brand does not. Findings become prioritized content recommendations, with any technical issues identified during the review flagged for your technical team.",
  },
  {
    step: "Understand the sources",
    title: "Tracking the sources cited in AI answers",
    body: "We identify the websites and pages cited in the answers we monitor, including those supporting competitor recommendations, and show which sources deserve your team’s attention.",
  },
  {
    step: "Find opportunities",
    title: "External link, brand mention, and Reddit opportunities",
    body: "We recommend relevant websites, publications, and Reddit discussions where your business could contribute or pursue a link or mention. Includes research and practical guidance.",
  },
  {
    step: "See the progress",
    title: "Monthly AI visibility and progress report",
    body: "See changes in monitored brand visibility, competitor presence, and brand descriptions. Your report summarizes content delivered, publication status, important findings, and the next actions for your team.",
  },
];

/** Seven parts in two columns; the report spans both, title left and text right. */
export function Included() {
  return (
    <section id="coverage" className={`relative z-10 bg-[var(--sw-black)] text-white ${SECTION}`}>
      <div className={WRAP}>
        <Reveal>
          <SectionHead
            dark
            eyebrow="What’s included"
            title={
              <>
                Know where you appear.
                <br />
                <span className="text-[var(--sw-mint)]">Act on what matters most.</span>
              </>
            }
            intro="Seven connected parts of one monthly package, from understanding your position to preparing the content and recommendations your team can act on."
          />
        </Reveal>
        <div className="grid grid-cols-[minmax(0,1fr)] gap-5 md:grid-cols-2 md:gap-x-10 md:gap-y-7 lg:gap-x-16 lg:gap-y-8">
          {PARTS.map((p, i) => {
            const last = i === PARTS.length - 1;
            return (
              <Reveal key={p.title} delay={(i % 2) * 0.07} className={last ? "md:col-span-2" : ""}>
                <article className={`border-t ${LINE_DARK} pt-6 pb-2 ${last ? "md:grid md:grid-cols-2 md:gap-10 lg:gap-16" : ""}`}>
                  <div>
                    <div className="mb-[18px] text-[14px] text-[var(--sw-mint)]">
                      {i + 1} / {p.step}
                    </div>
                    <h3 className="mb-5 max-w-[500px] font-head font-bold text-white text-[25px] md:text-[27px] leading-[1.2] tracking-[-0.025em]">
                      {p.title}
                    </h3>
                  </div>
                  <p className={`max-w-[550px] text-[16px] leading-[1.6] text-[#dadcf1] ${last ? "md:pt-1" : ""}`}>{p.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
