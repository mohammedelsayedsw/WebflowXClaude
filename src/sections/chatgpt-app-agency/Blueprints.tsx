"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { Layers, Network } from "lucide-react";
import { assetUrl } from "@/lib/assets";

type Pack = {
  name: string;
  forWho: string;
  tools: string[];
  /** Either an asset path (logo SVG) or a render function for an inline icon. */
  logoSrc?: string;
  logoAlt?: string;
  logoBg: string;
  iconNode?: React.ReactNode;
  startsAt: string;
};

export function Blueprints() {
  const packs: Pack[] = [
    {
      name: "Shopify",
      forWho: "D2C, retail, fashion, beauty, subscription",
      tools: [
        "product + collection search",
        "live inventory",
        "order status",
        "cart creation",
        "discount validation",
        "returns",
      ],
      logoSrc: "/shared/logos/platforms/shopify.svg",
      logoAlt: "Shopify",
      logoBg: "#95BF47",
      startsAt: "from €9,900",
    },
    {
      name: "Adobe Commerce",
      forWho: "Enterprise retail, B2B, multi-store, multi-market",
      tools: [
        "catalog + layered search",
        "customer-specific pricing",
        "warehouse inventory (MSI)",
        "reorder from history",
        "B2B account + quote",
        "product comparison",
      ],
      iconNode: <Layers className="h-7 w-7 text-white" strokeWidth={2.2} />,
      logoBg: "#FA0F00",
      startsAt: "from €9,900",
    },
    {
      name: "B2B Reorder",
      forWho: "Distributors, manufacturers, wholesalers",
      tools: [
        "account + previous orders",
        "reorder + substitutes",
        "contract pricing + stock",
        "create quote",
        "send to sales rep",
        "approval routing",
      ],
      iconNode: <Network className="h-7 w-7 text-white" strokeWidth={2.2} />,
      logoBg: "#2440ff",
      startsAt: "from €9,900",
    },
  ];

  return (
    <section id="packs" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="max-w-[64ch] mb-14 md:mb-16">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.18em] font-semibold text-[var(--sw-blue)] mb-5">
              Ready-to-ship packs
            </p>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              We don&apos;t start from a{" "}
              <span className="text-[var(--sw-blue)]">blank page</span>.
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-[var(--sw-black)]/70 max-w-[60ch] leading-relaxed">
              Three packs cover the most common commerce use cases. Each ships with working tools you customize for your platform.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {packs.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <div className="relative rounded-[4px] bg-white border border-[var(--sw-black)]/10 p-8 md:p-10 h-full flex flex-col">
                <div
                  className="inline-flex h-14 w-14 items-center justify-center rounded-[4px] mb-7 overflow-hidden"
                  style={{ background: p.logoBg }}
                >
                  {p.logoSrc ? (
                    <img
                      src={assetUrl(p.logoSrc)}
                      alt={p.logoAlt ?? ""}
                      className="h-7 w-7 object-contain"
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  ) : (
                    p.iconNode
                  )}
                </div>

                <h3 className="font-head text-[var(--sw-black)] text-[26px] md:text-[30px] leading-[1.1] font-bold mb-3 tracking-[-0.01em]">
                  {p.name}
                </h3>
                <p className="text-[14px] text-[var(--sw-black)]/55 mb-8 leading-relaxed">
                  {p.forWho}
                </p>

                <ul className="space-y-2.5 text-[15px] text-[var(--sw-black)]/85 leading-snug mb-8">
                  {p.tools.map((t) => (
                    <li key={t} className="flex items-center gap-3">
                      <span className="h-1 w-1 rounded-full bg-[var(--sw-blue)] shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-[var(--sw-black)]/10 flex items-center justify-between">
                  <span className="text-[12px] uppercase tracking-[0.12em] font-semibold text-[var(--sw-black)]/55">
                    {p.startsAt}
                  </span>
                  <a
                    href="#cta"
                    className="text-[13px] font-head font-semibold text-[var(--sw-blue)] hover:underline"
                  >
                    Start →
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-14">
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--sw-blue)] px-7 py-3.5 font-head font-semibold text-[14px] text-[var(--sw-blue)] hover:bg-[var(--sw-blue)] hover:text-white transition"
          >
            Get the pack that fits your stack →
          </a>
          <p className="mt-4 text-[13px] text-[var(--sw-black)]/55 max-w-[60ch] mx-auto leading-relaxed">
            Also working with BigCommerce, commercetools, Salesforce Commerce, SAP Commerce, and custom backends.
          </p>
        </div>
      </div>
    </section>
  );
}
