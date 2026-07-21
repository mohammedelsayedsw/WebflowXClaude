"use client";

import { FileCheck, ShoppingCart, Boxes, AlertTriangle } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const useCases: {
  icon: typeof FileCheck;
  title: string;
  dept: string;
  body: string;
  deepDive?: boolean;
}[] = [
  {
    icon: FileCheck,
    title: "Document reconciliation",
    dept: "Accounting and warehouse",
    body:
      "Invoices, delivery notes, and waybills matched against purchase orders automatically.",
    deepDive: true,
  },
  {
    icon: ShoppingCart,
    title: "Procurement",
    dept: "Purchasing",
    body: "Reorder and supplier workflows that run across your systems.",
  },
  {
    icon: Boxes,
    title: "Stock and shipment control",
    dept: "Warehouse and logistics",
    body: "One live view of stock, orders, and shipments.",
  },
  {
    icon: AlertTriangle,
    title: "Exception allocation",
    dept: "Supply chain",
    body: "Faster response when a shipment or supply disruption hits.",
  },
];

export function HowItSolves() {
  return (
    <section
      id="how-it-solves"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <SectionLabel index="5">What teams use it for</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mt-6">
              Four things teams use{" "}
              <span style={{ color: "var(--sw-mint)" }}>OperaLayer</span> for
            </h2>
          </Reveal>
        </div>

        {/* Use-case cards, all four in one row on desktop so each reads as a
            tall column. Reconciliation is flagged as this session's deep dive. */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {useCases.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07} className="h-full">
              <li
                className="relative flex h-full flex-col rounded-[4px] border p-5"
                style={
                  c.deepDive
                    ? {
                        background: "rgba(110,247,110,0.06)",
                        borderColor: "rgba(110,247,110,0.35)",
                      }
                    : {
                        background: "rgba(255,255,255,0.03)",
                        borderColor: "rgba(255,255,255,0.10)",
                      }
                }
              >
                <span
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/15 bg-white/[0.04] text-[var(--sw-mint)]"
                  aria-hidden
                >
                  <c.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="label-code text-white/50 text-[10px] mb-2">
                  {c.dept}
                </div>
                <div className="font-head font-bold text-white text-[17px] md:text-[18px] leading-tight">
                  {c.title}
                </div>
                <p className="mt-2.5 text-white/70 text-[14px] leading-relaxed">
                  {c.body}
                </p>
                {c.deepDive && (
                  <span
                    className="label-code mt-auto pt-5 text-[9px] font-semibold"
                    style={{ color: "var(--sw-mint)" }}
                  >
                    This session&apos;s deep dive
                  </span>
                )}
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
