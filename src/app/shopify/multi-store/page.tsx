"use client";

import { Hero } from "@/sections/shopify-multi-store/Hero";
import { OneConnectedView } from "@/sections/shopify-multi-store/OneConnectedView";
import { WhyHard } from "@/sections/shopify-multi-store/WhyHard";
import { WhatBreaks } from "@/sections/shopify-multi-store/WhatBreaks";
import { SevenLayers } from "@/sections/shopify-multi-store/SevenLayers";
import { WhatChanges } from "@/sections/shopify-multi-store/WhatChanges";
import { GoodFit } from "@/sections/shopify-multi-store/GoodFit";
import { FAQ } from "@/sections/shopify-multi-store/FAQ";
import { CTA } from "@/sections/shopify-multi-store/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <OneConnectedView />
      <WhyHard />
      <WhatBreaks />
      <SevenLayers />
      <WhatChanges />
      <GoodFit />
      <FAQ />
      <CTA />
    </main>
  );
}
