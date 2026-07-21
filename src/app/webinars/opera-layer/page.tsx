"use client";

import { Hero } from "@/sections/webinars-opera-layer/Hero";
import { Overview } from "@/sections/webinars-opera-layer/Overview";
import { CaseStudy } from "@/sections/webinars-opera-layer/CaseStudy";
import { PressBand } from "@/sections/webinars-opera-layer/PressBand";
import { PainPoints } from "@/sections/webinars-opera-layer/PainPoints";
import { HowItWorks } from "@/sections/webinars-opera-layer/HowItWorks";
import { Agenda } from "@/sections/webinars-opera-layer/Agenda";
import { HowItSolves } from "@/sections/webinars-opera-layer/HowItSolves";
import { TheSession } from "@/sections/webinars-opera-layer/TheSession";
import { SpeakerBio } from "@/sections/webinars-opera-layer/SpeakerBio";
import { CTA } from "@/sections/webinars-opera-layer/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Overview />
      <PressBand />
      <CaseStudy />
      <PainPoints />
      <HowItWorks />
      <HowItSolves />
      <Agenda />
      <TheSession />
      <SpeakerBio />
      <CTA />
    </main>
  );
}
