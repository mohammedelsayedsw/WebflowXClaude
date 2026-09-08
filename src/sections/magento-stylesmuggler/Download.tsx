"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

/**
 * The gated PDF for stores Adobe left without a hotfix: Magento 2.2.0 to
 * 2.4.3. One email field, HubSpot form "[Asset] Magento StyleSmuggler"
 * (portal 25724996, EU1). Submitting it enrolls the contact in the
 * "[Asset] Magento StyleSmuggler: send PDF" workflow, which emails the PDF
 * and the patch bundle link.
 *
 * The form is rendered by the shared HubSpotForm embed; its look comes from
 * `.hubspot-form-wrapper` in globals.css, the same dark inputs and mint focus
 * as the check form further down.
 */
const PORTAL_ID = "25724996";
const PDF_FORM_ID = "9cf3ef20-5b6e-4586-a964-d4e4dd1f2071";

const INSIDE: string[] = [
  "Which versions Adobe’s hotfix covers, and which get nothing",
  "The patch bundle: 41 patch files, one per Magento version from 2.2.0 to 2.4.3-p3",
  "What to check for before you patch, and how to apply it in 4 steps",
];

export function Download() {
  return (
    <section id="pdf" className="relative z-10 py-24 md:py-32 border-t border-white/10 scroll-mt-20">
      <div className="wrap">
        <div className="grid md:grid-cols-[minmax(0,6fr)_minmax(0,6fr)] gap-12 md:gap-16 items-start">
          <Reveal>
            <div className="label-code text-white/55">Running 2.2.0 to 2.4.3?</div>
            <h2 className="mt-5 font-head text-white text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[16ch]">
              Get the fix Adobe{" "}
              <span style={{ color: "var(--sw-mint)" }}>didn’t ship</span>
            </h2>
            <p className="mt-6 text-white/80 text-[16px] md:text-[17px] leading-relaxed max-w-[50ch]">
              Adobe’s hotfix stops at Commerce 2.4.4 and Open Source 2.4.6.
              scandiweb rebuilt it for 41 older versions. Leave your email and
              we send you the PDF with the patch bundle.
            </p>
            <ul className="mt-8 border-t border-white/10">
              {INSIDE.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 py-4 border-b border-white/10 text-white/75 text-[15px] md:text-[16px] leading-relaxed"
                >
                  <span aria-hidden className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: "var(--sw-mint)" }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="w-full">
            <div className="w-full max-w-[520px] md:ml-auto">
              <HubSpotForm
                portalId={PORTAL_ID}
                formId={PDF_FORM_ID}
                region="eu1"
                submitText="Send me the PDF"
              />
              <p className="mt-4 text-white/55 text-[13px] md:text-[14px] leading-relaxed">
                One email, no sequence. Apply the patch on staging first, and
                check the store for a break-in if it has been online since
                September 4.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
