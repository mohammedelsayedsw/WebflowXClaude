"use client";

import { Reveal } from "@/components/primitives/Reveal";

const tiers: {
  name: string;
  timeline: string;
  scope: string;
  featured?: boolean;
}[] = [
  {
    name: "Launchpad",
    timeline: "About 2 weeks",
    scope: "Proof of concept. One workflow with your real data.",
  },
  {
    name: "Pilot",
    timeline: "4 to 6 weeks",
    scope:
      "Real customer launch. Your first commercial app, live in both directories.",
    featured: true,
  },
  {
    name: "Suite",
    timeline: "8 to 12 weeks",
    scope:
      "Enterprise scope. Multiple workflows, multi-system, role-based access.",
  },
];

export function BuildPath() {
  return (
    <section
      id="the-path"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16 max-w-[820px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">7</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The path</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] max-w-[24ch]">
              Three ways to start, mapped to{" "}
              <span className="text-[var(--sw-blue)]">your business</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed max-w-[64ch]">
              Rolands closes the session by showing the three build paths and
              where most businesses begin. No hard pitch, a clear picture of
              scope and timeline so you can judge the fit.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div
                className={
                  "relative h-full rounded-[4px] p-7 md:p-8 transition-all " +
                  (t.featured
                    ? "bg-[var(--sw-black)] border border-[var(--sw-black)] text-white"
                    : "bg-white border border-[var(--sw-black)]/10 text-[var(--sw-black)]")
                }
              >
                {t.featured && (
                  <span
                    className="absolute -top-3 left-7 inline-flex items-center rounded-[2px] border bg-[var(--sw-mint)] px-2.5 py-1 font-head text-[10px] tracking-[0.14em] uppercase"
                    style={{
                      borderColor: "rgba(0,0,0,0.15)",
                      color: "var(--sw-black)",
                    }}
                  >
                    Most popular
                  </span>
                )}

                <div
                  className={
                    "label-code mb-4 " +
                    (t.featured ? "text-white/55" : "text-[var(--sw-black)]/55")
                  }
                >
                  Tier {i + 1}
                </div>

                <div className="font-head text-[26px] md:text-[28px] leading-[1.1]">
                  {t.name}
                </div>

                <div
                  className={
                    "mt-2 font-head text-[15px] md:text-[16px] " +
                    (t.featured
                      ? "text-[var(--sw-mint)]"
                      : "text-[var(--sw-blue)]")
                  }
                >
                  {t.timeline}
                </div>

                <p
                  className={
                    "mt-5 text-[14.5px] md:text-[15.5px] leading-relaxed " +
                    (t.featured ? "text-white/80" : "text-[var(--sw-black)]/70")
                  }
                >
                  {t.scope}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-14 md:mt-16 text-center font-head text-[var(--sw-black)] text-[17px] md:text-[19px] leading-[1.4] max-w-[60ch] mx-auto">
            You leave the session knowing which path fits, with a{" "}
            <span className="text-[var(--sw-blue)]">realistic timeline</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
