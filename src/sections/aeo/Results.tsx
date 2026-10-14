"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { H2_DARK, SECTION_Y } from "./ui";

type Bars = { note: string; rows: { label: string; value: number }[] };

const CASES: {
  client: string;
  logo: string;
  logoClass: string;
  type: string;
  number: string;
  label: string;
  bars?: Bars;
  work?: string[];
  support: { value?: string; text: string };
}[] = [
  {
    client: "FELCO",
    logo: "/aeo/logos/felco.svg",
    logoClass: "h-10 md:h-11",
    type: "Swiss precision tools",
    number: "+1,415%",
    label: "AI traffic, year over year",
    bars: {
      note: "AI traffic index, prior year = 100",
      rows: [
        { label: "Prior year", value: 100 },
        { label: "Reported period", value: 1515 },
      ],
    },
    support: { value: "+1,541%", text: "product views from AI traffic" },
  },
  {
    client: "Habito",
    logo: "/aeo/logos/habito.svg",
    logoClass: "h-6 md:h-7",
    type: "UK mortgage broker",
    number: "15×",
    label: "Return on AEO investment in three months",
    bars: {
      note: "AI conversion index, prior 3 months = 100",
      rows: [
        { label: "Prior 3 months", value: 100 },
        { label: "Measured 3 months", value: 255 },
      ],
    },
    support: { value: "+155%", text: "conversions from AI traffic" },
  },
  {
    client: "BYREDO",
    logo: "/aeo/logos/byredo.svg",
    logoClass: "h-[18px] md:h-5",
    type: "Luxury fragrance",
    number: "Global",
    label: "AI search program alongside the brand’s partners",
    work: ["AI visibility and source tracking", "Category content and FAQ recommendations", "Editorial and retailer opportunities"],
    support: { text: "Ongoing client work" },
  },
];

/** Index bars: the earlier period against the reported one, widths from the real index values. */
function IndexBars({ bars }: { bars: Bars }) {
  const max = Math.max(...bars.rows.map((r) => r.value));
  return (
    <div>
      <div className="grid gap-3">
        {bars.rows.map((r, i) => {
          const current = i === bars.rows.length - 1;
          return (
            <div key={r.label}>
              <div className="flex items-baseline justify-between text-[12px]">
                <span className={current ? "text-white/80" : "text-white/50"}>{r.label}</span>
                <span className={`font-head font-semibold ${current ? "text-[var(--sw-mint)]" : "text-white/50"}`}>
                  {r.value.toLocaleString("en-US")}
                </span>
              </div>
              <div className="mt-1.5 h-1.5 bg-white/[0.08]">
                <motion.div
                  className="h-full"
                  style={{ background: current ? "var(--sw-mint)" : "rgba(255,255,255,0.35)" }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(r.value / max) * 100}%` }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-3 text-[11px] text-white/35">{bars.note}</p>
    </div>
  );
}

/**
 * Three clients. Desktop: three columns split by hairlines, each row (logo, number, label, chart, support)
 * aligned across columns with subgrid. Phones: a swipe row, so the section stays one screen tall.
 */
export function Results() {
  return (
    <section id="proof" className={`relative z-10 bg-[var(--sw-black)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <h2 className={H2_DARK}>Results from our AI search work</h2>
        </Reveal>
        <div
          className="mt-6 md:mt-[clamp(20px,4vh,32px)] -mx-[clamp(1.25rem,4vw,3rem)] px-[clamp(1.25rem,4vw,3rem)] scroll-px-[clamp(1.25rem,4vw,3rem)] flex gap-3 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:grid md:grid-cols-3 md:grid-rows-[repeat(5,auto)] md:gap-0 md:overflow-visible md:border-t md:border-white/15"
        >
          {CASES.map((c, i) => (
            <Reveal
              key={c.client}
              delay={i * 0.07}
              className={`w-[84%] shrink-0 snap-start border border-white/15 p-5 md:w-auto md:border-0 md:row-span-5 md:grid md:grid-rows-subgrid md:gap-0 md:px-8 md:pt-[clamp(20px,4vh,32px)] md:pb-0 lg:px-10 ${
                i ? "md:border-l md:border-white/15" : "md:pl-0"
              }`}
            >
              <div className="flex items-end justify-between gap-4 md:block">
                <div className="flex h-11 items-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assetUrl(c.logo)} alt={c.client} className={`${c.logoClass} w-auto`} />
                </div>
                <div className="text-[12px] md:text-[13px] text-white/45 md:mt-3">{c.type}</div>
              </div>
              <div
                className="mt-5 md:mt-[clamp(14px,3.5vh,28px)] font-head font-bold text-[44px] md:text-[clamp(40px,min(4.4vw,8.5vh),64px)] leading-none tracking-[-0.04em]"
                style={{ color: "var(--sw-mint)" }}
              >
                {c.number}
              </div>
              <p className="mt-3 font-head font-semibold text-white text-[16px] md:text-[18px] leading-[1.3] max-w-[24ch]">
                {c.label}
              </p>
              <div className="mt-4 md:mt-[clamp(12px,2.5vh,20px)]">
                {c.bars && <IndexBars bars={c.bars} />}
                {c.work && (
                  <ol className="grid">
                    {c.work.map((w, j) => (
                      <li key={w} className="flex gap-3 border-t border-white/10 py-2 text-[13px] text-white/65 first:border-t-0 first:pt-0">
                        <span className="font-head font-semibold text-[var(--sw-mint)]">{j + 1}</span>
                        {w}
                      </li>
                    ))}
                  </ol>
                )}
              </div>
              <p className="mt-4 md:mt-[clamp(12px,2.5vh,20px)] md:pb-4 border-t border-white/10 pt-3 md:pt-4 text-[13px] md:text-[14px] text-white/55">
                {c.support.value && (
                  <span className="mr-1.5 font-head font-semibold text-white">{c.support.value}</span>
                )}
                {c.support.text}
              </p>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 md:mt-[clamp(12px,2.5vh,24px)] text-[12px] text-white/40 max-w-[80ch]">
          FELCO and Habito figures come from broader client programs and are not a guarantee for AI Visibility Core.
        </p>
      </div>
    </section>
  );
}
