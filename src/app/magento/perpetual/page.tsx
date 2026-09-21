"use client";

import { Loop } from "@/sections/magento-perpetual/Loop";
import { Hero } from "@/sections/magento-perpetual/Hero";
import { VersionCheck } from "@/sections/magento-perpetual/VersionCheck";
import { Covered } from "@/sections/magento-perpetual/Covered";
import { HowItWorks } from "@/sections/magento-perpetual/HowItWorks";
import { Cases } from "@/sections/magento-perpetual/Cases";
import { Testimonials } from "@/sections/magento-perpetual/Testimonials";
import { FAQ } from "@/sections/magento-perpetual/FAQ";
import { CTA } from "@/sections/magento-perpetual/CTA";

/**
 * Perpetual: free Magento upgrades for as long as scandiweb builds the store.
 * The page shares its ground with magento/twice-as-fast (ink, a fixed canvas
 * behind everything), with the loop in place of the beam. Dark sections have
 * no background of their own, so the star field shows through them; the light
 * ones cover it.
 */
export default function Page() {
  return (
    <main className="relative isolate min-h-screen flex flex-col bg-[#05070f]">
      <Loop />
      <Hero />
      <VersionCheck />
      <Covered />
      <Cases />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
