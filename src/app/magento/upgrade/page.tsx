"use client";

import { Loop } from "@/sections/magento-upgrade/Loop";
import { Hero } from "@/sections/magento-upgrade/Hero";
import { VersionCheck } from "@/sections/magento-upgrade/VersionCheck";
import { Covered } from "@/sections/magento-upgrade/Covered";
import { HowItWorks } from "@/sections/magento-upgrade/HowItWorks";
import { Cases } from "@/sections/magento-upgrade/Cases";
import { Testimonials } from "@/sections/magento-upgrade/Testimonials";
import { FAQ } from "@/sections/magento-upgrade/FAQ";
import { CTA } from "@/sections/magento-upgrade/CTA";

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
      <HowItWorks />
      <Cases />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  );
}
