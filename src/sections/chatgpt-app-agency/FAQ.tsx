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
      q: "We already have a chatbot. How is this different?",
      a: "A chatbot answers questions on your site. A ChatGPT App lets users act inside ChatGPT, against your real systems, with approved tools, live data, and structured UI. Different layer, different value – not just a prompt, but an action layer connected to live commerce.",
    },
    {
      q: "We are not ready to give AI access to our systems.",
      a: "You don’t need to start with risky actions. Most clients begin with read-only tools – search catalog, show policies, answer product questions, check stock, show order status after login. Write actions like creating quotes or returns can require explicit confirmation and permissions.",
    },
    {
      q: "What if the AI gives wrong answers?",
      a: "The app does not guess core business data. It calls your tools and returns structured information from your approved systems. For sensitive actions we add confirmation steps, permission checks, audit logs, fallback messages, validation rules, and human handoff – by default. The AI does not decide pricing, stock, or order state. Your systems do.",
    },
    {
      q: "Will this replace our website?",
      a: "No. It gives your website and systems a new entry point. The website still matters. Search still matters. Email still matters. Paid ads still matter. ChatGPT becomes another high-intent channel where people can discover, decide, and act.",
    },
    {
      q: "Will OpenAI approve our app?",
      a: "Nobody outside OpenAI can guarantee approval. What we do: build against the documented review path, prepare the app properly, test it in Developer Mode, review safety issues, clean up metadata, and support fixes if review feedback comes back.",
    },
    {
      q: "Our systems are too custom.",
      a: "That is exactly why MCP makes sense. MCP lets us expose clean tools to ChatGPT while your complex backend logic stays where it belongs. ChatGPT does not need to understand your whole ERP. It needs safe, well-defined tools that return the right data.",
    },
    {
      q: "Can users buy directly inside ChatGPT?",
      a: "Depends on your platform, payment flow, risk model, and what OpenAI supports for your use case at submission time. A safe v1 often starts with product discovery, quote creation, cart creation, or checkout handoff – then expands as the platform matures.",
    },
    {
      q: "How fast can we launch?",
      a: "A focused proof of concept can be built in 10–15 business days. A real customer-facing app usually takes 4–6 weeks. An enterprise app with several systems usually takes 8–12 weeks or more.",
    },
  ];

  return (
    <section id="faq" className="bg-[var(--sw-black)] py-28 md:py-40">
      <div className="wrap">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.18em] font-semibold text-[var(--sw-mint)] mb-5">
              Common questions
            </p>
            <h2 className="font-head text-white text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[14ch]">
              The things every team asks{" "}
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
