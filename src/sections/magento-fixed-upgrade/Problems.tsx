"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Pain = { tag: string; title: string; body: string };

const pains: Pain[] = [
  {
    tag: "the cheap option",
    title: "Cheap dev shops break complex stores",
    body: "A few hundred dollars gets the job done on a simple store. On a store with B2B logic, custom modules, or ERP links, it breaks things. The saving disappears the first time checkout goes down.",
  },
  {
    tag: "the safe option",
    title: "Senior agencies, replatform prices",
    body: "Do it properly and the quote comes back at $20,000 to $80,000, still billed by the hour. That is re-platform pricing for what should be routine maintenance.",
  },
  {
    tag: "the quote",
    title: "No one will commit to a number",
    body: "Scoping drags because no one wants to name a price on a store they have not fully read. You get a time-and-materials range with no ceiling, and the real cost only shows up after the work has started.",
  },
  {
    tag: "the result",
    title: "So the upgrade keeps slipping",
    body: "Every Magento and Adobe Commerce store needs at least one upgrade a year. When the number is unknowable, it is easier to delay, and the security gap, slow checkout, and developer premium quietly grow.",
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">
            why upgrades are painful
          </div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            The upgrade market gives you{" "}
            <span style={{ color: "var(--sw-mint)" }}>two bad options</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            Cheap and risky, or safe and overpriced. Either way the number is
            hard to pin down before the work begins. Here is what merchants run
            into.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-7 md:p-8"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                }}
              >
                <div className="label-code text-white/55 mb-4">{p.tag}</div>
                <h3 className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-white/80 leading-relaxed">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.32}>
          <div className="mt-14 md:mt-20 rounded-[4px] border-l-2 border-[var(--sw-mint)] bg-white/[0.03] pl-6 md:pl-7 py-5 md:py-6 max-w-[78ch]">
            <p className="font-head text-white text-[18px] md:text-[22px] leading-[1.35]">
              We took the safe option and put a fixed price on it.{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                Cheaper than a mid-market agency, safer than a commodity shop,
                with the scope agreed before any work starts.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
