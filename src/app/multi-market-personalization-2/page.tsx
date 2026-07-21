"use client";

import { Hero } from "@/sections/multi-market-personalization-2/Hero";
import { InShort } from "@/sections/multi-market-personalization-2/InShort";
import { Problems } from "@/sections/multi-market-personalization-2/Problems";
import { Solution } from "@/sections/multi-market-personalization-2/Solution";
import { CaseStudy } from "@/sections/multi-market-personalization-2/CaseStudy";
import { HowWeWork } from "@/sections/multi-market-personalization-2/HowWeWork";
import { CTA } from "@/sections/multi-market-personalization-2/CTA";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col [text-wrap:pretty]">
      <Hero />
      <InShort />
      <Problems />
      <Solution />
      <CaseStudy />
      <HowWeWork />
      <CTA />
    </main>
  );
}
