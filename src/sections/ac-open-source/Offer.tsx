"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Tier = {
  name: string;
  price: string;
  unit: string;
  deliverable: string;
  pitch: string;
  bullets: string[];
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Migration check",
    price: "Free",
    unit: "no commitment",
    deliverable: "A risk, effort, and cost map",
    pitch:
      "We look at your store and tell you what breaks, what carries over untouched, and what the move actually costs. Your license saving on paper before you spend a thing.",
    bullets: [
      "What breaks, and what is safe to keep",
      "What gets rebuilt, and what it costs",
      "Your license saving, in writing",
    ],
  },
  {
    name: "Live demo",
    price: "$1,500",
    unit: "fixed",
    deliverable: "Your store, running on Open Source",
    pitch:
      "A working demo of your own store on Magento Open Source. Click through your catalog, checkout, and key flows on the platform you would move to. Fee credited toward a full migration.",
    bullets: [
      "Real catalog and checkout, not a template",
      "Proof the parity holds before you commit",
      "Credited against the full migration",
    ],
    featured: true,
  },
  {
    name: "Full migration",
    price: "From $15,000",
    unit: "scoped to your store",
    deliverable: "The complete move, done for you",
    pitch:
      "Catalog, data, custom code, extensions, and storefront moved across and validated. Enterprise features you relied on rebuilt as owned solutions. Live with no gap in trading.",
    bullets: [
      "Data, code, and integrations carried over",
      "Enterprise features rebuilt, not lost",
      "Validated and live, pays for itself in year one",
    ],
  },
];

export function Offer() {
  return (
    <section id="offer" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            first step, no commitment
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            Three ways to start,{" "}
            <span className="text-[var(--sw-blue)]">
              beginning with a free check
            </span>
            .
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            You do not have to commit to a migration to find out what it costs.
            Start with the free check, see your store running on Open Source for
            a fixed fee, then move the whole thing when the numbers make sense.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-6 md:gap-8 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <article
                className={`h-full rounded-[4px] border p-7 md:p-8 flex flex-col ${
                  t.featured
                    ? "border-[var(--sw-blue)]/40 bg-white shadow-[0_0_0_1px_var(--sw-blue)]"
                    : "border-[var(--sw-black)]/10 bg-white"
                }`}
              >
                <div className="label-code text-[var(--sw-black)]/55 mb-4">
                  {t.unit}
                </div>
                <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.15]">
                  {t.name}
                </h3>
                <div className="mt-6 pt-5 border-t border-[var(--sw-black)]/10 flex items-baseline gap-3">
                  <div className="font-head text-[var(--sw-black)] text-[40px] md:text-[48px] leading-none tabular-nums">
                    {t.price}
                  </div>
                </div>
                <div className="mt-5 text-[var(--sw-black)] font-medium text-[15px] md:text-[16px]">
                  {t.deliverable}
                </div>
                <p className="mt-3 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
                  {t.pitch}
                </p>
                <ul className="mt-6 pt-5 border-t border-[var(--sw-black)]/10 space-y-2.5 flex-1">
                  {t.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[13px] md:text-[14px] text-[var(--sw-black)]/70 leading-relaxed"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: "var(--sw-blue)" }}
                      />
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-7 inline-flex items-center justify-center rounded-[2px] border px-5 py-2.5 font-head text-[14px] md:text-[15px] transition ${
                    t.featured
                      ? "border-[var(--sw-blue)] text-[var(--sw-blue)] hover:bg-[var(--sw-blue)]/5"
                      : "border-[var(--sw-black)]/30 text-[var(--sw-black)] hover:bg-[var(--sw-black)]/5"
                  }`}
                >
                  {t.price === "Free" ? "Claim your free check" : "Start here"}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12 md:mt-16 rounded-[4px] border border-[var(--sw-black)]/10 bg-white/60 px-6 md:px-8 py-5 md:py-6 text-[13px] md:text-[14px] text-[var(--sw-black)]/70 leading-relaxed">
            No platform lock-in. You own the infrastructure, the code, and the
            roadmap. The migration eliminates a recurring cost, so for most
            merchants it pays for itself inside the first year.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
