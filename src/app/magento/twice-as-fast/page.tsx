"use client";

import { Galaxy } from "@/sections/magento-twice-as-fast/Galaxy";
import { Hero } from "@/sections/magento-twice-as-fast/Hero";
import { Denials } from "@/sections/magento-twice-as-fast/Denials";
import { RevealDate } from "@/sections/magento-twice-as-fast/RevealDate";
import { CTA } from "@/sections/magento-twice-as-fast/CTA";

export default function Page() {
  return (
    <main className="relative isolate min-h-screen flex flex-col bg-[#05070f]">
      <Galaxy />
      <Hero />
      <Denials />
      <RevealDate />
      <CTA />
    </main>
  );
}
