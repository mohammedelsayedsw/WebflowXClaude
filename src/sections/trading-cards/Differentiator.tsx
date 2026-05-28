"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Differentiator() {
  const pillars = [
    {
      n: "01",
      title: "Built around the breaks model, not bolted on",
      body:
        "The pack product type, the FMV engine, and the randomization audit log were built for a Whatnot-anchored business, not generic retail. A pack is a first-class product with tiers, levels, and odds. Every reveal is logged. Every replacement is value-matched from reserve inventory.",
    },
    {
      n: "02",
      title: "PSA Vault and the buyback loop in one lifecycle",
      body:
        "Card moves on purchase from your active inventory into the customer's PSA vault. From there it can stay vaulted, route to eBay through the vault, or come back to you through the 90% buyback. The customer never handles a slab unless they want to. You never lose them to an external marketplace.",
    },
    {
      n: "03",
      title: "Whatnot, eBay, and your owned site on one customer file",
      body:
        "The whales who keep your show alive finally get an identity outside Whatnot. You can name your top 50 customers. You can run loyalty and lifecycle email through Klaviyo against people who have actually paid you. The ROI on your owned-site SEO and content finally becomes measurable.",
    },
    {
      n: "04",
      title: "Trust and AEO content engineered for breakers",
      body:
        "The trading cards industry has a credibility problem. Negative Reddit threads, allegations of shill bidding, sceptical buyers. The accelerator includes the trust FAQ, the AI-citable content structure, the Reddit sentiment management, and the digital PR playbook that defends a breaker brand the way a breaker cannot do for themselves.",
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
            Four hard things every breaker needs and no agency has shipped before. Each one is in production today, not a slide.
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
