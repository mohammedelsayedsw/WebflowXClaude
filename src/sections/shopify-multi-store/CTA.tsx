"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

const lookAt: { label: string; body: string }[] = [
  {
    label: "Stores & apps",
    body: "How many stores, which apps, where they overlap, and what they cost.",
  },
  {
    label: "Systems & data",
    body: "ERP, OMS, WMS, CMS, PIM, BI, and where the data disagrees.",
  },
  {
    label: "Releases & monitoring",
    body: "How changes ship, what gets watched, and what slips through.",
  },
];

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
            <div className="label-code text-white/55 mb-5">the first step</div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[20ch]">
              Let&apos;s talk Shopify{" "}
              <span className="text-[var(--sw-mint)]">multi-store support</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-[54ch] text-[16px] md:text-[17px] leading-relaxed">
              We start by reviewing the setup together. Stores, apps, ERP, CMS,
              custom apps, releases, monitoring, app costs, and the issues that
              keep coming back. No full system access is needed for the first
              conversation. A store and system map plus a few examples of
              recurring issues is enough.
            </p>

            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {lookAt.map((l) => (
                <div
                  key={l.label}
                  className="rounded-[4px] border border-white/12 bg-white/[0.03] p-5"
                >
                  <div className="label-code text-white/55 mb-2.5">
                    {l.label}
                  </div>
                  <p className="text-[13px] md:text-[14px] text-white/75 leading-relaxed">
                    {l.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <HubSpotForm
              portalId="25724996"
              formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6"
              region="eu1"
            />
            <p className="label-code text-white/60 mt-3 px-1">
              We respond within one business day
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
