"use client";

import { Hero } from "@/sections/customer-data-control-hub/Hero";
import { InShort } from "@/sections/customer-data-control-hub/InShort";
import { Problems } from "@/sections/customer-data-control-hub/Problems";
import { TheFix } from "@/sections/customer-data-control-hub/TheFix";
import { Proof } from "@/sections/customer-data-control-hub/Proof";
import { HowWeStart } from "@/sections/customer-data-control-hub/HowWeStart";
import { CTA } from "@/sections/customer-data-control-hub/CTA";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col [text-wrap:pretty]">
      <Hero />
      <InShort />
      <Problems />
      <TheFix />
      <Proof />
      <HowWeStart />
      <CTA />
    </main>
  );
}
