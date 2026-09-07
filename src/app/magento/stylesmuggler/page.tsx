"use client";

import { Field } from "@/sections/magento-stylesmuggler/Field";
import { Hero } from "@/sections/magento-stylesmuggler/Hero";
import { Timeline } from "@/sections/magento-stylesmuggler/Timeline";
import { Facts } from "@/sections/magento-stylesmuggler/Facts";
import { Response } from "@/sections/magento-stylesmuggler/Response";
import { Terms } from "@/sections/magento-stylesmuggler/Terms";
import { ReadyMage } from "@/sections/magento-stylesmuggler/ReadyMage";
import { CTA } from "@/sections/magento-stylesmuggler/CTA";

export default function Page() {
  return (
    <main className="relative isolate min-h-screen flex flex-col bg-[#05070f]">
      <Field />
      <Hero />
      <Timeline />
      <Facts />
      <Response />
      <Terms />
      <ReadyMage />
      <CTA />
    </main>
  );
}
