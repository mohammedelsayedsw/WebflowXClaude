"use client";

import { Reveal } from "@/components/primitives/Reveal";

// Non-breaking space to keep short trailing words on the same line.
const NB = String.fromCharCode(160);

const flow: { label: string; highlight?: boolean }[] = [
  { label: "Incoming document" },
  { label: "Data pulled out" },
  { label: "Matched to systems" },
  { label: "Exception found", highlight: true },
  { label: "Operator corrects it", highlight: true },
  { label: "The system learns" },
  { label: "Final action or" + NB + "alert" },
];

export function CaseStudy() {
  return (
    <section
      id="real-workflow"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div aria-hidden className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="max-w-[60rem]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-white/60">
              <span className="text-white/55">4</span>
              <span className="h-px w-6 bg-white/15" />
              <span>The live demo</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mt-6 lg:whitespace-nowrap">
              See a real workflow,{" "}
              <span style={{ color: "var(--sw-mint)" }}>end to end</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/75 text-[16px] md:text-[18px] leading-relaxed">
              We will follow one real use case, document reconciliation, from
              the moment a document arrives to the moment it exports to your
              ERP, and show how OperaLayer helps your warehouse and accounting
              teams handle it.
            </p>
          </Reveal>
        </div>

        {/* end-to-end flow — full-width process row */}
        <Reveal delay={0.15}>
          <ol className="mt-9 md:mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
            {flow.map((step, i) => (
              <li
                key={step.label}
                className={
                  "flex h-full min-h-[104px] flex-col justify-between gap-3 rounded-[4px] border px-2.5 py-3 " +
                  (step.highlight
                    ? "border-[var(--sw-mint)]/50 bg-[var(--sw-mint)]/[0.08]"
                    : "border-white/12 bg-white/[0.03]")
                }
              >
                <span
                  className={
                    "font-head text-[13px] tabular-nums leading-none " +
                    (step.highlight ? "text-[var(--sw-mint)]" : "text-white/40")
                  }
                >
                  {i + 1}
                </span>
                <span
                  className={
                    "font-head text-[13px] md:text-[13.5px] leading-snug " +
                    (step.highlight ? "text-[var(--sw-mint)]" : "text-white/85")
                  }
                >
                  {step.label}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 md:mt-10 text-white/75 text-[16px] md:text-[18px] leading-relaxed">
            This is the first use case we are rolling out. More follow in the
            weeks after.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
