"use client";

import { Plus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { PlanLink } from "./plan";
import { Eyebrow, H2_LIGHT, LINE_LIGHT, SECTION_Y } from "./ui";

/** A paragraph (**text** is bold), or a list of [bold lead, rest] pairs. The JSON-LD answer is the same blocks as plain text. */
type Block = string | { list: [string, string][] };

const FAQS: { q: string; a: Block[] }[] = [
  {
    q: "We already have an SEO agency. How does Core fit?",
    a: [
      "Keep your agency and marketing strategy. Core makes AI visibility an explicit responsibility through tracking, content tailored to AI search questions, and practical recommendations. We agree who owns each action before starting, so your existing team can approve and publish the work without duplicating what is already covered.",
    ],
  },
  {
    q: "What does “website content tailored to AI search questions” mean?",
    a: [
      "It means improving the information on your website so it answers the questions people ask AI tools when choosing a product. A major part of this is **category descriptions**. A page that only lists products may leave out who they are for, how they differ, and how to choose between them.",
      "For example, a “laptop backpacks” category can explain laptop sizes, protection, commuting needs, and product differences. We prepare category copy and FAQ answers around those questions, based on your product information and the gaps we find in AI answers.",
      {
        list: [
          ["Category descriptions:", "what the range includes, who it suits, and the details that help someone choose."],
          ["FAQ answers:", "questions such as “Which size fits a 16-inch laptop?” or “Which options work for daily commuting?”"],
          [
            "Supporting page content:",
            "meta titles, meta descriptions, and recommendations for links to relevant products, categories, and guides.",
          ],
        ],
      },
      "We use a repeatable process to work through your category descriptions, prioritizing the most important gaps. The pages, languages, and monthly volume are agreed in the content plan. Your team checks the drafts and publishes them.",
    ],
  },
  {
    q: "What are the five monthly article drafts about?",
    a: [
      "They answer product questions, comparisons, and buying decisions that matter to your customers. For a bag retailer, examples could include “How to choose a backpack for commuting” or “Travel backpack or duffel: which suits a weekend trip?” Actual topics come from your AI search findings and content gaps. You receive five drafts each month for approval and publication.",
    ],
  },
  {
    q: "Who approves and publishes the content?",
    a: [
      "Your nominated approver checks accuracy, product claims, brand tone, and language. Your team or agency then publishes it. We track approval and publication status, then monitor performance in AI search. Core does not include direct publishing or full editorial review. If you need us to handle those, we can agree a separate scope.",
    ],
  },
  {
    q: "Will every category be optimized at once?",
    a: [
      "We plan coverage across your category pages and work through them in priority order. The initial audit helps us choose where to start. Your monthly plan sets the pages and language versions to prepare next, so progress is clear. Core does not promise an unlimited catalog rewrite in a single month.",
    ],
  },
  {
    q: "Can you prepare content in different languages?",
    a: [
      "Yes, in agreed languages. Language versions use the same monthly content allowances. Your approver checks the language before publication. Native-language proofreading can be scoped separately if you need it.",
    ],
  },
  {
    q: "Can you secure links, placements, or Reddit activity for us?",
    a: [
      "Yes. We can arrange outreach, backlink acquisition, securing placements, and Reddit activity as separately scoped work. In the Core subscription, we research relevant websites, publications, and discussions, then give your team practical recommendations. Executing those opportunities is not included in Core. Your account manager can help agree the additional support you need.",
    ],
  },
  {
    q: "What happens when you identify a technical issue?",
    a: [
      "We flag technical issues identified during the review for your technical team. We can also scope the fixes with you. Core does not include custom development or ongoing technical fixes, while technical improvements can form part of a tailored Industry Leader program.",
    ],
  },
  {
    q: "How do you measure progress?",
    a: [
      "We establish your starting position for the customer questions we agree to monitor. The monthly report shows changes in your brand’s visibility, competitor presence, and brand descriptions, alongside content delivered, publication status, and next actions. Tracking is tied to the agreed questions, markets, and AI tools, so the comparison stays clear.",
    ],
  },
  {
    q: "How is Industry Leader different?",
    a: [
      "Core covers baseline monitoring, drafts, and recommendations. Industry Leader is a tailored, hands-on program built around your industry, competitors, and commercial goals. It can include expert-reviewed content, technical improvements, outreach, and broader market coverage. We build on the coverage you already have without charging twice for overlapping work.",
    ],
  },
];

const strip = (t: string) => t.split("**").join("");
const plain = (a: Block[]) =>
  a.map((b) => (typeof b === "string" ? strip(b) : b.list.map(([lead, rest]) => `${lead} ${rest}`).join(" "))).join(" ");

const rich = (t: string) =>
  t.split("**").map((part, i) => (i % 2 ? <strong key={i} className="font-semibold text-[var(--sw-black)]">{part}</strong> : part));

export function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  };

  return (
    <section id="faq" className={`relative z-10 bg-white ${SECTION_Y}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap w-full grid gap-6 md:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] items-start">
        <Reveal>
          <Eyebrow>Before you decide</Eyebrow>
          <h2 className={`${H2_LIGHT} mt-4 max-md:[@media(max-height:700px)]:text-[26px]`}>
            A few{" "}
            <span className="inline-block whitespace-nowrap" style={{ color: "var(--sw-blue)" }}>
              practical questions
            </span>
          </h2>
          <PlanLink
            plan="core"
            className="mt-5 md:mt-8 inline-block font-head font-bold text-[16px] text-[var(--sw-blue)] border-b border-[var(--sw-blue)] py-1 hover:opacity-80 transition max-md:hidden"
          >
            Ask us on a call
          </PlanLink>
        </Reveal>
        <div className={`border-t ${LINE_LIGHT}`}>
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.03}>
              <details className={`group border-b ${LINE_LIGHT}`}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 py-3 max-md:[@media(max-height:700px)]:py-2 md:py-[clamp(8px,1.6vh,16px)] [&::-webkit-details-marker]:hidden">
                  <span className="font-head font-bold text-[var(--sw-black)] text-[15px] max-md:[@media(max-height:700px)]:text-[14px] md:text-[17px] leading-[1.3]">{f.q}</span>
                  <Plus aria-hidden className="h-5 w-5 shrink-0 text-[var(--sw-blue)] group-open:rotate-45 transition" />
                </summary>
                <div className="pb-5 pr-10 max-w-[68ch] text-[15px] md:text-[16px] text-[var(--sw-black)]/70 leading-relaxed">
                  {f.a.map((b, j) =>
                    typeof b === "string" ? (
                      <p key={j} className={j ? "mt-3" : ""}>
                        {rich(b)}
                      </p>
                    ) : (
                      <ul key={j} className="mt-3 list-disc pl-5 text-[14px] md:text-[15px]">
                        {b.list.map(([lead, rest]) => (
                          <li key={lead} className="mt-1.5">
                            <strong className="font-semibold text-[var(--sw-black)]">{lead}</strong> {rest}
                          </li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
