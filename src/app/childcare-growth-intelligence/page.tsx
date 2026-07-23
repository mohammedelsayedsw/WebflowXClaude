"use client";

import { Hero } from "@/sections/childcare-growth-intelligence/Hero";
import { ProofStrip } from "@/sections/childcare-growth-intelligence/ProofStrip";
import { Problems } from "@/sections/childcare-growth-intelligence/Problems";
import { Outcomes } from "@/sections/childcare-growth-intelligence/Outcomes";
import { HowItWorks } from "@/sections/childcare-growth-intelligence/HowItWorks";
import { ConnectedData } from "@/sections/childcare-growth-intelligence/ConnectedData";
import { Proof } from "@/sections/childcare-growth-intelligence/Proof";
import { WhoItIsFor } from "@/sections/childcare-growth-intelligence/WhoItIsFor";
import { Delivery } from "@/sections/childcare-growth-intelligence/Delivery";
import { FAQ } from "@/sections/childcare-growth-intelligence/FAQ";
import { CTA } from "@/sections/childcare-growth-intelligence/CTA";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col [text-wrap:pretty]">
      <Hero />
      <ProofStrip />
      <Problems />
      <Outcomes />
      <HowItWorks />
      <ConnectedData />
      <Proof />
      <WhoItIsFor />
      <Delivery />
      <FAQ />
      <CTA />
    </main>
  );
}
