"use client";

import { Hero } from "@/sections/operalayer-supplier-purchasing/Hero";
import { BeforeSources } from "@/sections/operalayer-supplier-purchasing/BeforeSources";
import { SeasonView } from "@/sections/operalayer-supplier-purchasing/SeasonView";
import { VarianceFlags } from "@/sections/operalayer-supplier-purchasing/VarianceFlags";
import { Forecasting } from "@/sections/operalayer-supplier-purchasing/Forecasting";
import { FAQ } from "@/sections/operalayer-supplier-purchasing/FAQ";
import { CTA } from "@/sections/operalayer-supplier-purchasing/CTA";
import { Modules } from "@/sections/operalayer/shared/Modules";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <BeforeSources />
      <SeasonView />
      <VarianceFlags />
      <Forecasting />
      <Modules current="supplier-purchasing" heading="More OperaLayer modules" />
      <FAQ />
      <CTA />
    </main>
  );
}
