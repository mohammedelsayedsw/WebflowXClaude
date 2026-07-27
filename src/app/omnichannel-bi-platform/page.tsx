"use client";

import { Hero } from "@/sections/omnichannel-bi-platform/Hero";
import { InShort } from "@/sections/omnichannel-bi-platform/InShort";
import { Problems } from "@/sections/omnichannel-bi-platform/Problems";
import { TheFix } from "@/sections/omnichannel-bi-platform/TheFix";
import { Proof } from "@/sections/omnichannel-bi-platform/Proof";
import { HowWeStart } from "@/sections/omnichannel-bi-platform/HowWeStart";
import { CTA } from "@/sections/omnichannel-bi-platform/CTA";

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
