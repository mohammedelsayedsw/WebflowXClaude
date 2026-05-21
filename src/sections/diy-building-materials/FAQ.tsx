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
      a: "The reference build runs on Magento 2.4 LTS + Hyvä – an enterprise-grade, open-source stack with a large global community, deep extensibility, no vendor lock-in, and no software licensing fees. Akeneo PIM (ReadyPIM build) for catalog master data, Devoro for supplier-feed sync, Loop54 for semantic search, Dynamic Yield for personalisation, Amplience for content. We assess your stack in the diagnostic audit and recommend what fits. SaaS platforms rarely flex to multi-warehouse, multi-supplier, multi-region DIY operations.",
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
      q: "What does a fourteen-week kickoff-to-launch actually cover?",
      a: "All six modules configured against your environment: multi-warehouse inventory, trade-and-DIY accounts, supplier-feed pipeline, semantic search, content stack, peak resilience. Migration from your legacy platform. Live in time for your next seasonal peak.",
    },
    {
      q: "What if our ERP is SAP, Navision, or something else?",
      a: "The adapter pattern extends naturally. SAP S/4HANA, SAP B1, MS Dynamics, Odoo, NetSuite, Pyramid, and in-house systems have all been scoped. Protocol mix per integration – REST, GraphQL, SOAP, webhooks, message queues, SFTP/CSV, flat-file drops.",
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
