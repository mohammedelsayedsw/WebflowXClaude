"use client";

import { MotionConfig } from "motion/react";
import { HashScroll } from "@/components/site/HashScroll";
import { Agenda } from "@/sections/webinars-expedio/Agenda";
import { CTA } from "@/sections/webinars-expedio/CTA";
import { FullStack } from "@/sections/webinars-expedio/FullStack";
import { Hero } from "@/sections/webinars-expedio/Hero";
import { LiveDemo } from "@/sections/webinars-expedio/LiveDemo";
import { Speakers } from "@/sections/webinars-expedio/Speakers";
import { WhatItIs } from "@/sections/webinars-expedio/WhatItIs";
import { WhoShouldJoin } from "@/sections/webinars-expedio/WhoShouldJoin";

/**
 * scandiweb x ReadyMage webinar on Expedio. The site Header (from the webinars
 * layout) adds the ReadyMage logo on this route; the footer comes from the root layout.
 * MotionConfig drops the scroll-in movement for prefers-reduced-motion.
 */
export default function Page() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen flex flex-col">
        <HashScroll />
        <Hero />
        <Agenda />
        <WhatItIs />
        <LiveDemo />
        <FullStack />
        <WhoShouldJoin />
        <Speakers />
        <CTA />
      </main>
    </MotionConfig>
  );
}
