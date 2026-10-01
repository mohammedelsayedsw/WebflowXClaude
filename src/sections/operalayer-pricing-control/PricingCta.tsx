"use client";

import { Cta } from "@/sections/operalayer/shared/Cta";

export function PricingCta() {
  return (
    <Cta
      heading={
        <>
          Talk to us about your <span style={{ color: "var(--sw-mint)" }}>pricing rules</span>
        </>
      }
      body="Bring the spreadsheet you price from today. On the first call we look at how your rules work and what a pricing module would need to connect to."
      points={[
        "We map your state and margin rules from your current spreadsheet",
        "You see a working prototype on your own data in week one",
        "The module goes live in week four with training and support",
      ]}
    />
  );
}
