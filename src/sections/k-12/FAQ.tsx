"use client";

import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionIcon } from "./motifs";

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
      q: "We’re on Shopify / Magento / BigCommerce / WooCommerce. Do we have to replatform?",
      a: "No. The accelerator is a set of proven patterns and modules, not one fixed stack. The modules sit on top of your existing store. We assess your platform in the diagnostic sprint and tell you what fits where – and if your platform genuinely can’t carry a module, we say so before any build starts.",
    },
    {
      q: "Will the modules need developers every month after launch?",
      a: "No – that is a design rule of this accelerator. Supplier file mappings, channel prices, box contents, shipping rules, and completeness lists are all managed by your own team in the admin. The only ongoing work the modules create is merchandising decisions – your team’s normal job, not an agency invoice.",
    },
    {
      q: "We already sell on Amazon.",
      a: "Good – then you know the pain of managing it by hand. Module 2 turns it into one catalog feeding every channel, with stock synced so the Christmas rush can’t oversell you, and channel profit visible after fees.",
    },
    {
      q: "Subscription boxes sound like a lot of work for us.",
      a: "The honest answer: picking next month’s box is ongoing work – but it’s a merchandising decision from the catalog you already carry, made by your team in an afternoon. Everything else – billing, retries, pausing, gifting, address changes – runs itself. That’s the difference between the business model and the technology: you bring the first, the module brings the second.",
    },
    {
      q: "We also sell to schools – is that covered?",
      a: "This accelerator focuses on families and gift buyers. School and institutional buying (quotes, purchase orders, invoice payment, teacher accounts) is available as a separate add-on – we’ve built those flows for education businesses before. If schools matter to you, we scope the add-on in the diagnostic sprint.",
    },
    {
      q: "What about SEO and AI search visibility?",
      a: "Important – but honestly, that isn’t a module you install once. It’s ongoing specialist work, month by month. We offer it as a separate growth service alongside the accelerator (SEO, AI search optimization, analytics), the same way we run it for other education and consumer brands. The accelerator makes sure the store’s technical base doesn’t hold that work back.",
    },
    {
      q: "We want to sell to other countries – is that covered?",
      a: "Not as a standard module – for most retailers it’s a later step. When it becomes your priority, we add it per market: properly translated storefronts, correct VAT setup, and the EU product-safety requirements (GPSR). We’ll tell you honestly which markets pay off and which don’t.",
    },
    {
      q: "Who owns the code after launch?",
      a: "You do. Full repository and documentation handed over at launch. No lock-in. Ongoing support happens on request.",
    },
    {
      q: "Can we see it before committing?",
      a: "Yes. We walk through the modules in a sandbox during the consultation. Book below.",
    },
  ];
  return (
    <section id="faq" className="bg-[var(--sw-black)] py-28 md:py-40">
      <div className="wrap">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5">
              <SectionIcon name="lesson-window" tone="dark" />
              <span className="label-code text-white/60">QUESTIONS &amp; ANSWERS</span>
            </div>
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
