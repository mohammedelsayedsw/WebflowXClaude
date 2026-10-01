"use client";

import { btnPrimary } from "@/components/primitives/buttonStyles";
import { ScrollStory } from "@/sections/operalayer/shared/ScrollStory";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";
import { PricingStage } from "@/sections/operalayer-pricing-control/PricingStage";

const STEPS = [
  {
    title: "One spreadsheet priced every state",
    body: "One person kept the formulas running, and every price change waited for them.",
  },
  {
    title: "Each state adds its own rules",
    body: "Excise and sales tax differ from state to state, so one product needs a different price in each.",
  },
  {
    title: "OperaLayer works out every state at once",
    body: "It holds the rules and recalculates all 50 states the moment a cost or a rule changes.",
  },
  {
    title: "You approve, and Magento gets the new prices",
    body: "Updates go to the store through its API on the schedule you set.",
  },
  {
    title: "Next, an alert when a competitor moves",
    body: "The retailer is adding a competitor price feed. A person approves any change before it reaches the store.",
  },
];

export function Story() {
  return (
    <ScrollStory
      Stage={PricingStage}
      steps={STEPS}
      intro={
        <div>
          <h1 className="font-head text-white text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[14ch] text-balance">
            State-by-State <span style={{ color: "var(--sw-mint)" }}>Pricing Control</span> for Magento
          </h1>
          <p className="mt-7 text-white/70 text-[18px] md:text-[20px] leading-relaxed max-w-[34ch]">
            OperaLayer prices every product in every US state and sends the prices to
            your Magento store on a schedule you approve.
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
