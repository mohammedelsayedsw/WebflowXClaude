"use client";

import { Faq } from "@/sections/operalayer/shared/Faq";
import { Cta } from "@/sections/operalayer/shared/Cta";

export function PillarFaq() {
  return (
    <Faq
      heading={
        <>
          What leaders ask before{" "}
          <span className="text-[var(--sw-mint)]">the first module</span>
        </>
      }
      items={[
        {
          q: "Does OperaLayer replace our ERP or our eCommerce platform?",
          a: "No. It connects to the systems you run today and reads from them. Your ERP, CRM, and store keep doing their jobs, and the apps cover the work that sits between them.",
        },
        {
          q: "Which systems can it connect to?",
          a: "Modules in production today run on Microsoft Dynamics NAV, Microsoft Business Central, and Magento (Adobe Commerce). For any other system, we look at what it can share through an API, a database, or a file export before we scope the module.",
        },
        {
          q: "How long does a module take?",
          a: "Four weeks from kickoff to live. You see a working prototype on your own data in the first week, and the scope is fixed before the build starts.",
        },
        {
          q: "Who owns the code and the data?",
          a: "You do. There is no lock-in and no hidden cost, and your data stays in your systems and your environment.",
        },
        {
          q: "How do you handle data security and AI services?",
          a: "We follow ISO-based processes for information security, cloud security, and quality management. Your data goes to an external AI service only when that case is defined in advance, agreed with you, and risk assessed.",
        },
        {
          q: "What if our problem is not on the module list?",
          a: "Most modules on the list started as one client's problem. We scope yours the same way, and it follows the same four-week rhythm.",
        },
      ]}
    />
  );
}

export function PillarCta() {
  return (
    <Cta
      heading={
        <>
          Tell us about the gap that{" "}
          <span className="text-[var(--sw-mint)]">we should close first</span>
        </>
      }
      body="Bring one process that lives in a spreadsheet, an inbox, or a backlog. We will show you how a module for it would work and which systems it would connect to."
      points={[
        "A call about one specific process in your business",
        "A working prototype on your data in week one if you go ahead",
        "Your code and your data stay yours",
      ]}
    />
  );
}
