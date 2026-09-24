"use client";

import { Hero } from "@/sections/webinars-legacy-bridge/Hero";
import { Agenda } from "@/sections/webinars-legacy-bridge/Agenda";
import { Problem } from "@/sections/webinars-legacy-bridge/Problem";
import { HowItWorks } from "@/sections/webinars-legacy-bridge/HowItWorks";
import { LiveDemo } from "@/sections/webinars-legacy-bridge/LiveDemo";
import { AnyDocument } from "@/sections/webinars-legacy-bridge/AnyDocument";
import { YourSystem } from "@/sections/webinars-legacy-bridge/YourSystem";
import { Security } from "@/sections/webinars-legacy-bridge/Security";
import { WhoShouldJoin } from "@/sections/webinars-legacy-bridge/WhoShouldJoin";
import { Host } from "@/sections/webinars-legacy-bridge/Host";
import { CTA } from "@/sections/webinars-legacy-bridge/CTA";
import { HashScroll } from "@/components/site/HashScroll";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <HashScroll />
      <Hero />
      <Agenda />
      <Problem />
      <HowItWorks />
      <LiveDemo />
      <AnyDocument />
      <YourSystem />
      <Security />
      <WhoShouldJoin />
      <Host />
      <CTA />
    </main>
  );
}
