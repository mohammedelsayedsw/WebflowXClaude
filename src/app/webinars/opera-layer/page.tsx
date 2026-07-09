"use client";

import { Hero } from "@/sections/webinars-opera-layer/Hero";
import { Overview } from "@/sections/webinars-opera-layer/Overview";
import { TheSession } from "@/sections/webinars-opera-layer/TheSession";
import { ThePattern } from "@/sections/webinars-opera-layer/ThePattern";
import { SixComplaints } from "@/sections/webinars-opera-layer/SixComplaints";
import { WhatIsOperaLayer } from "@/sections/webinars-opera-layer/WhatIsOperaLayer";
import { HowItSolves } from "@/sections/webinars-opera-layer/HowItSolves";
import { SpeakerBio } from "@/sections/webinars-opera-layer/SpeakerBio";
import { PressBand } from "@/sections/webinars-opera-layer/PressBand";
import { CTA } from "@/sections/webinars-opera-layer/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Overview />
      <PressBand />
      <TheSession />
      <ThePattern />
      <SixComplaints />
      <WhatIsOperaLayer />
      <HowItSolves />
      <SpeakerBio />
      <CTA />
    </main>
  );
}
