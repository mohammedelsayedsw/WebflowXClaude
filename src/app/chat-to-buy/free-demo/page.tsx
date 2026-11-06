"use client";

import { Hero } from "@/sections/chat-to-buy/Hero";
import { Proof } from "@/sections/chat-to-buy/Proof";
import { Demo } from "@/sections/chat-to-buy/Demo";

export default function Page() {
  return (
    <main className="relative isolate min-h-screen flex flex-col bg-[var(--sw-black)] font-body">
      <Hero />
      <Proof />
      <Demo />
    </main>
  );
}
