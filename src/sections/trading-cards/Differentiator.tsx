"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Differentiator() {
  const pillars = [
    {
      n: "1",
      title: "Built around the live-show selling model, not bolted on",
      body:
        "The purchasable pack, the auto-restock engine, and the audit log were built for a live-streamed selling business, not generic retail. A pack is a real product with tiers, levels, and odds. Every sale is logged. Every replacement comes from your reserve at matching market value.",
    },
    {
      n: "2",
      title: "Card grading and buyback inside one journey",
      body:
        "On purchase, the card transfers from your active stock into the customer's secure storage at PSA. From there it can stay stored, list back to eBay through that same secure chain, or return to you through the 90% buyback. The customer never handles the card unless they want to. You never lose them to an outside marketplace.",
    },
    {
      n: "3",
      title: "Whatnot, eBay, and your own site on one customer record",
      body:
        "The buyers who drive most of your revenue finally get an identity outside Whatnot. You can name your top 50 customers. You can run loyalty and email lifecycle through Klaviyo against people who have actually paid you. The return on your SEO and content work finally becomes measurable.",
    },
    {
      n: "4",
      title: "Trust content built for a sceptical category",
      body:
        "Trading cards has a credibility problem. Negative threads on Reddit, accusations across the category, careful buyers. The accelerator includes the trust FAQ, AI-citable content structure, Reddit sentiment management, and the digital PR playbook that defends a brand the way an operator cannot do alone.",
    },
  ];

  return (
    <section
      id="differentiator"
      className="relative bg-[var(--sw-black)] py-28 md:py-40 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 600px at 12% 18%, rgba(63,74,175,0.18) 0%, transparent 55%)," +
            "radial-gradient(700px 600px at 88% 82%, rgba(110,247,110,0.08) 0%, transparent 55%)",
        }}
      />
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[22ch]">
            What makes this an{" "}
            <span className="text-[var(--sw-mint)]">accelerator</span>, not another rebuild
          </h2>
          <p className="mt-6 text-white/75 max-w-[60ch] text-[16px] md:text-[17px] leading-relaxed">
            Four hard things every trading card operator needs and no agency has shipped before. Each one is in production today, not a slide.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div
                className="relative rounded-[4px] p-7 md:p-9 h-full overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(23,26,56,0.95) 0%, rgba(16,19,44,0.95) 100%)",
                  border: "1px solid rgba(230,231,239,0.08)",
                }}
              >
                <span
                  className="absolute top-0 left-0 h-[3px] w-16"
                  style={{ background: "var(--sw-mint)" }}
                />
                <div className="label-code text-[var(--sw-mint)] mb-6">{p.n}</div>
                <h3 className="font-head text-white text-[22px] md:text-[26px] leading-[1.18] mb-4 max-w-[28ch]">
                  {p.title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-white/75 leading-relaxed max-w-[52ch]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
