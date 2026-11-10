"use client";

import { Header, Hero, Problem, Example, CustomerCase, HowItWorks } from "@/sections/operalayer-invoice-matching/Sections";
import { Roles, Calculator, GettingStarted, UnderTheHood, Questions, Demo } from "@/sections/operalayer-invoice-matching/Sections2";
import { FAQ_GROUPS } from "@/sections/operalayer-invoice-matching/copy";
import "@/sections/operalayer-invoice-matching/page.css";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((g) => g.items).map((x) => ({
    "@type": "Question",
    name: x.q,
    acceptedAnswer: { "@type": "Answer", text: x.a },
  })),
};

/**
 * OperaLayer invoice matching. scandiweb type and 2px corners; the three records the product compares
 * are drawn as the three layers of the OperaLayer logo.
 * Copy: Anton's page, verbatim and complete (sections/operalayer-invoice-matching/copy.ts).
 */
export default function Page() {
  return (
    <main className="olp relative isolate min-h-screen flex flex-col font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Header />
      <Hero />
      <Problem />
      <Example />
      <CustomerCase />
      <HowItWorks />
      <Roles />
      <Calculator />
      <GettingStarted />
      <UnderTheHood />
      <Questions />
      <Demo />
    </main>
  );
}
