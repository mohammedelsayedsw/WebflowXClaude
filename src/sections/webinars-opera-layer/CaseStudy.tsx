"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

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
                Months in, the warehouse manager who used to do this by hand is
                smiling.
              </p>
            </Reveal>
          </div>

          {/* RIGHT · the surprising part, pulled out */}
          <Reveal delay={0.15}>
            <div
              className="rounded-[4px] p-6 sm:p-8"
              style={{
                background: "rgba(110,247,110,0.06)",
                border: "1px solid rgba(110,247,110,0.30)",
              }}
            >
              <div className="label-code text-[var(--sw-mint)] text-[10px] mb-4">
                The part that surprised us
              </div>
              <p className="font-head text-white text-[19px] md:text-[22px] leading-[1.3]">
                It gets more accurate the longer it runs.
              </p>
              <p className="mt-4 text-white/75 text-[15px] md:text-[16px] leading-relaxed">
                Every correction an operator makes feeds back, so the same
                mistake stops coming back.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
