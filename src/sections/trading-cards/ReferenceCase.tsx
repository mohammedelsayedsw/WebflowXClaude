"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function ReferenceCase() {
  return (
    <section
      id="reference"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 600px at 15% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 85% 85%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 75%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-16 items-end">
            <h2 className="font-head text-white text-[36px] md:text-[52px] lg:text-[64px] leading-[1.04] max-w-[14ch]">
              <span className="text-[var(--sw-mint)]">Live in production.</span>{" "}
              <span className="text-white">North America.</span>
            </h2>
            <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed max-w-[60ch]">
              A top-tier breaks operator with a long-running Whatnot show
              came to scandiweb to build the owned-website business that
              monetizes the catalog. PSA partnership in hand. Pack model
              defined. Three structural problems blocking launch.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              n: "Problem · 1",
              title: "Two parallel inventories, no truth",
              body: "Whatnot show stock in one sheet. Website pack stock in another. PSA vault state in a third. No software made these talk to each other. Reconciliation was a person.",
            },
            {
              n: "Problem · 2",
              title: "Endless packs needed an FMV engine",
              body: "Every time an active card hits, the system has to pull the closest-value card from reserve inventory so the pack stays sellable. The math is per tier, per level, with an audit log a regulator could read.",
            },
            {
              n: "Problem · 3",
              title: "PSA Vault, eBay, and buyback in one lifecycle",
              body: "A purchased card needs to land in the customer's vault, stay tradeable, route to eBay through the vault, and remain available for the 90% buyback. Today every breaker handles this in support tickets.",
            },
          ].map((f, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="rounded-[4px] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-7 md:p-8 h-full flex flex-col">
                <div className="label-code text-white/55 mb-4">{f.n}</div>
                <h3 className="font-head text-white text-[19px] md:text-[22px] leading-[1.2] mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16 pt-12 border-t border-white/10">
            {[
              ["PSA", "official integration partner"],
              ["14 wk", "kickoff to production"],
              ["0", "incidents at launch"],
              ["90%", "buyback closing the lifecycle"],
            ].map(([v, l]) => (
              <div key={v} className="flex flex-col gap-3">
                <div className="font-head text-white text-[36px] md:text-[44px] lg:text-[52px] leading-none tabular-nums">
                  {v}
                </div>
                <div className="label-code text-white/60">{l}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-14 md:mt-16 max-w-[70ch] text-white/75 text-[14px] md:text-[15px] leading-relaxed">
            These modules sit on top of your existing commerce platform. Not
            instead of it. Your Whatnot show keeps running. Your website finally
            does its share of the work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
