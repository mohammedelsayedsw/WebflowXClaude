"use client";

import { Hero } from "@/sections/multi-market-personalization/Hero";
import { InShort } from "@/sections/multi-market-personalization/InShort";
import { Problems } from "@/sections/multi-market-personalization/Problems";
import { Solution } from "@/sections/multi-market-personalization/Solution";
import { CaseStudy } from "@/sections/multi-market-personalization/CaseStudy";
import { HowWeWork } from "@/sections/multi-market-personalization/HowWeWork";
import { CTA } from "@/sections/multi-market-personalization/CTA";

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
