"use client";

import { Hero } from "@/sections/meet-magento-france/Hero";
import { WhoIsScandiweb } from "@/sections/meet-magento-france/WhoIsScandiweb";
import { MichaelBooking } from "@/sections/meet-magento-france/MichaelBooking";
import { CTA } from "@/sections/meet-magento-france/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <WhoIsScandiweb />
      <MichaelBooking />
      <CTA />
    </main>
  );
}
