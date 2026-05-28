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
              A leading trading card retailer with a long-running live show on
              Whatnot came to scandiweb to build the website business that
              actually generates revenue. A partnership with PSA, the leading
              card-grading service, in hand. The pack-selling model defined.
              Three structural problems blocking launch.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              n: "Problem · 1",
              title: "Three separate inventories, no single truth",
              body: "Live show stock in one spreadsheet. Website stock in another. Cards stored at PSA tracked in a third. No software connected them. Reconciliation was a full-time person, not a process.",
            },
            {
              n: "Problem · 2",
              title: "Packs needed automatic restocking by market value",
              body: "Every time a high-value card sells, the system has to find the closest-value card in reserve and slot it in to keep the pack live. Per tier, per level, with an audit log clear enough to defend.",
            },
            {
              n: "Problem · 3",
              title: "Grading, eBay, and buyback in one journey",
              body: "A purchased card lands in the buyer's stored collection, can be listed back to eBay, can come back through the 90% buyback, or can be withdrawn for shipping. Today every operator handles this through support tickets.",
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
              ["90%", "buyback rate keeping customers in"],
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
