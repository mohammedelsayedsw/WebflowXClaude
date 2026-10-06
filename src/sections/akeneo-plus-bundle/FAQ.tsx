"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { Plus } from "lucide-react";
import { formatMoney } from "./Savings";
import { scrollToId } from "./scrollTo";
import { ANNUAL_SERVICE_PRICE, MIGRATION_PRICE } from "./status";
import { H2_LIGHT, LAVENDER, LINE_LIGHT } from "./ui";

const FAQS = [
  {
    q: "Will we keep the features we use today?",
    a: "Before migration we list every feature your team uses and show how Community Edition or the bundle covers it. Anything not covered goes into the plan with the work needed to close the gap. Your users test the result before go-live.",
  },
  {
    q: "Will our team need to manage upgrades?",
    a: "No. scandiweb applies Akeneo updates and security patches, keeps extensions compatible, and tests each update before it reaches production.",
  },
  {
    q: "Do we own the system and the data?",
    a: "Yes. The Community Edition instance and your product data are yours. scandiweb provides the migration and the ongoing service.",
  },
  {
    q: "What does it cost?",
    a: `${formatMoney(MIGRATION_PRICE, "EUR")} once for the migration, then ${formatMoney(ANNUAL_SERVICE_PRICE, "EUR")} a year for the bundle, hosting, maintenance, upgrades, and support. Community Edition has no Akeneo license fee.`,
  },
  {
    q: "Can we keep our current integrations?",
    a: "Yes. We move the integrations you need, change what the new setup requires, and test each data flow before the switch.",
  },
  {
    q: "Will screens and workflows look the same?",
    a: "Mostly. Some screens or steps differ from licensed Akeneo. We show your team those differences during planning and agree them with you before migration.",
  },
  {
    q: "How long does migration take?",
    a: "It depends on catalog size, the features you need, and the number of integrations. You get a dated schedule after the setup review.",
  },
  {
    q: "When should we start?",
    a: "Before your license renewal notice deadline. We plan backward from that date so the review, migration, and testing all fit before it.",
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
    <section id="faq" className="relative z-10 py-16 md:py-28" style={{ background: LAVENDER }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap grid gap-10 md:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
        <Reveal>
          <h2 className={`${H2_LIGHT} mt-0 max-w-[14ch]`}>Akeneo Plus Bundle FAQ</h2>
          <a
            href="#cta"
            onClick={scrollToId("cta")}
            className="mt-8 inline-block font-head font-bold text-[16px] text-[var(--sw-blue)] border-b border-[var(--sw-blue)] py-1 hover:opacity-80 transition"
          >
            Ask about my setup
          </a>
        </Reveal>
        <div className={`border-t ${LINE_LIGHT}`}>
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className={`group border-b ${LINE_LIGHT}`}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
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
