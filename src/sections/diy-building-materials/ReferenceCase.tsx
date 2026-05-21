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
              Byggmax is Sweden&apos;s leading DIY chain. 160+ physical stores across Sweden, Norway, Denmark, Finland plus online. 55,000+ SKUs across four Magento stores. scandiweb has run their commerce stack since 2020: Magento 2 + Hyvä (99 PageSpeed) + Amplience headless CMS + Loop54 semantic search + Dynamic Yield personalisation + Dotdigital email. Published wins: +15% AOV from Dotdigital and Dynamic Yield combined, +15% revenue from a single hero CTA color A/B test.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              n: "Stage · 1",
              title: "DevOps, Hyvä, performance",
              body: "Took ownership of a Magento 2 stack that had been outsourced and patched for years. Rebuilt CI/CD with Terraform IaC, Varnish + CloudFront caching, environment parity. Migrated the storefront to Hyvä for a 99 PageSpeed score (published case study). Peak stopped breaking production.",
            },
            {
              n: "Stage · 2",
              title: "Search, personalisation, content",
              body: "Loop54 semantic search wired with synonym dictionaries across Swedish, Norwegian, Danish, Finnish. Dynamic Yield personalisation rolled out across product page, category, and cart. Migrated content from Magento page builder to Amplience headless, with 17 page templates mapped. Dotdigital plus Dynamic Yield drove +15% AOV (published).",
            },
            {
              n: "Stage · 3",
              title: "Configurators and AI co-innovation",
              body: "Wiksbo 3D closet configurator shipped via Dynamaker iframe, with JSON-serialized shareable presets across the 23 to 28 SKU range. April 2026 saw an AI content-type prototype: the content lead describes the block in natural language and the system scaffolds the Amplience schema. Cuts new content type time from weeks to days. Co-innovation track, not a productised module.",
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
              ["99", "PageSpeed score on Hyvä · published"],
              ["+15%", "AOV from personalisation · published"],
              ["160+", "Nordic stores live"],
              ["6 yr", "engagement · still running"],
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
            Byggmax is the longest engagement. The same patterns also run at Murergrej in Denmark (5 years, B2B portal live across 200+ trade accounts plus 5,000+ B2C accounts, 99.2% Q4 uptime first season after launch, external YouWe WMS as source of truth) and Ermitazas in Lithuania (4 years, custom Akeneo PIM with 2000-family 4-level hierarchy, Devoro supplier-feed integration, monthly managed-support retainer since 2025). Three retailers, three countries, three different starting points. Same operating pattern.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
