"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { SignalBars } from "./motifs";

export function Problems() {
  const problems = [
    {
      n: "1",
      title: "Every offer change needs a developer",
      body:
        "Every price change waits on a developer, and each channel can show a different one.",
    },
    {
      n: "2",
      title: "A phone price depends on the plan",
      body:
        "The price shifts with the plan, the bank, and the contract. A generic cart cannot handle that.",
    },
    {
      n: "3",
      title: "Telecom payments break a normal checkout",
      body:
        "Installments, balance payments, OTP, cash on delivery. A standard checkout covers almost none of it.",
    },
    {
      n: "4",
      title: "A SIM sale is more than a product sale",
      body:
        "The customer picks a number, passes an ID check, and confirms coverage. Most online shops send them to the store instead.",
    },
    {
      n: "5",
      title: "One order, five systems",
      body:
        "One order must reach billing, provisioning, logistics, and CRM. Today that path is hand-fixed glue.",
    },
    {
      n: "6",
      title: "Launches and campaigns are where shops break",
      body:
        "Peak traffic and the tightest deadline hit the same day. Most telecom shops meet it unprepared.",
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
              Six problems every{" "}
              <br className="hidden md:block" />
              <span className="text-[var(--sw-mint)]">telecom operator</span> recognises
            </h2>
            <p className="mt-6 max-w-[78ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              Telecom is complicated to sell online, and a standard store is
              not built for it. We build and run telecom commerce in production,
              and these are the six problems every operator&apos;s online store
              runs into.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
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
