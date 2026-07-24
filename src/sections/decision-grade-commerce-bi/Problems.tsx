"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

const PROBLEMS = [
  {
    n: "1",
    title: "Every store reports on its own",
    body: "No shared view across your stores, no way to compare them.",
  },
  {
    n: "2",
    title: "Your numbers do not match your orders",
    body: "GA4 shows one number, your orders show another, so nobody trusts the dashboard.",
  },
  {
    n: "3",
    title: "Your order data is stuck in your store",
    body: "You cannot connect sales to what people do on the site.",
  },
  {
    n: "4",
    title: "Your ad tracking is wrong",
    body: "Ad platforms get the wrong conversion data, so your spend chases the wrong things.",
  },
  {
    n: "5",
    title: "Analysts rebuild reports by hand",
    body: "The week goes on exports instead of decisions.",
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
      <svg
        className="absolute inset-x-0 top-0 h-px w-full opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <DrawnPath
          d="M0 0.5 H1000"
          stroke="rgba(110,247,110,0.45)"
          strokeWidth={1}
          duration={1.8}
        />
      </svg>

      <div className="wrap relative">
        <div className="mb-14 max-w-[56rem] md:mb-20">
          <Reveal>
            <span className="label-code mb-5 block text-white/60">
              The problem
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              You cannot run an eCommerce business on{" "}
              <span className="text-[var(--sw-mint)]">
                numbers you do not trust
              </span>
            </h2>
            <p className="mt-6 max-w-[80ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              As stores grow, the tracking behind them falls apart, and
              leadership ends up{" "}
              <br className="hidden md:block" />
              deciding on figures nobody is sure of. These five gaps are why.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07} className="h-full">
              <div className="relative flex h-full flex-col rounded-[4px] border border-white/10 bg-white/[0.02] p-5">
                <div className="label-code mb-4 text-white/55">Gap · {p.n}</div>
                <h3 className="font-head mb-3 text-[18px] leading-[1.2] text-white lg:text-[17px] xl:text-[18px]">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/70">
                  {p.body}
                </p>
                <span className="absolute left-5 top-0 h-px w-8 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
