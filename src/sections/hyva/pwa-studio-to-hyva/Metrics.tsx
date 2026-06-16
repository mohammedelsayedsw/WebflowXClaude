"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function Metrics() {
  const stats: { delta: string; label: string; detail: string }[] = [
    {
      delta: "+40 pts",
      label: "PageSpeed mobile",
      detail: "From the 50 to 60 range typical of PWA storefronts to 90+ on Hyvä. Verified per migration.",
    },
    {
      delta: "−65%",
      label: "Frontend JS shipped",
      detail: "Hyvä is built around minimal JS. Most stores see a two-thirds drop in bundle weight on PDP and PLP.",
    },
    {
      delta: "−40%",
      label: "Time to ship a feature",
      detail: "Smaller surface area, fewer moving parts. A new component or block lands in a fraction of the time.",
    },
    {
      delta: "−30%",
      label: "Frontend dev cost",
      detail: "Lower hourly rates for Hyvä-capable engineers, plus less time per change. Compounds across the year.",
    },
    {
      delta: "1 vs 2",
      label: "Magento upgrade passes",
      detail: "Native Magento upgrade only. No parallel PWA Studio compatibility cycle to run, test, and patch.",
    },
    {
      delta: "Days vs weeks",
      label: "Engineer ramp-up",
      detail: "Alpine plus Tailwind onboards a Magento dev in days. Venia and Peregrine conventions take weeks.",
    },
  ];

  return (
    <section
      id="metrics"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 600px at 80% 15%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 15% 90%, #070a1e 0%, transparent 52%)," +
          "linear-gradient(180deg, #10132c 0%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-16 items-end mb-14 md:mb-20">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[16ch]">
              The migration <span className="text-[var(--sw-mint)]">math</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[58ch]">
              Directional outcomes from the PWA Studio to Hyvä migrations we
              have shipped. Your numbers will depend on your starting point,
              your store size, and how clean your custom modules are. The
              direction of travel is consistent.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <div className="relative h-full rounded-[4px] border border-white/10 bg-white/[0.03] p-7 md:p-8 backdrop-blur-sm">
                <div
                  className="font-head leading-none tabular-nums text-[44px] md:text-[56px] tracking-[-0.01em]"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {s.delta}
                </div>
                <div className="mt-5 label-code text-white/55">
                  {s.label}
                </div>
                <p className="mt-4 text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                  {s.detail}
                </p>
                <span className="absolute top-0 left-7 h-px w-10 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 md:mt-14 max-w-[68ch] text-white/55 text-[12px] md:text-[13px] leading-relaxed">
            Benchmarks are typical post-launch deltas across our migrations,
            measured against the same store on PWA Studio. PageSpeed range based
            on Lighthouse mobile audits. We share per-store before and after
            numbers in the consultation call.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
