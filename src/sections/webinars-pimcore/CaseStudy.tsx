"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

/**
 * One published scandiweb case study, led by its figures. Every number is
 * quoted exactly as the case study states it.
 *
 * TODO: the client logo can sit on the card once it is cleared for webinar use.
 */

type Fig = {
  value?: string;
  from?: string;
  to?: string;
  caption: string;
  /** phrases set smaller than figures, so the row keeps one optical weight */
  phrase?: boolean;
  /** green reads positive, orange reads negative, white stays neutral */
  tone?: "positive" | "negative";
};

const FIGURES: Fig[] = [
  { value: "250+", caption: "stores worldwide" },
  { value: "10–20", caption: "manual entries per product", tone: "negative" },
  {
    from: "Hours",
    to: "minutes",
    caption: "to enrich one product",
    phrase: true,
  },
];

const CASE_URL =
  "https://scandiweb.com/blog/pimcore-enrichment-platform-for-a-global-chocolatier/";

function Figure({ fig }: { fig: Fig }) {
  const size = fig.phrase
    ? "text-[22px] md:text-[30px] tracking-[-0.02em]"
    : "text-[36px] md:text-[52px] tracking-[-0.03em]";
  const color =
    fig.tone === "negative"
      ? "var(--sw-orange)"
      : fig.tone === "positive"
        ? "var(--sw-mint)"
        : "#ffffff";

  return (
    <div className="bg-[var(--sw-black)] px-6 py-7 md:px-8 md:py-9">
      <div
        className={`flex flex-wrap items-end gap-x-2.5 gap-y-1 min-w-0 min-h-[36px] md:min-h-[52px] font-head font-bold leading-none tabular-nums ${size}`}
        style={{ color }}
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
      <div className="mt-3 text-white/65 text-[14px] md:text-[15px] leading-snug">
        {fig.caption}
      </div>
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
              <span className="text-white/55">5</span>
              <span className="h-px w-6 bg-white/15" />
              <span>From real projects</span>
            </div>
          </Reveal>

          {/* the case is the only one in this section, so its heading is
              the section heading */}
          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              One product,{" "}
              <span style={{ color: "var(--sw-orange)" }}>
                up to 20 manual entries
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <p className="mt-3 text-white/65 text-[15px] md:text-[17px] leading-relaxed">
            Läderach, premium Swiss chocolate, 250+ stores worldwide
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-7 md:mt-8 grid gap-px overflow-hidden rounded-[4px] border border-white/12 bg-white/12 sm:grid-cols-3">
            {FIGURES.map((f) => (
              <Figure key={f.value ?? `${f.from}-${f.to}`} fig={f} />
            ))}
          </div>
        </Reveal>

        <div className="mt-3 md:mt-4 grid gap-3 md:gap-4 lg:grid-cols-2">
          <Reveal delay={0.22} className="h-full">
            <div className="h-full rounded-[4px] border border-white/12 bg-white/[0.03] p-6 md:p-8">
              <div className="label-code text-white/45">Before</div>
              <p className="mt-3 text-white/75 text-[15px] md:text-[17px] leading-relaxed">
                Every market had its own SKU, so the same product was entered
                again and again.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.26} className="h-full">
            <div className="h-full rounded-[4px] border border-[var(--sw-mint)]/35 bg-[var(--sw-mint)]/[0.06] p-6 md:p-8">
              <div className="label-code" style={{ color: "var(--sw-mint)" }}>
                After
              </div>
              <p className="mt-3 text-white/85 text-[15px] md:text-[17px] leading-relaxed">
                Enriched once, and every market version inherits it.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <a
            href={CASE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-7 md:mt-8 inline-flex items-center gap-2 rounded-[4px] border border-white/25 px-5 py-3 font-head text-[14px] md:text-[15px] text-white transition-colors duration-300 hover:border-[var(--sw-mint)] hover:text-[var(--sw-mint)]"
          >
            Read the full case study
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
