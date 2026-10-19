"use client";

import { PlanProvider } from "@/sections/ai-visibility-package/plan";
import { Hero } from "@/sections/ai-visibility-package/Hero";
import { Problem } from "@/sections/ai-visibility-package/Problem";
import { Included } from "@/sections/ai-visibility-package/Included";
import { HowItWorks } from "@/sections/ai-visibility-package/HowItWorks";
import { AnswerRank } from "@/sections/ai-visibility-package/AnswerRank";
import { Results } from "@/sections/ai-visibility-package/Results";
import { Leader } from "@/sections/ai-visibility-package/Leader";
import { FAQ } from "@/sections/ai-visibility-package/FAQ";
import { Interest } from "@/sections/ai-visibility-package/Interest";

export default function Page() {
  return (
    <PlanProvider>
      <main className="relative isolate min-h-screen flex flex-col bg-[var(--sw-black)] font-body">
        <Hero />
        <Problem />
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
