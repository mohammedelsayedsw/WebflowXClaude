"use client";

import { Hero } from "@/sections/magento-b2c/Hero";
import { Capabilities } from "@/sections/magento-b2c/Capabilities";
import { Cases } from "@/sections/magento-b2c/Cases";
import { CTA } from "@/sections/magento-b2c/CTA";

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
