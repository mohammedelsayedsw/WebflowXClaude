"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { TrustLogos } from "@/sections/ac-open-source/TrustLogos";
import { assetUrl } from "@/lib/assets";

const A = "/magento/security-audit";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative pt-28 md:pt-40 pb-10 md:pb-12 overflow-hidden"
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
            <div className="label-code text-white/55 mb-5">
              free security check · confidential
            </div>
            <h2 className="font-head text-white text-[32px] md:text-[48px] lg:text-[58px] leading-[1.05] max-w-[18ch]">
              Find out what an attacker can{" "}
              <span className="text-[var(--sw-mint)]">reach</span>.
            </h2>
            <p className="mt-6 text-white/80 max-w-[52ch] text-[16px] md:text-[17px] leading-relaxed">
              Send your domain. We surface the highest-risk exposures on your
              store in 48 hours, confidential, with no live changes and no admin
              access. Then you decide whether to run the full audit.
            </p>

            <div className="mt-10 rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-6 md:p-7">
              <blockquote className="font-head text-white text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.005em]">
                &ldquo;We show you what a breach would cost you,{" "}
                <span className="text-[var(--sw-mint)]">
                  before it happens
                </span>
                .&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-4">
                <img
                  src={assetUrl(`${A}/team/aigars.png`)}
                  alt="Aigars Pavlovics"
                  className="h-14 w-14 rounded-full object-cover shrink-0"
                  style={{ border: "1px solid rgba(230,231,239,0.2)" }}
                />
                <div>
                  <div className="text-white text-[15px] font-medium">
                    Aigars Pavlovics
                  </div>
                  <div className="label-code text-white/55 mt-0.5">
                    Co-Founder, scandiweb
                  </div>
                </div>
              </div>
            </div>

            <ul className="mt-10 space-y-2.5 text-[13px] md:text-[14px] text-white/75">
              {[
                "48-hour turnaround on the free check",
                "Confidential, no live changes, no admin access",
                "Senior security engineers, not a scanner",
                "Findings ranked by real-world risk",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--sw-mint)] shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <HubSpotForm
              portalId="25724996"
              formId="097a15ac-beeb-4993-ab0f-21fdcd398119"
              region="eu1"
            />
            <p className="label-code text-white/45 mt-3 px-1">
              Confidential. We reply within 48 hours.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-12 md:mt-16">
        <TrustLogos />
      </div>
    </section>
  );
}
