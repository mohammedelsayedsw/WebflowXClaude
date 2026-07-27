"use client";

import { FileCheck, Boxes, AlertTriangle } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const useCases: {
  icon: typeof FileCheck;
  title: string;
  body: string;
}[] = [
  {
    icon: FileCheck,
    title: "Document matching",
    body: "Match purchase orders, invoices, delivery notes, and transport documents automatically. Flag missing information, quantity differences, and price differences.",
  },
  {
    icon: Boxes,
    title: "Stock and shipment control",
    body: "One live view of purchase orders, delayed shipments, and stock. See at a glance what is available, at risk, or blocked.",
  },
  {
    icon: AlertTriangle,
    title: "Procurement and exception management",
    body: "Bring delayed orders, missing documents, supplier issues, and warehouse problems into one prioritised queue, so your team knows what to handle first.",
  },
];

export function HowItSolves() {
  return (
    <section
      id="how-it-solves"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">4</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The solution</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mt-6">
              Three operational workflows
              <br />
              <span className="text-[var(--sw-blue)]">OperaLayer takes over</span>
            </h2>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {useCases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07} className="h-full">
              <li className="relative flex h-full flex-col rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6">
                <span
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-blue)]"
                  aria-hidden
                >
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="font-head font-bold text-[var(--sw-black)] text-[17px] md:text-[18px] leading-tight">
                  {c.title}
                </div>
                <p className="mt-2.5 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
                  {c.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
