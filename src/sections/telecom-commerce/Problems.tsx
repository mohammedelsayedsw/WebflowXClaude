"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { SignalBars } from "./motifs";

export function Problems() {
  const problems = [
    {
      n: "1",
      title: "Every price change needs a developer",
      body:
        "Every price change waits on a developer, and the same phone can cost more on your website than in your store.",
    },
    {
      n: "2",
      title: "One phone, a different price for every plan",
      body:
        "A phone's price shifts with the plan, the bank, and the contract. A normal store has one price per product, so it cannot show the right price.",
    },
    {
      n: "3",
      title: "Your checkout can't take telecom payments",
      body:
        "Customers want installments split by bank, payment from their phone balance, one-time codes, and cash on delivery. A standard checkout takes almost none of it.",
    },
    {
      n: "4",
      title: "You can't sell a SIM like a t-shirt",
      body:
        "A SIM needs a chosen number, an ID check, and a coverage check before it can ship. Most online stores cannot do that, so the customer ends up in your shop.",
    },
    {
      n: "5",
      title: "One order has to reach five systems",
      body:
        "A single order has to update billing, provisioning, logistics, and your CRM. Today that path is held together by hand, and it breaks.",
    },
    {
      n: "6",
      title: "A new phone launch can break your store",
      body:
        "A new phone launch or a holiday sale brings your busiest traffic and your tightest deadline on the same day. Most stores are not ready for it.",
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
