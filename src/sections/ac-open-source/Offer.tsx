"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Tier = {
  option: string;
  name: string;
  price: string;
  desc: string;
  note?: string;
  youGet: string;
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    option: "Option 1",
    name: "Migration Check",
    price: "Free",
    desc: "We map your move: what breaks, what gets rebuilt, the effort, and your saving, on paper.",
    youGet: "A risk, effort, and cost map for your exact store.",
    cta: "Get the free check",
  },
  {
    option: "Option 2",
    name: "Live Demo",
    price: "$1,500",
    desc: "We set up your store on a fresh Open Source install, your catalog on a default Hyvä theme, so you can see it run.",
    note: "Your custom features and unique styling aren't part of the demo.",
    youGet: "A working demo of your own store in a new environment.",
    cta: "Request a live demo",
    featured: true,
  },
  {
    option: "Option 3",
    name: "Full Migration",
    price: "From $15,000",
    desc: "We move your whole store to Open Source, end to end, with a concrete timeline.",
    youGet: "Your store live on Open Source, the license gone for good.",
    cta: "Plan my migration",
  },
];

export function Offer() {
  return (
    <section id="offer" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            three ways to start
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            Drop the Adobe license and{" "}
            <span className="text-[var(--sw-blue)]">keep your exact store</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            Start with a free check, see your store running on Open Source, then
            move the whole thing when you&apos;re ready. The move pays for itself
            within the first year, and saves you the full license every year
            after.
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
                <div className="flex items-start justify-between gap-3">
                  <div className="label-code text-[var(--sw-black)]/55">
                    {t.option}
                  </div>
                  <span className="rounded-[2px] bg-[var(--sw-black)] px-3 py-1.5 font-head text-[13px] font-bold text-white">
                    {t.price}
                  </span>
                </div>
                <h3 className="mt-6 font-head text-[var(--sw-black)] text-[24px] md:text-[28px] leading-[1.15]">
                  {t.name}
                </h3>
                <p className="mt-4 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
                  {t.desc}
                </p>
                {t.note && (
                  <p className="mt-3 text-[var(--sw-black)]/50 text-[13px] md:text-[14px] leading-relaxed italic">
                    {t.note}
                  </p>
                )}
                <div className="mt-auto pt-6 border-t border-[var(--sw-black)]/10">
                  <div className="label-code text-[var(--sw-black)]/55 mb-2">
                    what you get
                  </div>
                  <p className="text-[var(--sw-black)] font-medium text-[15px] md:text-[16px] leading-relaxed">
                    {t.youGet}
                  </p>
                </div>
                <a
                  href="#cta"
                  className={`mt-6 inline-flex items-center justify-center rounded-[2px] border px-5 py-2.5 font-head text-[14px] md:text-[15px] transition ${
                    t.featured
                      ? "border-[var(--sw-blue)] text-[var(--sw-blue)] hover:bg-[var(--sw-blue)]/5"
                      : "border-[var(--sw-black)]/30 text-[var(--sw-black)] hover:bg-[var(--sw-black)]/5"
                  }`}
                >
                  {t.cta}
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
