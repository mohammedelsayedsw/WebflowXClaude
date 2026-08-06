"use client";

import { useState } from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { FullFlowModal } from "./FullFlowModal";

const steps: { title: string; body: string }[] = [
  {
    title: "Document arrives",
    body: "Your warehouse or accounting team uploads a delivery note or invoice, as a PDF or photo",
  },
  {
    title: "OperaLayer reads it",
    body: "Pulls the line items and applies your per-supplier rules",
  },
  {
    title: "Matched to your PO",
    body: "Delivery note and invoice lines checked against the purchase order",
  },
  {
    title: "Exceptions flagged",
    body: "Anything that does not match goes to a person to confirm",
  },
  {
    title: "Posted to your ERP",
    body: "Goods receipt and invoice sent back automatically",
  },
];

export function CaseStudy() {
  const [flowOpen, setFlowOpen] = useState(false);

  return (
    <section
      id="real-workflow"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[68rem]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">4</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The live demo</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mt-6">
              See it work on one real case, start to finish
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[70ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
              We will follow one real use case, document reconciliation,
              checking that incoming invoices and delivery notes match your
              orders and records. You will see it end to end, from the moment a
              document arrives to the moment it exports to your ERP, and how
              OperaLayer helps your warehouse and accounting teams handle it.
            </p>
          </Reveal>
        </div>

        {/* Five-step flow */}
        <Reveal delay={0.15}>
          <ol className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-[repeat(5,minmax(0,1fr))] lg:gap-0">
            {steps.map((s, i) => (
              <li key={s.title} className="flex items-stretch">
                <div className="flex h-full min-h-[160px] flex-1 flex-col rounded-[6px] border border-[var(--sw-black)]/10 bg-white p-5">
                  <span className="font-head text-[13px] tabular-nums leading-none text-[var(--sw-blue)]">
                    {i + 1}
                  </span>
                  <span className="mt-4 font-head text-[15px] leading-snug text-[var(--sw-black)] md:text-[16px]">
                    {s.title}
                  </span>
                  <span className="mt-2 text-[13px] leading-relaxed text-[var(--sw-black)]/70">
                    {s.body}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    aria-hidden
                    className="hidden shrink-0 items-center px-1.5 lg:flex"
                  >
                    <ChevronRight className="h-4 w-4 text-[var(--sw-black)]/30" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 text-[14px] leading-relaxed text-[var(--sw-black)]/60 md:text-[15px]">
            Every correction teaches OperaLayer for the next document.
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-8">
            <button
              type="button"
              onClick={() => setFlowOpen(true)}
              className="inline-flex items-center gap-2 rounded-[4px] border border-[var(--sw-black)]/25 px-5 py-3 font-head text-[14px] text-[var(--sw-black)] transition-colors duration-300 hover:border-[var(--sw-blue)] hover:text-[var(--sw-blue)] md:text-[15px]"
            >
              See the full flow
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            This is the first use case we are rolling out. More follow in the
            weeks after.
          </p>
        </Reveal>
      </div>

      <FullFlowModal open={flowOpen} onClose={() => setFlowOpen(false)} />
    </section>
  );
}
