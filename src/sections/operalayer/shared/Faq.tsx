"use client";

import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

export type FaqItem = { q: string; a: string };

export function Faq({
  heading,
  items,
}: {
  heading: React.ReactNode;
  items: FaqItem[];
}) {
  return (
    <section id="faq" className="bg-[var(--sw-black)] py-28 md:py-36">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[14ch]">
              {heading}
            </h2>
          </Reveal>
          <div className="border-t border-white/10">
            {items.map((it, i) => (
              <Reveal key={it.q} delay={i * 0.04}>
                <details className="group border-b border-white/10 py-5 md:py-6 [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 font-head text-white text-[17px] md:text-[20px] leading-[1.3]">
                    <span>{it.q}</span>
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border border-white/15 group-open:border-[var(--sw-mint)]/50 transition">
                      <Plus className="h-4 w-4 text-white group-open:hidden" />
                      <Minus className="h-4 w-4 text-[var(--sw-mint)] hidden group-open:block" />
                    </span>
                  </summary>
                  <div className="pt-4 pr-12 text-white/75 text-[15px] md:text-[16px] leading-relaxed max-w-[62ch]">
                    {it.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
