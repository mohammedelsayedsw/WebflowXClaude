"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

const TRUST = [
  "Thirty minutes, no commitment",
  "We tell you if it is not a fit",
  "Platform-neutral advice",
  "Analytics team, not a salesperson",
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
            <h2 className="font-head max-w-[18ch] text-[34px] leading-[1.05] text-white md:text-[48px] lg:text-[56px]">
              See what a forecast would change in{" "}
              <span className="text-[var(--sw-mint)]">your buying</span>
            </h2>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-white/80 md:text-[17px]">
              Thirty minutes with our analytics team. We look at how you buy
              today, where margin is leaking, and tell you honestly whether this
              fits.
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
                  Thirty minutes with our analytics team, on how you buy and
                  your numbers.
                </p>
              </div>
              <HubSpotForm
                portalId="25724996"
                formId="1f8bfb0f-7656-4abc-8648-686ea497f155"
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
