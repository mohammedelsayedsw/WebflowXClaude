"use client";

import { Check, X } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionIcon } from "./motifs";

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
      "Subscriptions stay \"phase 2\" forever",
      "Subscription and gift-subscription machinery included",
    ],
    [
      "Battery and chemical shipping limits discovered at the courier desk",
      "Product flags and checkout shipping rules included",
    ],
    [
      "\"Batteries not included\" ruins gift mornings and reviews",
      "Batteries & extras reminder at the cart included",
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
          <div className="flex items-center gap-2.5 mb-5">
            <SectionIcon name="abacus" tone="light" />
            <span className="label-code text-[var(--sw-black)]/55">BUILD VS CONFIGURE</span>
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[52px] lg:text-[60px] leading-[1.05] max-w-[34ch]">
            Fifteen months to build it,{" "}
            <br className="hidden md:block" />
            or <span className="text-[var(--sw-blue)]">twelve weeks to set it up</span>
          </h2>
        </Reveal>

        {/* One continuous comparison: two timeline halves over the same two
            columns as the rows below. The half labels are the only headers. */}
        <Reveal>
          <div className="mt-14 rounded-[4px] border border-[var(--sw-black)]/12 overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* left half — building it new */}
              <div className="bg-white/60 p-8 md:p-10">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="label-code text-[var(--sw-black)]/55">BUILDING IT NEW</span>
                  <span className="font-head text-[32px] md:text-[44px] leading-none text-[var(--sw-black)]/55 tabular-nums">
                    ~15 mo
                  </span>
                </div>
                <p className="text-[14px] md:text-[15px] text-[var(--sw-black)]/75 leading-relaxed">
                  A team has to learn how STEM toy retail works first, while you
                  pay for it: supplier feed chaos, marketplace sync,
                  subscription billing, battery shipping rules, all of it gets
                  worked out the hard way, and the first real test is your own
                  Christmas season.
                </p>
              </div>

              {/* right half — with the accelerator */}
              <div
                className="relative p-8 md:p-10 overflow-hidden border-t md:border-t-0 md:border-l border-[var(--sw-black)]/10"
                style={{ background: "linear-gradient(180deg, #171a38 0%, #10132c 100%)" }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(420px 260px at 110% -10%, rgba(63,74,175,0.25), transparent 60%), radial-gradient(320px 200px at -10% 100%, rgba(110,247,110,0.08), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="flex items-baseline justify-between mb-5">
                    <span className="label-code text-[var(--sw-mint)]">WITH THE ACCELERATOR</span>
                    <span className="font-head text-[32px] md:text-[44px] leading-none text-white tabular-nums">
                      12 weeks
                    </span>
                  </div>
                  <p className="text-[14px] md:text-[15px] text-white/90 leading-relaxed">
                    The modules are already built and proven in real use. The 12
                    weeks go into fitting them to your suppliers and your
                    systems, not into building.
                  </p>
                </div>
              </div>
            </div>

            {/* rows — same two columns, no separate header */}
            {rows.map(([without, withIt], i) => (
              <div
                key={i}
                className="grid md:grid-cols-2 border-t border-[var(--sw-black)]/10"
              >
                <div className="flex items-center gap-3 px-6 py-5 text-[14px] md:text-[15px] text-[var(--sw-black)]/65 leading-relaxed">
                  <X className="h-4 w-4 shrink-0 text-[var(--sw-black)]/30" />
                  <span>{without}</span>
                </div>
                <div className="flex items-center gap-3 px-6 py-5 text-[14px] md:text-[15px] text-[var(--sw-black)]/85 leading-relaxed border-t md:border-t-0 md:border-l border-[var(--sw-black)]/10 bg-[var(--sw-blue)]/[0.03]">
                  <Check className="h-4 w-4 shrink-0 text-[var(--sw-blue)]" />
                  <span>{withIt}</span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
