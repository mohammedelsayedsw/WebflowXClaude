"use client";

import { Hero } from "@/sections/ac-open-source/Hero";
import { Offer } from "@/sections/ac-open-source/Offer";
import { Problems } from "@/sections/ac-open-source/Problems";
import { WhatChanges } from "@/sections/ac-open-source/WhatChanges";
import { Cases } from "@/sections/ac-open-source/Cases";
import { HowWeWork } from "@/sections/ac-open-source/HowWeWork";
import { FAQ } from "@/sections/ac-open-source/FAQ";
import { Testimonials } from "@/sections/ac-open-source/Testimonials";
import { CTA } from "@/sections/ac-open-source/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Problems />
      <Offer />
      <WhatChanges />
      <Cases />
      <HowWeWork />
      <Testimonials />
      <CTA />
      <FAQ />
    </main>
  );
}
