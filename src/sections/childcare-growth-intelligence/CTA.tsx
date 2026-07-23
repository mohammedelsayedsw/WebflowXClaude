"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

const TRUST = [
  "Twenty minutes, no commitment",
  "We tell you if it is not a fit",
  "We do not lead with a platform migration",
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
              Start with the decision{" "}
              <span className="text-[var(--sw-mint)]">
                your data cannot support today
              </span>
            </h2>
            <p className="mt-6 max-w-[54ch] text-[16px] leading-relaxed text-white/80 md:text-[17px]">
              Tell us where occupancy, board reporting, or expansion planning is
              being held back by scattered data. In 20 minutes we will work out
              whether there is a real first use case, and what to assess next.
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

          {/* RIGHT · fit-call form */}
          <Reveal delay={0.1}>
            <div>
              <div className="mb-5">
                <h3 className="font-head text-[22px] leading-[1.15] text-white md:text-[26px]">
                  Book a 20-minute fit call
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/70 md:text-[15px]">
                  Twenty minutes with our data and analytics team, on your
                  occupancy, board reporting, or expansion planning.
                </p>
              </div>
              <HubSpotForm
                portalId="25724996"
                formId="c3741cd0-0ad7-4414-9ebe-dc2b5eddc74f"
                region="eu1"
                submitText="Book a 20-minute fit call"
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
