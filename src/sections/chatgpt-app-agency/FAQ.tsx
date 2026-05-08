"use client";

import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  return (
    <Reveal delay={i * 0.05}>
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
      q: "We already have a chatbot. How is this different?",
      a: "A chatbot answers questions on your site. A ChatGPT App lets users act inside ChatGPT, against your real systems, with approved tools. Different layer, different value – not just an AI prompt, but an action layer connected to live commerce.",
    },
    {
      q: "What if it gives wrong answers?",
      a: "The app does not guess core business data. It calls your tools and returns what your systems say. For sensitive actions we add confirmation steps, permission checks, audit logs, and human handoff – by default. The AI does not decide pricing, stock, or order state. Your systems do.",
    },
    {
      q: "Will OpenAI approve our app?",
      a: "We build to OpenAI’s documented review path: structured metadata, safety testing, OAuth flows, mobile UI checks, and Developer Mode validation from day one. Approval is OpenAI’s call. Readiness is ours – and we stay on through review feedback if it comes back.",
    },
  ];

  return (
    <section id="faq" className="bg-[var(--sw-black)] py-28 md:py-40">
      <div className="wrap">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
          <Reveal>
            <div className="label-code text-[var(--sw-mint)] mb-4">What about…</div>
            <h2 className="font-head text-white text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[16ch]">
              Three things every commerce team asks{" "}
              <span className="text-[var(--sw-mint)]">first</span>.
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
