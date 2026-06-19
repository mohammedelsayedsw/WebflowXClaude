"use client";

import { useState } from "react";
import { Hero } from "@/sections/widerrufsbutton/Hero";
import { Requirements } from "@/sections/widerrufsbutton/Requirements";
import { Solution } from "@/sections/widerrufsbutton/Solution";
import { CTA } from "@/sections/widerrufsbutton/CTA";
import { C, type Lang } from "@/sections/widerrufsbutton/content";

export default function Page() {
  const [lang, setLang] = useState<Lang>("en");
  const t = C[lang];
  return (
    <main className="min-h-screen flex flex-col">
      <Hero t={t.hero} lang={lang} onLang={setLang} />
      <Requirements t={t.requirements} />
      <Solution t={t.solution} />
      <CTA t={t.cta} />
    </main>
  );
}
