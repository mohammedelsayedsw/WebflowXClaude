"use client";

import { Hero } from "@/sections/widerrufsbutton/Hero";
import { Requirements } from "@/sections/widerrufsbutton/Requirements";
import { Solution } from "@/sections/widerrufsbutton/Solution";
import { CTA } from "@/sections/widerrufsbutton/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Requirements />
      <Solution />
      <CTA />
    </main>
  );
}
