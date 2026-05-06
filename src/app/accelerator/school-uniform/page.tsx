"use client";

import { Hero } from "@/sections/school-uniform/Hero";
import { AcceleratorAtAGlance } from "@/sections/school-uniform/AcceleratorAtAGlance";
import { Problems } from "@/sections/school-uniform/Problems";
import { Differentiator } from "@/sections/school-uniform/Differentiator";
import { Outcomes } from "@/sections/school-uniform/Outcomes";
import { ReferenceCase } from "@/sections/school-uniform/ReferenceCase";
import { AcceleratorValue } from "@/sections/school-uniform/AcceleratorValue";
import { Testimonials } from "@/sections/school-uniform/Testimonials";
import { HowWeWork } from "@/sections/school-uniform/HowWeWork";
import { WhatShips } from "@/sections/school-uniform/WhatShips";
import { FAQ } from "@/sections/school-uniform/FAQ";
import { CTA } from "@/sections/school-uniform/CTA";

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
