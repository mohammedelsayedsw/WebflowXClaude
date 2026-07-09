"use client";

import { Layers, Users, ListChecks, BarChart3 } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const stats: { value: string; label: string; source: string }[] = [
  {
    value: "27%",
    label:
      "of the average enterprise's 900+ business apps are actually integrated with each other",
    source: "MuleSoft Connectivity Benchmark, 2026",
  },
  {
    value: "81%",
    label:
      "of IT leaders say data silos are holding back their digital transformation",
    source: "MuleSoft Connectivity Benchmark, 2024",
  },
  {
    value: "16 hrs",
    label:
      "a week lost to manually syncing data across disconnected systems",
    source: "Cin7 State of Inventory Intelligence, 2025",
  },
];

const themes: { icon: typeof Layers; title: string; body: string }[] = [
  {
    icon: Layers,
    title: "Data trapped in silos",
    body:
      "Your ERP, CRM, e-commerce platform, and warehouse each hold a piece of the truth. No single view exists, so nobody can answer a cross-system question without a manual export.",
  },
  {
    icon: ListChecks,
    title: "Manual reconciliation, every week",
    body:
      "Month-end close, invoice-to-PO matching, and cross-system syncs still run by hand. It is slow, error-prone, and it never comes off the backlog.",
  },
  {
    icon: Users,
    title: "One customer, many identities",
    body:
      "The same customer has different IDs across CRM, e-commerce, and support. Nobody owns the mismatch, so it quietly breaks reporting and personalisation.",
  },
  {
    icon: BarChart3,
    title: "Reports that never ship",
    body:
      "The dashboard leadership asked for needs data from five systems. Building it has been next quarter for the last three quarters.",
  },
];

export function PainPoints() {
  return (
    <section
      id="the-pain"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16 max-w-[820px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">2</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The pain</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[28px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] max-w-[22ch]">
              More systems,{" "}
              <span className="text-[var(--sw-blue)]">more gaps between them</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[62ch]">
              By 2026, the average online retailer runs a stack of specialised
              systems, and each one is excellent in its lane. The cost lives in
              the space between them: the work that no single platform owns.
            </p>
          </Reveal>
        </div>

        {/* 2026 research stat row */}
        <div className="mb-14 md:mb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.08}>
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 sm:p-7">
                <div className="font-head font-bold text-[var(--sw-blue)] text-[40px] md:text-[52px] leading-none tabular-nums">
                  {s.value}
                </div>
                <p className="mt-4 text-[var(--sw-black)]/75 text-[14px] md:text-[15px] leading-relaxed">
                  {s.label}
                </p>
                <div className="mt-4 text-[var(--sw-black)]/45 text-[11px] leading-snug">
                  {s.source}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {themes.map((t, i) => (
            <Reveal key={t.title} delay={(i % 2) * 0.08}>
              <li className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 sm:p-7 md:p-8">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-blue)] mb-5"
                  aria-hidden
                >
                  <t.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="font-head font-bold text-[var(--sw-black)] text-[19px] md:text-[22px] leading-[1.2]">
                  {t.title}
                </div>
                <p className="mt-3 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-relaxed">
                  {t.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
