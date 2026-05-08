"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Blueprints() {
  const blueprints = [
    {
      tier: "Blueprint 1",
      name: "Shopify MCP Pack",
      forWho:
        "For D2C, retail, beauty, fashion, food, lifestyle, and subscription brands on Shopify or Shopify Plus.",
      tools: [
        "product + collection search",
        "live inventory check",
        "order status (after login)",
        "cart creation",
        "discount validation",
        "returns + product recommendations",
      ],
      addons:
        "Shopify Markets · Klaviyo flow trigger · Gorgias / Zendesk ticketing · GA4 events · subscription apps · loyalty apps",
    },
    {
      tier: "Blueprint 2",
      name: "Adobe Commerce MCP Pack",
      forWho:
        "For enterprise retail, B2B, multi-store, multi-market, custom-pricing, and complex-catalog Magento / Adobe Commerce stores.",
      tools: [
        "catalog + layered search",
        "customer-specific pricing",
        "inventory by warehouse (MSI)",
        "reorder from history",
        "B2B account + quote request",
        "product comparison + compatibility",
      ],
      addons:
        "Hyvä frontend · Akeneo / Pimcore PIM · Algolia · ElasticSearch · ERP pricing sync · custom checkout logic",
    },
  ];

  return (
    <section id="blueprints" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="max-w-[64ch] mb-14 md:mb-16">
          <Reveal>
            <div className="label-code text-[var(--sw-blue)] mb-4">Prebuilt blueprints</div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              We don&apos;t start from a{" "}
              <span className="text-[var(--sw-blue)]">blank page</span>.
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-[var(--sw-black)]/70 max-w-[60ch] leading-relaxed">
              Two MCP blueprints cover the most common commerce use cases. Each is a working architecture we customize for your platform, catalog, and workflows – cutting time and cost vs. building from zero.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {blueprints.map((bp, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="relative rounded-[4px] bg-white border border-[var(--sw-black)]/8 p-7 md:p-8 h-full">
                <span className="absolute top-0 left-7 right-7 h-[2px] bg-[var(--sw-blue)]" />
                <div className="label-code text-[var(--sw-blue)] mb-3">{bp.tier}</div>
                <h3 className="font-head text-[var(--sw-black)] text-[24px] md:text-[28px] leading-[1.15] mb-3 font-bold">
                  {bp.name}
                </h3>
                <p className="text-[14px] text-[var(--sw-black)]/65 mb-7 leading-relaxed">
                  {bp.forWho}
                </p>

                <div className="label-code text-[var(--sw-black)] mb-3">Tools shipped</div>
                <ul className="mb-6 text-[14px] text-[var(--sw-black)]/80 leading-[1.7] space-y-1">
                  {bp.tools.map((t) => (
                    <li key={t} className="flex gap-2">
                      <span className="text-[var(--sw-blue)] font-semibold shrink-0">→</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="rounded-[4px] bg-[var(--sw-black)]/[0.04] p-4 text-[13px] text-[var(--sw-black)]/70 leading-relaxed">
                  <span className="font-semibold text-[var(--sw-black)]">Optional add-ons:</span>{" "}
                  {bp.addons}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-14">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--sw-blue)] px-7 py-3.5 font-head font-semibold text-[14px] text-[var(--sw-blue)] hover:bg-[var(--sw-blue)] hover:text-white transition"
          >
            Get the blueprint that fits your stack →
          </a>
          <p className="mt-4 text-[13px] text-[var(--sw-black)]/55 max-w-[60ch] mx-auto leading-relaxed">
            Need a different platform? We&apos;ve also shipped MCP integrations for BigCommerce, commercetools, Salesforce Commerce, SAP, and custom backends.
          </p>
        </div>
      </div>
    </section>
  );
}
