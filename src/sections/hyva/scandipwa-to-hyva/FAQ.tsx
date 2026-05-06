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
      q: "Why are you, the makers of ScandiPWA, recommending Hyvä?",
      a: "ScandiPWA earned its place. We built it in 2019 because Magento needed a fast frontend and didn’t have one – and merchants got a real lift from it. The market has moved on: Hyvä is now lighter, easier to staff, and supported by a deeper ecosystem. We make the recommendation our merchants benefit from, not the one that protects a legacy product.",
    },
    {
      q: "How long does a ScandiPWA → Hyvä migration take?",
      a: "10 to 14 weeks for a standard mid-sized store, kickoff to live. Larger B2B or multi-region stores run 16 to 20 weeks. Timelines depend on the volume of custom modules, the integration footprint, and how clean the catalog and content are at the start.",
    },
    {
      q: "Will we lose SEO during the migration?",
      a: "No, when migration is scripted properly. We map every URL, redirect, schema block, hreflang tag, and canonical path before cutover, then verify with a post-launch crawl diff. Most of our migrations show flat or improved rankings inside the first 30 days, because Hyvä’s Core Web Vitals are materially better than PWA.",
    },
    {
      q: "What happens to our custom modules and admin workflows?",
      a: "They stay. Magento backend is untouched – the migration is frontend-only. Custom logic, ERP and PIM connections, third-party integrations, admin permissions, and merchandising tooling all carry across. Your operations team works in the same admin they did before launch.",
    },
    {
      q: "Can we move to Hyvä Commerce instead of Magento + Hyvä themes?",
      a: "Yes. Hyvä Commerce is the full Hyvä-native commerce suite – checkout, B2B portal, customer account – built on top of Magento Open Source. We scope it during the audit and recommend whichever path fits your roadmap. For some merchants Hyvä Commerce is a one-step move; for others, Hyvä themes first and Hyvä Commerce later.",
    },
    {
      q: "Are you a Hyvä partner?",
      a: "Yes – Hyvä Platinum Partner. We have shipped Hyvä storefronts for retail, B2B, food, and luxury merchants across the EU, US, and Middle East. The migration playbook on this page is the one our delivery team runs week to week.",
    },
    {
      q: "What does a Hyvä migration cost?",
      a: "Quoted against your audit, not a list price. Standard mid-sized ScandiPWA → Hyvä migrations land in the same range as a frontend redesign on Magento. Larger B2B and multi-region stores scale with the integration footprint. The 30-minute call below is enough to give you a band.",
    },
    {
      q: "Do you support the store after launch?",
      a: "30-day joint on-call is included by default – your team and ours, fix-forward through the first peak. Optional managed-services arrangement available for ongoing development, performance, and growth work. Most reference clients keep us for the first year, then bring it in-house.",
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
