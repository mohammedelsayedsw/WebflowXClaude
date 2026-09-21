"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { TrustLogos } from "./TrustLogos";

/** What the reader can expect once the form is in. No prices here. */
const steps = [
  "You send the form",
  "We invite you to an intro call",
  "We review your store for Magento 2.4.9",
  "You get a compatibility report and decide",
];

const stats: { n: string; label: string }[] = [
  { n: "2,100+", label: "eCommerce projects delivered" },
  { n: "894+", label: "Adobe certifications on the team" },
  { n: "700+", label: "Brands trust scandiweb" },
  { n: "$4B+", label: "Processed for clients yearly" },
];

/**
 * The closing section. It has no ground of its own: the loop from the hero
 * comes back round behind it (see Loop.tsx, which looks for #cta).
 */
export function CTA() {
  return (
    <section id="cta" className="relative z-10 pt-28 md:pt-40 pb-10 md:pb-12 overflow-hidden">
      {/* hold the type and the form clear of the loop behind them */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 45%, rgba(5,7,15,0.72) 0%, rgba(5,7,15,0.35) 60%, rgba(5,7,15,0) 100%)",
        }}
      />

      <div className="wrap relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <h2 className="font-head font-bold text-white text-[36px] md:text-[52px] lg:text-[68px] leading-[1.02] tracking-[-0.02em] max-w-[14ch]">
              Make every future Magento upgrade{" "}
              <span
                style={{
                  color: "var(--sw-mint)",
                  textShadow: "0 0 56px rgba(110,247,110,0.28)",
                }}
              >
                free
              </span>
            </h2>

            <p className="mt-8 md:mt-10 text-[16px] md:text-[18px] text-white/85">
              What happens after you send the form:
            </p>
            <ol className="mt-5 space-y-3.5 text-[16px] md:text-[18px] text-white/85">
              {steps.map((t, i) => (
                <li key={t} className="flex items-baseline gap-3">
                  <span
                    aria-hidden
                    className="w-5 shrink-0 font-head font-bold tabular-nums"
                    style={{ color: "var(--sw-mint)" }}
                  >
                    {i + 1}
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.15}>
            <HubSpotForm
              portalId="25724996"
              formId="3f982745-1c30-449f-b01c-08c37992053f"
              region="eu1"
              submitText="Get free Magento upgrades"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <dl className="mt-20 md:mt-28 grid grid-cols-2 lg:grid-cols-4 gap-x-8">
            {stats.map((s) => (
              <div key={s.label} className="border-t border-white/15 pt-5 pb-8">
                <dd className="font-head font-bold text-white text-[40px] md:text-[56px] leading-none tracking-[-0.03em] tabular-nums">
                  {s.n}
                </dd>
                <dt className="mt-3 text-white/55 text-[14px] md:text-[15px]">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="relative mt-6 md:mt-10">
        <TrustLogos />
      </div>
    </section>
  );
}
