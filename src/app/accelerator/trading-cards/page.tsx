"use client";

import { Hero } from "@/sections/trading-cards/Hero";
import { AcceleratorAtAGlance } from "@/sections/trading-cards/AcceleratorAtAGlance";
import { Problems } from "@/sections/trading-cards/Problems";
import { Differentiator } from "@/sections/trading-cards/Differentiator";
import { Modules } from "@/sections/trading-cards/Modules";
import { ReferenceCase } from "@/sections/trading-cards/ReferenceCase";
import { AcceleratorValue } from "@/sections/trading-cards/AcceleratorValue";
import { Testimonials } from "@/sections/trading-cards/Testimonials";
import { HowWeWork } from "@/sections/trading-cards/HowWeWork";
import { WhatShips } from "@/sections/trading-cards/WhatShips";
import { FAQ } from "@/sections/trading-cards/FAQ";
import { CTA } from "@/sections/trading-cards/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <AcceleratorAtAGlance />
      <Problems />
      <Differentiator />
      <Modules />
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
