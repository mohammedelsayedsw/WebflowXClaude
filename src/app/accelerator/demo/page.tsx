"use client";

import { Hero } from "@/sections/demo/Hero";
import { AtAGlance } from "@/sections/demo/AtAGlance";
import { Problems } from "@/sections/demo/Problems";
import { Features } from "@/sections/demo/Features";
import { FAQ } from "@/sections/demo/FAQ";
import { CTA } from "@/sections/demo/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <AtAGlance />
      <Problems />
      <Features />
      <FAQ />
      <CTA />
    </main>
  );
}
