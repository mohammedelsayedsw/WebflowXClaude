"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Check } from "lucide-react";

const benefits = [
  {
    title: "An honest read on your stack",
    body: "Specifics, not a generic audit deck. What we noticed, what we'd try first, and why.",
  },
  {
    title: "A second opinion",
    body: "Stuck on something? Bring it. We've probably seen the same shape before.",
  },
  {
    title: "A look at how we'd handle it",
    body: "What we've shipped for someone facing your problem, or a candid no if we haven't seen it before.",
  },
  {
    title: "A short list of next moves",
    body: "What we'd try first, in order. No follow-up sequence unless you ask for one.",
  },
];

export function WhyMeet() {
  return (
    <section id="why-meet" className="bg-[var(--sw-black)] py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <SectionLabel index="04">Why grab a slot</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-6 max-w-[22ch]">
            What you&apos;ll{" "}
            <span style={{ color: "var(--sw-mint)" }}>walk away with</span>.
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid sm:grid-cols-2 gap-4 md:gap-6">
          {benefits.map((b, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="bg-white/[0.04] border border-white/10 rounded-[4px] p-6 md:p-8 h-full">
                <div className="flex items-start gap-4">
                  <div className="h-9 w-9 rounded-[2px] bg-[var(--sw-mint)]/15 text-[var(--sw-mint)] flex items-center justify-center shrink-0">
                    <Check className="h-5 w-5" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
                      {b.title}
                    </h3>
                    <p className="text-white/75 text-[15px] md:text-[17px] leading-relaxed mt-3">
                      {b.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
