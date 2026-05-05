"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { assetUrl } from "@/lib/assets";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 overflow-hidden"
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
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[18ch]">
              See if the accelerator{" "}
              <span className="text-[var(--sw-mint)]">fits your business</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-[52ch] text-[16px] md:text-[17px] leading-relaxed">
              Thirty minutes. We map your stack, find your highest-friction workflow, and tell you whether the accelerator fits. If it does not, we will say so.
            </p>

            {/* Account-exec quote card */}
            <div className="mt-10 rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-6 md:p-7">
              <blockquote className="font-head text-white text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.005em]">
                &ldquo;You don’t pay us to learn school photography.{" "}
                <span className="text-[var(--sw-mint)]">We already did.</span>{" "}
                Configure the proven stack in 14 weeks, not 18 months.&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-4">
                <img
                  src={assetUrl("/pages/school-photography/team/kristaps.png")}
                  alt="Kristaps Gailitis"
                  className="h-11 w-11 rounded-full object-cover shrink-0"
                  style={{
                    border: "1px solid rgba(230,231,239,0.2)",
                  }}
                />
                <div>
                  <div className="text-white text-[14px] font-medium">Kristaps Gailitis</div>
                  <div className="label-code text-white/55 mt-0.5">CMO · scandiweb</div>
                </div>
              </div>
            </div>

            <ul className="mt-10 space-y-2.5 text-[13px] md:text-[14px] text-white/75">
              {[
                "Response within one business day",
                "30 minutes · fit assessment, no sales pitch",
                "Full reference case study on request",
                "If we are not the right fit, we will tell you",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--sw-mint)]" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <HubSpotForm
              portalId="25724996"
              formId="62416f23-1b8e-4390-bbda-83bfb28d0909"
              region="eu1"
            />
            <p className="label-code text-white/45 mt-3 px-1">
              We respond within one business day. No spam, no pressure.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
