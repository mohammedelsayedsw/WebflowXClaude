"use client";

import { Hero } from "@/sections/meet-magento-france/Hero";
import { Topics } from "@/sections/meet-magento-france/Topics";
import { WhoYoullMeet } from "@/sections/meet-magento-france/WhoYoullMeet";
import { WhyMeet } from "@/sections/meet-magento-france/WhyMeet";
import { CTA } from "@/sections/meet-magento-france/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Topics />
      <WhoYoullMeet />
      <WhyMeet />
      <CTA />
    </main>
  );
}
