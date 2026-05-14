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
              30 minutes · no demo, no pitch
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[20ch]">
              Bring your last invoice.{" "}
              <span className="text-[var(--sw-mint)]">We&apos;ll bring the math</span>
              .
            </h2>
            <p className="mt-6 text-white/80 max-w-[52ch] text-[16px] md:text-[17px] leading-relaxed">
              Thirty minutes. You share your current Adobe Commerce support
              spend &mdash; rate, team shape, monthly hours. We run it against
              the three tiers and tell you what the math looks like. If
              you&apos;re already in a good place, we&apos;ll say so.
            </p>

            <div className="mt-10 rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-6 md:p-7">
              <blockquote className="font-head text-white text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.005em]">
                &ldquo;We&apos;d rather lose a 30-minute call than win a
                customer who isn&apos;t actually{" "}
                <span className="text-[var(--sw-mint)]">
                  saving money
                </span>
                .&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
                <span className="h-px w-6 bg-white/30" />
                <span className="text-white/75 text-[13px]">
                  scandiweb executive board
                </span>
              </div>
            </div>

            <ul className="mt-10 space-y-2.5 text-[13px] md:text-[14px] text-white/75">
              {[
                "Response within one business day",
                "30 minutes · math comparison, no sales deck",
                "Your invoice stays confidential",
                "If you&apos;re already optimized, we tell you",
              ].map((t, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--sw-mint)] shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: t }} />
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <HubSpotForm
              portalId="25724996"
              formId="a2a9bbba-140b-49a2-b20c-8990b1d85a41"
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
