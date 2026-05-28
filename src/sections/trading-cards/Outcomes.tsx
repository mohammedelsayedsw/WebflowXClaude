"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Outcomes() {
  const outcomes = [
    {
      n: "01",
      title: "Endless packs that pay for themselves",
      body:
        "The FMV engine replaces every hit with a similar-value card from your reserve. The pack stays sellable until you actually run out. No human in the loop. No manual rebalancing. The packs that earned a buyer the Trevor Lawrence Kaboom keep running the next stream.",
      tag: "Pack product type · FMV randomization",
    },
    {
      n: "02",
      title: "Whales become customers, not anonymous handles",
      body:
        "Whatnot, Fanatics Live, and your own site finally roll up to one customer file. The 50 buyers who drive half your GMV stop being a handle and start being a person you can call, send a personal break to, or surprise with a comp pack.",
      tag: "Customer bridge · Klaviyo",
    },
    {
      n: "03",
      title: "Payment that survives a $4,500 personal at minute 70",
      body:
        "Stripe Radar tuned for the high-AOV, multi-transaction stream pattern. Diamond and Legend tier packs land in the gateway without false declines. Chargeback exposure is documented and trending down.",
      tag: "Stripe Radar · velocity rules",
    },
    {
      n: "04",
      title: "PSA cert in, eBay listing out",
      body:
        "A card with a PSA cert enters the customer's vault on purchase. From there it lists to eBay through the vault, stays available for the 90% buyback, or settles for a PSA offer. The chain of custody is the value.",
      tag: "PSA Vault · eBay via vault",
    },
    {
      n: "05",
      title: "Buyback that closes the loop",
      body:
        "The 90% buyback means the customer never has to leave you to liquidate. Cards come back into your reserve, refresh the active pool, and keep the next pack alive. The customer feels protected. You stay the marketplace.",
      tag: "Buyback · sell-back · reserve refresh",
    },
    {
      n: "06",
      title: "Trust engineered, not hoped for",
      body:
        "The trust FAQ, AEO content structure, and Reddit sentiment program defend the brand against the credibility tax every breaker pays. The pages cite. The community comments balance the negative threads. The brand stops being only what the loudest critic says it is.",
      tag: "AEO content · digital PR · sentiment",
    },
  ];

  return (
    <section
      id="outcomes"
      className="relative bg-lp-bright py-28 md:py-40 text-[var(--sw-black)] overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[22ch]">
            What goes live{" "}
            <span className="text-[var(--sw-blue)]">in week 14</span>
          </h2>
          <p className="mt-6 text-[var(--sw-black)]/75 max-w-[60ch] text-[16px] md:text-[17px] leading-relaxed">
            Six concrete outcomes. Each one is already shipped in production for the reference build. Each one would take a generic agency a discovery year to reach.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((o, i) => (
            <Reveal key={o.n} delay={i * 0.06}>
              <div className="relative rounded-[4px] border border-[var(--sw-black)]/12 bg-white/70 backdrop-blur-sm p-7 md:p-8 h-full flex flex-col">
                <span
                  className="absolute top-0 left-0 h-[3px] w-12"
                  style={{ background: "var(--sw-blue)" }}
                />
                <div className="label-code text-[var(--sw-blue)] mb-5">
                  Outcome · {o.n}
                </div>
                <h3 className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.15] mb-3 max-w-[24ch]">
                  {o.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-[var(--sw-black)]/70 leading-relaxed mb-5">
                  {o.body}
                </p>
                <div className="mt-auto pt-5 border-t border-[var(--sw-black)]/10">
                  <div className="label-code text-[var(--sw-black)]/55">
                    {o.tag}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
