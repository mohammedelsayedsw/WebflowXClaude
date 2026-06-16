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
      q: "Do you need full access to our stores to start?",
      a: "No. The first conversation works from a simple map of your stores and systems, plus a few examples of issues that keep coming back. Deeper access only comes later, if we move forward.",
    },
    {
      q: "Is OperaLayer a replacement for Shopify?",
      a: "No. Your stores stay on Shopify exactly as they are. OperaLayer is the operating layer underneath that connects the systems your stores share. We do not replace your storefronts.",
    },
    {
      q: "We run B2B and D2C on separate stores. Does that work?",
      a: "Yes. Separate B2B and D2C stores is one of the most common setups this is built for, alongside separate countries, currencies, and brands.",
    },
    {
      q: "Can you connect our ERP and CMS?",
      a: "Yes. Validated connectors link Shopify to your ERP, OMS, WMS, and CMS (Sanity, Storyblok, Contentful, WordPress and more), with control over what goes live where and in which language.",
    },
    {
      q: "Will this cut our app costs?",
      a: "First it shows you the duplicated apps and the cost per store. The savings decisions are then yours, made with real numbers in front of you.",
    },
    {
      q: "Can we add mobile apps later?",
      a: "Yes. Customer, sales-rep, and warehouse apps run on the same data and business rules you already have, so mobile is an add-on, not a rebuild.",
    },
  ];
  return (
    <section id="faq" className="bg-[var(--sw-black)] py-28 md:py-40">
      <div className="wrap">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
          <Reveal>
            <div className="label-code text-white/55 mb-5">before you book the call</div>
            <h2 className="font-head text-white text-[34px] md:text-[44px] lg:text-[56px] leading-[1.05] max-w-[14ch]">
              The questions merchants{" "}
              <span className="text-[var(--sw-mint)]">ask first</span>
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
