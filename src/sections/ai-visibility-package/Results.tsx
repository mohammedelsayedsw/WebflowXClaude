"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { BODY_DARK, Eyebrow, H2_DARK } from "./ui";

type Bars = { note: string; rows: { label: string; value: number }[] };

const CASES: {
  client: string;
  logo: string;
  logoClass: string;
  type: string;
  number: string;
  label: string;
  description: string;
  bars: Bars;
  support: { value: string; text: string };
}[] = [
  {
    client: "FELCO",
    logo: "/ai-visibility-package/logos/felco.svg",
    logoClass: "h-10 md:h-11",
    type: "Swiss precision tool manufacturer",
    number: "+1,415%",
    label: "AI traffic, year over year",
    description: "Product and category content improvements, structured data, and relevant third-party citations.",
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
    logo: "/ai-visibility-package/logos/habito.svg",
    logoClass: "h-6 md:h-7",
    type: "UK digital mortgage broker",
    number: "15×",
    label: "Return on AEO investment in three months",
    description: "Content structured around the questions and sources AI tools use when recommending mortgage providers.",
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
    logo: "/ai-visibility-package/logos/byredo.svg",
    logoClass: "h-[18px] md:h-5",
    type: "Luxury fragrance brand",
    number: "#1",
    label: "Niche fragrance house in AI answers",
    description: "A dedicated AEO engagement alongside the brand’s existing partners.",
    bars: {
      note: "AI referral traffic index, +324% year over year",
      rows: [
        { label: "Prior year", value: 100 },
        { label: "Reported period", value: 424 },
      ],
    },
    support: { value: "Up to +18%", text: "AI visibility on priority prompts" },
  },
];

/** Index bars: the earlier period against the reported one, widths from the real index values. */
function IndexBars({ bars }: { bars: Bars }) {
  const max = Math.max(...bars.rows.map((r) => r.value));
  return (
    <div>
      <div className="grid gap-2">
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
      <p className="mt-1.5 text-[11px] text-white/35">{bars.note}</p>
    </div>
  );
}

/**
 * Three clients. Desktop: three columns split by hairlines, each row (logo, number, label, description, chart, support)
 * aligned across columns with subgrid. Phones: a swipe row, so the section stays one screen tall.
 */
export function Results() {
  // Own padding instead of SECTION_Y: the densest section, so it runs tighter on short screens.
  return (
    <section id="proof" className="relative z-10 flex min-h-svh flex-col justify-center bg-[var(--sw-black)] py-[clamp(32px,6vh,56px)] md:py-[clamp(16px,3vh,96px)]">
      <div className="wrap w-full">
        <Reveal className="lg:flex lg:items-end lg:justify-between lg:gap-16">
          <div>
            <Eyebrow tone="mint">Our work in AI search</Eyebrow>
            <h2 className={`${H2_DARK} mt-4`}>Results from our AI search work</h2>
          </div>
          <p className={`${BODY_DARK} mt-3 lg:mt-0 max-w-[40ch] hidden lg:block`}>
            Our team helps businesses build their presence in AI search, from specialist retailers to global brands.
          </p>
        </Reveal>
        <div className="mt-6 md:mt-[clamp(12px,2.6vh,32px)] -mx-[clamp(1.25rem,4vw,3rem)] px-[clamp(1.25rem,4vw,3rem)] scroll-px-[clamp(1.25rem,4vw,3rem)] flex gap-3 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:grid md:grid-cols-3 md:grid-rows-[repeat(6,auto)] md:gap-0 md:overflow-visible md:border-t md:border-white/15">
          {CASES.map((c, i) => (
            <Reveal
              key={c.client}
              delay={i * 0.07}
              className={`w-[84%] shrink-0 snap-start border border-white/15 p-5 md:w-auto md:border-0 md:row-span-6 md:grid md:grid-rows-subgrid md:gap-0 md:px-8 md:pt-[clamp(14px,2.6vh,32px)] md:pb-0 lg:px-10 ${
                i ? "md:border-l md:border-white/15" : "md:pl-0"
              }`}
            >
              <div className="flex items-end justify-between gap-4">
                <div className="flex h-10 md:h-11 items-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assetUrl(c.logo)} alt={c.client} className={`${c.logoClass} w-auto`} />
                </div>
                <div className="text-right text-[12px] md:text-[13px] leading-snug text-white/45 max-w-[16ch]">{c.type}</div>
              </div>
              <div
                className="mt-5 md:mt-[clamp(10px,2.2vh,24px)] font-head font-bold text-[44px] md:text-[clamp(34px,min(4vw,6vh),60px)] leading-none tracking-[-0.04em]"
                style={{ color: "var(--sw-mint)" }}
              >
                {c.number}
              </div>
              <p className="mt-2 font-head font-semibold text-white text-[16px] md:text-[17px] leading-[1.3] max-w-[26ch]">
                {c.label}
              </p>
              <p className="mt-1.5 text-[13px] leading-snug md:leading-relaxed text-white/60 max-w-[40ch] max-md:[@media(max-height:700px)]:hidden">
                {c.description}
              </p>
              <div className="mt-4 md:mt-[clamp(10px,2vh,20px)]">
                <IndexBars bars={c.bars} />
              </div>
              <p className="mt-4 md:mt-[clamp(8px,1.6vh,16px)] md:pb-3 border-t border-white/10 pt-2.5 text-[13px] md:text-[14px] text-white/55">
                <span className="mr-1.5 font-head font-semibold text-white">{c.support.value}</span>
                {c.support.text}
              </p>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 md:mt-[clamp(8px,1.6vh,20px)] text-[12px] text-white/40">
          Results come from broader client programs and are not a guarantee for AI Visibility Core. Habito: GA4 traffic and
          conversions from known AI referrers.
        </p>
      </div>
    </section>
  );
}
