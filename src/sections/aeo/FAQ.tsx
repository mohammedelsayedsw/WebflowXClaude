"use client";

import { Plus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { PlanLink } from "./plan";
import { H2_LIGHT, LINE_LIGHT, SECTION_Y } from "./ui";

const FAQS = [
  {
    q: "We already have an SEO agency. How does this fit?",
    a: "Keep them. AI Visibility Core adds tracking, content and recommendations for AI search, and we agree who owns each action so nothing is done twice.",
  },
  {
    q: "What is content for AI search questions?",
    a: "Category descriptions and FAQ answers that cover what people ask AI tools before they buy: who a product is for, how options differ, how to choose. Plus meta titles, descriptions and internal links.",
  },
  {
    q: "What are the five articles about?",
    a: "Product questions, comparisons and buying decisions, picked from your AI search gaps. For a bag retailer: “How to choose a backpack for commuting”.",
  },
  {
    q: "Who approves and publishes?",
    a: "Your approver checks accuracy, product claims, tone and language. Your team or agency publishes. We track the status and the results.",
  },
  {
    q: "Which languages?",
    a: "Any language we agree on. Language versions count toward the same monthly allowance.",
  },
  {
    q: "Can you build links or post on Reddit for us?",
    a: "Not in this package. We find the opportunities and give your team the steps. Outreach, links and Reddit activity can be added as a separate scope.",
  },
  {
    q: "How do you measure progress?",
    a: "We record a starting point for the questions we monitor, then report monthly on visibility, competitors, and how AI tools describe you.",
  },
];

export function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className={`relative z-10 bg-white ${SECTION_Y}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap w-full grid gap-6 md:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
        <Reveal>
          <h2 className={`${H2_LIGHT} max-w-[14ch]`}>Questions</h2>
          <PlanLink
            plan="core"
            className="mt-5 md:mt-8 inline-block font-head font-bold text-[16px] text-[var(--sw-blue)] border-b border-[var(--sw-blue)] py-1 hover:opacity-80 transition"
          >
            Ask us on a call
          </PlanLink>
        </Reveal>
        <div className={`border-t ${LINE_LIGHT}`}>
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className={`group border-b ${LINE_LIGHT}`}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 py-4 md:py-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-head font-bold text-[var(--sw-black)] text-[17px] md:text-[18px] leading-[1.3]">{f.q}</span>
                  <Plus aria-hidden className="h-5 w-5 shrink-0 text-[var(--sw-blue)] group-open:rotate-45 transition" />
                </summary>
                <p className="pb-6 pr-12 max-w-[64ch] text-[15px] md:text-[16px] text-[var(--sw-black)]/70 leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
