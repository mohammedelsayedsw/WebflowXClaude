"use client";

import { OLHeader, MoreApps } from "@/sections/operalayer/kit/parts";
import { Hero, Results, Example, HowItWorks, Quote, Calculator, Questions, Contact } from "@/sections/operalayer-invoice-matching/Sections";
import { FAQ_GROUPS } from "@/sections/operalayer-invoice-matching/copy";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((g) => g.items).map((x) => ({
    "@type": "Question",
    name: x.q,
    acceptedAnswer: { "@type": "Answer", text: x.a },
  })),
};

/** OperaLayer invoice matching. Copy: Anton's page, verbatim (sections/operalayer-invoice-matching/copy.ts). */
export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <OLHeader
        links={[
          { id: "results", label: "Results" },
          { id: "example", label: "Example" },
          { id: "how", label: "How it works" },
          { id: "calculator", label: "Calculator" },
        ]}
        cta={{ id: "contact", label: "Book a demo call" }}
      />
      <Hero />
      <Results />
      <Example />
      <HowItWorks />
      <Quote />
      <Calculator />
      <Questions />
      <Contact />
      <MoreApps current="invoice-matching" />
    </main>
  );
}
