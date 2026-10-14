"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { ANSWERRANK_URL } from "./status";
import { BODY_LIGHT, H2_LIGHT, LINE_LIGHT, SECTION_Y } from "./ui";

const TRACKED = ["Mentions and recommendations", "Competitors in the same answers", "Sources AI tools cite", "How AI describes your brand"];

export function AnswerRank() {
  return (
    <section id="answerrank" className={`relative z-10 bg-white ${SECTION_Y}`}>
      <div className="wrap w-full grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 items-center">
        <Reveal>
          <h2 className={`${H2_LIGHT} max-w-[16ch]`}>See your brand in AI answers</h2>
          <p className={`${BODY_LIGHT} mt-5 max-w-[40ch]`}>
            Tracked in{" "}
            <a href={ANSWERRANK_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-[var(--sw-blue)]">
              AnswerRank
            </a>
            , shared with your team.
          </p>
          <ul className="mt-7 grid gap-3">
            {TRACKED.map((t) => (
              <li key={t} className="flex items-center gap-3 text-[16px] text-[var(--sw-black)]">
                <Check aria-hidden className="h-4 w-4 shrink-0 text-[var(--sw-blue)]" strokeWidth={3} />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/aeo/answerrank-dashboard.png")}
              alt="AnswerRank dashboard with brand visibility over time and an industry ranking"
              width={1920}
              height={1141}
              loading="lazy"
              className={`block h-auto w-full rounded-[2px] border ${LINE_LIGHT} shadow-[0_24px_60px_-30px_rgba(16,19,44,0.35)]`}
            />
            <figcaption className="mt-3 text-[13px] text-[var(--sw-black)]/50">Illustrative AnswerRank data</figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
