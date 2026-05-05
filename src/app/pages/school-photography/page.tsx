"use client";

import { Hero } from "@/sections/school-photography/Hero";
import { AcceleratorAtAGlance } from "@/sections/school-photography/AcceleratorAtAGlance";
import { Problems } from "@/sections/school-photography/Problems";
import { Differentiator } from "@/sections/school-photography/Differentiator";
import { Outcomes } from "@/sections/school-photography/Outcomes";
import { ReferenceCase } from "@/sections/school-photography/ReferenceCase";
import { AcceleratorValue } from "@/sections/school-photography/AcceleratorValue";
import { Testimonials } from "@/sections/school-photography/Testimonials";
import { HowWeWork } from "@/sections/school-photography/HowWeWork";
import { WhatShips } from "@/sections/school-photography/WhatShips";
import { FAQ } from "@/sections/school-photography/FAQ";
import { CTA } from "@/sections/school-photography/CTA";

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
