"use client";

import { Hero } from "@/sections/webinars-pimcore/Hero";
import { Takeaways } from "@/sections/webinars-pimcore/Takeaways";
import { Problem } from "@/sections/webinars-pimcore/Problem";
import { Costs } from "@/sections/webinars-pimcore/Costs";
import { Covered } from "@/sections/webinars-pimcore/Covered";
import { Demos } from "@/sections/webinars-pimcore/Demos";
import { CaseStudy } from "@/sections/webinars-pimcore/CaseStudy";
import { WhoShouldJoin } from "@/sections/webinars-pimcore/WhoShouldJoin";
import { Speakers } from "@/sections/webinars-pimcore/Speakers";
import { CTA } from "@/sections/webinars-pimcore/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Covered />
      <Problem />
      <Demos />
      <Costs />
      <CaseStudy />
      <WhoShouldJoin />
      <Speakers />
      <Takeaways />
      <CTA />
    </main>
  );
}
