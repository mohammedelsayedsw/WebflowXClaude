"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

/**
 * One published scandiweb case study, led by its figures. Every number is
 * quoted exactly as the case study states it.
 *
 * The section takes the same gradient and card treatment as the CDP results
 * section, without its product shot.
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
    ? "text-[22px] md:text-[26px] tracking-[-0.02em]"
    : fig.from
      ? "text-[24px] md:text-[30px] tracking-[-0.02em]"
      : "text-[32px] md:text-[38px] tracking-[-0.02em]";
  // green carries the positive figures, orange the one that is a cost
  const color =
    fig.tone === "negative" ? "var(--sw-orange)" : "var(--sw-mint)";

  return (
    <div className="h-full rounded-[4px] border border-white/12 bg-white/[0.03] p-6 md:p-7">
      <div
        className={`flex flex-wrap items-end gap-x-2.5 gap-y-1 min-w-0 min-h-[32px] md:min-h-[38px] font-head leading-none tabular-nums ${size}`}
        style={{ color }}
      >
        {fig.from ? (
          <>
            {fig.from}
            <ArrowRight
              className="h-4 w-4 md:h-5 md:w-5 shrink-0 mb-0.5"
              strokeWidth={2}
              aria-label="to"
            />
            {fig.to}
          </>
        ) : (
          fig.value
        )}
      </div>
      <div className="mt-3 text-white/75 text-[14px] md:text-[15px] leading-snug">
        {fig.caption}
      </div>
    </div>
  );
}

/**
 * Who built it, on what, for whom. Pimcore and Läderach are supplied as solid
 * colour artwork, so they reverse cleanly; the scandiweb mark is already white.
 */
function CaseLockup() {
  const brands: { src: string; alt: string; h: number; knockOut?: boolean }[] = [
    {
      src: "/webinars/pimcore/logo-pimcore.webp",
      alt: "Pimcore",
      h: 20,
      knockOut: true,
    },
    { src: "/webinars/pimcore/logo-scandiweb-white.webp", alt: "scandiweb", h: 17 },
    {
      src: "/webinars/pimcore/logo-laderach.webp",
      alt: "Läderach",
      h: 22,
      knockOut: true,
    },
  ];

  return (
    <div className="inline-flex items-center gap-3 md:gap-4">
      {brands.map((b, i) => (
        <span key={b.alt} className="inline-flex items-center gap-3 md:gap-4">
          {i > 0 ? (
            <span
              aria-hidden
              className="font-head text-white/35 text-[13px] leading-none"
            >
              &times;
            </span>
          ) : null}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assetUrl(b.src)}
            alt={b.alt}
            className="w-auto opacity-90"
            style={{
              height: `${b.h}px`,
              filter: b.knockOut ? "brightness(0) invert(1)" : undefined,
            }}
          />
        </span>
      ))}
    </div>
  );
}

export function CaseStudy() {
  return (
    <section
      id="from-real-projects"
      className="relative py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      {/* The same gradient the CDP results section uses, highlights placed so
          it does not read as a repeat of the hero. No product shot behind it. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1000px 700px at 16% 28%, #303c96 0%, transparent 58%)," +
            "radial-gradient(720px 600px at 92% 12%, #060917 0%, transparent 55%)," +
            "radial-gradient(1200px 820px at 74% 86%, #223072 0%, transparent 50%)," +
            "radial-gradient(1500px 1000px at 56% 46%, #171d55 0%, #131843 40%, #0e1130 72%, #090c22 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-backdrop opacity-30"
      />

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
          <div className="mt-7 md:mt-8 grid gap-4 sm:grid-cols-3">
            {FIGURES.map((f) => (
              <Figure key={f.value ?? `${f.from}-${f.to}`} fig={f} />
            ))}
          </div>
        </Reveal>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
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
          <div className="mt-7 md:mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href={CASE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-[4px] border border-white/25 px-5 py-3 font-head text-[14px] md:text-[15px] text-white transition-colors duration-300 hover:border-[var(--sw-mint)] hover:text-[var(--sw-mint)]"
            >
              Read the full case study
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <CaseLockup />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
