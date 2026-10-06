"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { btnSecondary } from "@/components/primitives/buttonStyles";
import { formatMoney } from "./Savings";
import { scrollToId } from "./scrollTo";
import { ANNUAL_SERVICE_PRICE, MIGRATION_PRICE } from "./status";

const FAQS = [
  {
    q: "Will we keep the features we use today?",
    a: "The goal is for your team to keep working as usual. We confirm how Community Edition and the Akeneo Plus Bundle cover your requirements, then validate the new setup with your team before the switch.",
  },
  {
    q: "Will our team need to manage upgrades?",
    a: "No. scandiweb keeps your Akeneo system up to date, secure, and running. We handle hosting, maintenance, security patches, and upgrades, and test compatibility before any update goes live.",
  },
  {
    q: "Do we keep ownership of our system and data?",
    a: "Yes. You own your system and your product data. scandiweb provides the migration and the ongoing maintenance service.",
  },
  {
    q: "Is the whole solution free?",
    a: `Akeneo Community Edition has no Akeneo license fee. Migration costs ${formatMoney(MIGRATION_PRICE, "EUR")} once. The bundle, maintenance, hosting, and upgrades cost ${formatMoney(ANNUAL_SERVICE_PRICE, "EUR")} per year.`,
  },
  {
    q: "Can we keep our current integrations?",
    a: "Yes. We migrate the integrations your business needs and change what the new setup requires. Each connection and its data flows are tested before the switch.",
  },
  {
    q: "Will the interface and workflows be identical?",
    a: "Some screens or steps may differ. We show how your team's tasks work in the new setup and agree any changes before migration.",
  },
  {
    q: "How long does migration take?",
    a: "It depends on your catalog, the capabilities you need, and your integrations. You get a migration schedule after we review your setup.",
  },
  {
    q: "When should we start?",
    a: "Before your license renewal notice deadline. We work back from that date to leave time for assessment, migration, and validation.",
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
    <section id="faq" className="relative z-10 py-24 md:py-32 bg-[#05070f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="wrap grid gap-10 md:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
        <Reveal>
          <div className="label-code text-white/45">Questions</div>
          <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] leading-[1.05] max-w-[14ch]">
            Akeneo Plus Bundle <span style={{ color: "var(--sw-mint)" }}>questions</span>
          </h2>
          <a href="#cta" onClick={scrollToId("cta")} className={`${btnSecondary} mt-8`}>
            Ask about my setup
          </a>
        </Reveal>
        <div className="border-t border-white/10">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <details className="group border-b border-white/10">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-6 py-5 md:py-6 [&::-webkit-details-marker]:hidden">
                  <span className="font-head font-semibold text-white text-[17px] md:text-[19px] leading-[1.3]">{f.q}</span>
                  <span
                    aria-hidden
                    className="shrink-0 mt-0.5 h-6 w-6 rounded-full border border-white/30 grid place-items-center text-white/70 text-[16px] leading-none group-open:rotate-45 transition"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-6 pr-12 max-w-[64ch] text-[15px] md:text-[16px] text-white/75 leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
