"use client";

import { Hero } from "@/sections/diy-building-materials/Hero";
import { AcceleratorAtAGlance } from "@/sections/diy-building-materials/AcceleratorAtAGlance";
import { Problems } from "@/sections/diy-building-materials/Problems";
import { Differentiator } from "@/sections/diy-building-materials/Differentiator";
import { Outcomes } from "@/sections/diy-building-materials/Outcomes";
import { ReferenceCase } from "@/sections/diy-building-materials/ReferenceCase";
import { AcceleratorValue } from "@/sections/diy-building-materials/AcceleratorValue";
import { Testimonials } from "@/sections/diy-building-materials/Testimonials";
import { HowWeWork } from "@/sections/diy-building-materials/HowWeWork";
import { WhatShips } from "@/sections/diy-building-materials/WhatShips";
import { FAQ } from "@/sections/diy-building-materials/FAQ";
import { CTA } from "@/sections/diy-building-materials/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <AcceleratorAtAGlance />
      <Problems />
      <Differentiator />
      <Outcomes />
      <ReferenceCase />
      <AcceleratorValue />
      <Testimonials />
      <HowWeWork />
      <WhatShips />
      <FAQ />
      <CTA />
    </main>
  );
}
