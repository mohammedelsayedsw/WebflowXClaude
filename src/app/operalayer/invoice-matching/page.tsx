"use client";

import { Nav, Hero, Proof, Problem, Example, HowItWorks, CustomerCase } from "@/sections/operalayer-invoice-matching/Sections";
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
 * OperaLayer invoice matching: a product-led page. The app (sections/operalayer-invoice-matching/app.tsx)
 * is shown reading the example invoice and flagging its three lines.
 * Copy: Anton's page (sections/operalayer-invoice-matching/copy.ts).
 */
export default function Page() {
  return (
    <main className="olp relative isolate min-h-screen flex flex-col font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Nav />
      <Hero />
      <Proof />
      <Problem />
      <Example />
      <HowItWorks />
      <CustomerCase />
      <Roles />
      <Calculator />
      <GettingStarted />
      <UnderTheHood />
      <Questions />
      <Demo />
    </main>
  );
}
