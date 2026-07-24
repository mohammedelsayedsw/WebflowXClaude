"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

const TRUST = [
  "A short call, no commitment",
  "We tell you if it is not a fit",
  "We start with your worst tracking gaps",
  "Data and analytics team, not a salesperson",
];

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-28 md:py-40"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 80% 80%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1200px 800px at 50% 50%, #1a2060 0%, #141a48 40%, #10132c 80%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* LEFT · the pitch */}
          <Reveal>
            <h2 className="font-head max-w-[20ch] text-[34px] leading-[1.05] text-white md:text-[46px] lg:text-[52px]">
              Start with the numbers you{" "}
              <span className="text-[var(--sw-mint)]">cannot trust today</span>
            </h2>
            <p className="mt-6 max-w-[54ch] text-[16px] leading-relaxed text-white/80 md:text-[17px]">
              Tell us where your reporting breaks, or where leadership is
              deciding on figures nobody is sure of. In a short call we will show
              you what it would take to get one set of numbers you can act on.
            </p>
            <ul className="mt-8 space-y-3 text-[14px] text-white/75 md:mt-10 md:text-[15px]">
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[var(--sw-mint)]" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* RIGHT · consultation form */}
          <Reveal delay={0.1}>
            <div>
              <div className="mb-5">
                <h3 className="font-head text-[22px] leading-[1.15] text-white md:text-[26px]">
                  Free analytics consultation
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/70 md:text-[15px]">
                  A short call with our data and analytics team, on your tracking
                  and your numbers.
                </p>
              </div>
              <HubSpotForm
                portalId="25724996"
                formId="86c9b6eb-74bc-45f0-981f-ff84bf7d9577"
                region="eu1"
                submitText="Book a free analytics consultation"
              />
              <div className="label-code mt-3 text-center text-white/45">
                We reply within one business day
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
