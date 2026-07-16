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
      a: "No. The accelerator runs on top of the systems you already have. It connects to your BSS, CRM, and fulfillment, and none of them change. The store adapts to your systems, not the other way around.",
    },
    {
      q: "How is this different from a normal web shop?",
      a: "A normal web shop cannot sell telecom: a phone priced by the plan and the bank, a SIM that needs a number, an ID check, and a coverage check, and a checkout that takes installments and balance payment. This is built for exactly that, so the whole sale happens online instead of slipping to a store or a call.",
    },
    {
      q: "Which commerce engines does it work with?",
      a: "It is proven in production on Magento and Adobe Commerce, and it builds on Shopify, BigCommerce, commercetools, Salesforce Commerce Cloud, SAP Commerce Cloud, and custom platforms. The architecture is API-first and aligned with TM Forum patterns, so it fits your stack instead of forcing a new one.",
    },
    {
      q: "Does it work in our language and market?",
      a: "Yes. It runs bilingual storefronts, including right-to-left. We built and still run one in English and Arabic in production, with regional payment, delivery, and eligibility rules handled from the start.",
    },
    {
      q: "Can we use only part of it?",
      a: "Yes. The six modules are independent. Take all of them, or start with the one you are missing and add the rest later. Each one is configured to your catalog and systems.",
    },
    {
      q: "Can it support sub-brands or partner setups (MVNO)?",
      a: "Yes. You can scope offers per brand or MVNO from the same catalog, kept fully separate. We confirm the exact setup in the first review so it matches how your partners actually operate.",
    },
    {
      q: "Is this proven anywhere real?",
      a: "Yes. Every module comes from a full online store we built and still run for Umniah, a national telecom operator, on Magento 2 and Hyvä, in English and Arabic, without changing their BSS. That build took about six months. Because the modules are already built and proven, a new operator goes live in 6 to 12 weeks.",
    },
    {
      q: "Who owns the code after launch?",
      a: "You do. Full code ownership, plus architecture docs, runbooks, and training for your team. No black box and no lock-in. You can run and change it yourself, or keep us on if you want.",
    },
    {
      q: "Can we see it before committing?",
      a: "Yes. It starts with a discovery workshop where we map your catalog and systems and demo the accelerator against your real offers. Then a proof of concept runs your real products and prices in your environment, before any full rollout.",
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
