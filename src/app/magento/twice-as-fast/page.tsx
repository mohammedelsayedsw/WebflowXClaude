"use client";

import { Beam } from "@/sections/magento-twice-as-fast/Beam";
import { Hero } from "@/sections/magento-twice-as-fast/Hero";
import { Denials } from "@/sections/magento-twice-as-fast/Denials";
import { LightSweep } from "@/sections/magento-twice-as-fast/LightSweep";
import { RevealDate } from "@/sections/magento-twice-as-fast/RevealDate";
import { CTA } from "@/sections/magento-twice-as-fast/CTA";

export default function Page() {
  return (
    <main className="relative isolate min-h-screen flex flex-col bg-[#05070f]">
      <Beam />
      <Hero />
      <Denials />
      {/* one light sweep behind the reveal and the form, so it never cuts at a section edge */}
      <div className="relative z-10 overflow-hidden">
        <LightSweep />
        <RevealDate />
        <CTA />
      </div>
    </main>
  );
}
