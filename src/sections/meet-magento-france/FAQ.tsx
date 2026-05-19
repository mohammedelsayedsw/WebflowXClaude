"use client";

import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const faqs: { q: string; a: string }[] = [
  {
    q: "What is Meet Magento France 2026?",
    a: "Meet Magento France is the annual French gathering of the Adobe Commerce, Magento and Hyvä community – a one-day conference with talks, demos and networking for merchants, agencies, developers and technology partners working on Magento. The 2026 edition runs on 25 June 2026 in Paris.",
  },
  {
    q: "When and where is Meet Magento France 2026?",
    a: "25 June 2026 at Les Salons de l’Aveyron, Paris. Full venue and travel details are on the official venue page.",
  },
  {
    q: "Where can I get tickets?",
    a: "Through the official Eventbrite page.",
  },
  {
    q: "Will scandiweb be at Meet Magento France 2026?",
    a: "Yes – Michael Bliah, our VP of North America & B2B, will be at the event all day for informal conversations with merchants, agencies and partners. Connect with him on LinkedIn before the conference if you’d like to meet up in Paris.",
  },
  {
    q: "Who is scandiweb?",
    a: "scandiweb is a 500-person eCommerce agency, 23 years in, working across 33 countries. We’re the #1 most certified Adobe Commerce agency in the world with 894+ Adobe Commerce certifications, a Hyvä Platinum Partner, and a Magento Association Gold Member. Clients include Jaguar Land Rover, The New York Times, Samsung, Toyota and Reuters. Last year, in 2025, we co-organized Meet Magento NYC and Meet Magento Canada.",
  },
  {
    q: "How do I get in touch with Michael before the event?",
    a: "Connect with him on LinkedIn or email michael.bliah@scandiweb.com.",
  },
  {
    q: "Is the event in French or English?",
    a: "Sessions are a mix of French and English. The community is international, and most speakers and agencies are happy to switch to English in conversation.",
  },
  {
    q: "Why should I attend Meet Magento France?",
    a: "It’s the biggest Magento community moment of the year in France and one of the strongest in continental Europe. You’ll hear directly from merchants and agencies about what’s actually working right now on Adobe Commerce, Magento Open Source and Hyvä – and you’ll meet the people behind the projects.",
  },
];

function FaqSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <FaqSchema />
      <div className="wrap relative">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[16ch]">
              Frequently{" "}
              <span style={{ color: "var(--sw-mint)" }}>asked</span>.
            </h2>
          </Reveal>

          <div>
            {faqs.map((it, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <details className="group border-b border-white/10 py-5 [&_summary]:list-none">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 font-head text-white text-[17px] md:text-[20px] leading-[1.3]">
                    <span>{it.q}</span>
                    <span className="shrink-0 mt-1 text-white/60 group-hover:text-white">
                      <Plus className="h-4 w-4 group-open:hidden" />
                      <Minus className="h-4 w-4 hidden group-open:block" />
                    </span>
                  </summary>
                  <div className="pt-4 pr-12 text-white/75 text-[14px] md:text-[15px] leading-relaxed">
                    {it.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
