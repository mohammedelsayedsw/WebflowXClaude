"use client";

import { useState } from "react";
import { Nav } from "@/sections/widerrufsbutton/Nav";
import { Hero } from "@/sections/widerrufsbutton/Hero";
import { Requirements } from "@/sections/widerrufsbutton/Requirements";
import { Coverage } from "@/sections/widerrufsbutton/Coverage";
import { Solution } from "@/sections/widerrufsbutton/Solution";
import { CTA } from "@/sections/widerrufsbutton/CTA";
import { C, type Lang } from "@/sections/widerrufsbutton/content";

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const t = C[lang];
  return (
    <main className="min-h-screen flex flex-col">
      <Nav lang={lang} onLang={setLang} ctaLabel={t.nav.cta} />
      <Hero t={t.hero} lang={lang} />
      <Requirements t={t.requirements} />
      <Coverage t={t.coverage} />
      <Solution t={t.solution} />
      <CTA t={t.cta} />
    </main>
  );
}
