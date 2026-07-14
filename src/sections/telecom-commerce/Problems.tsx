"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { SignalBars } from "./motifs";

export function Problems() {
  const problems = [
    {
      n: "1",
      title: "A new offer takes six months",
      body:
        "Every new price or bundle becomes an IT ticket into the BSS queue. By the time the offer is live, the campaign window is gone and a competitor caught it.",
    },
    {
      n: "2",
      title: "Bundles don't fit the platform",
      body:
        "Generic web shops know ‘add to cart, pay, ship’. They don't know ‘fiber plus mobile plus TV, discounted together, only where fiber is available’.",
    },
    {
      n: "3",
      title: "Every channel tells a different price",
      body:
        "The web shop, the app, the call center, and the store each have their own copy of the catalog. Customers notice when they don't match.",
    },
    {
      n: "4",
      title: "One order, five systems",
      body:
        "A single order must reach billing, provisioning, logistics, and the CRM. Today that path is custom glue, and when it breaks, a person fixes it by hand.",
    },
    {
      n: "5",
      title: "A new brand means a new build",
      body:
        "Launching a sub-brand or selling through a partner today means copying the whole setup. Every copy doubles the maintenance.",
    },
  ];

  return (
    <section id="problems" className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36">
      <svg
        className="absolute inset-x-0 top-0 h-px opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={1.8} />
      </svg>

      <div className="wrap relative">
        <div className="mb-14 max-w-[52rem] md:mb-20">
          <Reveal>
            <div className="mb-5 flex items-center gap-2.5">
              <SignalBars tone="dark" />
              <span className="label-code text-white/60">THE INDUSTRY, CHECKED OPERATOR BY OPERATOR</span>
            </div>
            <h2 className="font-head text-[34px] leading-[1.05] text-white md:text-[48px] lg:text-[56px]">
              Five problems every{" "}
              <br className="hidden md:block" />
              <span className="text-[var(--sw-mint)]">telecom operator</span> recognises
            </h2>
            <p className="mt-6 max-w-[78ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              The same pattern shows up at operators of every size: the systems
              that run the network are also being asked to run the shop. They
              were never built for that.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {problems.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.07}>
              <div className="relative flex h-full flex-col rounded-[4px] border border-white/10 bg-white/[0.02] p-6">
                <div className="label-code mb-4 text-white/55">Problem · {f.n}</div>
                <h3 className="font-head mb-3 text-[19px] leading-[1.18] text-white md:text-[21px]">
                  {f.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/70 md:text-[14px]">
                  {f.body}
                </p>
                <a
                  href={`#module-${f.n}`}
                  className="label-code mt-auto inline-flex items-center gap-1.5 whitespace-nowrap pt-6 text-[10px] tracking-[0.1em] text-[var(--sw-mint)] transition hover:opacity-80"
                >
                  <span className="h-px w-4 shrink-0 bg-[var(--sw-mint)]/70" />
                  SOLVED BY MODULE {f.n}
                </a>
                <span className="absolute left-6 top-0 h-px w-10 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
