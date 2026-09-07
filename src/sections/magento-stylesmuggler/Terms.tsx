"use client";

import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { scrollToForm } from "./scrollToForm";

const ROWS: { label: string; value: string }[] = [
  {
    label: "Effort",
    value: "8 to 16 hours combined, across project management, development, and testing",
  },
  { label: "Billing", value: "Only actual time spent" },
  { label: "Rates", value: "Standard rates, weekend work included" },
  { label: "Limit", value: "Anything beyond 24 hours is agreed with you first" },
  {
    label: "Next update",
    value:
      "Within 24 to 48 hours from your delivery team: what we found, what protection is in place, what comes next",
  },
];

export function Terms() {
  return (
    <section id="terms" className="relative z-10 py-24 md:py-32">
      <div className="wrap">
        <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 md:gap-16 items-start">
          <Reveal>
            <div className="label-code text-white/45">Effort and terms</div>
            <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[12ch]">
              What it costs
            </h2>
            <p className="mt-6 text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[42ch]">
              The same terms for every client, and for any Magento store that
              asks for the check.
            </p>
            <div className="mt-8 hidden md:block">
              <a href="#cta" onClick={scrollToForm} className={btnPrimary}>
                Request an emergency check
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <dl className="border-t border-white/10">
            {ROWS.map((r, i) => (
              <Reveal key={r.label} delay={0.1 + i * 0.07}>
                <div className="grid grid-cols-[110px_1fr] md:grid-cols-[150px_1fr] gap-x-6 py-6 md:py-7 border-b border-white/10">
                  <dt className="label-code text-white/45 pt-1.5">{r.label}</dt>
                  <dd className="font-head font-semibold text-white text-[18px] md:text-[22px] leading-[1.25] tracking-[-0.005em]">
                    {r.value}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
