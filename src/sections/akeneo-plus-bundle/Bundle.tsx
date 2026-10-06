"use client";

import { ArrowLeftRight, Network, Workflow } from "lucide-react";
import { btnLight } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { scrollToId } from "./scrollTo";
import { BODY_LIGHT, Eyebrow, H2_LIGHT, LAVENDER, LINE_LIGHT } from "./ui";

const FEATURES = [
  {
    icon: Workflow,
    title: "Product rules",
    body: "Assign categories and set attribute values automatically, based on conditions you define.",
  },
  {
    icon: Network,
    title: "Shared reference data",
    body: "Keep brands, materials, and collections as records with their own attributes, and link them to any product.",
  },
  {
    icon: ArrowLeftRight,
    title: "Custom imports and exports",
    body: "Map supplier files to your attributes on import, and export in the format each connected system expects.",
  },
];

export function Bundle() {
  return (
    <section id="bundle" className="relative z-10 py-24 md:py-28" style={{ background: LAVENDER }}>
      <div className="wrap">
        <Reveal>
          <Eyebrow>Akeneo Plus Bundle</Eyebrow>
          <h2 className={`${H2_LIGHT} max-w-[24ch]`}>The licensed features Community Edition leaves out</h2>
          <p className={`${BODY_LIGHT} mt-6 max-w-[62ch]`}>
            Community Edition has no license fee, but it lacks features many teams use every day in licensed
            Akeneo. The Plus Bundle adds them back.
          </p>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {FEATURES.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.07} className="h-full">
              <div className={`h-full bg-white border ${LINE_LIGHT} rounded-[2px] p-8`}>
                <Icon aria-hidden className="h-10 w-10" style={{ color: "var(--sw-blue)" }} strokeWidth={1.25} />
                <h3 className="mt-8 font-head font-bold text-[var(--sw-black)] text-[22px] md:text-[24px] leading-[1.2]">{title}</h3>
                <p className="mt-4 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-relaxed">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-[var(--sw-black)]/70 text-[15px] leading-relaxed max-w-[62ch]">
              Your assessment lists each feature you use today and marks it as covered by Community Edition,
              covered by the bundle, or needing extra work.
            </p>
            <a href="#cta" onClick={scrollToId("cta")} className={`${btnLight} shrink-0`}>
              Check my feature coverage
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
