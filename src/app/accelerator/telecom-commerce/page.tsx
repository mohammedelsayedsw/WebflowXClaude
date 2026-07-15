"use client";

import { Hero } from "@/sections/telecom-commerce/Hero";
import { AcceleratorAtAGlance } from "@/sections/telecom-commerce/AcceleratorAtAGlance";
import { Problems } from "@/sections/telecom-commerce/Problems";
import { Outcomes } from "@/sections/telecom-commerce/Outcomes";
import { AcceleratorValue } from "@/sections/telecom-commerce/AcceleratorValue";
import { HowWeWork } from "@/sections/telecom-commerce/HowWeWork";
import { WhatShips } from "@/sections/telecom-commerce/WhatShips";
import { FAQ } from "@/sections/telecom-commerce/FAQ";
import { CTA } from "@/sections/telecom-commerce/CTA";
import { CaseStudy } from "@/sections/telecom-commerce/CaseStudy";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <AcceleratorAtAGlance />
      <Problems />
      <Outcomes />
      <AcceleratorValue />
      <HowWeWork />
      <WhatShips />
      <FAQ />
      <CTA />
      <CaseStudy />
    </main>
  );
}
