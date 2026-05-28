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
      a: "The reference build runs on Magento 2 + Hyva, an enterprise-grade open-source stack with deep extensibility and no licensing fees. We chose it deliberately. Off-the-shelf platforms rarely flex to a model where inventory is created during a live show, the same buyer spends $20 then $5,000 in the same hour, and the chain of custody runs through a card-grading service. We assess your stack in the diagnostic sprint and recommend what fits.",
    },
    {
      q: "Will this replace my live show on Whatnot?",
      a: "No. Whatnot is where your buyers are, and your show stays there. The platform gives you the owned-channel and the inventory backbone underneath, plus a customer record that finally lets you see your big buyers as named people. Your Whatnot calendar, your production, your sponsorships, all stay untouched.",
    },
    {
      q: "Do you only integrate with PSA?",
      a: "PSA is the primary integration today because PSA holds the dominant graded-card base in North America. The same connector pattern extends to BGS, SGC, CGC, and Beckett. Adding a second grading service is a configuration step, not a rebuild.",
    },
    {
      q: "What about payment disputes on the biggest transactions?",
      a: "The payment rules are tuned for the live-show pattern: many small purchases and one or two large ones inside a 90-minute window. The expensive purchases pass cleanly. We also document the dispute-defence policy your support team can run from. In the reference build, no dispute has escalated past the documented policy.",
    },
    {
      q: "Can it handle inventory across eBay and TCGplayer too?",
      a: "Yes. The single customer record is the foundation. We sync each card to the right channel based on its grading status, condition, and price. Sold-out-after-the-fact disappears because every channel reads the same inventory.",
    },
    {
      q: "How does the automatic restocking actually work?",
      a: "When a valuable card sells and leaves a pack, the platform finds the closest-value card in your reserve stock and slots it back in. The match is per tier, per level, with a full audit log. The pack's expected value stays inside its stated range. You never have to take packs offline to rebalance.",
    },
    {
      q: "How does the 90% buyback work?",
      a: "Your customer can sell a stored card back to you at 90% of its current market value, paid as store credit. The card refreshes into your reserve and becomes available for the next pack. The customer never has to leave you to cash out. Your platform stays the marketplace.",
    },
    {
      q: "What about trust and content?",
      a: "The trading cards industry has a credibility tax. Negative Reddit threads, sceptical buyers, allegations across the category. The accelerator includes the trust FAQ, AI-citable content structure, AI-citation tracking, and Reddit sentiment management. The brand defends itself, not waits for the next thread.",
    },
    {
      q: "Who owns the code after launch?",
      a: "You do. Full repository and documentation handed over at launch. No lock-in. Ongoing support happens on request.",
    },
    {
      q: "Who runs it after launch?",
      a: "Your team, with our 30-day post-launch on-call covering the first peak window. An optional managed-services arrangement is available, and most reference clients keep it for the first year before bringing it in-house.",
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
