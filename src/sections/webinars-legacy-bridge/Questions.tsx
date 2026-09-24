"use client";

import { Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const ITEMS: { q: string; a: string }[] = [
  {
    q: "Not sure if your company has an AS/400?",
    a: "If your team works in black screens with green text and uses F-keys to move around, it probably does. Choose “not sure” on the form and we’ll check with you.",
  },
  {
    q: "Does it work with custom RPG or COBOL applications?",
    a: "Yes. It is set up for your specific screens, fields and checks, so it does not depend on a packaged ERP.",
  },
  {
    q: "Do we need a new API or database access?",
    a: "No. It works through the existing screens your team already uses.",
  },
];

function Item({ q, a, i }: { q: string; a: string; i: number }) {
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
        <div className="pt-4 pr-0 md:pr-12 text-white/75 text-[14px] md:text-[16px] leading-relaxed">
          {a}
        </div>
      </details>
    </Reveal>
  );
}

export function Questions() {
  return (
    <section
      id="questions"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-[1fr_1.6fr] lg:items-start">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-white">
              <span className="text-white/55">11</span>
              <span className="h-px w-6 bg-white/20" />
              <span>Questions</span>
            </div>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[14ch]">
              Questions{" "}
              <span style={{ color: "var(--sw-mint)" }}>people ask</span>
            </h2>
          </Reveal>

          <div>
            {ITEMS.map((item, i) => (
              <Item key={item.q} q={item.q} a={item.a} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
