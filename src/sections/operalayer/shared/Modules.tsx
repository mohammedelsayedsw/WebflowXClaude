"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

/**
 * Cross links between the OperaLayer pillar and its module pages. Each page
 * passes its own slug so it never links to itself.
 */
const PAGES = [
  {
    slug: "",
    label: "OperaLayer",
    title: "How OperaLayer works across your systems",
    system: "Overview",
  },
  {
    slug: "invoice-matching",
    label: "Procurement",
    title: "AI invoice matching",
    system: "Microsoft Dynamics NAV",
  },
  {
    slug: "supplier-purchasing",
    label: "Procurement",
    title: "Supplier purchasing intelligence",
    system: "Microsoft Business Central",
  },
  {
    slug: "pricing-control",
    label: "Pricing",
    title: "Pricing control across regions",
    system: "Magento (Adobe Commerce)",
  },
];

export function Modules({ current, heading }: { current: string; heading: string }) {
  const items = PAGES.filter((p) => p.slug !== current);
  return (
    <section id="more" className="bg-lp-bright py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[30px] md:text-[40px] leading-[1.08] max-w-[22ch]">
            {heading}
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 border-t border-[var(--sw-black)]/15">
          {items.map((p, i) => (
            <Reveal key={p.slug || "pillar"} delay={i * 0.07}>
              <a
                href={assetUrl(p.slug ? `/operalayer/${p.slug}` : "/operalayer")}
                className={`group flex h-full flex-col justify-between gap-10 py-8 md:py-10 md:px-8 border-b md:border-b-0 border-[var(--sw-black)]/15 ${
                  i > 0 ? "md:border-l" : "md:pl-0"
                }`}
              >
                <div>
                  <div className="label-code text-[var(--sw-black)]/50">{p.label}</div>
                  <div className="mt-3 font-head text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.15] group-hover:text-[var(--sw-blue)] transition">
                    {p.title}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[14px] text-[var(--sw-black)]/60">
                  <span>{p.system}</span>
                  <ArrowUpRight className="h-5 w-5 text-[var(--sw-blue)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
