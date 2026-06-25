"use client";

import { Hero } from "@/sections/ac-open-source/Hero";
import { Offer } from "@/sections/ac-open-source/Offer";
import { Problems } from "@/sections/ac-open-source/Problems";
import { WhatChanges } from "@/sections/ac-open-source/WhatChanges";
import { Cases } from "@/sections/ac-open-source/Cases";
import { HowWeWork } from "@/sections/ac-open-source/HowWeWork";
import { FAQ } from "@/sections/ac-open-source/FAQ";
import { CTA } from "@/sections/ac-open-source/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Offer />
      <Problems />
      <WhatChanges />
      <Cases />
      <HowWeWork />
      <FAQ />
      <CTA />
    </main>
  );
}
