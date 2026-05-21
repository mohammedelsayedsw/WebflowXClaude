"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";

export function AcceleratorValue() {
  return (
    <section
      id="value"
      className="relative bg-lp-bright py-28 md:py-40 overflow-hidden text-[var(--sw-black)]"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/15" />
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[18ch]">
            Skip the{" "}
            <span className="text-[var(--sw-blue)]">discovery year</span>
          </h2>
          <p className="mt-6 text-[var(--sw-black)]/75 max-w-[58ch] text-[16px] md:text-[17px] leading-relaxed">
            Multi-warehouse stock, trade-and-DIY accounts, supplier-feed automation, semantic search, content velocity, peak resilience – already built. You inherit the proven stack, configured to your warehouses and your back office.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-[4px] border border-[var(--sw-black)]/12 bg-white/60 p-8 md:p-10 h-full">
              <div className="flex items-baseline justify-between mb-8">
                <span className="label-code text-[var(--sw-black)]/55">WITHOUT ACCELERATOR</span>
                <span className="font-head text-[40px] md:text-[52px] leading-none text-[var(--sw-black)]/55 tabular-nums">
                  avg 18 mo
                </span>
              </div>
              <ul className="space-y-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/75 leading-relaxed">
                {[
                  "Agency learns what a multi-warehouse inventory model is on your budget",
                  "Trade and DIY accounts modeled from scratch, role-based access discovered late",
                  "Supplier-feed pipeline reinvented per integration",
                  "Search and personalisation negotiated separately, integrated badly",
                  "Spring or Black Friday peak discovered in your environment, during peak",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="h-px w-3 bg-[var(--sw-black)]/35 mt-3 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="relative rounded-[4px] p-8 md:p-10 h-full overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #171a38 0%, #10132c 100%)",
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
                <div className="flex items-baseline justify-between mb-8">
                  <span className="label-code text-[var(--sw-mint)]">WITH ACCELERATOR</span>
                  <span className="font-head text-[40px] md:text-[52px] leading-none text-white tabular-nums">
                    14 wk
                  </span>
                </div>
                <ul className="space-y-4 text-[14px] md:text-[15px] text-white/90 leading-relaxed">
                  {[
                    "Multi-warehouse stock, trade-and-DIY accounts, supplier pipeline – already in production",
                    "Akeneo PIM + Devoro supplier feed shipped from day one",
                    "Loop54 semantic search + Dynamic Yield personalisation pre-wired",
                    "Amplience headless CMS for content velocity, prompt-built blocks available",
                    "ERP adapters extend to SAP, Navision, NetSuite, Odoo, custom",
                  ].map((t, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="h-4 w-4 shrink-0 mt-1 text-[var(--sw-mint)]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 md:mt-20 pt-10 border-t border-[var(--sw-black)]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.25] max-w-[44ch]">
              Six modules in production from day one – saving you a year of build time.
            </p>
            <a href="#cta" className={btnLight}>
              Start the accelerator
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
