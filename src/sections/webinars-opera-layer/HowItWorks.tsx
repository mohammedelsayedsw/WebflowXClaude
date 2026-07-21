"use client";

import { Camera, ScanLine, GitCompareArrows, CheckCheck, Upload, Plus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const steps: { icon: typeof Camera; n: string; title: string; body: string }[] = [
  {
    icon: Camera,
    n: "1",
    title: "Capture",
    body: "Upload a PDF or snap a photo on a phone.",
  },
  {
    icon: ScanLine,
    n: "2",
    title: "AI extract",
    body: "Reads every line, whatever the layout or language.",
  },
  {
    icon: GitCompareArrows,
    n: "3",
    title: "Match",
    body: "Lines matched to your purchase order.",
  },
  {
    icon: CheckCheck,
    n: "4",
    title: "Review",
    body: "An operator confirms, and anything that does not match is flagged.",
  },
  {
    icon: Upload,
    n: "5",
    title: "Export",
    body: "Posted back to your ERP.",
  },
];

const cards: { title: string; body: string }[] = [
  {
    title: "When things do not match",
    body: "Quantity gaps, price differences, and pack mismatches like boxes against pieces are flagged before anything posts. Reviewers only see the exceptions.",
  },
  {
    title: "It learns your suppliers",
    body: "It picks up each supplier's item codes and pack conversions, and which lines are freight rather than product. No rules to write by hand.",
  },
  {
    title: "It connects to your ERP",
    body: "The connector is swappable, so it is not tied to one system. Connecting yours usually takes a few days to two weeks, depending on how readily it can share the data.",
  },
  {
    title: "Nothing posts by accident",
    body: "Nothing exports until a person confirms, and every confirm, export, and override is recorded. The AI provider is your choice, so you are not locked to one vendor.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[52rem]">
          <Reveal>
            <SectionLabel index="4">How it works</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mt-6">
              One pipeline, from the document to{" "}
              <span style={{ color: "var(--sw-mint)" }}>your ERP</span>
            </h2>
          </Reveal>
        </div>

        {/* five pipeline steps */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07} className="h-full">
              <li className="flex h-full flex-col rounded-[4px] border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/15 bg-white/[0.04] text-[var(--sw-mint)]"
                    aria-hidden
                  >
                    <s.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-head font-bold tabular-nums text-[26px] leading-none text-white/15">
                    {s.n}
                  </span>
                </div>
                <div className="font-head font-bold text-white text-[18px] leading-tight">
                  {s.title}
                </div>
                <p className="mt-2 text-white/70 text-[14px] leading-relaxed">
                  {s.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* pull quote */}
        <Reveal delay={0.1}>
          <blockquote className="mt-12 md:mt-16 border-l-2 border-[var(--sw-mint)] pl-6 max-w-[64ch]">
            <p className="font-head text-white text-[20px] md:text-[26px] leading-[1.3] tracking-[-0.005em]">
              The AI handles the easy 80%. People spend their time only on the
              20% that needs judgement.
            </p>
          </blockquote>
        </Reveal>

        {/* four detail cards as a single-column collapsed accordion */}
        <div className="mt-12 md:mt-16 flex flex-col gap-3">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <details className="group rounded-[4px] border border-white/10 bg-white/[0.03] transition-colors open:bg-white/[0.05]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-head text-white text-[18px] md:text-[20px] leading-tight">
                    {c.title}
                  </h3>
                  <Plus
                    className="h-5 w-5 shrink-0 text-[var(--sw-mint)] transition-transform duration-200 group-open:rotate-45"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </summary>
                <p className="-mt-1 max-w-[70ch] px-6 pb-6 text-white/70 text-[15px] md:text-[16px] leading-relaxed">
                  {c.body}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
