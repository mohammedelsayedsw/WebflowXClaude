"use client";

import { motion } from "motion/react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { assetUrl } from "@/lib/assets";
import { ChatDemo } from "./ChatDemo";
import { CLIENTS } from "./status";
import { scrollToId } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

function ClientLogos({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap items-center gap-x-8 gap-y-5 md:gap-x-12 ${className}`} aria-label="Our clients include">
      {CLIENTS.map((c) => (
        <li key={c.name}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetUrl(c.src)} alt={c.name} className={`${c.h} w-auto opacity-80`} />
        </li>
      ))}
    </ul>
  );
}

/**
 * One full screen under the site header: the promise and one button on the left, the assistant selling in a conversation
 * on the right, and the big clients along the bottom (under the button on phones, so they stay in the first screen).
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 -mt-[60px] md:-mt-[75px] flex min-h-[calc(100svh+60px)] md:min-h-[calc(100svh+75px)] flex-col bg-[var(--sw-black)] overflow-hidden"
    >
      {/* scandiweb waves: the scandiweb.com homepage hero loop */}
      <video
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        src={assetUrl("/chat-to-buy/hero-waves.mp4")}
        poster={assetUrl("/chat-to-buy/hero-waves-poster.jpg")}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        aria-hidden
        alt=""
        src={assetUrl("/chat-to-buy/hero-waves-poster.jpg")}
        className="absolute inset-0 h-full w-full object-cover hidden motion-reduce:block"
      />
      <div
        aria-hidden
        className="absolute inset-0 hidden lg:block"
        style={{ background: "linear-gradient(90deg, rgba(16,19,44,0.8) 0%, rgba(16,19,44,0.45) 38%, rgba(16,19,44,0) 62%, rgba(16,19,44,0) 100%)" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 lg:hidden"
        style={{ background: "linear-gradient(180deg, rgba(16,19,44,0.35) 0%, rgba(16,19,44,0.55) 40%, rgba(16,19,44,0.85) 75%, rgba(16,19,44,0.95) 100%)" }}
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 h-24" style={{ background: "linear-gradient(180deg, rgba(16,19,44,0) 0%, var(--sw-black) 100%)" }} />

      <div className="wrap w-full relative flex-1 pt-[120px] md:pt-[clamp(100px,14vh,130px)] pb-12 lg:pb-[clamp(20px,4vh,48px)] grid gap-10 lg:gap-16 grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-center content-center">
        <div>
          <motion.div {...enter(0.1)} className="font-head font-bold uppercase text-[12px] tracking-[0.16em]" style={{ color: "var(--sw-mint)" }}>
            Chat to Buy by scandiweb
          </motion.div>
          <motion.h1
            {...enter(0.2)}
            className="mt-4 md:mt-5 font-head font-bold text-white text-[36px] max-md:[@media(max-height:700px)]:text-[32px] sm:text-[52px] lg:text-[clamp(38px,min(3.9vw,7.6vh),64px)] leading-[1.03] tracking-[-0.03em]"
          >
            <span className="lg:whitespace-nowrap">Give your online store</span>{" "}
            <span className="block" style={{ color: "var(--sw-mint)" }}>
              an AI salesperson
            </span>
          </motion.h1>
          <motion.p {...enter(0.3)} className="mt-4 md:mt-6 text-white/80 text-[16px] md:text-[19px] leading-relaxed max-w-[44ch]">
            Your customers say what they need in their own words. Chat to Buy recommends products from your store and helps them choose.
          </motion.p>
          <motion.div {...enter(0.4)} className="mt-7 md:mt-[clamp(24px,4.5vh,40px)]">
            <a href="#demo" onClick={scrollToId("demo")} className={`${btnPrimary} w-full sm:w-auto`}>
              Get my free demo
            </a>
            <p className="mt-3.5 text-[14px] text-white/60">Built on your own products. Nothing changes on your live store.</p>
          </motion.div>
          <motion.div {...enter(0.5)} className="mt-9 lg:hidden">
            <p className="text-[13px] text-white/50">Our clients include</p>
            <ClientLogos className="mt-4" />
          </motion.div>
        </div>

        <motion.div {...enter(0.35)}>
          <ChatDemo />
        </motion.div>
      </div>

      <motion.div {...enter(0.55)} className="relative hidden lg:block">
        <div className="wrap w-full">
          <div className="flex items-center justify-between gap-10 border-t border-white/10 py-[clamp(16px,3vh,28px)]">
            <p className="shrink-0 text-[14px] text-white/50">Our clients include</p>
            <ClientLogos className="justify-end" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
