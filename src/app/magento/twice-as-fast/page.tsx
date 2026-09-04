"use client";

import { Hero } from "@/sections/magento-twice-as-fast/Hero";
import { CTA } from "@/sections/magento-twice-as-fast/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <CTA />
    </main>
  );
}
