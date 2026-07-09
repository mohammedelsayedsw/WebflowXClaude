"use client";

import { Eye, TrendingUp, Cog } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

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

const timeline: { week: string; title: string; body: string }[] = [
  {
    week: "Week 1",
    title: "Visual prototype",
    body: "A working prototype on your real data, so you see the right thing before we build it.",
  },
  {
    week: "Weeks 1-2",
    title: "Iterate with the team",
    body: "The people who will use it review it. It changes in front of you. Sign-off when everyone is happy.",
  },
  {
    week: "Weeks 2-3",
    title: "Production build",
    body: "Code, integrate, harden. Governance, access, and audit trail built in from the start.",
  },
  {
    week: "Week 4",
    title: "Deploy & handover",
    body: "Live, team trained, docs handed over, 30 days of post-launch support included.",
  },
];

export function HowItSolves() {
  return (
    <section
      id="how-it-solves"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16 max-w-[760px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">5</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>How it solves</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[28px] sm:text-[34px] md:text-[44px] lg:text-[50px] leading-[1.05] tracking-[-0.01em] max-w-[20ch]">
              Visibility. Prediction.{" "}
              <span className="text-[var(--sw-blue)]">Automation.</span>
            </h2>
          </Reveal>
        </div>

        {/* Capability cards */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.08}>
              <li className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 sm:p-7 md:p-8">
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-blue)]"
                    aria-hidden
                  >
                    <c.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-head font-bold tabular-nums text-[28px] leading-none text-[var(--sw-black)]/15">
                    {c.index}
                  </span>
                </div>
                <div className="font-head font-bold text-[var(--sw-black)] text-[20px] md:text-[24px] leading-tight">
                  {c.title}
                </div>
                <p className="mt-3 text-[var(--sw-black)]/70 text-[15px] leading-relaxed">
                  {c.body}
                </p>
                <div className="mt-5 space-y-2">
                  {c.items.map((it) => (
                    <div
                      key={it}
                      className="flex items-start gap-2.5 text-[var(--sw-black)]/80 text-[14px] leading-snug"
                    >
                      <span
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ background: "var(--sw-blue)" }}
                      />
                      {it}
                    </div>
                  ))}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* Delivery rhythm */}
        <Reveal delay={0.15}>
          <div className="mt-16 md:mt-20 rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 sm:p-8 md:p-10">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8 md:mb-10">
              <h3 className="font-head font-bold text-[var(--sw-black)] text-[22px] md:text-[28px] leading-tight max-w-[24ch]">
                Week one prototype. Week four live.
              </h3>
              <span className="label-code text-[var(--sw-black)]/50 text-[10px]">
                Fixed scope &middot; per module
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {timeline.map((t, i) => (
                <Reveal key={t.week} delay={i * 0.07}>
                  <div className="relative pt-6">
                    <span className="absolute top-0 left-0 font-head font-bold tabular-nums text-[13px] text-[var(--sw-blue)]">
                      0{i + 1}
                    </span>
                    <span className="absolute top-[7px] left-8 right-0 h-px bg-[var(--sw-black)]/10 hidden sm:block" />
                    <div className="label-code text-[var(--sw-black)]/50 text-[10px] mb-2">
                      {t.week}
                    </div>
                    <div className="font-head font-bold text-[var(--sw-black)] text-[16px] md:text-[18px] leading-tight">
                      {t.title}
                    </div>
                    <p className="mt-2 text-[var(--sw-black)]/65 text-[14px] leading-relaxed">
                      {t.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
