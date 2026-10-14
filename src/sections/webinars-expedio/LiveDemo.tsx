"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const DEMO_URL = "https://expedio-demo.scandiweb.com/";

export function LiveDemo() {
  return (
    <section id="the-demo" className="relative bg-[#F9F8F4] py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                Watch both stores <span style={{ color: "var(--sw-blue)" }}>side by side</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="lg:col-span-5">
            <p className="text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
              In the webinar we run the same store on stock Magento and on Expedio, on the same data and
              server, and click through both at once so you can see the difference in every page.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14} className="mt-10 md:mt-14">
          {/* The demo screenshot in a browser frame; the whole frame opens the live demo, as on withari.ai/expedio. */}
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener"
            className="group relative block overflow-hidden rounded-[6px] border border-[var(--sw-black)]/15 bg-[var(--sw-beige)] shadow-[0_20px_60px_-30px_rgba(5,7,15,0.35)]"
          >
            <span className="flex items-center gap-1.5 border-b border-black/10 bg-white px-3 py-2">
              <i aria-hidden className="h-2.5 w-2.5 rounded-full bg-black/15" />
              <i aria-hidden className="h-2.5 w-2.5 rounded-full bg-black/15" />
              <i aria-hidden className="h-2.5 w-2.5 rounded-full bg-black/15" />
              <span className="ml-3 truncate text-[12px] text-black/50">expedio-demo.scandiweb.com</span>
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/webinars/expedio/demo-poster.webp")}
              width={1300}
              height={740}
              alt="The live demo: the same store on stock Magento and on Expedio, with live timings"
              loading="lazy"
              className="block w-full"
            />
            <span className="absolute inset-0 top-[37px] flex items-center justify-center bg-[var(--sw-black)]/35 transition-colors duration-300 group-hover:bg-[var(--sw-black)]/45">
              <span className="inline-flex items-center gap-2 rounded-[4px] bg-[var(--sw-mint)] px-6 py-3 font-head text-[15px] md:text-[16px] text-[var(--sw-black)] shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5">
                Open the live demo
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
