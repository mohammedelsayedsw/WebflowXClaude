"use client";

import { Hero } from "@/sections/chat-to-buy/Hero";
import { Proof } from "@/sections/chat-to-buy/Proof";
import { Demo } from "@/sections/chat-to-buy/Demo";

export default function Page() {
  return (
    <main className="relative isolate min-h-screen flex flex-col bg-[var(--sw-black)] font-body">
      {/* The site-wide HachlyAI chat (loaded by GTM) is off on this page: it competed with the Chat to Buy demo. */}
      <style>{`#hachly-ai-container{display:none!important}`}</style>
      <Hero />
      <Proof />
      <Demo />
    </main>
  );
}
