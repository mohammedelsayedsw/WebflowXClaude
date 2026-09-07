"use client";

import { Field } from "@/sections/magento-stylesmuggler/Field";
import { Hero } from "@/sections/magento-stylesmuggler/Hero";
import { Facts } from "@/sections/magento-stylesmuggler/Facts";
import { Response } from "@/sections/magento-stylesmuggler/Response";
import { Check } from "@/sections/magento-stylesmuggler/Check";
import { FAQ } from "@/sections/magento-stylesmuggler/FAQ";
import { Call } from "@/sections/magento-stylesmuggler/Call";

export default function Page() {
  return (
    <main className="relative isolate min-h-screen flex flex-col bg-[#05070f]">
      <Field />
      <Hero />
      <Facts />
      <Response />
      <Check />
      <FAQ />
      <Call />
    </main>
  );
}
