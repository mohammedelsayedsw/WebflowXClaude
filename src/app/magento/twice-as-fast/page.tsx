"use client";

import { Beam } from "@/sections/magento-twice-as-fast/Beam";
import { Hero } from "@/sections/magento-twice-as-fast/Hero";
import { Nominate } from "@/sections/magento-twice-as-fast/Nominate";
import { CTA } from "@/sections/magento-twice-as-fast/CTA";

/**
 * The beam and the hero, then the two things a reader can do: nominate a
 * store for the treatment, or join the waiting list for the reveal. The
 * pinned lines and the large countdown stay in src/sections/magento-twice-as-fast
 * for when the page grows again.
 */
export default function Page() {
  return (
    <main className="relative isolate min-h-screen flex flex-col bg-[#05070f]">
      <Beam />
      <Hero />
      <Nominate />
      <CTA />
    </main>
  );
}
