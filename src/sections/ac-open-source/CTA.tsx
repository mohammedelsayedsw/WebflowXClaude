"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

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
            <div className="label-code text-white/55 mb-5">
              free check · no commitment
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[20ch]">
              Start your move.{" "}
              <span className="text-[var(--sw-mint)]">
                Same platform, no license fee
              </span>
              .
            </h2>
            <p className="mt-6 text-white/80 max-w-[52ch] text-[16px] md:text-[17px] leading-relaxed">
              Tell us your store and your objective. We come back with a
              migration check: what breaks, what carries over, what it costs,
              and your license saving in writing. If the move does not make
              sense for you, we will say so.
            </p>

            <div className="mt-10 rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-6 md:p-7">
              <blockquote className="font-head text-white text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.005em]">
                &ldquo;Same platform. No license fee. You keep what you built and{" "}
                <span className="text-[var(--sw-mint)]">stop renting it</span>
                .&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="h-px w-6 bg-white/30" />
                <span className="text-white/75 text-[13px]">
                  scandiweb, Adobe Commerce migration specialists
                </span>
              </div>
            </div>

            <ul className="mt-10 space-y-2.5 text-[13px] md:text-[14px] text-white/75">
              {[
                "We reply within one business day",
                "Free check, no commitment, no pitch deck",
                "Your store details stay confidential",
                "If the move does not pay off, we tell you",
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
              We respond within one business day.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
