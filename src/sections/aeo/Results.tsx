"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { H2_DARK } from "./ui";

const CASES = [
  {
    client: "FELCO",
    nameClass: "font-bold tracking-[0.04em]",
    type: "Swiss precision tools",
    number: "+1,415%",
    label: "AI traffic, year over year",
    support: "+1,541% product views from AI traffic",
  },
  {
    client: "Habito",
    nameClass: "font-semibold tracking-[-0.03em]",
    type: "UK mortgage broker",
    number: "15×",
    label: "Return on AEO investment in three months",
    support: "+155% conversions from AI traffic",
  },
  {
    client: "BYREDO",
    nameClass: "font-bold tracking-[0.14em]",
    type: "Luxury fragrance",
    number: "Global",
    label: "AI search program alongside the brand’s partners",
    support: "Tracking, category content and editorial",
  },
];

/** Three clients side by side, split by hairlines. No boxes, no charts: the number carries it. */
export function Results() {
  return (
    <section id="proof" className="relative z-10 bg-[var(--sw-black)] py-16 md:py-28">
      <div className="wrap">
        <Reveal>
          <h2 className={`${H2_DARK} max-w-[20ch]`}>Results from our AI search work</h2>
        </Reveal>
        <div className="mt-10 md:mt-14 grid md:grid-cols-3 border-t border-white/15">
          {CASES.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.07}>
              <div className={`h-full py-8 md:py-10 md:px-8 lg:px-10 ${i ? "border-t md:border-t-0 md:border-l border-white/15" : "md:pl-0"}`}>
                <div className={`font-head text-white text-[24px] leading-none ${c.nameClass}`}>{c.client}</div>
                <div className="mt-2 text-[13px] text-white/50">{c.type}</div>
                <div
                  className="mt-8 md:mt-10 font-head font-bold text-[56px] md:text-[clamp(48px,5vw,72px)] leading-none tracking-[-0.04em]"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {c.number}
                </div>
                <p className="mt-4 font-head font-semibold text-white text-[18px] leading-[1.3] max-w-[22ch]">{c.label}</p>
                <p className="mt-3 text-[14px] text-white/55">{c.support}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[12px] text-white/40 max-w-[80ch]">
          FELCO and Habito figures come from broader client programs and are not a guarantee for AI Visibility Core.
        </p>
      </div>
    </section>
  );
}
