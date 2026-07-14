"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { SignalBars } from "./motifs";

/** Spokesperson slot - deliberately unfinished. No name is invented. */
function SpokespersonTodo() {
  return (
    <div
      className="mt-10 rounded-[4px] p-6 md:p-7"
      style={{
        border: "1px dashed rgba(110,247,110,0.45)",
        background: "rgba(110,247,110,0.04)",
      }}
    >
      <span className="label-code text-[var(--sw-mint)]">SPOKESPERSON · TODO</span>
      <p className="mt-3 text-[14px] leading-relaxed text-white/60">
        Placeholder. A named spokesperson and quote go here once confirmed. No
        name or quote is shown until then.
      </p>
      <div className="mt-5 flex items-center gap-4 border-t border-white/10 pt-4">
        <div className="h-11 w-11 shrink-0 rounded-full border border-dashed border-white/25 bg-white/[0.03]" />
        <div>
          <div className="h-3 w-32 rounded-[2px] bg-white/10" />
          <div className="mt-2 h-2.5 w-40 rounded-[2px] bg-white/[0.06]" />
        </div>
      </div>
    </div>
  );
}

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
          <Reveal>
            <div className="mb-5 flex items-center gap-2.5">
              <SignalBars tone="dark" />
              <span className="label-code text-[var(--sw-mint)]">SEE IF IT FITS</span>
            </div>
            <h2 className="font-head max-w-[18ch] text-[34px] leading-[1.05] text-white md:text-[52px] lg:text-[64px]">
              See if the accelerator{" "}
              <span className="text-[var(--sw-mint)]">fits your systems</span>
            </h2>
            <p className="mt-6 max-w-[52ch] text-[16px] leading-relaxed text-white/80 md:text-[17px]">
              Thirty minutes. We map your stack, find the workflow that costs you
              the most, and tell you honestly whether the accelerator fits. If it
              does not, we will say so.
            </p>

            <SpokespersonTodo />

            <ul className="mt-10 space-y-2.5 text-[13px] text-white/75 md:text-[14px]">
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
            <p className="label-code mt-3 px-1 text-white/45">
              We respond within one business day
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
