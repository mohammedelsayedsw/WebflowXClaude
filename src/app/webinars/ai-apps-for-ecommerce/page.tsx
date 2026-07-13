"use client";

import { Hero } from "@/sections/webinars-ai-apps-for-ecommerce/Hero";
import { IntroParagraph } from "@/sections/webinars-ai-apps-for-ecommerce/IntroParagraph";
import { StatBand } from "@/sections/webinars-ai-apps-for-ecommerce/StatBand";
import { WhatThisIsAbout } from "@/sections/webinars-ai-apps-for-ecommerce/WhatThisIsAbout";
import { TheGap } from "@/sections/webinars-ai-apps-for-ecommerce/TheGap";
import { LiveDemoTeaser } from "@/sections/webinars-ai-apps-for-ecommerce/LiveDemoTeaser";
import { WalkAwayWith } from "@/sections/webinars-ai-apps-for-ecommerce/WalkAwayWith";
import { WhoThisIsFor } from "@/sections/webinars-ai-apps-for-ecommerce/WhoThisIsFor";
import { SpeakerBio } from "@/sections/webinars-ai-apps-for-ecommerce/SpeakerBio";
import { CTA } from "@/sections/webinars-ai-apps-for-ecommerce/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <IntroParagraph />
      <StatBand />
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
