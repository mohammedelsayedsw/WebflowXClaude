"use client";

import { ArrowUpRight, Check, X } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";
import { BrickStrip } from "./motifs";

export function AcceleratorValue() {
  const rows: [string, string][] = [
    [
      "Supplier price lists retyped by hand; duplicate manufacturer texts everywhere",
      "Supplier feed connections and catalog enrichment tools included",
    ],
    [
      "Marketplace listings managed by hand; stock oversold at peak",
      "Marketplace and shopping-feed connections ready to configure",
    ],
    [
      "Subscriptions stay “phase 2” forever",
      "Subscription and gift-subscription machinery included",
    ],
    [
      "Battery and chemical shipping limits discovered at the courier desk",
      "Product flags and checkout shipping rules included",
    ],
    [
      "“Batteries not included” ruins gift mornings and reviews",
      "Completeness check at the cart included",
    ],
    [
      "Q4 peak survived on luck",
      "Performance tested against the gift rush before it happens",
    ],
  ];

  return (
    <section
      id="value"
      className="relative bg-lp-bright py-28 md:py-40 overflow-hidden text-[var(--sw-black)]"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/15" />
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[52px] lg:text-[60px] leading-[1.05] max-w-[20ch]">
            Fifteen months to build it, or{" "}
            <span className="text-[var(--sw-blue)]">twelve weeks to set it up</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-[4px] border border-[var(--sw-black)]/12 bg-white/60 p-8 md:p-10 h-full">
              <div className="flex items-baseline justify-between mb-6">
                <span className="label-code text-[var(--sw-black)]/55">BUILDING IT NEW</span>
                <span className="font-head text-[36px] md:text-[48px] leading-none text-[var(--sw-black)]/55 tabular-nums">
                  ~15 mo
                </span>
              </div>
              <p className="text-[14px] md:text-[15px] text-[var(--sw-black)]/75 leading-relaxed">
                A team has to learn how STEM toy retail works first, while you
                pay for it — supplier feed chaos, marketplace sync, subscription
                billing, battery shipping rules, all of it gets worked out the
                hard way, and the first real test is your own Christmas season.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="relative rounded-[4px] p-8 md:p-10 h-full overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #171a38 0%, #10132c 100%)",
                border: "1px solid rgba(63,74,175,0.35)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(420px 260px at 110% -10%, rgba(63,74,175,0.25), transparent 60%), radial-gradient(320px 200px at -10% 100%, rgba(110,247,110,0.08), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="label-code text-[var(--sw-mint)]">WITH THE ACCELERATOR</span>
                  <span className="font-head text-[36px] md:text-[48px] leading-none text-white tabular-nums">
                    12 weeks
                  </span>
                </div>
                <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed">
                  The modules are already built and proven in real use. The 12
                  weeks go into fitting them to your suppliers and your systems
                  — not into building.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Supporting rows: without → with */}
        <Reveal>
          <div className="mt-12 md:mt-16">
            <BrickStrip tone="light" count={24} className="mb-6" />
            <div className="rounded-[4px] border border-[var(--sw-black)]/12 overflow-hidden">
              <div className="hidden md:grid grid-cols-2 bg-[var(--sw-black)]/[0.03]">
                <div className="label-code text-[var(--sw-black)]/50 px-6 py-4">Without</div>
                <div className="label-code text-[var(--sw-blue)] px-6 py-4 border-l border-[var(--sw-black)]/10">
                  With the accelerator
                </div>
              </div>
              {rows.map(([without, withIt], i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-2 border-t border-[var(--sw-black)]/10"
                >
                  <div className="flex gap-3 px-6 py-5 text-[14px] md:text-[15px] text-[var(--sw-black)]/65 leading-relaxed">
                    <X className="h-4 w-4 shrink-0 mt-0.5 text-[var(--sw-black)]/30" />
                    <span>{without}</span>
                  </div>
                  <div className="flex gap-3 px-6 py-5 text-[14px] md:text-[15px] text-[var(--sw-black)]/85 leading-relaxed border-t md:border-t-0 md:border-l border-[var(--sw-black)]/10 bg-[var(--sw-blue)]/[0.03]">
                    <Check className="h-4 w-4 shrink-0 mt-0.5 text-[var(--sw-blue)]" />
                    <span>{withIt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-14 md:mt-16 pt-10 border-t border-[var(--sw-black)]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.25] max-w-[44ch]">
              Twelve weeks of fitting, not fifteen months of discovering.
            </p>
            <a href="#cta" className={btnLight}>
              See if it fits your store
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
