"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

export function CTA() {
  const points = [
    "Shopify and Magento / Adobe Commerce",
    "Button, two-step flow, confirmation, and legal pages",
    "We respond within one business day",
  ];
  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 overflow-hidden border-t border-white/10"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 80% 80%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1200px 800px at 50% 50%, #1a2060 0%, #141a48 40%, #10132c 80%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <div className="label-code text-white/55 mb-5">get compliant</div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[60px] leading-[1.04] max-w-[16ch]">
              Get your{" "}
              <span className="text-[var(--sw-mint)]">withdrawal button</span>{" "}
              live.
            </h2>
            <p className="mt-6 text-white/80 max-w-[50ch] text-[16px] md:text-[17px] leading-relaxed">
              Tell us your platform and where your store is today. We will scope
              the work, give you a timeline, and get you compliant with § 356a
              BGB. The rule is already in force, and stores without a compliant
              button are exposed to Abmahnungen, the formal warning letters that
              competitors and consumer-protection groups can send.
            </p>

            <ul className="mt-10 space-y-2.5 text-[13px] md:text-[14px] text-white/80">
              {points.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--sw-mint)] shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <HubSpotForm
              portalId="25724996"
              formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6"
              region="eu1"
            />
            <p className="label-code text-white/45 mt-3 px-1">
              We respond within one business day.
            </p>
            <p className="text-[11px] text-white/35 mt-2 px-1 leading-relaxed">
              This is not legal advice. Final sign-off on your cancellation
              policy stays with your counsel.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
