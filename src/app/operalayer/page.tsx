"use client";

import { Hero } from "@/sections/operalayer/Hero";
import { Familiar } from "@/sections/operalayer/Familiar";

/** OperaLayer overview. */
export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Familiar />
    </main>
  );
}
