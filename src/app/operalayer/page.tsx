"use client";

import { OLHeader, OLHero, Faq, Contact } from "@/sections/operalayer/kit/parts";
import { WhatItIs, Demo, HowItWorks, AppsRows, Systems } from "@/sections/operalayer/Overview";
import { Familiar } from "@/sections/operalayer/Familiar";

const FAQ = [
  {
    q: "Is OperaLayer a replacement for our ERP?",
    a: "No. It reads from your ERP and writes back to it. The ERP stays your system of record, and OperaLayer takes over the work around it.",
  },
  {
    q: "Which ERPs does it work with?",
    a: "Apps run in production on Microsoft Dynamics NAV, Microsoft Business Central, and Magento (Adobe Commerce). For other systems we look at what they can share through an API, a database, or a file export before we scope the app.",
  },
  {
    q: "How long until the first app is live?",
    a: "Four weeks. You see a working prototype on your own data in the first week, and the scope is fixed before the build starts.",
  },
  {
    q: "How is AI used with our data?",
    a: "AI reads documents and suggests matches, and a person approves anything unusual. Data goes to an external AI service only when that use is agreed with you in advance and risk assessed.",
  },
  {
    q: "What if our problem is not one of these apps?",
    a: "Most apps started as one client's problem. We scope yours the same way, and it follows the same four-week plan.",
  },
];

/** OperaLayer product page. */
export default function Page() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <OLHeader
        links={[
          { id: "what", label: "What it is" },
          { id: "example", label: "Example" },
          { id: "how", label: "How it works" },
          { id: "apps", label: "Apps" },
        ]}
      />
      <OLHero
        name="OperaLayer"
        line={
          <>
            AI apps on top of <span className="text-[var(--sw-mint)]">your ERP.</span>
          </>
        }
        body="OperaLayer takes the work that falls between your systems and sends a person only what needs a decision. Your ERP stays as it is."
        secondary={{ id: "example", label: "See an example" }}
      />
      <WhatItIs />
      <Demo />
      <HowItWorks />
      <AppsRows />
      <Familiar />
      <Systems />
      <Faq items={FAQ} />
      <Contact title="Get OperaLayer" body="Tell us about one process your team still does by hand. We will show you what the app for it looks like." />
    </main>
  );
}
