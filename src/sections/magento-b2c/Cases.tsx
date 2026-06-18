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
    client: "Läderach",
    kind: "Swiss luxury chocolatier",
    body: "WordPress and Magento consolidated onto Adobe Commerce with a Hyvä frontend. All-green Core Web Vitals, content and integrations preserved, and every metric up.",
    highlights: [
      { value: "+39%", label: "revenue post-launch" },
      { value: "+47.8%", label: "conversion rate" },
    ],
  },
  {
    client: "PUMA",
    kind: "Global sportswear",
    body: "An enterprise technical-SEO recovery across PUMA's cross-border Magento storefronts, fixing pages wrongly reported as 404s and reclaiming organic traffic in four markets.",
    highlights: [
      { value: "+62%", label: "organic revenue, year on year" },
      { value: "+140%", label: "clicks on product pages" },
    ],
  },
  {
    client: "BUFF",
    kind: "Outdoor apparel",
    body: "A CRO-led navigation redesign on Adobe Commerce, rebuilding the top menu around the products people were actually searching for.",
    highlights: [
      { value: "+176.1%", label: "revenue, year on year" },
      { value: "+195.2%", label: "mobile conversion rate" },
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
            <span style={{ color: "var(--sw-mint)" }}>retail brands</span>.
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
