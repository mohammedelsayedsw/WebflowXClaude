"use client";

import { Hero } from "@/sections/hyva/pwa-studio-to-hyva/Hero";
import { Problems } from "@/sections/hyva/pwa-studio-to-hyva/Problems";
import { Metrics } from "@/sections/hyva/pwa-studio-to-hyva/Metrics";
import { ReferenceCase } from "@/sections/hyva/pwa-studio-to-hyva/ReferenceCase";
import { Timeline } from "@/sections/hyva/pwa-studio-to-hyva/Timeline";
import { WhatShips } from "@/sections/hyva/pwa-studio-to-hyva/WhatShips";
import { FAQ } from "@/sections/hyva/pwa-studio-to-hyva/FAQ";
import { CTA } from "@/sections/hyva/pwa-studio-to-hyva/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Problems />
      <Metrics />
      <ReferenceCase />
      <Timeline />
      <WhatShips />
      <FAQ />
      <CTA />
    </main>
  );
}
