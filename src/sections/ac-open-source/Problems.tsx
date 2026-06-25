"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Pain = { tag: string; title: string; body: string };

const pains: Pain[] = [
  {
    tag: "the renewal",
    title: "The license goes up every year",
    body: "Adobe raises the price at every renewal. The same store, the same traffic, the same catalog, and the line item climbs regardless. It is the one cost in your stack that grows without you asking it to.",
  },
  {
    tag: "the waste",
    title: "You pay for features you do not use",
    body: "Adobe Commerce bundles a long list of enterprise modules. Most stores run a fraction of them. You are licensing the whole suite to use the parts you actually need, year after year.",
  },
  {
    tag: "the ownership",
    title: "You rent what you could own for free",
    body: "B2B, page builder, segmentation, gift cards, rewards. Capabilities you depend on, gated behind a license. The same outcomes can be built once on Open Source and owned outright.",
  },
  {
    tag: "the lock-in",
    title: "Leaving feels harder than it is",
    body: "The assumption is that moving off Adobe Commerce means a rebuild and months of disruption. It does not. Open Source is the same platform, so the move is a migration, not a replatform.",
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
            why merchants are moving
          </div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[26ch]">
            The license buys you less every year.{" "}
            <span style={{ color: "var(--sw-mint)" }}>
              Open Source buys you the same platform for nothing
            </span>
            .
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            Four reasons merchants on Adobe Commerce reassess the license. None
            of them are about the platform itself. The platform is fine. The bill
            is the problem.
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
              The migration eliminates a recurring cost, not a capability. You
              keep the platform you know.{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                You just stop paying to rent it.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
