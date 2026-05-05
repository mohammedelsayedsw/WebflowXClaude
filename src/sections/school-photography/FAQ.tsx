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
      q: "Do we have to use Pimcore?",
      a: "No. The accelerator is a proven architecture pattern, not one stack. Reference deployment uses Pimcore for the data and portal layer, Magento 2 + Hyvä for parent commerce, .NET middleware for integration. We assess your stack in the diagnostic sprint and recommend what fits.",
    },
    {
      q: "We already have a school portal. Does that disqualify us?",
      a: "No. Many engagements start with one specific capability – batch exports, ID card flows, access controls – not a full replacement. The diagnostic sprint identifies the highest-cost workflow. We fix that first.",
    },
    {
      q: "What does a fourteen-week launch actually cover?",
      a: "Student data model redesigned from the ground up. Dual SSO wired. Batch engine with 10 export formats. ID card workflow live. Five legacy systems integrated via middleware API. Admin on VPN, portal IP-restricted. Full audit logging. 500GB images migrated off an on-prem server. Live before peak season.",
    },
    {
      q: "Our legacy systems are fragile. Can we modernize without touching them?",
      a: "Yes. That is exactly the point of the middleware integration layer. New systems talk to legacy through an adapter API. No direct database access, no cutover risk. The reference engagement kept all five legacy systems live during delivery.",
    },
    {
      q: "What if our ERP is SAP, Navision, or something else?",
      a: "The adapter pattern extends naturally. Five production adapters today; SAP B1, MS Dynamics, Odoo, NetSuite, and in-house systems have been scoped. Protocol mix per integration – REST, GraphQL, SOAP, webhooks, Kafka/SQS, SFTP/CSV, EDI.",
    },
    {
      q: "We are not in Australia. Does this apply to our market?",
      a: "Yes. Australia was the reference. Core problems are consistent across the US, UK, Canada, New Zealand. Privacy and residency differ by region and are built per engagement.",
    },
    {
      q: "Who owns the code after launch?",
      a: "You do. Full repository and documentation handed over at launch. No lock-in. Ongoing support happens on request.",
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
