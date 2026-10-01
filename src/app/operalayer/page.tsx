"use client";

import { Hero } from "@/sections/operalayer/Hero";
import { Familiar } from "@/sections/operalayer/Familiar";
import { Product } from "@/sections/operalayer/Product";
import { Apps } from "@/sections/operalayer/Apps";
import { Integrations, Rollout, Trust, Faq } from "@/sections/operalayer/Platform";
import { Cta } from "@/sections/operalayer/shared/Cta";

/** OperaLayer product homepage. */
export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Familiar />
      <Product />
      <Apps />
      <Integrations />
      <Rollout />
      <Trust />
      <Faq />
      <Cta
        weeks={false}
        heading={
          <>
            See OperaLayer on{" "}
            <span className="text-[var(--sw-mint)]">your own documents</span>
          </>
        }
        body="Book a demo, and bring one process your team still does by hand. We will show you what the app for it looks like."
      />
    </main>
  );
}
