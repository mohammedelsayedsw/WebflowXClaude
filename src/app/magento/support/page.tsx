"use client";

import { Hero } from "@/sections/magento-support/Hero";
import { AtAGlance } from "@/sections/magento-support/AtAGlance";
import { Problems } from "@/sections/magento-support/Problems";
import { TheMath } from "@/sections/magento-support/TheMath";
import { Proof } from "@/sections/magento-support/Proof";
import { HowWeWork } from "@/sections/magento-support/HowWeWork";
import { FAQ } from "@/sections/magento-support/FAQ";
import { CTA } from "@/sections/magento-support/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <AtAGlance />
      <Problems />
      <TheMath />
      <Proof />
      <HowWeWork />
      <FAQ />
      <CTA />
    </main>
  );
}
