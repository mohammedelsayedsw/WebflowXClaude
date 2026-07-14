"use client";

import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SignalBars } from "./motifs";

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  return (
    <Reveal delay={i * 0.04}>
      <details className="group border-b border-white/10 py-5 [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden md:py-6">
        <summary className="font-head flex cursor-pointer items-start justify-between gap-6 text-[17px] leading-[1.3] text-white md:text-[20px]">
          <span>{q}</span>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border border-white/15 bg-white/[0.02] transition group-open:border-[var(--sw-mint)]/50 group-open:bg-[var(--sw-mint)]/15">
            <Plus className="h-4 w-4 text-white group-open:hidden" />
            <Minus className="hidden h-4 w-4 text-[var(--sw-mint)] group-open:block" />
          </span>
        </summary>
        <div className="pr-12 pt-4 text-[14px] leading-relaxed text-white/75 md:text-[16px]">{a}</div>
      </details>
    </Reveal>
  );
}

export function FAQ() {
  const items = [
    {
      q: "Do we need to replace our BSS or ERP?",
      a: "No. The layer sits in front of them. Billing keeps billing, provisioning keeps provisioning. The layer owns what customers see and buy.",
    },
    {
      q: "How is this different from a normal web shop?",
      a: "Normal shops know 'add to cart, pay, ship'. Telecom needs bundles across services, prices that depend on the customer and the address, and orders that reach several systems. That logic is the starting point here.",
    },
    {
      q: "Which commerce engines does it work with?",
      a: "The reference build runs on Magento / Adobe Commerce with a modern fast frontend. Other engines are assessed in the first review.",
    },
    {
      q: "Does it work in our language and market?",
      a: "Yes. The reference build runs bilingual, English and Arabic, including right-to-left layout. Payments and delivery are configured per market.",
    },
    {
      q: "Can we use only part of it?",
      a: "Yes. The modules are independent. Some operators start with only the payments module, or only the BSS and CRM connection.",
    },
    {
      q: "Is this proven anywhere real?",
      a: "Yes. Every module on this page runs in production at a national telecom operator. The case won an award at Meet Magento New York 2025, and the operator takes reference calls on request.",
    },
    {
      q: "Who owns the code after launch?",
      a: "You do. Full repository and documentation handed over. No lock-in. Support on request.",
    },
    {
      q: "Can we see it before committing?",
      a: "Yes. The discovery workshop includes a demo against your real offers.",
    },
  ];
  return (
    <section id="faq" className="bg-[var(--sw-black)] py-28 md:py-40">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <div className="mb-5 flex items-center gap-2.5">
              <SignalBars tone="dark" />
              <span className="label-code text-white/60">QUESTIONS &amp; ANSWERS</span>
            </div>
            <h2 className="font-head max-w-[14ch] text-[34px] leading-[1.05] text-white md:text-[44px] lg:text-[56px]">
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
