"use client";

import { Hero } from "@/sections/webinars-adobe-commerce-to-magento-open-source/Hero";
import { IntroParagraph } from "@/sections/webinars-adobe-commerce-to-magento-open-source/IntroParagraph";
import { WhatThisIsAbout } from "@/sections/webinars-adobe-commerce-to-magento-open-source/WhatThisIsAbout";
import { TheGap } from "@/sections/webinars-adobe-commerce-to-magento-open-source/TheGap";
import { LiveDemoTeaser } from "@/sections/webinars-adobe-commerce-to-magento-open-source/LiveDemoTeaser";
import { WalkAwayWith } from "@/sections/webinars-adobe-commerce-to-magento-open-source/WalkAwayWith";
import { WhoThisIsFor } from "@/sections/webinars-adobe-commerce-to-magento-open-source/WhoThisIsFor";
import { SpeakerBio } from "@/sections/webinars-adobe-commerce-to-magento-open-source/SpeakerBio";
import { CTA } from "@/sections/webinars-adobe-commerce-to-magento-open-source/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <IntroParagraph />
      <WhatThisIsAbout />
      <TheGap />
      <LiveDemoTeaser />
      <WalkAwayWith />
      <WhoThisIsFor />
      <SpeakerBio />
      <CTA />
    </main>
  );
}
