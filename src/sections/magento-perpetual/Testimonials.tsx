"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const base = "/magento/perpetual/team";

type Quote = { quote: string; name: string; title: string; photo: string };

const quotes: Quote[] = [
  {
    quote:
      "For more than 10 years, scandiweb has supported our Magento platform with top talent, helping us reach our strategic goals.",
    name: "Jonathan Chan",
    title: "Head of Global IT, Lafayette 148 NY",
    photo: `${base}/jonathan-chan.png`,
  },
  {
    quote:
      "Partnering with scandiweb’s team allowed us to bring a Magento 2 site to market that has 3 to 4 times better performance than any other site.",
    name: "Jason Barney",
    title: "eCommerce Technology Consultant, PUMA",
    photo: `${base}/jason-barney.png`,
  },
  {
    quote:
      "They repeatedly went above and beyond on design and process decisions.",
    name: "Erik Klepper",
    title: "Head of News Agency Applications, Thomson Reuters",
    photo: `${base}/erik-klepper.jpg`,
  },
];

const ROTATE_MS = 8000;

/**
 * One quote on screen at a time, set large; the names underneath switch it.
 * It moves on by itself until someone picks a name.
 */
export function Testimonials() {
  const [at, setAt] = useState(0);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    if (held) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(
      () => setAt((i) => (i + 1) % quotes.length),
      ROTATE_MS
    );
    return () => window.clearInterval(t);
  }, [held]);


  return (
    <section id="testimonials" className="relative z-10 py-28 md:py-40">
      <div className="wrap">
        <Reveal>
          <h2 className="label-code text-white/55">What our clients say</h2>
          {/* Every quote sits in the same grid cell, so the block is always as
              tall as the longest one and nothing below it moves on a switch. */}
          <div className="mt-8 md:mt-10 grid">
            {quotes.map((c, i) => {
              const on = i === at;
              return (
                <motion.blockquote
                  key={c.name}
                  aria-hidden={!on}
                  initial={false}
                  animate={{
                    opacity: on ? 1 : 0,
                    y: on ? 0 : 12,
                    filter: on ? "blur(0px)" : "blur(8px)",
                  }}
                  transition={{
                    duration: 0.55,
                    delay: on ? 0.25 : 0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="col-start-1 row-start-1 font-head font-bold text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.02em] max-w-[24ch] md:max-w-[26ch]"
                  style={{ pointerEvents: on ? "auto" : "none" }}
                >
                  &ldquo;{c.quote}&rdquo;
                </motion.blockquote>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            role="group"
            aria-label="Choose a client quote"
            className="mt-10 md:mt-14 grid sm:grid-cols-3 gap-x-8"
          >
            {quotes.map((c, i) => {
              const on = i === at;
              return (
                <button
                  key={c.name}
                  type="button"
                  aria-pressed={on}
                  onClick={() => {
                    setAt(i);
                    setHeld(true);
                  }}
                  className={`group flex items-center gap-4 border-t py-5 text-left transition cursor-pointer ${
                    on ? "" : "opacity-55 hover:opacity-90"
                  }`}
                  style={{
                    borderTopColor: on ? "var(--sw-mint)" : "rgba(255,255,255,0.15)",
                  }}
                >
                  <img
                    src={assetUrl(c.photo)}
                    alt=""
                    className="h-11 w-11 rounded-full object-cover shrink-0"
                    style={{ border: "1px solid rgba(230,231,239,0.2)" }}
                  />
                  <span>
                    <span className="block font-head text-white text-[15px] md:text-[16px]">
                      {c.name}
                    </span>
                    <span className="block text-white/55 text-[13px] leading-snug mt-0.5">
                      {c.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
