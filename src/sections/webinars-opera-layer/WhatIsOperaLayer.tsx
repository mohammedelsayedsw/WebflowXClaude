"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const tiers: {
  tag: string;
  title: string;
  body: string;
  items: string[];
  accent: boolean;
}[] = [
  {
    tag: "Tier 1 · what you see",
    title: "Outcomes",
    body: "Decisions, dashboards, alerts, and automations your team acts on.",
    items: ["Executive dashboard", "Forecasts & alerts", "Automated workflows"],
    accent: false,
  },
  {
    tag: "Tier 2 · the operational layer",
    title: "OperaLayer",
    body:
      "A unified data model, AI models, an automation engine, and access & governance.",
    items: ["Data layer", "AI models", "Automation engine", "Governance"],
    accent: true,
  },
  {
    tag: "Tier 3 · stays as-is",
    title: "Your systems",
    body: "Untouched. We connect, we don't replace.",
    items: ["ERP", "CRM", "E-commerce", "Warehouse / OMS", "Finance"],
    accent: false,
  },
];

export function WhatIsOperaLayer() {
  return (
    <section
      id="what-is-operalayer"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[760px]">
          <Reveal>
            <SectionLabel index="4">What it is</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[28px] sm:text-[34px] md:text-[44px] lg:text-[50px] leading-[1.05] tracking-[-0.01em] mt-6 max-w-[24ch]">
              OperaLayer is the layer that{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                holds what every other platform left behind
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-7 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[64ch]">
              Not another platform to replace what you run. A thin operational
              layer that sits across your existing systems, unifies their data
              into one model, and hosts the focused apps that fill each specific
              gap. Nothing underneath gets replaced.
            </p>
          </Reveal>
        </div>

        {/* Three-tier architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {tiers.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.08}>
              <div
                className="h-full rounded-[4px] p-6 sm:p-7"
                style={
                  t.accent
                    ? {
                        background: "rgba(110,247,110,0.06)",
                        border: "1px solid rgba(110,247,110,0.35)",
                      }
                    : {
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.10)",
                      }
                }
              >
                <div
                  className="label-code text-[10px] mb-4"
                  style={{
                    color: t.accent ? "var(--sw-mint)" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {t.tag}
                </div>
                <div
                  className="font-head font-bold text-[22px] md:text-[26px] leading-tight"
                  style={{ color: t.accent ? "var(--sw-mint)" : "#ffffff" }}
                >
                  {t.title}
                </div>
                <p className="mt-3 text-white/70 text-[14px] md:text-[15px] leading-relaxed">
                  {t.body}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t.items.map((it) => (
                    <span
                      key={it}
                      className="inline-flex items-center rounded-[2px] border border-white/12 bg-white/[0.04] px-2.5 py-1 text-white/70 text-[12px] font-head"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
