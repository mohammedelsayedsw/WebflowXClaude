"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { assetUrl } from "@/lib/assets";
import { SectionIcon } from "./motifs";

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
            <div className="flex items-center gap-2.5 mb-5">
              <SectionIcon name="telescope" tone="dark" />
              <span className="label-code text-[var(--sw-mint)]">SEE IF IT FITS</span>
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[18ch]">
              See if the accelerator{" "}
              <span className="text-[var(--sw-mint)]">fits your business</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-[52ch] text-[16px] md:text-[17px] leading-relaxed">
              Thirty minutes. We look at how your store runs, find where you
              could save time and sell more, and tell you whether the
              accelerator fits. If it does not, we will say so.
            </p>

            <div className="mt-10 rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-6 md:p-7">
              <blockquote className="font-head text-white text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.005em]">
                &ldquo;You don&apos;t pay us to learn STEM toy retail. We already
                did. Supplier feeds, marketplaces, subscriptions –{" "}
                <span className="text-[var(--sw-mint)]">
                  configure the proven modules to your stack in 12 weeks, not 18
                  months
                </span>
                .&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/accelerator/school-uniform/team/aigars.png")}
                  alt="Aigars Pavlovics"
                  className="h-11 w-11 rounded-full object-cover shrink-0"
                  style={{ border: "1px solid rgba(230,231,239,0.2)" }}
                />
                <div>
                  <div className="text-white text-[14px] font-medium">Aigars Pavlovics</div>
                  <div className="label-code text-white/55 mt-0.5">Executive Board · scandiweb</div>
                </div>
              </div>
            </div>

            <ul className="mt-10 space-y-2.5 text-[13px] md:text-[14px] text-white/75">
              {[
                "Response within one business day",
                "30 minutes · fit assessment, no sales pitch",
                "Full reference case study on request",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--sw-mint)]" />
                  {t}
                </li>
              ))}
            </ul>

          </Reveal>

          <Reveal delay={0.15}>
            {/* Reuses the shared accelerator fit-assessment form (same as sibling pages) */}
            <HubSpotForm
              portalId="25724996"
              formId="3eabce3f-c4d9-41d7-8d66-59080f1c09ed"
              region="eu1"
            />
            <p className="label-code text-white/45 mt-3 px-1">
              We respond within one business day
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
