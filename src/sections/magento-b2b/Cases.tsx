"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Highlight = { value: string; label: string };
type Case = {
  client: string;
  kind: string;
  body: string;
  highlights: Highlight[];
};

const cases: Case[] = [
  {
    client: "Macron",
    kind: "Teamwear manufacturer",
    body: "A B2B platform on Adobe Commerce with personalized catalogs and pricing, several bulk-order flows, and SAP ERP and Pimcore PIM behind a 10,000-product catalog.",
    highlights: [
      { value: "+29.8%", label: "revenue, year on year" },
      { value: "+132.5%", label: "conversion, direct traffic" },
    ],
  },
  {
    client: "IONTO-COMED",
    kind: "Cosmetic equipment manufacturer",
    body: "Three brand sites consolidated into one B2B-driven Magento store, with the Infor ERP connector rebuilt to cut sync errors and Klevu search added on top.",
    highlights: [
      { value: "+90.2%", label: "online revenue" },
      { value: "+44.9%", label: "conversion rate" },
    ],
  },
  {
    client: "BK-Group",
    kind: "Security equipment distributor",
    body: "Two markets and two platforms merged into one Magento and Hyvä store, with real-time customer-specific pricing and stock from Pimcore and an ERP-integrated approval workflow.",
    highlights: [
      { value: "2 → 1", label: "platforms unified on Magento" },
      { value: "Real-time", label: "account pricing from ERP" },
    ],
  },
];

export function Cases() {
  return (
    <section
      id="work"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">selected work</div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[20ch]">
            Built and shipped for{" "}
            <span style={{ color: "var(--sw-mint)" }}>B2B brands</span>.
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.08}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-7 md:p-8 flex flex-col"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                }}
              >
                <div className="label-code text-white/55 mb-3">{c.kind}</div>
                <h3 className="font-head text-white text-[24px] md:text-[28px] leading-[1.1]">
                  {c.client}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-white/75 leading-relaxed flex-1">
                  {c.body}
                </p>
                <div className="mt-7 pt-6 border-t border-white/10 grid grid-cols-2 gap-5">
                  {c.highlights.map((h) => (
                    <div key={h.label}>
                      <div
                        className="font-head text-[26px] md:text-[30px] leading-none tabular-nums"
                        style={{ color: "var(--sw-mint)" }}
                      >
                        {h.value}
                      </div>
                      <div className="label-code text-white/55 mt-2.5 leading-snug">
                        {h.label}
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
