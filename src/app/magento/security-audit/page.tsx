"use client";

import { Hero } from "@/sections/security-audit/Hero";
import { Penalty } from "@/sections/security-audit/Penalty";
import { Exposure } from "@/sections/security-audit/Exposure";
import { Scope } from "@/sections/security-audit/Scope";
import { Proof } from "@/sections/security-audit/Proof";
import { SampleReport } from "@/sections/security-audit/SampleReport";
import { Testimonials } from "@/sections/security-audit/Testimonials";
import { CTA } from "@/sections/security-audit/CTA";
import { FAQ } from "@/sections/security-audit/FAQ";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Penalty />
      <Exposure />
      <Scope />
      <Proof />
      <SampleReport />
      <Testimonials />
      <CTA />
      <FAQ />
    </main>
  );
}
