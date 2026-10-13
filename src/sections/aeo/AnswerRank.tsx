"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { ANSWERRANK_URL } from "./status";
import { Eyebrow, H2_LIGHT, LINE_LIGHT, LINK, SECTION, WRAP } from "./ui";

const TRACKED = [
  "Brand mentions and recommendations",
  "Competitor presence in monitored answers",
  "Sources cited by AI tools",
  "Changes in visibility and brand descriptions",
];

export function AnswerRank() {
  return (
    <section id="answerrank" className={`relative z-10 bg-white ${SECTION}`}>
      <div className={`${WRAP} grid grid-cols-[minmax(0,1fr)] gap-10 md:grid-cols-2 lg:gap-20 items-start`}>
        <Reveal>
          <Eyebrow>Powered by AnswerRank</Eyebrow>
          <h2 className={H2_LIGHT}>
            See how your brand appears in <span className="text-[var(--sw-blue)]">AI answers</span>
          </h2>
          <p className="mt-8 max-w-[600px] text-[20px] leading-[1.6]">
            A shared view of the questions we monitor, the competitors appearing alongside you, and changes in how your
            business is described.
          </p>
          <ul className="my-8">
            {TRACKED.map((t) => (
              <li key={t} className={`border-t ${LINE_LIGHT} py-3.5`}>
                {t}
              </li>
            ))}
          </ul>
          <p className="text-[14px] leading-[1.5]">
            AnswerRank provides the tracking. BetterAnswer.ai turns the findings into content drafts, recommendations, and
            your monthly progress report.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <figure className={`border ${LINE_LIGHT} bg-[var(--sw-beige)] p-4 md:p-5`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/aeo/answerrank-dashboard.png")}
              alt="AnswerRank product preview showing a brand-visibility dashboard"
              width={1920}
              height={1141}
              loading="lazy"
              className={`block h-auto w-full border ${LINE_LIGHT} bg-white`}
            />
            <figcaption className="mt-4 text-[13px]">
              Public AnswerRank product preview. Illustrative product data, not results from AI Visibility Core.{" "}
              <a href={ANSWERRANK_URL} target="_blank" rel="noopener noreferrer" className={LINK}>
                Explore AnswerRank
              </a>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
