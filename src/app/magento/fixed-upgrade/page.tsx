"use client";

import { Hero } from "@/sections/magento-fixed-upgrade/Hero";
import { Tiers } from "@/sections/magento-fixed-upgrade/Tiers";
import { Problems } from "@/sections/magento-fixed-upgrade/Problems";
import { Savings } from "@/sections/magento-fixed-upgrade/Savings";
import { HowItWorks } from "@/sections/magento-fixed-upgrade/HowItWorks";
import { Proof } from "@/sections/magento-fixed-upgrade/Proof";
import { FAQ } from "@/sections/magento-fixed-upgrade/FAQ";
import { CTA } from "@/sections/magento-fixed-upgrade/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Tiers />
      <Problems />
      <Savings />
      <HowItWorks />
      <Proof />
      <FAQ />
      <CTA />
    </main>
  );
}
