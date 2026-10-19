"use client";

import { ChartColumn, FileText, Link2, ListChecks, MessagesSquare, PenLine, Plus, Radar } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow, H2_LIGHT, LAVENDER, LINE_LIGHT, SECTION_Y } from "./ui";

const PARTS = [
  {
    icon: Radar,
    title: "AI visibility and competitor tracking",
    body: "AnswerRank tracks whether AI tools mention or recommend your brand, which competitors appear instead, and how you are described. Inaccurate information and negative sentiment are flagged.",
  },
  {
    icon: FileText,
    title: "Website content tailored to AI search questions",
    body: "FAQ answers and category descriptions built around the customer questions and gaps found in AI answers, with meta titles, meta descriptions and internal-link recommendations.",
  },
  {
    icon: PenLine,
    title: "Five AI visibility article drafts per month",
    body: "Drafts that answer product questions, comparisons and buying decisions. Topics come from your AI search findings, not a quota of generic blog posts.",
  },
  {
    icon: ListChecks,
    title: "AI visibility gap audit and action plan",
    body: "An initial audit sets your starting position. Monthly checks find missing answers and questions where competitors appear but you do not, turned into priorities.",
  },
  {
    icon: Link2,
    title: "Tracking the sources cited in AI answers",
    body: "The websites and pages AI tools cite in the answers we monitor, including those behind competitor recommendations, and which deserve your team’s attention.",
  },
  {
    icon: MessagesSquare,
    title: "External link, brand mention and Reddit opportunities",
    body: "Relevant websites, publications and Reddit discussions where your business could contribute or earn a link or mention, with research and practical guidance.",
  },
  {
    icon: ChartColumn,
    title: "Monthly AI visibility and progress report",
    body: "Changes in visibility, competitor presence and brand descriptions, plus content delivered, publication status, key findings and next actions.",
  },
];

const NOT_INCLUDED = [
  "Outreach campaigns, backlink acquisition, or securing paid or unpaid placements",
  "Reddit account management or posting on your behalf",
  "Trustpilot management or review collection",
  "Direct publishing, custom development, or ongoing technical fixes",
  "Full editorial review, including native-language proofreading",
];

/** Seven parts in a two-column hairline list, the report across both columns; what the package leaves out sits in a dropdown under it. */
export function Included() {
  return (
    <section id="coverage" className={`relative z-10 ${SECTION_Y}`} style={{ background: LAVENDER }}>
      <div className="wrap w-full">
        <Reveal>
          <Eyebrow>What’s included</Eyebrow>
          <h2 className={`${H2_LIGHT} mt-4`}>What you get every month</h2>
        </Reveal>
        <div className="mt-5 md:mt-[clamp(16px,3vh,40px)] grid gap-x-12 sm:grid-cols-2">
          {PARTS.map((p, i) => {
            const last = i === PARTS.length - 1;
            return (
              <Reveal key={p.title} delay={(i % 2) * 0.06} className={last ? "sm:col-span-2" : ""}>
                <div className={`h-full grid grid-cols-[24px_minmax(0,1fr)] items-center sm:items-start gap-x-4 border-t ${LINE_LIGHT} py-3.5 max-md:[@media(max-height:700px)]:py-2 sm:py-[clamp(8px,1.6vh,20px)]`}>
                  <p.icon aria-hidden className="h-5 w-5 sm:mt-0.5 text-[var(--sw-blue)]" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-head font-bold text-[var(--sw-black)] text-[16px] xl:text-[17px] leading-[1.25]">{p.title}</h3>
                    <p className={`hidden sm:block mt-1 text-[13px] xl:text-[14px] leading-snug xl:leading-relaxed text-[var(--sw-black)]/65 ${last ? "max-w-[90ch]" : ""}`}>
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <details className={`group border-y ${LINE_LIGHT}`}>
          <summary className="cursor-pointer list-none flex items-center justify-between gap-6 py-3 md:py-[clamp(10px,1.9vh,16px)] [&::-webkit-details-marker]:hidden">
            <span className="font-head font-semibold text-[var(--sw-black)]/70 text-[14px] md:text-[15px]">What’s not included</span>
            <Plus aria-hidden className="h-4 w-4 shrink-0 text-[var(--sw-blue)] group-open:rotate-45 transition" />
          </summary>
          <div className="pb-4 text-[14px] text-[var(--sw-black)]/65">
            <ul className="grid gap-1 sm:grid-cols-2 sm:gap-x-12 list-disc pl-5">
              {NOT_INCLUDED.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="mt-3">Need help with execution? Your account manager can arrange a separate scope with our team.</p>
          </div>
        </details>
      </div>
    </section>
  );
}
