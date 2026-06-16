"use client";

import { Hero } from "@/sections/shopify-multi-store/Hero";
import { SystemOverview } from "@/sections/shopify-multi-store/SystemOverview";
import { SevenLayers } from "@/sections/shopify-multi-store/SevenLayers";
import { EcosystemMap } from "@/sections/shopify-multi-store/EcosystemMap";
import { WhatBreaks } from "@/sections/shopify-multi-store/WhatBreaks";
import { WhyHard } from "@/sections/shopify-multi-store/WhyHard";
import { WhatChanges } from "@/sections/shopify-multi-store/WhatChanges";
import { GoodFit } from "@/sections/shopify-multi-store/GoodFit";
import { FAQ } from "@/sections/shopify-multi-store/FAQ";
import { CTA } from "@/sections/shopify-multi-store/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <SystemOverview />
      <SevenLayers />
      <EcosystemMap />
      <WhatBreaks />
      <WhyHard />
      <WhatChanges />
      <GoodFit />
      <FAQ />
      <CTA />
    </main>
  );
}
