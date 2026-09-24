"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { Eyebrow } from "./Eyebrow";
import { Lockup } from "./Lockup";

/**
 * Registration.
 *
 * The HubSpot form is still to come, so this is the placeholder the house rules
 * call for rather than a form wired to a guessed id. It is laid out as the real
 * one will be, including the qualifying question, so swapping it is one import
 * and one component:
 *
 *   <HubSpotForm portalId="25724996" formId="<id>" region="eu1"
 *                submitText="Save your seat" />
 *
 * The fields are inert and not focusable, so nobody can type into something
 * that would go nowhere.
 */
/* TODO: insert HubSpot formId, then replace FormPlaceholder with <HubSpotForm>. */
const FIELDS = ["First name", "Last name", "Business email", "Company"];

function FormPlaceholder() {
  return (
    <div
      className="hubspot-form-wrapper rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-7 md:p-8"
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        aria-hidden
        className="flex flex-col gap-4"
      >
        {FIELDS.map((f) => (
          <div key={f}>
            <div className="label-code text-white/60 mb-2">{f}</div>
            <div className="h-11 rounded-[4px] border border-white/15 bg-white/[0.06]" />
          </div>
        ))}

        {/* The question that decides whether a registration is worth anything.
            Shown here so the placeholder cannot be mistaken for the finished
            form and shipped without it. */}
        <div className="mt-1">
          <div className="label-code text-white/60 mb-2">
            Does your company use an AS/400 (IBM i) system?
          </div>
          <div className="flex flex-wrap gap-2">
            {["Yes", "No", "Not sure"].map((o) => (
              <span
                key={o}
                className="rounded-[4px] border border-white/15 bg-white/[0.06] px-4 py-2 text-white/70 text-[14px]"
              >
                {o}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-2 h-12 rounded-[4px] border border-white/60 flex items-center justify-center font-head font-bold text-white text-[15px]">
          Save your seat
        </div>
      </div>

      <p className="mt-5 font-mono text-[12px] leading-relaxed text-[var(--sw-orange)]">
        [Placeholder. The HubSpot registration form goes here once the form ID
        is available.]
      </p>
    </div>
  );
}

export function CTA() {
  return (
    <section
      id="cta"
      className="relative py-24 md:py-36 overflow-hidden scroll-mt-20"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(800px 580px at 85% 82%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 mix-blend-overlay -z-10"
        style={{
          background:
            "radial-gradient(620px 900px at 28% 62%, rgba(7, 10, 30, 0.85), transparent 60%)," +
            "radial-gradient(540px 720px at 72% 28%, rgba(63, 74, 175, 0.22), transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      <div className="wrap relative">
        <div className="max-w-[860px] mx-auto text-center flex flex-col items-center">
          <Reveal>
            <Eyebrow className="mb-6" />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-head text-white text-[26px] sm:text-[34px] md:text-[46px] lg:text-[52px] leading-[1.06] tracking-[-0.01em] max-w-[20ch] mx-auto">
              See the AS/400 screen{" "}
              <span style={{ color: "var(--sw-mint)" }}>fill itself in</span>,
              live
            </h2>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[56ch] mx-auto">
              Watch the full demo and ask the founder about your own AS/400
              setup.
            </p>
          </Reveal>

          {/* w-full on the Reveal: it is a flex item under items-center, so
              without it the wrapper shrinks to the form's intrinsic width. */}
          <Reveal delay={0.2} className="w-full">
            <div className="mt-10 md:mt-12 w-full max-w-[560px] mx-auto text-left">
              <FormPlaceholder />
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <p className="mt-5 text-white/60 text-[13px] md:text-[14px] leading-relaxed">
              Can&apos;t join live? Register and we&apos;ll send you the
              recording.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-10 md:mt-12 flex justify-center">
              <Lockup />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
