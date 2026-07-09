"use client";

import { Eye, TrendingUp, Cog } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const capabilities: {
  icon: typeof Eye;
  index: string;
  title: string;
  body: string;
  items: string[];
}[] = [
  {
    icon: Eye,
    index: "01",
    title: "Visibility",
    body:
      "Any operational view that doesn't exist today because the data lives in three systems with three different definitions.",
    items: [
      "Single customer / order / SKU view",
      "Cross-system executive dashboards",
      "Department-level drill-downs",
    ],
  },
  {
    icon: TrendingUp,
    index: "02",
    title: "Prediction",
    body:
      "Any forward-looking signal your team produces by hand on Friday afternoons, surfaced in time to act on.",
    items: [
      "Demand & inventory forecasts",
      "Churn & revenue risk",
      "Margin & anomaly alerts",
    ],
  },
  {
    icon: Cog,
    index: "03",
    title: "Automation",
    body:
      "Any decision that repeats every week and needs a human just to run it. People stay in the loop only where judgement matters.",
    items: [
      "Reorder & replenishment",
      "Cross-system sync & matching",
      "Approval & review routing",
    ],
  },
];

export function HowItSolves() {
  return (
    <section
      id="how-it-solves"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[760px]">
          <Reveal>
            <SectionLabel index="3">How it solves</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[28px] sm:text-[34px] md:text-[44px] lg:text-[50px] leading-[1.05] tracking-[-0.01em] mt-6 max-w-[20ch]">
              Visibility. Prediction.{" "}
              <span style={{ color: "var(--sw-mint)" }}>Automation.</span>
            </h2>
          </Reveal>
        </div>

        {/* Capability cards */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <li className="h-full rounded-[4px] border border-white/10 bg-white/[0.03] p-6 sm:p-7 md:p-8">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-white/15 bg-white/[0.04] text-[var(--sw-mint)]"
                    aria-hidden
                  >
                    <c.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-head font-bold tabular-nums text-[28px] leading-none text-white/15">
                    {c.index}
                  </span>
                </div>
                <div className="font-head font-bold text-white text-[20px] md:text-[24px] leading-tight">
                  {c.title}
                </div>
                <p className="mt-3 text-white/70 text-[15px] leading-relaxed">
                  {c.body}
                </p>
                <div className="mt-5 space-y-2">
                  {c.items.map((it) => (
                    <div
                      key={it}
                      className="flex items-start gap-2.5 text-white/80 text-[14px] leading-snug"
                    >
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "var(--sw-mint)" }}
                      />
                      {it}
                    </div>
                  ))}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
