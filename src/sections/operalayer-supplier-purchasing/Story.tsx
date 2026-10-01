"use client";

import { btnPrimary } from "@/components/primitives/buttonStyles";
import { ScrollStory } from "@/sections/operalayer/shared/ScrollStory";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";
import { PurchasingStage } from "@/sections/operalayer-supplier-purchasing/PurchasingStage";

const STEPS = [
  {
    title: "Every supplier brand had its own spreadsheet",
    body: "Buyers tracked each season's commitments one brand at a time, by hand.",
  },
  {
    title: "Changes arrived by email",
    body: "The orders sat in Business Central, while confirmations and new delivery dates came in the inbox.",
  },
  {
    title: "OperaLayer puts every brand in one view of the season",
    body: "It reads the orders from Business Central and keeps the whole season up to date.",
  },
  {
    title: "Every invoice is checked against the confirmed order",
    body: "When a line differs from what the supplier confirmed, the buyer sees it before the goods reach the shelves.",
  },
  {
    title: "Next, the forecast drafts the reorder",
    body: "The retailer is now adding demand forecasts. A buyer approves each suggested order before it goes out.",
  },
];

export function Story() {
  return (
    <ScrollStory
      Stage={PurchasingStage}
      steps={STEPS}
      intro={
        <div>
          <h1 className="font-head text-white text-[36px] sm:text-[48px] lg:text-[54px] leading-[1.04] tracking-[-0.02em] max-w-[19ch] text-balance">
            Supplier Purchasing Intelligence for{" "}
            <span style={{ color: "var(--sw-mint)" }}>Microsoft Business Central</span>
          </h1>
          <p className="mt-7 text-white/70 text-[18px] md:text-[20px] leading-relaxed max-w-[34ch]">
            Your buyers see the whole season, across every supplier brand, in one
            place.
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
