"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

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
              See if this accelerator{" "}
              <span className="text-[var(--sw-mint)]">fits your business</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-[52ch] text-[16px] md:text-[17px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Thirty minutes. We will tell you if it fits.
            </p>

            <div className="mt-10 rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-6 md:p-7">
              <blockquote className="font-head text-white text-[20px] md:text-[24px] leading-[1.25] tracking-[-0.005em]">
                &ldquo;Lorem ipsum dolor sit amet.{" "}
                <span className="text-[var(--sw-mint)]">We already know your space.</span>{" "}
                Configure the proven stack in 8 weeks, not 18 months.&rdquo;
              </blockquote>
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-4">
                <div className="h-11 w-11 rounded-full bg-white/10 shrink-0 flex items-center justify-center border border-white/20">
                  <span className="font-head text-white text-[14px]">JL</span>
                </div>
                <div>
                  <div className="text-white text-[14px] font-medium">Jane Lorem</div>
                  <div className="label-code text-white/55 mt-0.5">CMO · Lorem Corp</div>
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
            <div
              className="rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-8 md:p-10"
            >
              <p className="font-head text-white text-[20px] md:text-[22px] leading-[1.3] mb-8">
                Book a 30-minute fit assessment
              </p>
              <div className="space-y-4">
                <div>
                  <label className="label-code text-white/55 block mb-1.5">First name</label>
                  <div className="rounded-[2px] border border-white/15 bg-white/[0.04] h-10 px-3 text-white/40 text-[14px] flex items-center">
                    Lorem…
                  </div>
                </div>
                <div>
                  <label className="label-code text-white/55 block mb-1.5">Work email</label>
                  <div className="rounded-[2px] border border-white/15 bg-white/[0.04] h-10 px-3 text-white/40 text-[14px] flex items-center">
                    ipsum@example.com
                  </div>
                </div>
                <div>
                  <label className="label-code text-white/55 block mb-1.5">Company</label>
                  <div className="rounded-[2px] border border-white/15 bg-white/[0.04] h-10 px-3 text-white/40 text-[14px] flex items-center">
                    Lorem Corp…
                  </div>
                </div>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 rounded-[2px] bg-[var(--sw-mint)] px-5 py-3 font-head text-[var(--sw-black)] text-[14px] font-semibold opacity-60 cursor-not-allowed">
                    Submit — demo placeholder
                  </div>
                </div>
              </div>
            </div>
            <p className="label-code text-white/45 mt-3 px-1">
              Demo page — form is a visual placeholder only.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
