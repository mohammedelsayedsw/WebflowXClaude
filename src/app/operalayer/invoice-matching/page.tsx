"use client";

import { OLHeader } from "@/sections/operalayer/kit/parts";
import {
  Hero,
  Problem,
  Example,
  CustomerCase,
  HowItWorks,
  Roles,
  Calculator,
  GettingStarted,
  UnderTheHood,
  Questions,
  Demo,
} from "@/sections/operalayer-invoice-matching/Sections";
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

/** OperaLayer purchase order and invoice matching. Copy: Anton's page, verbatim (see sections/operalayer-invoice-matching/copy.ts). */
export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <OLHeader
        links={[
          { id: "example", label: "Invoice example" },
          { id: "customer-case", label: "Customer case" },
          { id: "calculator", label: "Calculator" },
        ]}
        cta={{ id: "demo", label: "Book a demo call" }}
      />
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
