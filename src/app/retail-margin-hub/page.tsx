"use client";

import { Hero } from "@/sections/retail-margin-hub/Hero";
import { InShort } from "@/sections/retail-margin-hub/InShort";
import { Problems } from "@/sections/retail-margin-hub/Problems";
import { Solution } from "@/sections/retail-margin-hub/Solution";
import { Capabilities } from "@/sections/retail-margin-hub/Capabilities";
import { CaseStudy } from "@/sections/retail-margin-hub/CaseStudy";
import { HowWeWork } from "@/sections/retail-margin-hub/HowWeWork";
import { CTA } from "@/sections/retail-margin-hub/CTA";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col [text-wrap:pretty]">
      <Hero />
      <InShort />
      <Problems />
      <Solution />
      <Capabilities />
      <CaseStudy />
      <HowWeWork />
      <CTA />
    </main>
  );
}
