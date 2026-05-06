"use client";

import { Hero } from "@/sections/hyva/scandipwa-to-hyva/Hero";
import { Problems } from "@/sections/hyva/scandipwa-to-hyva/Problems";
import { Metrics } from "@/sections/hyva/scandipwa-to-hyva/Metrics";
import { ReferenceCase } from "@/sections/hyva/scandipwa-to-hyva/ReferenceCase";
import { Timeline } from "@/sections/hyva/scandipwa-to-hyva/Timeline";
import { WhatShips } from "@/sections/hyva/scandipwa-to-hyva/WhatShips";
import { FAQ } from "@/sections/hyva/scandipwa-to-hyva/FAQ";
import { CTA } from "@/sections/hyva/scandipwa-to-hyva/CTA";

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
