"use client";

import { Hero } from "@/sections/decision-grade-commerce-bi/Hero";
import { InShort } from "@/sections/decision-grade-commerce-bi/InShort";
import { Problems } from "@/sections/decision-grade-commerce-bi/Problems";
import { TheFix } from "@/sections/decision-grade-commerce-bi/TheFix";
import { Proof } from "@/sections/decision-grade-commerce-bi/Proof";
import { HowWeStart } from "@/sections/decision-grade-commerce-bi/HowWeStart";
import { CTA } from "@/sections/decision-grade-commerce-bi/CTA";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col [text-wrap:pretty]">
      <Hero />
      <InShort />
      <Problems />
      <TheFix />
      <Proof />
      <HowWeStart />
      <CTA />
    </main>
  );
}
