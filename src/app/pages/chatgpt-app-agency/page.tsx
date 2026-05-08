"use client";

import { Hero } from "@/sections/chatgpt-app-agency/Hero";
import { Examples } from "@/sections/chatgpt-app-agency/Examples";
import { Blueprints } from "@/sections/chatgpt-app-agency/Blueprints";
import { HowWeWork } from "@/sections/chatgpt-app-agency/HowWeWork";
import { Packages } from "@/sections/chatgpt-app-agency/Packages";
import { FAQ } from "@/sections/chatgpt-app-agency/FAQ";
import { CTA } from "@/sections/chatgpt-app-agency/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Examples />
      <Blueprints />
      <HowWeWork />
      <Packages />
      <FAQ />
      <CTA />
    </main>
  );
}
