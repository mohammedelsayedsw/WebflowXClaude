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
      q: "Lorem ipsum dolor sit amet?",
      a: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      q: "Ut enim ad minim veniam?",
      a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.",
    },
    {
      q: "Quis nostrud exercitation ullamco?",
      a: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.",
    },
    {
      q: "Nemo enim ipsam voluptatem?",
      a: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Ut labore et dolore magnam aliquam quaerat voluptatem.",
    },
    {
      q: "Quis autem vel eum iure?",
      a: "Qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus.",
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
