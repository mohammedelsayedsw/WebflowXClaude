"use client";

import { Hero } from "@/sections/webinars-cdp/Hero";
import { Story } from "@/sections/webinars-cdp/Story";
import { Results } from "@/sections/webinars-cdp/Results";
import { Takeaways } from "@/sections/webinars-cdp/Takeaways";
import { Agenda } from "@/sections/webinars-cdp/Agenda";
import { Format } from "@/sections/webinars-cdp/Format";
import { Speakers } from "@/sections/webinars-cdp/Speakers";
import { WhoShouldJoin } from "@/sections/webinars-cdp/WhoShouldJoin";
import { CTA } from "@/sections/webinars-cdp/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Story />
      <Results />
      <Takeaways />
      <Agenda />
      <Format />
      <Speakers />
      <WhoShouldJoin />
      <CTA />
    </main>
  );
}
