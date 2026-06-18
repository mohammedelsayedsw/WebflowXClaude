"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

/* TODO: replace this placeholder form with
   <HubSpotForm portalId="25724996" formId="<campaign form id>" region="eu1" />
   once the Fixed-fee Magento Upgrade campaign form exists in HubSpot.
   Fields below mirror the estimate request: email, domain, version, notes. */
function EstimateFormPlaceholder() {
  const field =
    "w-full rounded-[2px] border border-white/15 bg-white/[0.04] px-4 py-3 text-white placeholder-white/40 text-[14px] focus:outline-none focus:border-[var(--sw-mint)]/60 transition";
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-7 md:p-8 space-y-4"
      style={{
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div>
        <label className="label-code text-white/55 block mb-2">work email</label>
        <input type="email" name="email" placeholder="you@store.com" className={field} />
      </div>
      <div>
        <label className="label-code text-white/55 block mb-2">store domain</label>
        <input type="text" name="domain" placeholder="store.com" className={field} />
      </div>
      <div>
        <label className="label-code text-white/55 block mb-2">
          current magento version
        </label>
        <input type="text" name="version" placeholder="2.4.6, 2.3.x, Magento 1, not sure" className={field} />
      </div>
      <div>
        <label className="label-code text-white/55 block mb-2">
          anything custom we should know? (optional)
        </label>
        <textarea
          name="notes"
          rows={3}
          placeholder="B2B logic, ERP sync, custom modules, integrations"
          className={`${field} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-[2px] bg-[var(--sw-beige)] text-[var(--sw-black)] font-head font-semibold text-[15px] py-3.5 hover:opacity-90 transition"
      >
        Get my fixed-price estimate
      </button>
    </form>
  );
}

export function CTA() {
  const points = [
    "Fixed price, locked before any work begins",
    "Your fixed price back within 48 business hours",
    "No admin access, no live changes",
    "Yours to keep, even to compare against your current quote",
  ];
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
              free estimate · 48 hours
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[60px] leading-[1.04] max-w-[18ch]">
              Get your{" "}
              <span className="text-[var(--sw-mint)]">fixed-price estimate</span>.
            </h2>
            <p className="mt-6 text-white/80 max-w-[52ch] text-[16px] md:text-[17px] leading-relaxed">
              Send your domain, current Magento version, and anything custom you
              are unsure about. Within 48 business hours we send your target
              version, scope, fixed price, timeline, and risk register. No
              commitment.
            </p>

            <ul className="mt-10 space-y-2.5 text-[13px] md:text-[14px] text-white/80">
              {points.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--sw-mint)] shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <EstimateFormPlaceholder />
            <p className="label-code text-white/45 mt-3 px-1">
              We send your estimate within 48 business hours.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
