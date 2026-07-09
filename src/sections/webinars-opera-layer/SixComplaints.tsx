"use client";

import { Reveal } from "@/components/primitives/Reveal";

const quotes: { text: string; role: string; context: string }[] = [
  {
    text:
      "Month-end close still takes us four working days. Half of that is reconciling numbers between the ERP and the data warehouse.",
    role: "CFO",
    context: "Manufacturing · 600 staff",
  },
  {
    text:
      "The same customer has three different IDs across CRM, e-commerce and support. We've tried to fix it twice. Nobody wants to own it.",
    role: "Head of E-commerce",
    context: "D2C beauty",
  },
  {
    text:
      "There's a process the team runs every Monday morning. It's been on the automation backlog for two years. Still on the list.",
    role: "COO",
    context: "B2B distribution",
  },
  {
    text:
      "Pricing across regions lives in a spreadsheet that one person maintains. If she's on holiday, nothing changes price.",
    role: "Commercial Director",
    context: "Multi-country retail",
  },
  {
    text:
      "Buyers are matching invoices to POs by hand because every supplier sends the PDF in a different format. Two FTEs, every morning.",
    role: "Head of Procurement",
    context: "Industrial supply",
  },
  {
    text:
      "The dashboard the board asked for needs data from five systems. Building it has been next quarter for the last three quarters.",
    role: "CIO",
    context: "Specialty retail",
  },
];

export function SixComplaints() {
  return (
    <section
      id="the-pain"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16 max-w-[760px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">3</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The pain</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[28px] sm:text-[34px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] max-w-[20ch]">
              Six departments,{" "}
              <span className="text-[var(--sw-blue)]">same complaint</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[60ch]">
              Different roles, different industries, identical shape of problem.
              The tools are fine. The work that falls between them is what costs
              you time and margin.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {quotes.map((q, i) => (
            <Reveal key={q.role + i} delay={(i % 3) * 0.07}>
              <li className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 sm:p-7 flex flex-col">
                <span
                  aria-hidden
                  className="font-head font-bold leading-none text-[var(--sw-blue)]/25 text-[40px] mb-3"
                >
                  &ldquo;
                </span>
                <p className="text-[var(--sw-black)]/85 text-[15px] md:text-[16px] leading-relaxed flex-1">
                  {q.text}
                </p>
                <div className="mt-6 pt-5 border-t border-[var(--sw-black)]/10">
                  <div className="font-head font-bold text-[var(--sw-black)] text-[13px] uppercase tracking-[0.06em]">
                    {q.role}
                  </div>
                  <div className="text-[var(--sw-black)]/55 text-[13px] mt-1">
                    {q.context}
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
