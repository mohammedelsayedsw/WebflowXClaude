"use client";

import { assetUrl } from "@/lib/assets";
import { useState } from "react";
import { DEMO_URL } from "./data";
import { btnPrimary } from "./Hero";
import { Reveal } from "@/components/primitives/Reveal";

/**
 * The demo's stores only load with a pass cookie set as SameSite=Lax, which
 * browsers drop inside another site's iframe, so an embed shows empty panes.
 * Flip this once the demo server sets the cookie as SameSite=None; Secure; Partitioned.
 */
const EMBED = false;

/**
 * The live before-and-after store. On wide screens it runs inside the page;
 * on phones the two side-by-side stores would be unreadable, so the still
 * opens the demo in its own tab.
 */
export function Demo() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section id="demo" className="relative z-10 py-24 md:py-36 scroll-mt-4">
      <div className="wrap">
        <Reveal className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <h2 className="text-[40px] md:text-[56px] lg:text-[64px]">Live demo: the same store on Magento and Expedio</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-white/70 text-[17px] leading-[1.6]">
              The same store runs twice, on the same data and hardware, with no page cache. Click anything on one
              side and the other follows, with the timings measured live under each.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 md:mt-16">
          <div className={`${EMBED ? "hidden md:block" : "hidden"} rounded-[6px] overflow-hidden border border-white/15 shadow-[0_40px_120px_-30px_rgba(110,247,110,0.25)]`}>
            <div className="flex items-center gap-3 h-11 px-4 bg-[#0d1020] border-b border-white/10">
              <span className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              </span>
              <span className="flex-1 text-center text-[13px] text-white/50 truncate">Magento and Expedio, side by side</span>
              <a href={DEMO_URL} target="_blank" rel="noopener" className="text-[13px] text-white/70 hover:text-white">
                Open full screen
              </a>
            </div>
            <div className="relative bg-[#f5f6f8]">
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center text-[#10132c]/50 text-[14px]">
                  Loading both stores
                </div>
              )}
              <iframe
                src={DEMO_URL}
                title="Magento and Expedio demo"
                loading="lazy"
                onLoad={() => setLoaded(true)}
                className="relative block w-full h-[980px] border-0"
              />
            </div>
          </div>

          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener"
            className={`${EMBED ? "md:hidden" : ""} group relative block rounded-[6px] overflow-hidden border border-white/15 shadow-[0_40px_120px_-30px_rgba(110,247,110,0.25)]`}
          >
            <span className="hidden md:flex absolute inset-0 z-10 items-center justify-center bg-[rgba(5,7,15,0.35)] group-hover:bg-[rgba(5,7,15,0.15)] transition">
              <span className="inline-flex h-14 items-center gap-3 rounded-[2px] border border-[var(--sw-beige)] bg-[rgba(5,7,15,0.85)] px-8 text-[18px] font-semibold text-[var(--sw-beige)] group-hover:bg-[var(--sw-beige)] group-hover:text-[var(--sw-black)] transition">
                Open the live demo
                <span aria-hidden>↗</span>
              </span>
            </span>
            <img
              src={assetUrl("/magento/expedio/demo.png")}
              alt="The demo: the same store on Magento and on Expedio, with live timings"
              className="block w-full"
            />
          </a>
          <div className="md:hidden mt-6">
            <a href={DEMO_URL} target="_blank" rel="noopener" className={`${btnPrimary} w-full`}>
              Open the live demo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
