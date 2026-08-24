"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { Lockup } from "./Lockup";

/**
 * TODO: insert the HubSpot formId for this webinar, then replace the placeholder
 * below with <HubSpotForm portalId="25724996" formId="..." region="eu1"
 * submitText="Save your seat" />. The placeholder keeps the layout honest in the
 * meantime and must not go live as the registration path.
 */
function FormPlaceholder() {
  const fields = ["First name", "Last name", "Work email", "Company"];
  return (
    <div className="rounded-[4px] border border-white/15 bg-white/[0.04] p-6 md:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        {fields.map((f) => (
          <label key={f} className="flex flex-col gap-2">
            <span className="font-head text-[11px] font-medium uppercase tracking-[0.05em] text-white/55">
              {f}
            </span>
            <span
              aria-hidden
              className="h-11 rounded-[2px] border border-white/15 bg-white/[0.05]"
            />
          </label>
        ))}
      </div>
      <div className="mt-6 h-12 rounded-[2px] border border-[var(--sw-beige)]/60 bg-transparent flex items-center justify-center font-head font-semibold text-[17px] text-[var(--sw-beige)]/70">
        Save your seat
      </div>
      <p className="mt-4 label-code text-[var(--sw-orange)]">
        Placeholder form, HubSpot form ID pending
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
            <div className="inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 mb-6">
              <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
                {/* TODO: replace [TIME TBC] once the slot is confirmed */}
                Free webinar &middot; September 8 &middot; [Time TBC] &middot; 60 minutes
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-head text-white text-[26px] sm:text-[34px] md:text-[46px] lg:text-[52px] leading-[1.06] tracking-[-0.01em] max-w-[22ch] mx-auto">
              See what your product data is costing you, and{" "}
              <span style={{ color: "var(--sw-mint)" }}>what fixes it</span>
            </h2>
          </Reveal>

          {/* TODO: add the urgency line "Registration closes on September 7"
              here, but only once that is true at publish time */}
          <Reveal delay={0.14}>
            <p className="mt-6 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[56ch] mx-auto">
              One hour, four live demos, and a free PIM prototype built on your
              own catalog.
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
              Free. The recording goes to everyone who registers.
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
