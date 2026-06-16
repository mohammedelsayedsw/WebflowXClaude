"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Layer = { n: number; name: string; badge: string; body: string };

const layers: Layer[] = [
  {
    n: 1,
    name: "OperaLayer Commerce Hub",
    badge: "Foundational",
    body: "One operational layer across the whole setup. It surfaces order value, fulfillment status, stock and product differences, app costs, failed syncs, and recent changes, so every other layer plugs into a shared view.",
  },
  {
    n: 2,
    name: "Data Control Center",
    badge: "Critical",
    body: "One performance view across stores. Revenue, conversion, margin, channels, search, retention, and alerts as scorecards with drilldowns.",
  },
  {
    n: 3,
    name: "ERP Connector Accelerator",
    badge: "Operational",
    body: "A stable, fast way to connect new ERPs. Validated connectors link Shopify to ERP, OMS, WMS, pricing, inventory, and fulfillment.",
  },
  {
    n: 4,
    name: "CMS Connector Accelerator",
    badge: "Operational",
    body: "Sanity, Storyblok, Contentful, Prismic, Strapi, Builder.io, and WordPress connected with release and localization governance.",
  },
  {
    n: 5,
    name: "Multi-Store Monitoring Suite",
    badge: "Critical",
    body: "Core Web Vitals, app impact, SEO, product feeds, webhooks, ERP / OMS / WMS sync, cart-to-checkout, payment, shipping, and release risk watched across every store.",
  },
  {
    n: 6,
    name: "Custom App Space",
    badge: "Management",
    body: "A controlled place for Shopify-specific business rules. Custom pricing, B2B flows, account catalogs, approval logic, and dashboards. You decide what stays an app and what becomes shared logic.",
  },
  {
    n: 7,
    name: "Mobile Commerce Accelerator",
    badge: "Extension",
    body: "Launch mobile apps for customers, B2B, sales reps, warehouse, loyalty, reorder, and ops on the same data layer and business rules.",
  },
];

export function SevenLayers() {
  return (
    <section
      id="layers"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">
            what scandiweb connects and supports
          </div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[26ch]">
            Seven layers that give you{" "}
            <span style={{ color: "var(--sw-mint)" }}>
              visibility across the setup
            </span>
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            Each layer covers a different part of your setup. Together they help
            the team see what is happening across stores, systems, and
            workflows, and add the pieces that are missing.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 space-y-3 md:space-y-4">
          {layers.map((l, i) => {
            const foundational = l.n === 1;
            return (
              <Reveal key={l.n} delay={i * 0.06}>
                <article
                  className="rounded-[4px] border border-white/10 p-6 md:p-7"
                  style={{
                    background: foundational
                      ? "linear-gradient(160deg, rgba(110,247,110,0.06) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)"
                      : "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.45)",
                    borderLeft: foundational
                      ? "2px solid var(--sw-mint)"
                      : undefined,
                    marginLeft: foundational ? 0 : "clamp(0px, 2vw, 24px)",
                  }}
                >
                  <div className="flex items-start gap-5 md:gap-7">
                    <div className="font-head text-white/25 text-[32px] md:text-[40px] leading-none tabular-nums shrink-0 w-[1.4ch]">
                      {l.n}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 md:gap-4">
                        <h3 className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
                          {l.name}
                        </h3>
                        <span className="label-code inline-flex items-center rounded-[2px] border border-white/20 px-2.5 py-1 text-white/65 text-[9px]">
                          {l.badge}
                        </span>
                      </div>
                      <p className="mt-3 text-[14px] md:text-[15px] text-white/75 leading-relaxed max-w-[78ch]">
                        {l.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
