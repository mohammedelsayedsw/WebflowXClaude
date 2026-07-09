"use client";

import { Hero } from "@/sections/webinars-opera-layer/Hero";
import { TheSession } from "@/sections/webinars-opera-layer/TheSession";
import { ThePattern } from "@/sections/webinars-opera-layer/ThePattern";
import { SixComplaints } from "@/sections/webinars-opera-layer/SixComplaints";
import { WhatIsOperaLayer } from "@/sections/webinars-opera-layer/WhatIsOperaLayer";
import { HowItSolves } from "@/sections/webinars-opera-layer/HowItSolves";
import { Proof } from "@/sections/webinars-opera-layer/Proof";
import { WhyScandiweb } from "@/sections/webinars-opera-layer/WhyScandiweb";
import { CTA } from "@/sections/webinars-opera-layer/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <TheSession />
      <ThePattern />
      <SixComplaints />
      <WhatIsOperaLayer />
      <HowItSolves />
      <Proof />
      <WhyScandiweb />
      <CTA />
    </main>
  );
}
