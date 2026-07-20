"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

// Scannable facts for the right column. Reworded from the story, kept short.
const facts: { label: string; body: string }[] = [
  {
    label: "Before",
    body:
      "Warehouse and accounting matched invoices, delivery notes, and waybills against purchase orders by hand.",
  },
  {
    label: "After",
    body:
      "The module matches them automatically, on top of the systems they already ran.",
  },
  {
    label: "Time to build",
    body: "72 hours. No system replaced.",
  },
];

export function CaseStudy() {
  return (
    <section
      id="one-real-example"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:items-start">
          {/* LEFT · the story */}
          <div className="max-w-[640px]">
            <Reveal>
              <SectionLabel index="2">One real example</SectionLabel>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.08] tracking-[-0.01em] mt-6 max-w-[22ch]">
                Matching documents by hand,{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  every shipment, every day
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                A distribution company&apos;s warehouse and accounting teams
                matched invoices, delivery notes, and transport waybills against
                purchase orders by hand. Every shipment, every day. We built the
                reconciliation module on OperaLayer, on top of the systems they
                already ran.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                The part that surprised us: it gets more accurate the longer it
                runs. Every correction an operator makes feeds back, so the same
                mistake stops coming back.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                Months in, the warehouse manager who used to do this by hand is
                smiling.
              </p>
            </Reveal>
          </div>

          {/* RIGHT · scannable facts, vertical boxes with a mint shining line */}
          <div className="flex flex-col gap-4">
            {facts.map((f, i) => (
              <Reveal key={f.label} delay={0.15 + i * 0.07}>
                <div className="relative rounded-[4px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                  <span className="absolute left-5 top-0 h-px w-8 bg-[var(--sw-mint)]/70" />
                  <div className="label-code text-white/50 text-[10px] mb-2">
                    {f.label}
                  </div>
                  <p className="text-white/85 text-[15px] md:text-[16px] leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
