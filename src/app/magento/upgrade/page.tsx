"use client";

import { Hero } from "@/sections/magento-upgrade/Hero";
import { Problems } from "@/sections/magento-upgrade/Problems";
import { Offer } from "@/sections/magento-upgrade/Offer";
import { HowItWorks } from "@/sections/magento-upgrade/HowItWorks";
import { WhatYouGet } from "@/sections/magento-upgrade/WhatYouGet";
import { Cases } from "@/sections/magento-upgrade/Cases";
import { Testimonials } from "@/sections/magento-upgrade/Testimonials";
import { CTA } from "@/sections/magento-upgrade/CTA";
import { FAQ } from "@/sections/magento-upgrade/FAQ";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Problems />
      <Offer />
      <HowItWorks />
      <WhatYouGet />
      <Cases />
      <Testimonials />
      <CTA />
      <FAQ />
    </main>
  );
}
