"use client";

import { OLHeader, OLHero, Faq, Contact, MoreApps } from "@/sections/operalayer/kit/parts";
import { Results, Demo, HowItWorks, Quote } from "@/sections/operalayer-invoice-matching/Sections";

const FAQ = [
  {
    q: "Which invoice formats does it read?",
    a: "PDFs, scans, and phone photos, in any layout and language. Each supplier's layout is remembered for the next invoice from that supplier.",
  },
  {
    q: "What happens when it is not sure about a field?",
    a: "Every field carries a confidence score. When the score is low, or a line does not agree with the order, the invoice waits for a person with the reason shown on the row.",
  },
  {
    q: "Does it post to Navision on its own?",
    a: "Only invoices that agree with the order and pass your tolerances are ready to post, and a person confirms the export. Who confirmed it and when stays in the audit trail.",
  },
  {
    q: "Can it work with an ERP other than Navision?",
    a: "The app in production runs on Microsoft Dynamics NAV. For another ERP we look at how it shares purchase orders and accepts invoices before we scope the app.",
  },
  {
    q: "How long does it take to set up?",
    a: "Four weeks to live. In the first week you see a working prototype on your own invoices.",
  },
];

/** OperaLayer Invoice Matching. */
export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <OLHeader
        links={[
          { id: "results", label: "Results" },
          { id: "example", label: "Example" },
          { id: "how", label: "How it works" },
          { id: "faq", label: "Questions" },
        ]}
      />
      <OLHero
        small
        name="Invoice Matching"
        line={
          <>
            An OperaLayer app for <span className="text-[var(--sw-mint)]">Microsoft Dynamics NAV.</span>
          </>
        }
        body="Every supplier invoice is read and checked against its purchase order in Navision, so your team only looks at the ones that need a decision."
        secondary={{ id: "example", label: "See an example" }}
      />
      <Results />
      <Demo />
      <HowItWorks />
      <Quote />
      <Faq items={FAQ} />
      <Contact title="Get Invoice Matching" body="Tell us how supplier invoices reach your team today. We will show you the app working on a few of them." />
      <MoreApps current="invoice-matching" />
    </main>
  );
}
