"use client";

import { AlertTriangle, Layers, Wrench } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const pillars: {
  icon: typeof Layers;
  index: string;
  title: string;
  body: string;
}[] = [
  {
    icon: AlertTriangle,
    index: "01",
    title: "The pain of too many systems",
    body:
      "Why work keeps falling between your ERP, CRM, e-commerce, and warehouse, and ends up in spreadsheets, manual routines, and backlog items that never ship.",
  },
  {
    icon: Layers,
    index: "02",
    title: "What OperaLayer is",
    body:
      "A thin operational layer that sits across the systems you already run, unifies their data, and hosts focused apps that close each specific gap.",
  },
  {
    icon: Wrench,
    index: "03",
    title: "How it closes the gap",
    body:
      "How visibility, prediction, and automation sit on top of the systems you already run, without replacing any of them.",
  },
];

export function TheSession() {
  return (
    <section
      id="the-session"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16 max-w-[720px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">1</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The session</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-head text-[var(--sw-black)] text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[1.05] tracking-[-0.01em]"
              style={{ textWrap: "balance" }}
            >
              Three things you&apos;ll leave{" "}
              <span className="text-[var(--sw-blue)]">understanding</span>
            </h2>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <li className="group h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 sm:p-7 md:p-8 transition-all hover:border-[var(--sw-blue)]/35 hover:-translate-y-0.5">
                <div className="flex items-center justify-between mb-6">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-blue)]"
                    aria-hidden
                  >
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-head font-bold tabular-nums text-[28px] leading-none text-[var(--sw-black)]/15">
                    {p.index}
                  </span>
                </div>
                <div className="font-head font-bold text-[var(--sw-black)] text-[19px] md:text-[22px] leading-[1.2]">
                  {p.title}
                </div>
                <p className="mt-3 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-relaxed">
                  {p.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
