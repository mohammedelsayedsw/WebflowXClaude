"use client";

import { PlanProvider } from "@/sections/aeo/plan";
import { PageHeader } from "@/sections/aeo/PageHeader";
import { Hero } from "@/sections/aeo/Hero";
import { Gap } from "@/sections/aeo/Gap";
import { Included } from "@/sections/aeo/Included";
import { Delivery } from "@/sections/aeo/Delivery";
import { Exclusions } from "@/sections/aeo/Exclusions";
import { AnswerRank } from "@/sections/aeo/AnswerRank";
import { Proof } from "@/sections/aeo/Proof";
import { Leader } from "@/sections/aeo/Leader";
import { FAQ } from "@/sections/aeo/FAQ";
import { Interest } from "@/sections/aeo/Interest";

export default function Page() {
  return (
    <PlanProvider>
      <PageHeader />
      <main className="relative isolate flex min-h-screen flex-col bg-white font-body text-[16px] leading-[1.6] text-[var(--sw-black)]">
        <Hero />
        <Gap />
        <Included />
        <Delivery />
        <Exclusions />
        <AnswerRank />
        <Proof />
        <Leader />
        <FAQ />
        <Interest />
      </main>
    </PlanProvider>
  );
}
