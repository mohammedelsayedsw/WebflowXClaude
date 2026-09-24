"use client";

import {
  ClipboardList,
  FileText,
  HeartPulse,
  ShoppingCart,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const DOCS: { icon: typeof FileText; title: string; body: string }[] = [
  {
    icon: FileText,
    title: "Supplier invoices",
    body: "Checks each invoice for missing details and fills in your finance screens",
  },
  {
    icon: ShoppingCart,
    title: "Customer orders",
    body: "Takes orders that arrive by email and fills in the right order screens",
  },
  {
    icon: Truck,
    title: "Purchase orders",
    body: "Finds the products and quantities in supplier documents and fills in the order",
  },
  {
    icon: ClipboardList,
    title: "Work orders",
    body: "Reads dates and quantities from work instructions and fills in your production screens",
  },
  {
    icon: HeartPulse,
    title: "Insurance claims",
    body: "Goes through every screen a claim needs and holds it until a person checks it",
  },
];

export function AnyDocument() {
  return (
    <section
      id="any-document"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-white">
            <span className="text-white/55">5</span>
            <span className="h-px w-6 bg-white/20" />
            <span>Document types</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[28ch]">
            One tool for{" "}
            <span style={{ color: "var(--sw-mint)" }}>every document</span> your
            team types into the AS/400
          </h2>
        </Reveal>

        {/* Five cards. Two rows of three would leave a hole, so the last two
            share the width of three on desktop and the grid stays full. */}
        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {DOCS.map((d, i) => (
            <Reveal
              key={d.title}
              delay={i * 0.07}
              className={`h-full ${i < 3 ? "lg:col-span-2" : "lg:col-span-3"}`}
            >
              <li className="flex h-full gap-4 rounded-[4px] border border-white/10 bg-white/[0.03] p-5 md:p-6">
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[4px] border border-white/10 bg-white/[0.04] text-[var(--sw-mint)]"
                >
                  <d.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>
                <div>
                  <div className="font-head font-bold text-white text-[16px] md:text-[18px] leading-tight text-balance">
                    {d.title}
                  </div>
                  <p className="mt-2 text-white/65 text-[14px] md:text-[15px] leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.4}>
          <p className="mt-8 md:mt-10 text-white/70 text-[16px] md:text-[18px] leading-relaxed">
            Does your team type a different document into the AS/400? Ask us
            about it during the webinar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
