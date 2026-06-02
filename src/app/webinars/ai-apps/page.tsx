"use client";

import { Hero } from "@/sections/webinars-ai-apps/Hero";
import { IntroParagraph } from "@/sections/webinars-ai-apps/IntroParagraph";
import { WhatThisIsAbout } from "@/sections/webinars-ai-apps/WhatThisIsAbout";
import { WhatYoullLearn } from "@/sections/webinars-ai-apps/WhatYoullLearn";
import { WhoThisIsFor } from "@/sections/webinars-ai-apps/WhoThisIsFor";
import { WalkAwayWith } from "@/sections/webinars-ai-apps/WalkAwayWith";
import { CTA } from "@/sections/webinars-ai-apps/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <IntroParagraph />
      <WhatThisIsAbout />
      <WhatYoullLearn />
      <WhoThisIsFor />
      <WalkAwayWith />
      <CTA />
    </main>
  );
}
