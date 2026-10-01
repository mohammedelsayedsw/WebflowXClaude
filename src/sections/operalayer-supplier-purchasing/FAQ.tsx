"use client";

import { Faq } from "@/sections/operalayer/shared/Faq";

const ITEMS = [
  {
    q: "Does OperaLayer replace Business Central?",
    a: "No. Business Central keeps running your books and purchase orders exactly as it does today. OperaLayer reads from it and adds the purchasing views your buyers work in.",
  },
  {
    q: "How does our purchasing data get into OperaLayer?",
    a: "We connect to Business Central and bring in the order sheets and supplier confirmations your buyers already keep. Your team carries on entering orders where they enter them now.",
  },
  {
    q: "Who can see what?",
    a: "Access is set per role, so a buyer can work on their own brands while finance and leadership see the whole season. Every change is logged with who made it and when.",
  },
  {
    q: "We run a different ERP. Does this still work for us?",
    a: "Yes. OperaLayer connects to the systems you already run, and Business Central is simply the one this retailer uses. The first step is to look at where your purchase orders and supplier files live today.",
  },
  {
    q: "How long does a module like this take?",
    a: "Each module follows a four-week rhythm. You see a working prototype on your own data in the first week, and the module goes live in week four.",
  },
  {
    q: "Who owns the code and the data?",
    a: "You do. The code, the data, and the IP stay with you, and there is no lock-in.",
  },
  {
    q: "How do you handle data security?",
    a: "We work under ISO-based processes for information security and quality management. Your data only goes to an external AI service in cases we define and agree with you first.",
  },
];

export function FAQ() {
  return (
    <Faq
      heading={
        <>
          Questions buyers and <span className="text-[var(--sw-mint)]">finance teams</span> ask
        </>
      }
      items={ITEMS}
    />
  );
}
