"use client";

import { PlanProvider } from "@/sections/aeo/plan";
import { Hero } from "@/sections/aeo/Hero";
import { Included } from "@/sections/aeo/Included";
import { HowItWorks } from "@/sections/aeo/HowItWorks";
import { AnswerRank } from "@/sections/aeo/AnswerRank";
import { Results } from "@/sections/aeo/Results";
import { Leader } from "@/sections/aeo/Leader";
import { FAQ } from "@/sections/aeo/FAQ";
import { Interest } from "@/sections/aeo/Interest";

export default function Page() {
  return (
    <PlanProvider>
      <main className="relative isolate min-h-screen flex flex-col bg-[var(--sw-black)] font-body">
        <Hero />
        <Included />
        <HowItWorks />
        <AnswerRank />
        <Results />
        <Leader />
        <FAQ />
        <Interest />
      </main>
    </PlanProvider>
  );
}
