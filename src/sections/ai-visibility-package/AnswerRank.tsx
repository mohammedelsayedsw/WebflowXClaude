"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { ANSWERRANK_URL } from "./status";
import { BODY_LIGHT, Eyebrow, H2_LIGHT, LINE_LIGHT, SECTION_Y } from "./ui";

const TRACKED = [
  "Brand mentions and recommendations",
  "Competitor presence in monitored answers",
  "Sources cited by AI tools",
  "Changes in visibility and brand descriptions",
];

export function AnswerRank() {
  return (
    <section id="answerrank" className={`relative z-10 bg-white ${SECTION_Y}`}>
      <div className="wrap w-full grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 items-center">
        <Reveal>
          <Eyebrow>Powered by AnswerRank</Eyebrow>
          <h2 className={`${H2_LIGHT} mt-4 max-w-[16ch]`}>
            See how your brand appears in <span style={{ color: "var(--sw-blue)" }}>AI answers</span>
          </h2>
          <p className={`${BODY_LIGHT} mt-5 max-w-[44ch] max-md:[@media(max-height:700px)]:hidden`}>
            A shared view of the questions we monitor, the competitors appearing alongside you, and changes in how your
            business is described.
          </p>
          <ul className="mt-6 grid gap-2.5">
            {TRACKED.map((t) => (
              <li key={t} className="flex items-center gap-3 text-[16px] text-[var(--sw-black)]">
                <Check aria-hidden className="h-4 w-4 shrink-0 text-[var(--sw-blue)]" strokeWidth={3} />
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[48ch] text-[14px] leading-relaxed text-[var(--sw-black)]/55 max-md:hidden">
            <a href={ANSWERRANK_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[var(--sw-blue)]">
              AnswerRank
            </a>{" "}
            provides the tracking. BetterAnswer.ai turns the findings into content drafts, recommendations, and your monthly
            progress report.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/ai-visibility-package/answerrank-dashboard.png")}
              alt="AnswerRank dashboard with brand visibility over time and an industry ranking"
              width={1920}
              height={1141}
              loading="lazy"
              className={`block h-auto w-full rounded-[2px] border ${LINE_LIGHT} shadow-[0_24px_60px_-30px_rgba(16,19,44,0.35)]`}
            />
            <figcaption className="mt-3 text-[13px] text-[var(--sw-black)]/50">
              Public AnswerRank product preview. Illustrative product data, not results from AI Visibility Core.
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
