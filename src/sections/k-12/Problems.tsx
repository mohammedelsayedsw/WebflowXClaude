"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { SectionIcon } from "./motifs";

export function Problems() {
  const problems = [
    {
      n: "1",
      title: "New products go live weeks late",
      body:
        "Every supplier sends data in their own format. By the time a new line is imported and ready, competitors have been selling it for weeks.",
    },
    {
      n: "2",
      title: "Your buyers are on Amazon",
      body:
        "Many parents search on Amazon and Google, not on your site. If you are not there, they never find you. If you are, you manage it by hand and oversell at Christmas.",
    },
    {
      n: "3",
      title: "Every sale is the last sale",
      body:
        "A family buys once and never comes back. Only 7 of 100 STEM stores sell a subscription. So the whole year depends on Q4.",
    },
    {
      n: "4",
      title: "The parcel gets stopped at shipping",
      body:
        "Batteries, chemicals, and magnets can’t ship on every route or to every country. The customer orders, then the parcel gets stopped, and the order is cancelled.",
    },
    {
      n: "5",
      title: "The gift arrives but can’t be used yet",
      body:
        "Many kits don’t include the batteries or goggles they need. Parents don’t know that, so on the gift morning someone is driving around looking for an open store.",
    },
  ];

  return (
    <section id="problems" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <svg
        className="absolute top-0 inset-x-0 h-px opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={1.8} />
      </svg>

      <div className="wrap relative">
        <div className="max-w-[66ch] mb-14 md:mb-20">
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5">
              <SectionIcon name="code-window" tone="dark" />
              <span className="label-code text-white/60">THE INDUSTRY, CHECKED STORE BY STORE</span>
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[30ch]">
              Five problems every{" "}
              <span className="text-[var(--sw-mint)]">STEM toy retailer</span> recognises
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[60ch] leading-relaxed">
              We mapped the STEM toys market across the US, UK, and Europe, and
              checked the leading stores feature by feature. The same problems
              came up everywhere.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {problems.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.07}>
              <div className="relative rounded-[4px] border border-white/10 bg-white/[0.02] p-6 h-full flex flex-col">
                <div className="label-code text-white/55 mb-4">Problem · {f.n}</div>
                <h3 className="font-head text-white text-[19px] md:text-[21px] leading-[1.18] mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                  {f.body}
                </p>
                <a
                  href={`#outcome-${f.n}`}
                  className="mt-6 inline-flex items-center gap-1.5 label-code text-[10px] tracking-[0.1em] whitespace-nowrap text-[var(--sw-mint)] hover:opacity-80 transition"
                >
                  <span className="h-px w-4 bg-[var(--sw-mint)]/70 shrink-0" />
                  SOLVED BY MODULE {f.n}
                </a>
                <span className="absolute top-0 left-6 h-px w-10 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
