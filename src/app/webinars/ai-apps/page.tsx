"use client";

import { Hero } from "@/sections/webinars-ai-apps/Hero";
import { IntroParagraph } from "@/sections/webinars-ai-apps/IntroParagraph";
import { WhatThisIsAbout } from "@/sections/webinars-ai-apps/WhatThisIsAbout";
import { LiveDemoTeaser } from "@/sections/webinars-ai-apps/LiveDemoTeaser";
import { WithoutWith } from "@/sections/webinars-ai-apps/WithoutWith";
import { WalkAwayWith } from "@/sections/webinars-ai-apps/WalkAwayWith";
import { WhoThisIsFor } from "@/sections/webinars-ai-apps/WhoThisIsFor";
import { SpeakerBio } from "@/sections/webinars-ai-apps/SpeakerBio";
import { CTA } from "@/sections/webinars-ai-apps/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <IntroParagraph />
      <WhatThisIsAbout />
      <LiveDemoTeaser />
      <WithoutWith />
      <WalkAwayWith />
      <WhoThisIsFor />
      <SpeakerBio />
      <CTA />
    </main>
  );
}
