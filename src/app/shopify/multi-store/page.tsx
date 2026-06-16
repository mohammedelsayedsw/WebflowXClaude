"use client";

import { Hero } from "@/sections/shopify-multi-store/Hero";
import { ProofStats } from "@/sections/shopify-multi-store/ProofStats";
import { WhatWeConnect } from "@/sections/shopify-multi-store/WhatWeConnect";
import { WhyHard } from "@/sections/shopify-multi-store/WhyHard";
import { WhatBreaks } from "@/sections/shopify-multi-store/WhatBreaks";
import { GoodFit } from "@/sections/shopify-multi-store/GoodFit";
import { FAQ } from "@/sections/shopify-multi-store/FAQ";
import { CTA } from "@/sections/shopify-multi-store/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <ProofStats />
      <WhatWeConnect />
      <WhyHard />
      <WhatBreaks />
      <GoodFit />
      <FAQ />
      <CTA />
    </main>
  );
}
