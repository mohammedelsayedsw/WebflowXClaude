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
      a: "The reference build runs on Magento 2 + Hyva, an enterprise-grade, open-source stack with deep extensibility and no licensing fees. We chose it deliberately. SaaS platforms rarely flex to a model where inventory is created during a livestream, AOV swings from $20 to $5,000, and the chain of custody goes through PSA. We assess your stack in the diagnostic sprint and recommend what fits.",
    },
    {
      q: "Will it replace my Whatnot show?",
      a: "No. Whatnot is where your buyers are and your show stays there. The accelerator gives you the owned-channel and inventory layer underneath, plus a customer bridge so the whales finally get an identity outside the platform. Your Whatnot calendar, your show production, your sponsor deals stay untouched.",
    },
    {
      q: "Do you only integrate with PSA?",
      a: "PSA is the primary integration in the reference build because PSA owns the dominant slab base in North America. The adapter pattern extends to BGS, SGC, CGC, and Beckett. Adding a second grader is a Phase 2 configuration, not a rebuild.",
    },
    {
      q: "What about chargebacks on high-AOV personals?",
      a: "Stripe Radar comes tuned for the high-AOV, multi-transaction stream pattern. Diamond and Legend tier packs are protected with custom velocity rules and blocklists. We document the policy your team needs to defend disputes. The reference build has not had a chargeback escalation that the policy did not cover.",
    },
    {
      q: "Can it handle multi-channel inventory across eBay and TCGplayer?",
      a: "Yes. The customer bridge is the foundation. We sync the right product to the right channel based on PSA cert presence, condition, and price. Sold-out-after-the-fact disappears because every channel reads the same inventory truth.",
    },
    {
      q: "What does the FMV engine actually do?",
      a: "When an active card hits and leaves the pack, the engine pulls the closest-value card from your reserve inventory to keep the pack sellable. The math is per tier, per level, with a full audit log. Pack EV stays inside the configured band. You do not have to take packs offline to rebalance.",
    },
    {
      q: "How does the 90% buyback work?",
      a: "Your customer can sell a vaulted card back to you at 90% of its current FMV. The card refreshes into your reserve inventory and becomes available for the next pack. The customer never leaves you to liquidate. Your platform stays the marketplace.",
    },
    {
      q: "What about trust and AEO content?",
      a: "The trading cards industry has a credibility tax. Negative Reddit threads, scepticism about live breaks, allegations across the category. The accelerator includes the trust FAQ, AEO-structured content, AI-citation tracking, and Reddit sentiment management. The point is the brand defends itself, not waits for the next thread.",
    },
    {
      q: "Who owns the code after launch?",
      a: "You do. Full repository and documentation handed over at launch. No lock-in. Ongoing support happens on request.",
    },
    {
      q: "Who runs it after launch?",
      a: "Your team, with our 30-day post-launch on-call covering the first peak window. Optional managed-services arrangement available; most reference clients keep it for the first year, then bring it in-house once their team is up to speed.",
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
