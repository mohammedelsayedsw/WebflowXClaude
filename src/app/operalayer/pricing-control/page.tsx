"use client";

import { OLHeader, OLHero, Stats, Faq, Contact, MoreApps, Rise } from "@/sections/operalayer/kit/parts";
import { Demo } from "@/sections/operalayer-pricing-control/Demo";
import { HowItWorks } from "@/sections/operalayer-pricing-control/HowItWorks";
import { Quote } from "@/sections/operalayer-pricing-control/Quote";

const FAQ = [
  {
    q: "Do we have to change our Magento store?",
    a: "No. Pricing Control sends prices to Magento through its API on the schedule you set. The catalog, checkout, and storefront stay as they are.",
  },
  {
    q: "Can it handle different excise and sales tax rules per state?",
    a: "Yes. Each state keeps its own rules, and every price is worked out from them. When a rule changes, the prices in that state are worked out again.",
  },
  {
    q: "Who decides when prices change?",
    a: "Your team does. Every update waits for approval, then goes to the store at the time you schedule.",
  },
  {
    q: "What if a rule is set wrong?",
    a: "Every rule change is kept with who made it and when, so a wrong rule can be traced and put right before the next update.",
  },
  {
    q: "Does it work with stores outside Magento?",
    a: "The live app runs on Magento (Adobe Commerce). Other platforms that accept prices through an API or a file can be connected the same way.",
  },
];

/** Pricing Control, an OperaLayer app. */
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
        name="Pricing Control"
        line={
          <>
            An OperaLayer app for <span className="text-[var(--sw-mint)]">Magento (Adobe Commerce).</span>
          </>
        }
        body="Pricing Control works out the price of every product in every US state from one set of rules, and sends approved updates to your store on schedule."
        secondary={{ id: "example", label: "See an example" }}
      />

      <section id="results" className="relative py-24 md:py-32 scroll-mt-20">
        <div className="wrap">
          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <Rise className="lg:col-span-6">
              <h2 className="font-head text-white text-[38px] md:text-[54px] lg:text-[60px] leading-[1.03] tracking-[-0.025em] text-balance">
                Built for a retailer selling in every US state
              </h2>
            </Rise>
            <Rise delay={0.08} className="lg:col-span-6">
              <p className="text-white/70 text-[17px] md:text-[19px] leading-[1.6]">
                A US specialty retailer sells direct to consumers in all 50 states. Its prices lived in one Excel
                workbook that one person kept running. Now they come from Pricing Control.
              </p>
            </Rise>
          </div>
          <div className="mt-16">
            <Stats
              items={[
                { n: 50, label: "US states priced live", sub: "each with its own excise and sales tax rules" },
                { n: 8, label: "margin types", sub: "recalculated for every state as soon as a rule or cost changes" },
                { n: 1, label: "set of rules", sub: "in place of the workbook and its formulas" },
                { n: 4, label: "weeks to go live", sub: "after a working prototype on the retailer's own data in week one" },
              ]}
            />
          </div>
        </div>
      </section>

      <Demo />
      <HowItWorks />
      <Quote />
      <Faq items={FAQ} />
      <Contact title="Get Pricing Control" body="Show us how you set prices today, and we will show you the app that would run it." />
      <MoreApps current="pricing-control" />
    </main>
  );
}
