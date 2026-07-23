"use client";

import { Hero } from "@/sections/childcare-growth-intelligence/Hero";
import { InShort } from "@/sections/childcare-growth-intelligence/InShort";
import { Problems } from "@/sections/childcare-growth-intelligence/Problems";
import { TheFix } from "@/sections/childcare-growth-intelligence/TheFix";
import { Proof } from "@/sections/childcare-growth-intelligence/Proof";
import { Delivery } from "@/sections/childcare-growth-intelligence/Delivery";
import { CTA } from "@/sections/childcare-growth-intelligence/CTA";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col [text-wrap:pretty]">
      <Hero />
      <InShort />
      <Problems />
      <TheFix />
      <Proof />
      <Delivery />
      <CTA />
    </main>
  );
}
