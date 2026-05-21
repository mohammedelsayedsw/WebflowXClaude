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
              <span className="text-[var(--sw-mint)]">Six years in production.</span>{" "}
              <span className="text-white">Sweden.</span>
            </h2>
            <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed max-w-[60ch]">
              Byggmax is Sweden&apos;s largest DIY chain – 80+ stores across the Nordics plus online. scandiweb has run their commerce stack since 2020: Magento 2 + Amplience headless CMS + Loop54 semantic search + Dynamic Yield personalisation, with a multi-region trade-pricing engine and full ERP integration. The engagement evolved from DevOps and stabilisation through personalisation and search to AI co-innovation in 2026.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              n: "Stage · 1",
              title: "DevOps and stabilisation",
              body: "Took ownership of a Magento 2 stack that had been outsourced and patched for years. Rebuilt CI/CD, cleaned up the deployment pipeline, set up environment parity, and got the team to a place where peak no longer broke production.",
            },
            {
              n: "Stage · 2",
              title: "Personalisation and search",
              body: "Loop54 semantic search wired to the Magento catalog. Dynamic Yield personalisation rolled out across PDP, category, and cart. Synonym dictionaries trained on DIY vocabulary across Swedish, Norwegian, Danish, and Finnish.",
            },
            {
              n: "Stage · 3",
              title: "AI co-innovation",
              body: "April 2026: working AI prototype lets the content team prompt for new Amplience content types and ship them in days, not weeks. Co-proposed with Byggmax&apos;s digital lead. Now the template for content velocity across the group.",
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
              ["6 yr", "engagement · still running"],
              ["80+", "Nordic stores online"],
              ["40+", "feature releases since 2024"],
              ["3", "anchor cases in this stack"],
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
            Byggmax is the longest engagement in the stack. The same architecture also runs at Murergrej in Denmark (3.7 years, B2B2C zero-to-live in 18 months, 99.2% peak uptime) and Ermitazas in Lithuania (4 years, Akeneo PIM master data layer, supplier-feed automation). Three retailers, three countries, three peak seasons. Same back office.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
