"use client";

import { Hero } from "@/sections/webinars-cdp/Hero";
import { Covered } from "@/sections/webinars-cdp/Covered";
import { Story } from "@/sections/webinars-cdp/Story";
import { Platform } from "@/sections/webinars-cdp/Platform";
import { Results } from "@/sections/webinars-cdp/Results";
import { Takeaways } from "@/sections/webinars-cdp/Takeaways";
import { WhoShouldJoin } from "@/sections/webinars-cdp/WhoShouldJoin";
import { Format } from "@/sections/webinars-cdp/Format";
import { Speakers } from "@/sections/webinars-cdp/Speakers";
import { CTA } from "@/sections/webinars-cdp/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Covered />
      <Story />
      <Platform />
      <Results />
      <Takeaways />
      <WhoShouldJoin />
      <Format />
      <Speakers />
      <CTA />
    </main>
  );
}
