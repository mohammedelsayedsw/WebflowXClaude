"use client";

import { btnPrimary } from "@/components/primitives/buttonStyles";
import { ScrollStory } from "@/sections/operalayer/shared/ScrollStory";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";
import { InvoiceStage } from "@/sections/operalayer-invoice-matching/InvoiceStage";

const STEPS = [
  {
    title: "Every supplier sends its own kind of PDF",
    body: "Around a hundred suppliers each use a different layout, and they all land on the same desk.",
  },
  {
    title: "OperaLayer reads every line on the invoice",
    body: "It picks out each item and its price, whatever the layout looks like.",
  },
  {
    title: "Each line is checked against the purchase order",
    body: "Quantities and prices are compared line by line, so nobody does it by hand.",
  },
  {
    title: "A person decides on the lines that differ",
    body: "Lines that agree go straight through. Anything else waits for someone to approve it.",
  },
  {
    title: "Navision gets a clean import",
    body: "Approved invoices come out as a file Navision imports.",
  },
];

export function Story() {
  return (
    <ScrollStory
      Stage={InvoiceStage}
      steps={STEPS}
      intro={
        <div>
          <h1 className="font-head text-white text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[15ch] text-balance">
            AI Invoice Matching for{" "}
            <span style={{ color: "var(--sw-mint)" }}>Microsoft Dynamics NAV</span>
          </h1>
          <p className="mt-7 text-white/70 text-[18px] md:text-[20px] leading-relaxed max-w-[36ch]">
            OperaLayer checks every supplier invoice against its purchase order, so
            your team only looks at the exceptions.
          </p>
          <div className="mt-10">
            <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
              Talk to us
            </a>
          </div>
        </div>
      }
    />
  );
}
