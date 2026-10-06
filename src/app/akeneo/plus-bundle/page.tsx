"use client";

import { SavingsProvider } from "@/sections/akeneo-plus-bundle/Savings";
import { Hero } from "@/sections/akeneo-plus-bundle/Hero";
import { Logos } from "@/sections/akeneo-plus-bundle/Logos";
import { Managed } from "@/sections/akeneo-plus-bundle/Managed";
import { Bundle } from "@/sections/akeneo-plus-bundle/Bundle";
import { Migration } from "@/sections/akeneo-plus-bundle/Migration";
import { Costs } from "@/sections/akeneo-plus-bundle/Costs";
import { Why } from "@/sections/akeneo-plus-bundle/Why";
import { FAQ } from "@/sections/akeneo-plus-bundle/FAQ";
import { Assessment } from "@/sections/akeneo-plus-bundle/Assessment";
import "@/sections/akeneo-plus-bundle/range.css";

export default function Page() {
  return (
    <SavingsProvider>
      <main className="relative isolate min-h-screen flex flex-col bg-[#05070f]">
        <Hero />
        <Logos />
        <Managed />
        <Bundle />
        <Migration />
        <Costs />
        <Why />
        <FAQ />
        <Assessment />
      </main>
    </SavingsProvider>
  );
}
