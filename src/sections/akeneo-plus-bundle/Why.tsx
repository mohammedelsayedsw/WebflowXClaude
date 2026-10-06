"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { AKENEO_AWARD_URL, AKENEO_SERVICES_URL } from "./status";

const LINK =
  "mt-4 inline-flex items-center gap-1.5 font-head font-semibold text-[15px] text-white/80 hover:text-white transition";

export function Why() {
  return (
    <section id="why" className="relative z-10 py-24 md:py-32 bg-[var(--sw-black)]">
      <div className="wrap grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] items-start">
        <div>
          <Reveal>
            <div className="label-code text-white/45">Why scandiweb</div>
            <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] leading-[1.05] max-w-[18ch]">
              Akeneo and the systems{" "}
              <span style={{ color: "var(--sw-mint)" }}>it connects to</span>
            </h2>
            <p className="mt-6 text-white/70 text-[15px] md:text-[17px] leading-relaxed max-w-[50ch]">
              scandiweb implements and extends Akeneo, including the integrations that carry product
              information into commerce platforms.
            </p>
          </Reveal>
          <div className="mt-10 border-t border-white/10">
            <Reveal>
              <div className="py-7 border-b border-white/10">
                <h3 className="font-head font-semibold text-white text-[20px] md:text-[22px]">Our own Akeneo connector</h3>
                <p className="mt-2 text-white/70 text-[15px] md:text-[16px] leading-relaxed max-w-[56ch]">
                  Built and maintained by scandiweb for Magento (Adobe Commerce), with attribute mapping and
                  multi-store support.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.07}>
              <div className="py-7 border-b border-white/10">
                <h3 className="font-head font-semibold text-white text-[20px] md:text-[22px]">One team from migration onward</h3>
                <p className="mt-2 text-white/70 text-[15px] md:text-[16px] leading-relaxed max-w-[56ch]">
                  The engineers who migrate your setup also run it afterwards. Your team keeps managing
                  products as usual.
                </p>
                <a href={AKENEO_SERVICES_URL} className={LINK}>
                  Explore our Akeneo work <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15}>
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/akeneo/plus-bundle/akeneo-award-2020.jpg")}
              alt="scandiweb receiving the Rising Star Award at the Akeneo PIM Summit 2020"
              className="w-full rounded-[2px] border border-white/10"
              loading="lazy"
            />
            <figcaption className="mt-5">
              <div className="label-code text-white/45">Akeneo PIM Summit 2020</div>
              <p className="mt-2 font-head font-semibold text-white text-[20px]">Rising Star Award</p>
              <p className="mt-1 text-white/70 text-[15px]">For our Akeneo implementation with Technodom</p>
              <a href={AKENEO_AWARD_URL} target="_blank" rel="noopener noreferrer" className={LINK}>
                Read Akeneo&apos;s announcement <ArrowUpRight className="h-4 w-4" />
              </a>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
