"use client";

import { Hero } from "@/sections/meet-magento-france/Hero";
import { WhatsMeetMagento } from "@/sections/meet-magento-france/WhatsMeetMagento";
import { WhoIsScandiweb } from "@/sections/meet-magento-france/WhoIsScandiweb";
import { MeetMichael } from "@/sections/meet-magento-france/MeetMichael";
import { SeeYouInParis } from "@/sections/meet-magento-france/SeeYouInParis";
import { FAQ } from "@/sections/meet-magento-france/FAQ";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <WhatsMeetMagento />
      <WhoIsScandiweb />
      <MeetMichael />
      <SeeYouInParis />
      <FAQ />
    </main>
  );
}
