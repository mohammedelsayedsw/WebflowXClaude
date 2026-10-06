"use client";

import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { Rows } from "./Rows";
import { scrollToId } from "./scrollTo";

export function Bundle() {
  return (
    <Rows
      id="bundle"
      eyebrow="Akeneo Plus Bundle"
      title="Advanced Akeneo features"
      accent="without the license fee"
      intro="The bundle extends Community Edition with key capabilities from licensed Akeneo. We map the features you use today and configure the new setup around them."
      rows={[
        {
          title: "Product automation",
          body: "Categorize products and update attributes automatically with rules you define.",
        },
        {
          title: "Shared product information",
          body: "Manage brands, materials, and collections in one place and reuse them across your catalog.",
        },
        {
          title: "Custom imports and exports",
          body: "Map supplier files to your catalog and export product data in the formats your connected systems need.",
        },
      ]}
    >
      <Reveal>
        <p className="mt-8 text-white/60 text-[15px] leading-relaxed max-w-[60ch]">
          Your assessment shows what Community Edition covers, what the bundle adds, and where extra
          work is needed.
        </p>
        <a href="#cta" onClick={scrollToId("cta")} className={`${btnPrimary} mt-6`}>
          Check my feature coverage
        </a>
      </Reveal>
    </Rows>
  );
}
