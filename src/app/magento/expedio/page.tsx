import { AuroraRain } from "@/sections/magento-expedio/AuroraRain";
import { Benchmarks } from "@/sections/magento-expedio/Benchmarks";
import { Compat } from "@/sections/magento-expedio/Compat";
import { Demo } from "@/sections/magento-expedio/Demo";
import { BuiltBy, Contact, HyvaAndExpedio, WhatItIs } from "@/sections/magento-expedio/Expedio";
import { Faq } from "@/sections/magento-expedio/Faq";
import { Hero } from "@/sections/magento-expedio/Hero";
import { Packages } from "@/sections/magento-expedio/Packages";
import { Report } from "@/sections/magento-expedio/Sections";
import { SiteHeader } from "@/sections/magento-expedio/SiteHeader";
import { WhySlow } from "@/sections/magento-expedio/WhySlow";

/**
 * The Expedio reveal, live from October 6, 17:00 EEST. Built and reviewed at
 * twice-as-fast-reveal.vercel.app. Owns its header (the site Header skips this
 * route); the site footer comes from the root layout.
 */
export default function ExpedioPage() {
  return (
    <main className="expedio relative isolate min-h-screen flex flex-col bg-[var(--sw-ink)] font-[family-name:var(--font-inter)]">
      <SiteHeader />
      <AuroraRain />
      <Hero />
      <WhatItIs />
      <WhySlow />
      <Demo />
      <Benchmarks />
      <Packages />
      <BuiltBy />
      <HyvaAndExpedio />
      <Compat />
      <Report />
      <Faq />
      <Contact />
    </main>
  );
}
