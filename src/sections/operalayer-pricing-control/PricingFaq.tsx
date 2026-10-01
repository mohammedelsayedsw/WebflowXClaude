"use client";

import { Faq, type FaqItem } from "@/sections/operalayer/shared/Faq";

const ITEMS: FaqItem[] = [
  {
    q: "Do we have to change our Magento store?",
    a: "No. OperaLayer runs next to Magento and sends prices to it through the Magento API, so your catalog, checkout, and theme stay as they are.",
  },
  {
    q: "Our store is not on Magento. Can this still work?",
    a: "Yes. The pricing rules live in OperaLayer, so the export can go to another store platform such as Shopify or BigCommerce, or to your ERP. We check the connection while we build the first prototype on your data.",
  },
  {
    q: "Who decides when a price changes?",
    a: "Your team does. OperaLayer works out the new prices and schedules them, and the calls that matter, such as a price drop on a bestseller, wait for a person to approve them.",
  },
  {
    q: "What happens if a rule is wrong?",
    a: "Every rule change is logged with who made it and when, so a wrong rate is easy to find and correct. The next scheduled export then sends the corrected prices to the store.",
  },
  {
    q: "How long does it take to build?",
    a: "A module like this follows a four-week rhythm. You see a working prototype on your own data in the first week, and it goes live in week four with training and 30 days of support.",
  },
  {
    q: "Who owns the code and the pricing data?",
    a: "You do. Your data and your code stay yours, and there is no lock-in.",
  },
  {
    q: "Is our pricing data shared with AI services?",
    a: "Only if you agree to it. scandiweb follows ISO-based processes for information security, and any case where client data would go to an external AI service is defined and confirmed with you first.",
  },
];

export function PricingFaq() {
  return (
    <Faq
      heading={
        <>
          Questions about <span style={{ color: "var(--sw-mint)" }}>pricing control</span>
        </>
      }
      items={ITEMS}
    />
  );
}
