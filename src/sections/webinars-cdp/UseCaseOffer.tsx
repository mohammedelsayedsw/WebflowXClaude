"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

/**
 * The offer that follows registration: a free use case mapped for one store.
 *
 * It sits after the CTA, so the two forms are next to each other and have to
 * read as two different asks rather than one form repeated. The webinar CTA is
 * centred on a single column; this one is a two column split with the offer on
 * the left and the form on the right, and the figures carry the orange the
 * rest of the page keeps for accents.
 */
const deliverables: { figure: string; label: string }[] = [
  { figure: "5", label: "Opportunities ranked for your store." },
  { figure: "1", label: "Customer journey mapped." },
  { figure: "1", label: "One-page action plan sent after the session." },
];

export function UseCaseOffer() {
  return (
    <section
      id="use-case"
      className="relative py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      {/* The CTA above ends on a near black centre, so this one lifts from the
          left instead. Same recipe, different highlights, so the two sections
          do not read as the same image twice. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(900px 640px at 12% 18%, #2b3585 0%, transparent 56%)," +
            "radial-gradient(760px 600px at 88% 78%, #070a1e 0%, transparent 54%)," +
            "radial-gradient(1400px 900px at 58% 44%, #171d55 0%, #131843 38%, #0e1130 72%, #090c22 100%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 -z-10 grid-backdrop opacity-30" />

      <div className="wrap relative">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          {/* LEFT - the offer */}
          <div>
            <Reveal>
              <div className="label-code mb-5 text-white/60">After the webinar</div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[16ch]">
                Your first{" "}
                <span style={{ color: "var(--sw-mint)" }}>AI personalization</span>{" "}
                use case.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-4 text-white/75 text-[18px] md:text-[22px] leading-snug">
                Mapped out, for free.
              </p>
            </Reveal>

            {/* The figures. A definition list, because each one is a value and
                the thing it counts, and a screen reader should read the pair
                together rather than "5" alone. */}
            <dl className="mt-10 md:mt-12 flex flex-col gap-6 md:gap-7">
              {deliverables.map((d, i) => (
                <Reveal key={d.label} delay={0.15 + i * 0.07}>
                  <div className="flex items-baseline gap-5 md:gap-6">
                    {/* Left aligned inside the fixed box, not right aligned:
                        right alignment left a third of the box empty in front
                        of every digit, so the figures sat indented from the
                        heading and the subtitle instead of starting on the
                        same line as them. The fixed width still keeps the
                        three labels aligned with each other. */}
                    <dt
                      className="font-head text-[40px] md:text-[52px] leading-none tracking-[-0.02em] shrink-0 w-[1.2em] text-left tabular-nums"
                      style={{ color: "var(--sw-mint)" }}
                    >
                      {d.figure}
                    </dt>
                    <dd className="text-white/85 text-[16px] md:text-[19px] leading-snug max-w-[24ch]">
                      {d.label}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>

          {/* RIGHT - the form */}
          <Reveal delay={0.2} className="w-full">
            <div className="w-full max-w-[560px] lg:ml-auto text-left">
              <HubSpotForm
                portalId="25724996"
                formId="60722779-c607-4e27-a5be-7e99feacbdae"
                region="eu1"
                submitText="Map my use case"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
