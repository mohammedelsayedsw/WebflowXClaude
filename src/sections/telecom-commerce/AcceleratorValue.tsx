"use client";

import { Check, X } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SignalBars } from "./motifs";

export function AcceleratorValue() {
  const rows: [string, string][] = [
    [
      "Stretching the BSS to run the shop deepens technical debt",
      "The BSS keeps its job; the layer owns the selling",
    ],
    [
      "A generic platform needs heavy customization for telecom",
      "Telecom logic is the starting point, not the customization",
    ],
    [
      "Packaged software brings vendor lock-in",
      "You own the code, any engine, any cloud",
    ],
    [
      "Every price change is an IT ticket",
      "The business team changes prices in an interface",
    ],
  ];

  return (
    <section
      id="value"
      className="relative overflow-hidden bg-lp-bright py-28 text-[var(--sw-black)] md:py-40"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--sw-black)]/15" />
      <div className="wrap relative">
        <Reveal>
          <div className="mb-5 flex items-center gap-2.5">
            <SignalBars tone="light" />
            <span className="label-code text-[var(--sw-black)]/55">BUILD VS CONFIGURE</span>
          </div>
          <h2 className="font-head max-w-[34ch] text-[34px] leading-[1.05] text-[var(--sw-black)] md:text-[52px] lg:text-[60px]">
            Eighteen months to build it,{" "}
            <br className="hidden md:block" />
            or <span className="text-[var(--sw-blue)]">six weeks to set it up</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="mt-14 overflow-hidden rounded-[4px] border border-[var(--sw-black)]/12">
            <div className="grid md:grid-cols-2">
              {/* left half — building it new */}
              <div className="bg-white/60 p-8 md:p-10">
                <div className="mb-5 flex items-baseline justify-between">
                  <span className="label-code text-[var(--sw-black)]/55">BUILDING IT NEW · 18+ MONTHS</span>
                </div>
                <p className="text-[14px] leading-relaxed text-[var(--sw-black)]/75 md:text-[15px]">
                  A team has to learn how telecom selling works first, while you
                  pay for it. Convergent bundles, eligibility, multi-system
                  orders, all discovered the hard way, and the first real test
                  is your own campaign season.
                </p>
              </div>

              {/* right half — with the accelerator */}
              <div
                className="relative overflow-hidden border-t border-[var(--sw-black)]/10 p-8 md:border-l md:border-t-0 md:p-10"
                style={{ background: "linear-gradient(180deg, #171a38 0%, #10132c 100%)" }}
              >
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(420px 260px at 110% -10%, rgba(63,74,175,0.25), transparent 60%), radial-gradient(320px 200px at -10% 100%, rgba(110,247,110,0.08), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="mb-5 flex items-baseline justify-between">
                    <span className="label-code text-[var(--sw-mint)]">WITH THE ACCELERATOR · 6 WEEKS</span>
                  </div>
                  <p className="text-[14px] leading-relaxed text-white/90 md:text-[15px]">
                    The layer is already built and proven in production at
                    telecom operators. The six weeks go into fitting it to your
                    catalog and your systems, not into building.
                  </p>
                </div>
              </div>
            </div>

            {rows.map(([without, withIt], i) => (
              <div
                key={i}
                className="grid border-t border-[var(--sw-black)]/10 md:grid-cols-2"
              >
                <div className="flex items-center gap-3 px-6 py-5 text-[14px] leading-relaxed text-[var(--sw-black)]/65 md:text-[15px]">
                  <X className="h-4 w-4 shrink-0 text-[var(--sw-black)]/30" />
                  <span>{without}</span>
                </div>
                <div className="flex items-center gap-3 border-t border-[var(--sw-black)]/10 bg-[var(--sw-blue)]/[0.03] px-6 py-5 text-[14px] leading-relaxed text-[var(--sw-black)]/85 md:border-l md:border-t-0 md:text-[15px]">
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
