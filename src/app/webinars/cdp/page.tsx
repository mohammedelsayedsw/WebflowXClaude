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
import { UseCaseOffer } from "@/sections/webinars-cdp/UseCaseOffer";
import { HashScroll } from "@/components/site/HashScroll";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Lets scandiweb.com/solutions/webinars/cdp#use-case land on the form,
          which the QR code on the printed pieces points at. */}
      <HashScroll />
      <Hero />
      <Covered />
      <Story />
      <Platform />
      <Results />
      <Format />
      <Speakers />
      <Takeaways />
      <WhoShouldJoin />
      <CTA />
      <UseCaseOffer />
    </main>
  );
}
