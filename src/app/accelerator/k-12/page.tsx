"use client";

import { Hero } from "@/sections/k-12/Hero";
import { AcceleratorAtAGlance } from "@/sections/k-12/AcceleratorAtAGlance";
import { Problems } from "@/sections/k-12/Problems";
import { Outcomes } from "@/sections/k-12/Outcomes";
import { AcceleratorValue } from "@/sections/k-12/AcceleratorValue";
import { HowWeWork } from "@/sections/k-12/HowWeWork";
import { WhatShips } from "@/sections/k-12/WhatShips";
import { FAQ } from "@/sections/k-12/FAQ";
import { CTA } from "@/sections/k-12/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <AcceleratorAtAGlance />
      <Problems />
      <Outcomes />
      <AcceleratorValue />
      <HowWeWork />
      <WhatShips />
      <FAQ />
      <CTA />
    </main>
  );
}
