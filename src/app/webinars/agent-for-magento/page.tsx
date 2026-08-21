"use client";

import { Hero } from "@/sections/webinars-agent-for-magento/Hero";
import { Problem } from "@/sections/webinars-agent-for-magento/Problem";
import { WhatChanged } from "@/sections/webinars-agent-for-magento/WhatChanged";
import { Numbers } from "@/sections/webinars-agent-for-magento/Numbers";
import { Demos } from "@/sections/webinars-agent-for-magento/Demos";
import { HowItWorks } from "@/sections/webinars-agent-for-magento/HowItWorks";
import { AnyStore } from "@/sections/webinars-agent-for-magento/AnyStore";
import { Limits } from "@/sections/webinars-agent-for-magento/Limits";
import { StaysYours } from "@/sections/webinars-agent-for-magento/StaysYours";
import { WhoShouldJoin } from "@/sections/webinars-agent-for-magento/WhoShouldJoin";
import { Host } from "@/sections/webinars-agent-for-magento/Host";
import { FAQ } from "@/sections/webinars-agent-for-magento/FAQ";
import { CTA } from "@/sections/webinars-agent-for-magento/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Problem />
      <WhatChanged />
      <Numbers />
      <Demos />
      <HowItWorks />
      <AnyStore />
      <Limits />
      <StaysYours />
      <WhoShouldJoin />
      <Host />
      <FAQ />
      <CTA />
    </main>
  );
}
