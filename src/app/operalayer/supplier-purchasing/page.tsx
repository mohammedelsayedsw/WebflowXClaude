"use client";

import { Story } from "@/sections/operalayer-supplier-purchasing/Story";
import { Result } from "@/sections/operalayer-supplier-purchasing/Result";
import { Cta } from "@/sections/operalayer/shared/Cta";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Story />
      <Result />
      <Cta
        heading={
          <>
            See your season in{" "}
            <span className="text-[var(--sw-mint)]">one clear view</span>
          </>
        }
        body="Tell us how your buyers track supplier orders today, and we will show you what the app would look like on your data."
      />
    </main>
  );
}
