"use client";

import { Beam } from "@/sections/magento-twice-as-fast/Beam";
import { Hero } from "@/sections/magento-twice-as-fast/Hero";

/**
 * One fold: the beam and the hero, with the sign-up inside it. The pinned
 * lines, the large countdown and the sign-up section stay in
 * src/sections/magento-twice-as-fast for when the page grows again.
 */
export default function Page() {
  return (
    <main className="relative isolate min-h-screen flex flex-col bg-[#05070f]">
      <Beam />
      <Hero />
    </main>
  );
}
