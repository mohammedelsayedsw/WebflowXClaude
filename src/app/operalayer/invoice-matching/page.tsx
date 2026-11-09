"use client";

import { MoreApps } from "@/sections/operalayer/kit/parts";
import {
  Hero,
  QuoteBand,
  Problem,
  Example,
  CustomerCase,
  HowItWorks,
  Roles,
  BestFit,
  Calculator,
  GettingStarted,
  UnderTheHood,
  Questions,
  Demo,
} from "@/sections/operalayer-invoice-matching/Sections";
import { FAQ_GROUPS } from "@/sections/operalayer-invoice-matching/copy";
import "@/sections/akeneo-plus-bundle/range.css";

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((g) => g.items).map((x) => ({
    "@type": "Question",
    name: x.q,
    acceptedAnswer: { "@type": "Answer", text: x.a },
  })),
};

/** OperaLayer invoice matching on the scandiweb page system (/akeneo/plus-bundle, PR #842; republished 2026-11-09 18:1x UTC). Copy: Anton's page, verbatim and complete (sections/operalayer-invoice-matching/copy.ts). */
export default function Page() {
  return (
    <main className="relative isolate min-h-screen flex flex-col bg-[var(--sw-black)] font-body">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <Hero />
      <QuoteBand />
      <Problem />
      <Example />
      <CustomerCase />
      <HowItWorks />
      <Roles />
      <BestFit />
      <Calculator />
      <GettingStarted />
      <UnderTheHood />
      <Questions />
      <Demo />
      <div className="bg-[var(--sw-black)]">
        <MoreApps current="invoice-matching" />
      </div>
    </main>
  );
}
