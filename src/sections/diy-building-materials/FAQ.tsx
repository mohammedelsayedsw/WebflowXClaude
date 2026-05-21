"use client";

import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  return (
    <Reveal delay={i * 0.04}>
      <details className="group border-b border-white/10 py-5 md:py-6 [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-start justify-between gap-6 font-head text-white text-[17px] md:text-[20px] leading-[1.3]">
          <span>{q}</span>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border border-white/15 bg-white/[0.02] group-open:bg-[var(--sw-mint)]/15 group-open:border-[var(--sw-mint)]/50 transition">
            <Plus className="h-4 w-4 text-white group-open:hidden" />
            <Minus className="h-4 w-4 text-[var(--sw-mint)] hidden group-open:block" />
          </span>
        </summary>
        <div className="pt-4 pr-12 text-white/75 text-[14px] md:text-[16px] leading-relaxed">{a}</div>
      </details>
    </Reveal>
  );
}


export function FAQ() {
  const items = [
    {
      q: "What is the tech stack, and can it be adjusted?",
      a: "The core is Magento 2.4 LTS + Hyvä – the only stack we run at all three reference clients. Around it, the layers are configurable: Akeneo PIM (Ermitazas) OR a supplier-feed pipeline (Byggmax Poppy). Loop54 semantic search (Byggmax) OR HelloRetail (Murergrej) OR native. Amplience headless CMS (Byggmax) OR native page builder. Dynamic Yield personalisation (Byggmax) OR HelloRetail recommendations (Murergrej). We assess your stack in the diagnostic audit and recommend what fits – we never claim a stack we have not run.",
    },
    {
      q: "What if we are not on Magento? Does the accelerator still apply?",
      a: "Yes. The accelerator is patterns and modules, not a forced replatform. The external-WMS-as-truth pattern, session-based VAT toggle, pallet-math pricing, supplier-feed exception workspace, and search-and-personalisation logic all layer onto Adobe Commerce, BigCommerce, or proprietary stacks. The first engagement step is normally a wedge that lives on your existing platform. The platform decision is step two – only if the existing platform is the actual blocker.",
    },
    {
      q: "We just acquired several brands and need to harmonise catalogs. Does the accelerator help?",
      a: "Yes – this is one of the strongest fit signals. Ermitazas restructured 800 flat product families into 2000+ across a 4-level hierarchy with dynamic attribute inheritance via a custom PHP save handler. Akeneo could not do it out of the box. The pattern travels to any DIY group integrating multiple acquired catalogs with overlapping SKUs, inconsistent attribute models, and supplier mismatches.",
    },
    {
      q: "Does it work outside the Nordic markets?",
      a: "Yes. The architecture is country-agnostic. Multi-currency, multi-language, region-specific delivery rules and tax handling are first-class. Reference builds run in Sweden, Denmark, and Lithuania. Adding markets is a configuration, not a re-architecture.",
    },
    {
      q: "What if we are on Magento 1, BigCommerce, or a custom platform?",
      a: "We migrate from any of these. Scripted cutover, dry-run tested, zero-downtime fallback. Catalog, customers, orders, addresses, and historical transactions all migrate. Magento 1 holdouts are a particularly common starting point – the migration runbook is well-trodden.",
    },
    {
      q: "What if we have 50,000 SKUs and dozens of suppliers?",
      a: "The data model and PIM tooling are built for that scale and beyond. Ermitazas runs the same stack with weekly catalog churn across hundreds of suppliers. Family hierarchies model fitment and configurable products. Vendor SKU mapping resolves duplicate-supplier products to one canonical SKU on the storefront.",
    },
    {
      q: "What does fourteen weeks actually deliver?",
      a: "The first production module on the highest-value workflow – not the full programme. Realistic timeline for a full configure-and-launch programme is 6–18 months depending on platform and integration depth. Murergrej's B2B portal took 18 months zero-to-live for 200+ trade accounts. We do not promise full accelerator delivery in 14 weeks – we promise the first module in production.",
    },
    {
      q: "What if our back office is SAP, Kerridge K8, Epicor BisTrack, or a custom WMS?",
      a: "Integration is protocol-agnostic – REST, GraphQL, SOAP, webhooks, message queues, SFTP, CSV. Murergrej runs YouWe WMS as source of truth on inventory (Magento's reservation table is truncated; the WMS owns allocation). Byggmax runs a Poppy supplier-feed pipeline. Ermitazas runs Devoro for supplier sync. The integration pattern travels; the system you already own does not have to be replaced.",
    },
    {
      q: "How does the trade-and-DIY account model work in practice?",
      a: "Same catalog, different worlds. A homeowner sees retail prices and consumer SKUs. A logged-in trade account sees contract pricing, bulk pack sizes, credit balance, gated SKUs, and bulk PO upload. Account roles route approval, finance, and branch visibility separately. Multi-branch trade accounts get consolidated billing across ship-to locations.",
    },
    {
      q: "What happens to our existing customers, orders, and supplier feeds?",
      a: "Scripted cutover from your legacy stack. Dry-run tested before launch. Customers, orders, addresses, payment tokens, supplier vendor records, and historical transactions all migrate. Zero-downtime fallback if cutover hits a snag. Supplier feeds connect through Devoro – we map the first two during the diagnostic, the rest during the build.",
    },
    {
      q: "Who owns the code after launch?",
      a: "You do. Full repository and documentation handed over at launch. No lock-in. Ongoing support happens on request – many reference clients keep an SLA arrangement for the first year, then bring it in-house once their team is up to speed.",
    },
    {
      q: "Can we see the accelerator working before committing?",
      a: "Yes. The €490 audit step exists for exactly that. We map your current stack against the accelerator, identify which modules fit and which custom work you genuinely need, and you decide whether the €990 module build is the right next step. Credited toward the next step within 14 days if you continue.",
    },
  ];
  return (
    <section id="faq" className="bg-[var(--sw-black)] py-28 md:py-40">
      <div className="wrap">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[44px] lg:text-[56px] leading-[1.05] max-w-[14ch]">
              The questions that actually <span className="text-[var(--sw-mint)]">come up</span>
            </h2>
          </Reveal>
          <div>
            {items.map((it, i) => (
              <FAQItem key={i} q={it.q} a={it.a} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
