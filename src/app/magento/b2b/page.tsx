"use client";

import { Hero } from "@/sections/magento-b2b/Hero";
import { Capabilities } from "@/sections/magento-b2b/Capabilities";
import { Cases } from "@/sections/magento-b2b/Cases";
import { CTA } from "@/sections/magento-b2b/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Capabilities />
      <Cases />
      <CTA />
    </main>
  );
}
