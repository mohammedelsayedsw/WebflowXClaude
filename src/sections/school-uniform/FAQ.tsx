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
      a: "The reference build runs on Magento 2 + Hyvä – an enterprise-grade, open-source stack with a large global community, deep extensibility, no vendor lock-in, and no software licensing fees. Chosen deliberately: SaaS platforms rarely flex to the tailored requirements a group-buying model demands. We assess your stack in the diagnostic sprint and recommend what fits.",
    },
    {
      q: "Does it work outside the school uniform vertical?",
      a: "The architecture (parent-child-school entities, gated catalogs, ERP-triggered returns, term-aware delivery) generalises to any contract-distribution model where buyers have multiple beneficiaries across multiple authorising organisations. School photography, school sportswear, music programmes, regulated apparel – same pattern.",
    },
    {
      q: "What if we have hundreds of schools and tens of thousands of SKUs?",
      a: "The reference retailer runs ~200 schools. The data model and admin tooling are built for that scale and beyond. Catalog scoping is per-school, per-grade, per-gender – not a single global catalog you filter into oblivion.",
    },
    {
      q: "Will it work for our market and language?",
      a: "Yes. Multi-currency, multi-language, region-specific delivery rules and tax handling are first-class. Reference build is bilingual EN/FR for Canada. Adding markets is a configuration, not a re-architecture.",
    },
    {
      q: "What does an eleven-week kickoff-to-launch actually cover?",
      a: "All eight modules configured against your environment: parent-child-school accounts, school-gated catalogs, sized uniform PDPs, ERP integration, fitting appointments, returns with coupon refunds, term-aware delivery, and the commerce baseline. Migration from your legacy platform. Live before back-to-school.",
    },
    {
      q: "What if our ERP is SAP, Navision, or something else?",
      a: "The adapter pattern extends naturally. SAP B1, MS Dynamics, Odoo, NetSuite, and in-house systems have all been scoped. Protocol mix per integration – REST, GraphQL, SOAP, webhooks, message queues, SFTP/CSV, flat-file drops.",
    },
    {
      q: "What happens to our existing customers, orders, and data?",
      a: "Scripted cutover from your legacy stack. Dry-run tested before launch. Customers, orders, addresses, payment tokens (where re-tokenisable), and historical returns all migrate. Zero-downtime fallback if cutover hits a snag.",
    },
    {
      q: "Who owns the code after launch?",
      a: "You do. Full repository and documentation handed over at launch. No lock-in. Ongoing support happens on request.",
    },
    {
      q: "Who runs it after launch?",
      a: "Your team, with our 30-day post-launch on-call covering the first peak window. Optional managed-services arrangement available; many reference clients keep it for the first year, then bring it in-house once their team is up to speed.",
    },
    {
      q: "Can we see a live demo before committing?",
      a: "Yes. We walk through the modules in a sandbox during the consultation. Book below.",
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
