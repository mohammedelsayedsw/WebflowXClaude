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
            <div className="label-code text-[var(--sw-mint)] mb-4">Get your plan</div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[18ch]">
              Send us your stack.{" "}
              <span className="text-[var(--sw-mint)]">We&apos;ll send back a concrete app idea.</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-[52ch] text-[16px] md:text-[17px] leading-relaxed">
              No generic sales call. Within 48 hours you get a specific app concept, suggested package, rough timeline, and the data access we&apos;d need from your systems.
            </p>

            <div className="mt-10 rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-6 md:p-7">
              <blockquote className="font-head text-white text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.005em]">
                &ldquo;You don&apos;t need a massive AI transformation program.{" "}
                <span className="text-[var(--sw-mint)]">Start with one workflow your customers already ask for every day.</span>{" "}
                Connect it to ChatGPT with a safe, tested MCP App. Scale from there.&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-white/10">
                <div className="text-white text-[14px] font-medium">scandiweb · ChatGPT App practice</div>
                <div className="label-code text-white/55 mt-0.5">22 years in eCommerce · Adobe Commerce Gold · Hyvä Platinum</div>
              </div>
            </div>

            <ul className="mt-10 space-y-2.5 text-[13px] md:text-[14px] text-white/75">
              {[
                "Response within one business day",
                "48 hours · concrete app concept + package + timeline",
                "Workflow fit assessment, no sales pitch",
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
              formId="9fd53a40-251e-4440-9814-9b66e0d5fd2f"
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
