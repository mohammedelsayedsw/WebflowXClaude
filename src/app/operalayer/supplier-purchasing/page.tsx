"use client";

import { OLHeader, OLHero, Stats, Faq, Contact, MoreApps } from "@/sections/operalayer/kit/parts";
import { Demo } from "@/sections/operalayer-supplier-purchasing/Season";
import { How } from "@/sections/operalayer-supplier-purchasing/How";
import { BeforeNow } from "@/sections/operalayer-supplier-purchasing/BeforeNow";

const FAQ = [
  {
    q: "Does this replace Business Central?",
    a: "No. OperaLayer reads the purchase orders from Business Central and leaves them there. The ERP stays your system of record.",
  },
  {
    q: "How do the brand spreadsheets get in?",
    a: "Orders come from Business Central. Supplier confirmations and invoices are read from the files and emails buyers already receive, so nobody retypes them.",
  },
  {
    q: "What does an invoice get checked against?",
    a: "Against the order the supplier confirmed. When a price or quantity does not agree, the row is flagged and the buyer decides what happens next.",
  },
  {
    q: "We run a different ERP. Does it still work?",
    a: "This app runs in production on Microsoft Business Central. For another ERP, we look at what it can share through an API, a database, or a file export before we scope the app.",
  },
  {
    q: "How long does it take to go live?",
    a: "Four weeks, with a working prototype on your own season data in the first week.",
  },
];

/** OperaLayer: Supplier Purchasing. */
export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <OLHeader
        links={[
          { id: "results", label: "Results" },
          { id: "example", label: "Example" },
          { id: "how", label: "How it works" },
          { id: "before", label: "Before and after" },
        ]}
      />
      <OLHero
        small
        name="Supplier Purchasing"
        line={
          <>
            An OperaLayer app for <span className="text-[var(--sw-mint)]">Microsoft Business Central.</span>
          </>
        }
        body="Buyers see every supplier brand's season in one place, and every invoice is checked against the order the supplier confirmed."
        secondary={{ id: "example", label: "See an example" }}
      />
      <section id="results" className="relative pt-8 pb-16 md:pb-24 scroll-mt-20">
        <div className="wrap">
          <Stats
            items={[
              { pre: "€", n: 34, post: "M", label: "of SS26 purchasing", sub: "tracked live across the whole season" },
              { n: 50, post: "+", label: "supplier brands", sub: "in one view, read from Business Central" },
              { n: 52, label: "invoice differences", sub: "caught before the goods reached the shelves" },
              { n: 4, post: " wk", label: "from start to live", sub: "with a prototype on real season data in week one" },
            ]}
          />
        </div>
      </section>
      <Demo />
      <How />
      <BeforeNow />
      <Faq items={FAQ} />
      <Contact
        title="Get Supplier Purchasing"
        body="Tell us how your buyers track supplier orders today. We will show you your season in one view."
      />
      <MoreApps current="supplier-purchasing" />
    </main>
  );
}
