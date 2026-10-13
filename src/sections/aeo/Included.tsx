"use client";

import { ChartColumn, FileText, Link2, ListChecks, MessagesSquare, PenLine, Radar } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { H2_LIGHT, LAVENDER, LINE_LIGHT, SECTION_Y } from "./ui";

const PARTS = [
  { icon: Radar, title: "AI visibility and competitor tracking", body: "Where AI tools mention you, who they pick instead, and how they describe you." },
  { icon: FileText, title: "Content for AI search questions", body: "FAQ answers, category descriptions, meta titles and internal links." },
  { icon: PenLine, title: "Five article drafts a month", body: "Product questions, comparisons and buying guides, picked from your gaps." },
  { icon: ListChecks, title: "Gap audit and action plan", body: "A starting audit, then monthly checks turned into priorities." },
  { icon: Link2, title: "Sources AI tools cite", body: "The pages behind each answer, including your competitors’." },
  { icon: MessagesSquare, title: "Link, mention and Reddit ideas", body: "Where your brand could earn a mention, with practical next steps." },
  { icon: ChartColumn, title: "Monthly progress report", body: "Visibility, competitors, content delivered and next actions." },
];

const NOT_INCLUDED = ["Outreach and link building", "Reddit posting", "Review management", "Publishing and development", "Native proofreading"];

/** Seven parts in a hairline grid; the eighth cell says what the package leaves out. */
export function Included() {
  return (
    <section id="coverage" className={`relative z-10 ${SECTION_Y}`} style={{ background: LAVENDER }}>
      <div className="wrap">
        <Reveal>
          <h2 className={H2_LIGHT}>What you get every month</h2>
        </Reveal>
        <div className="mt-5 md:mt-12 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          {PARTS.map((p, i) => (
            <Reveal key={p.title} delay={(i % 4) * 0.06}>
              <div className={`h-full grid grid-cols-[24px_minmax(0,1fr)] items-center gap-x-4 sm:block border-t ${LINE_LIGHT} py-3.5 sm:pt-6 sm:pb-8`}>
                <p.icon aria-hidden className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--sw-blue)]" strokeWidth={1.5} />
                <div>
                  <h3 className="sm:mt-5 font-head font-bold text-[var(--sw-black)] text-[17px] sm:text-[19px] leading-[1.25]">{p.title}</h3>
                  <p className="hidden sm:block mt-2 text-[15px] leading-relaxed text-[var(--sw-black)]/65">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.18}>
            <div className={`h-full border-t ${LINE_LIGHT} py-3 sm:pt-6 sm:pb-8`}>
              <h3 className="font-head font-bold text-[var(--sw-black)]/50 text-[15px] uppercase tracking-[0.12em]">Not included</h3>
              <ul className="mt-2 sm:mt-4 flex flex-wrap gap-x-4 gap-y-1 sm:grid sm:gap-1.5 text-[14px] sm:text-[15px] text-[var(--sw-black)]/55">
                {NOT_INCLUDED.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
