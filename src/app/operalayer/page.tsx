"use client";

import { Hero } from "@/sections/operalayer/Hero";
import { Gaps } from "@/sections/operalayer/Gaps";
import { Roles } from "@/sections/operalayer/Roles";
import { Architecture } from "@/sections/operalayer/Architecture";
import { Capabilities } from "@/sections/operalayer/Capabilities";
import { Cases } from "@/sections/operalayer/Cases";
import { Rhythm } from "@/sections/operalayer/Rhythm";
import { ModuleMenu } from "@/sections/operalayer/ModuleMenu";
import { PillarFaq, PillarCta } from "@/sections/operalayer/PillarClose";

/** OperaLayer pillar; module pages live in the sibling folders. */
export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Gaps />
      <Roles />
      <Architecture />
      <Capabilities />
      <Cases />
      <Rhythm />
      <ModuleMenu />
      <PillarFaq />
      <PillarCta />
    </main>
  );
}
