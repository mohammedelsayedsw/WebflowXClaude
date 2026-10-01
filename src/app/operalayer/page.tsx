"use client";

import { Story } from "@/sections/operalayer/Story";
import { Results } from "@/sections/operalayer/Results";
import { Cta } from "@/sections/operalayer/shared/Cta";

/** OperaLayer pillar: a tour of the real app, then client results and the form. */
export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Story />
      <Results />
      <Cta
        heading={
          <>
            Let&apos;s close your{" "}
            <span className="text-[var(--sw-mint)]">first gap</span>
          </>
        }
        body="Tell us about one process that lives in a spreadsheet or an inbox. We will show you what the app for it would look like."
      />
    </main>
  );
}
