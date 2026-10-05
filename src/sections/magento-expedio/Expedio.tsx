"use client";

import { assetUrl } from "@/lib/assets";
import { useState } from "react";
import { CONTACT_FORM, read, submitHubSpot } from "./hubspot";
import { AuroraRain } from "./AuroraRain";
import { btnPrimary } from "./Hero";
import { Reveal } from "@/components/primitives/Reveal";

/*
 * Copy in this file comes from MNM_Expedio_proposal.pdf (September 2026),
 * generalised from My Next Mattress to any Magento store. Price and client
 * names are left out on purpose.
 */

const H2 = "text-[40px] md:text-[56px] lg:text-[64px]";

/**
 * What shoppers get from a faster backend, each backed by a benchmark figure.
 * Only things the benchmark measured: no checkout, no admin.
 */
const GAINS = [
  {
    num: "6.4x",
    title: "Faster response time, all page types",
    body: "Median across the eight page types tested, at peak traffic.",
  },
  {
    num: "20\u00a0ms",
    title: "Homepage response time",
    body: "At peak traffic. Stock Magento: 519\u00a0ms on the same server.",
  },
  {
    num: "3x",
    title: "More traffic on the same server",
    body: "Requests per second the server handled before response times started to rise.",
  },
  {
    num: "3.2x",
    title: "Faster with all caches empty",
    body: "Category pages: 57\u00a0ms on Expedio, 181\u00a0ms on stock Magento.",
  },
];

export function WhatItIs() {
  return (
    <section id="expedio" className="relative z-10 py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <Reveal className="max-w-[46rem]">
          <h2 className={H2}>What Expedio is</h2>
          <p className="mt-6 text-white/80 text-[19px] md:text-[22px] leading-[1.45] font-[family-name:var(--font-golos)] font-medium [text-wrap:balance]">
            Expedio speeds up Magento&apos;s backend, the part that builds each page before a shopper sees it. Your
            store, design, and data stay the same.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="mt-14 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4">
          {GAINS.map((g, i) => (
            <div
              key={g.title}
              className={`py-8 sm:pr-8 ${i > 0 ? "lg:pl-8 lg:border-l lg:border-white/10" : ""} ${i % 2 === 1 ? "sm:pl-8 sm:border-l sm:border-white/10" : ""}`}
            >
              <div
                className="font-[family-name:var(--font-golos)] font-bold text-[56px] md:text-[64px] leading-none tracking-[-0.04em] tabular-nums whitespace-nowrap"
                style={{ color: "var(--sw-mint)" }}
              >
                {g.num}
              </div>
              <h3 className="mt-6 text-white text-[20px] md:text-[21px] leading-[1.25] [text-wrap:balance]">{g.title}</h3>
              <p className="mt-3 text-white/60 text-[15px] leading-[1.6]">{g.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/** Proposal pages 9 and 10: who built it, and the line of platform work it follows. */
const TIMELINE = [
  { year: "2017", text: "The first auto-scaling Magento environment on AWS" },
  { year: "2019", text: "ScandiPWA, the first open-source PWA theme built for Magento" },
  { year: "2020", text: "ReadyMage, hosting built only for Magento" },
  { year: "2021", text: "Hyvä Platinum partnership and Hyvä Satoshi, the first open-source theme built on Hyvä" },
  { year: "2026", text: "Expedio, built inside ReadyMage", now: true },
];

export function BuiltBy() {
  return (
    <section className="relative z-10 py-16 md:py-36">
      <div className="wrap grid lg:grid-cols-12 gap-14 lg:gap-16">
        <Reveal className="lg:col-span-7">
          <blockquote>
            <p className="text-white text-[28px] md:text-[40px] leading-[1.18] tracking-[-0.02em] font-[family-name:var(--font-golos)] font-semibold">
              &ldquo;Magento should be fast on its own, not because a cache happened to hold the page.{" "}
              <span style={{ color: "var(--sw-mint)" }}>Every page in milliseconds, for every visitor, every time.</span>&rdquo;
            </p>
            <footer className="mt-8">
              <div className="text-white text-[17px] font-semibold">Aleksandrs Mokans</div>
              <div className="text-white/55 text-[15px] mt-1">
                Solutions Architect and Team Lead, scandiweb. The engineer behind Expedio
              </div>
            </footer>
          </blockquote>
        </Reveal>
        <Reveal delay={0.1} className="hidden lg:block lg:col-span-5">
          <h3 className="text-[22px] md:text-[26px]">Years of improving Magento at platform level</h3>
          <ol className="mt-6 hair-t">
            {TIMELINE.map((t) => (
              <li key={t.year} className="grid grid-cols-[64px_1fr] gap-4 py-4 hair-b">
                <span
                  className="font-[family-name:var(--font-golos)] font-bold text-[18px] tabular-nums"
                  style={{ color: t.now ? "var(--sw-mint)" : "rgba(255,255,255,.5)" }}
                >
                  {t.year}
                </span>
                <span className={`text-[16px] leading-[1.5] [text-wrap:balance] ${t.now ? "text-white font-semibold" : "text-white/75"}`}>
                  {t.text}
                </span>
              </li>
            ))}
          </ol>
          <a
            href="https://readymage.com"
            target="_blank"
            rel="noopener"
            className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-[var(--sw-beige)] underline underline-offset-4 decoration-white/30 hover:decoration-[var(--sw-beige)] font-[family-name:var(--font-golos)]"
          >
            Visit ReadyMage <span aria-hidden>↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Hyvä on the frontend, Expedio underneath, set like a launch lockup: two
 * names joined by a beam of light, and the line about what they make together.
 */
export function HyvaAndExpedio() {
  return (
    <section className="relative z-10 overflow-x-clip py-28 md:py-44">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110vw] h-[70%]"
        style={{ background: "radial-gradient(50% 50% at 50% 50%, rgba(63,108,255,0.22), rgba(110,247,110,0.08) 45%, rgba(5,7,15,0) 75%)" }}
      />
      <div className="wrap relative text-center">
        <Reveal>
          <div className="label-code text-white/55">The full Magento stack</div>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-0">
          <div className="flex flex-col items-center md:w-[34%]">
            <img src={assetUrl("/magento/expedio/hyva.svg")} alt="Hyvä" className="h-[74px] md:h-[104px] w-auto" />
            <div className="mt-6 label-code text-white/55">Frontend</div>
          </div>
          {/* a plus drawn in light: two thin glowing strokes, no box */}
          <div className="relative h-14 w-14 md:h-20 md:w-[22%] grid place-items-center" aria-hidden>
            <div className="hidden md:block absolute left-0 right-0 top-1/2 h-px -translate-y-1/2" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.35) 30%, rgba(110,247,110,.6) 70%, rgba(110,247,110,0))" }} />
            <div className="relative h-12 w-12 md:h-14 md:w-14">
              <span className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 rounded-full" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0), #ffffff 50%, rgba(255,255,255,0))", boxShadow: "0 0 14px rgba(110,247,110,.9)" }} />
              <span className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 rounded-full" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0), #ffffff 50%, rgba(255,255,255,0))", boxShadow: "0 0 14px rgba(110,247,110,.9)" }} />
              <span className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[3px]" />
            </div>
          </div>
          <div className="flex flex-col items-center md:w-[34%]">
            <div
              className="text-[64px] md:text-[96px] leading-[0.95] tracking-[-0.055em] font-[family-name:var(--font-golos)] font-bold"
              style={{ color: "var(--sw-mint)", textShadow: "0 0 60px rgba(110,247,110,.35)" }}
            >
              Expedio
            </div>
            <div className="mt-6 label-code text-white/55">Backend</div>
          </div>
        </Reveal>
        <Reveal delay={0.2} className="mt-16 md:mt-20 max-w-[52rem] mx-auto">
          <p className="text-white/70 text-[17px] md:text-[19px] leading-[1.6] [text-wrap:balance]">
            Hyvä took the Magento frontend as far as it goes. Expedio does the same for the backend.
          </p>
          <p className="mt-6 text-white text-[30px] md:text-[48px] leading-[1.1] tracking-[-0.03em] font-[family-name:var(--font-golos)] font-bold [text-wrap:balance]">
            Together, <span style={{ color: "var(--sw-mint)" }}>the best Magento experience</span> on the market.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** The finale: the rain returns, the offer line, and the form, centred. Form sends nothing yet. */
export function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const v = read(e.currentTarget);
    setState("sending");
    try {
      await submitHubSpot(CONTACT_FORM, [
        { name: "firstname", value: v.firstname },
        { name: "email", value: v.email },
        { name: "website", value: v.website },
        { name: "message", value: v.message ?? "" },
        { name: "name", value: v.company, objectTypeId: "0-2" },
      ]);
      setState("sent");
    } catch {
      setState("error");
    }
  };
  return (
    <section id="contact" className="relative z-10 overflow-hidden scroll-mt-4 min-h-[100svh] flex items-center">
      <AuroraRain contained density={0.55} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "linear-gradient(180deg, rgba(5,7,15,0.15) 0%, rgba(5,7,15,0.55) 45%, rgba(5,7,15,0.92) 100%)" }}
      />
      <div className="wrap relative z-10 w-full py-24 md:py-28">
        <Reveal className="text-center max-w-[56rem] mx-auto">
          <div className="label-code text-white/70">Available to all Magento merchants</div>
          <h2 className="mt-5 text-[52px] sm:text-[72px] md:text-[96px] leading-[0.95] tracking-[-0.045em]" style={{ textShadow: "0 0 60px rgba(110,247,110,0.25)" }}>
            Get Expedio
          </h2>
          <p className="mt-6 text-white/80 text-[18px] md:text-[20px] leading-[1.55] max-w-[38rem] mx-auto [text-wrap:balance]">
            Leave your details and we&apos;ll set up an intro call. We show you how Expedio works and how it can be applied to your store.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 max-w-[44rem] mx-auto">
          <Reveal delay={0.1}>
            {state === "sent" ? (
              <p className="text-center text-white text-[22px] md:text-[26px] font-semibold font-[family-name:var(--font-golos)]">
                Thank you. We&apos;ll be in touch to set up your intro call.
              </p>
            ) : (
            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-x-10 gap-y-8 text-left">
              {[
                ["firstname", "Name", "name", "text", "Jane Smith"],
                ["email", "Work email", "email", "email", "jane@store.com"],
                ["company", "Company", "organization", "text", "Your company"],
                ["website", "Store URL", "url", "text", "yourstore.com"],
              ].map(([id, label, ac, type, ph]) => (
                <label key={id} htmlFor={`c-${id}`} className="group block">
                  <span className="label-code text-white/55 group-focus-within:text-[var(--sw-mint)] transition-colors">{label}</span>
                  <input id={`c-${id}`} name={id} type={type} autoComplete={ac} placeholder={ph} required className="line-field" />
                </label>
              ))}
              <label htmlFor="c-msg" className="group block sm:col-span-2">
                <span className="label-code text-white/55 group-focus-within:text-[var(--sw-mint)] transition-colors">
                  Anything we should know about your store
                </span>
                <textarea id="c-msg" name="message" rows={2} placeholder="Platform version, traffic, what feels slow" className="line-field resize-none" />
              </label>
              <div className="sm:col-span-2 flex flex-col items-center gap-4 pt-2">
                <button type="submit" disabled={state === "sending"} className={`${btnPrimary} !h-14 !px-14 !text-[18px] disabled:opacity-60`}>
                  {state === "sending" ? "Sending" : "Get Expedio"}
                </button>
                {state === "error" && (
                  <span className="text-[#ff5a31] text-[14px]">That did not go through. Please try again, or email kristaps.gailitis@scandiweb.com.</span>
                )}
                <a
                  href="https://calendly.com/scandi-bd/magento-expedio-30-min-intro-call"
                  target="_blank"
                  rel="noopener"
                  className="mt-2 text-[15px] text-white/70 hover:text-white underline underline-offset-4 decoration-white/30 hover:decoration-white font-[family-name:var(--font-golos)]"
                >
                  Or book a 30-minute call
                </a>
              </div>
            </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
