"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

/**
 * Two published scandiweb case studies, led by the numbers. Läderach covers the
 * multi-market and multilingual pain, Rocket Industrial the large-catalog and
 * single-source-of-truth pain, so together they speak to both halves of the
 * audience. Every figure is quoted exactly as the published case study states it.
 *
 * TODO: client logos can sit on the cards once they are cleared for webinar use.
 */

type Fig = {
  /** a single figure or short phrase */
  value?: string;
  /** or a movement between two figures */
  from?: string;
  to?: string;
  caption?: string;
  /** phrases set smaller than figures, so the row keeps one optical weight */
  phrase?: boolean;
  accent?: boolean;
};

type Study = {
  heading: string;
  accentFrom: number;
  subline: string;
  figures: Fig[];
  before: string;
  after: string;
  href: string;
};

const STUDIES: Study[] = [
  {
    heading: "One product, up to 20 manual entries",
    accentFrom: 12,
    subline: "Läderach, premium Swiss chocolate, 250+ stores worldwide",
    figures: [
      { value: "250+", caption: "stores worldwide" },
      { value: "10–20", caption: "manual entries per product", accent: true },
      { from: "Hours", to: "minutes", caption: "to enrich one product", phrase: true },
    ],
    before:
      "Every market had its own SKU, so the same product was entered again and again. Some products never went online, because the ERP had nowhere to hold what the storefront needed.",
    after:
      "The product is enriched once and every market version inherits it. Blocked products are live, and a new market no longer multiplies the work.",
    href: "https://scandiweb.com/blog/pimcore-enrichment-platform-for-a-global-chocolatier/",
  },
  {
    heading: "81,000 products, one source of truth",
    accentFrom: 7,
    subline: "Rocket Industrial, US packaging distributor, B2B",
    figures: [
      { from: "70,000", to: "81,000", caption: "complete records", accent: true },
      {
        value: "Duplicates merged",
        caption: "across ERP and the storefront",
        phrase: true,
      },
      { value: "Manual data entry cut", phrase: true },
    ],
    before:
      "Tens of thousands of SKUs spread across an ERP and Magento 2, with duplicate records, unreliable SKUs, and broken parent and child relationships.",
    after:
      "One clean catalog, with a controlled workflow that decides what gets published to the storefront.",
    href: "https://scandiweb.com/blog/case-study-centralizing-80k-products-with-pimcore/",
  },
];

function Figure({ fig }: { fig: Fig }) {
  // A pair of long figures needs a smaller size than a single one, or
  // "70,000 to 81,000" runs past the edge of its cell.
  const size = fig.phrase
    ? "text-[22px] md:text-[30px] tracking-[-0.02em]"
    : fig.from
      ? "text-[26px] md:text-[36px] tracking-[-0.02em]"
      : "text-[36px] md:text-[52px] tracking-[-0.03em]";
  const color = fig.accent ? undefined : "#ffffff";

  return (
    <div className="bg-[var(--sw-black)] px-6 py-7 md:px-8 md:py-9">
      <div
        className={`flex flex-wrap items-end gap-x-2.5 gap-y-1 min-w-0 min-h-[36px] md:min-h-[52px] font-head font-bold leading-none tabular-nums ${size}`}
        style={{ color: fig.accent ? "var(--sw-mint)" : color }}
      >
        {fig.from ? (
          <>
            {fig.from}
            <ArrowRight
              className="h-5 w-5 md:h-7 md:w-7 shrink-0 mb-0.5 md:mb-1"
              strokeWidth={2}
              style={{ color: "var(--sw-mint)" }}
              aria-label="to"
            />
            {fig.to}
          </>
        ) : (
          fig.value
        )}
      </div>
      {fig.caption ? (
        <div className="mt-3 text-white/65 text-[14px] md:text-[15px] leading-snug">
          {fig.caption}
        </div>
      ) : null}
    </div>
  );
}

function Card({ study }: { study: Study }) {
  const head = study.heading;
  return (
    <div>
      <Reveal>
        <h3 className="font-head text-white text-[22px] sm:text-[26px] md:text-[32px] leading-[1.1] tracking-[-0.01em]">
          {head.slice(0, study.accentFrom)}
          <span style={{ color: "var(--sw-mint)" }}>
            {head.slice(study.accentFrom)}
          </span>
        </h3>
      </Reveal>

      <Reveal delay={0.06}>
        <p className="mt-3 text-white/65 text-[15px] md:text-[17px] leading-relaxed">
          {study.subline}
        </p>
      </Reveal>

      <Reveal delay={0.12}>
        <div className="mt-7 md:mt-8 grid gap-px overflow-hidden rounded-[4px] border border-white/12 bg-white/12 sm:grid-cols-3">
          {study.figures.map((f) => (
            <Figure key={f.value ?? `${f.from}-${f.to}`} fig={f} />
          ))}
        </div>
      </Reveal>

      <div className="mt-3 md:mt-4 grid gap-3 md:gap-4 lg:grid-cols-2">
        <Reveal delay={0.18} className="h-full">
          <div className="h-full rounded-[4px] border border-white/12 bg-white/[0.03] p-6 md:p-8">
            <div className="label-code text-white/45">Before</div>
            <p className="mt-3 text-white/75 text-[15px] md:text-[17px] leading-relaxed">
              {study.before}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.24} className="h-full">
          <div className="h-full rounded-[4px] border border-[var(--sw-mint)]/35 bg-[var(--sw-mint)]/[0.06] p-6 md:p-8">
            <div className="label-code" style={{ color: "var(--sw-mint)" }}>
              After
            </div>
            <p className="mt-3 text-white/85 text-[15px] md:text-[17px] leading-relaxed">
              {study.after}
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <a
          href={study.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 md:mt-7 inline-flex items-center gap-2 rounded-[4px] border border-white/25 px-5 py-3 font-head text-[14px] md:text-[15px] text-white transition-colors duration-300 hover:border-[var(--sw-mint)] hover:text-[var(--sw-mint)]"
        >
          Read the full case study
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </Reveal>
    </div>
  );
}

export function CaseStudy() {
  return (
    <section
      id="from-real-projects"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[68rem]">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-white/60">
              <span className="text-white/55">6</span>
              <span className="h-px w-6 bg-white/15" />
              <span>From real projects</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              What changed for{" "}
              <span style={{ color: "var(--sw-mint)" }}>catalogs like yours</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 md:mt-16 flex flex-col gap-14 md:gap-20">
          {STUDIES.map((s) => (
            <Card key={s.heading} study={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
