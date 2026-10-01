"use client";

import { ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/assets";

/**
 * Quiet cross links between the OperaLayer pages. Each page passes its own
 * slug so it never links to itself.
 */
const PAGES = [
  { slug: "", title: "How OperaLayer works" },
  { slug: "invoice-matching", title: "Invoice matching" },
  { slug: "supplier-purchasing", title: "Supplier purchasing" },
  { slug: "pricing-control", title: "Pricing control" },
];

export function Modules({ current, heading = "More from OperaLayer" }: { current: string; heading?: string }) {
  const items = PAGES.filter((p) => p.slug !== current);
  return (
    <div className="mt-24 md:mt-32 border-t border-[var(--sw-black)]/12 pt-8 flex flex-col md:flex-row md:items-baseline gap-5 md:gap-12">
      <div className="text-[15px] text-[var(--sw-black)]/50 shrink-0">{heading}</div>
      <div className="flex flex-wrap gap-x-10 gap-y-3">
        {items.map((p) => (
          <a
            key={p.slug || "pillar"}
            href={assetUrl(p.slug ? `/operalayer/${p.slug}` : "/operalayer")}
            className="group inline-flex items-center gap-2 font-head text-[18px] md:text-[20px] text-[var(--sw-black)] hover:text-[var(--sw-blue)] transition"
          >
            {p.title}
            <ArrowRight className="h-4 w-4 text-[var(--sw-blue)] transition group-hover:translate-x-1" />
          </a>
        ))}
      </div>
    </div>
  );
}
