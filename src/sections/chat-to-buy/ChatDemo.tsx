"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { ArrowUp, Check } from "lucide-react";
import { assetUrl } from "@/lib/assets";

const ASK = "I need a sofa for a small apartment, under 1,000 euros";
const FOLLOW_UP = "Which one is easiest to keep clean?";
const CHAR_MS = 38;

const PRODUCTS = [
  { name: "Two-seat sofa, oat linen", size: "156 cm wide", price: "€749", img: "/chat-to-buy/sofa-oat.jpg" },
  { name: "Compact sofa, sage velvet", size: "148 cm wide", price: "€689", img: "/chat-to-buy/sofa-sage.jpg" },
  { name: "Sofa bed, light grey", size: "160 cm wide", price: "€949", img: "/chat-to-buy/sofa-bed.jpg" },
];
const PICK = 2;

/**
 * Steps of the loop. 0: the shopper types the question. 1: it is sent. 2: the assistant is typing. 3: three sofas.
 * (The follow-up is typed during 3.) 4: follow-up sent. 5: typing. 6: the pick, with an add-to-cart button. 7: added.
 */
const FINAL = 7;

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const item = {
  layout: "position" as const,
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, transition: { duration: 0.15 } },
  transition: { duration: 0.45, ease: EASE },
};

const SHOPPER = "self-end max-w-[86%] rounded-[4px] bg-[var(--sw-blue)] px-3.5 py-2.5 text-[14px] leading-snug text-white";
const ASSISTANT = "self-start max-w-[92%] rounded-[4px] bg-[#f0f1fa] px-3.5 py-2.5 text-[14px] leading-snug text-[var(--sw-black)]";

function Typing() {
  return (
    <div className={`${ASSISTANT} flex items-center gap-1 py-3.5`}>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-[var(--sw-black)]/40"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

function Products({ picked }: { picked: boolean }) {
  return (
    <div className="grid grid-cols-3 gap-2 self-stretch">
      {PRODUCTS.map((p, i) => {
        const on = picked && i === PICK;
        return (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: picked && !on ? 0.45 : 1, y: 0 }}
            transition={{ duration: 0.45, delay: picked ? 0 : 0.12 * i, ease: EASE }}
            className={`overflow-hidden rounded-[4px] border bg-white transition-colors duration-500 ${
              on ? "border-[var(--sw-blue)] ring-1 ring-[var(--sw-blue)]" : "border-[#dfe1f0]"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assetUrl(p.img)} alt="" className="block aspect-[4/3] w-full bg-[#f2f0ec] object-cover" />
            <div className="px-2 pb-2 pt-1.5">
              <div className="text-[11px] leading-[1.25] text-[var(--sw-black)] line-clamp-2 min-h-[2.5em]">{p.name}</div>
              <div className="mt-1 flex items-baseline justify-between gap-1">
                <span className="text-[10px] text-[var(--sw-black)]/50 whitespace-nowrap">{p.size}</span>
                <span className="font-head font-bold text-[13px] text-[var(--sw-black)]">{p.price}</span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

/**
 * The hero's product demo: a shopper asks for a sofa in plain words, the assistant answers with three products from the
 * store, picks one on a follow-up question and it goes in the cart. Runs on a timer (never on scroll), only while on
 * screen, and loops. With reduced motion it shows the finished conversation.
 */
export function ChatDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [fading, setFading] = useState(false);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!inView || reduced) return;
    const timers: number[] = [];
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms));
    let t = 0;
    const typeOut = (text: string) => {
      for (let i = 1; i <= text.length; i++) {
        const s = text.slice(0, i);
        at(t + i * CHAR_MS, () => setTyped(s));
      }
      t += text.length * CHAR_MS + 450;
    };

    at(0, () => {
      setStep(0);
      setTyped("");
      setFading(false);
    });
    t = 600;
    typeOut(ASK);
    at(t, () => {
      setTyped("");
      setStep(1);
    });
    t += 450;
    at(t, () => setStep(2));
    t += 1100;
    at(t, () => setStep(3));
    t += 2400;
    typeOut(FOLLOW_UP);
    at(t, () => {
      setTyped("");
      setStep(4);
    });
    t += 450;
    at(t, () => setStep(5));
    t += 1000;
    at(t, () => setStep(6));
    t += 1700;
    at(t, () => setStep(7));
    t += 3800;
    at(t, () => setFading(true));
    t += 600;
    at(t, () => setCycle((c) => c + 1));

    return () => timers.forEach((id) => window.clearTimeout(id));
  }, [inView, reduced, cycle]);

  const s = reduced ? FINAL : step;
  const input = reduced ? "" : typed;

  return (
    <div
      ref={ref}
      role="img"
      aria-label="Example conversation: the assistant greets a shopper, who asks for a sofa for a small apartment under 1,000 euros. The assistant recommends three sofas from the store, explains which one is easiest to clean, and the shopper adds it to the cart."
      className="flex h-[440px] max-md:[@media(max-height:700px)]:h-[400px] md:h-[clamp(400px,62vh,540px)] w-full flex-col overflow-hidden rounded-[2px] bg-white lg:ml-auto lg:max-w-[460px]"
    >
      <div aria-hidden className="flex h-12 shrink-0 items-center justify-between border-b border-[#dfe1f0] px-4">
        <span className="font-head font-bold text-[15px] text-[var(--sw-black)]">Chat to Buy</span>
        <span className="flex items-center gap-1.5 text-[12px] text-[var(--sw-black)]/55">
          <span className="h-2 w-2 rounded-full bg-[#2fbf55]" />
          Online
        </span>
      </div>

      <motion.div
        aria-hidden
        animate={{ opacity: fading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-0 flex-1 flex-col justify-end gap-2.5 overflow-hidden px-4 pb-3 [mask-image:linear-gradient(to_bottom,transparent_0,black_40px)]"
      >
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div key="hello" {...item} className={ASSISTANT}>
            Hi! What are you shopping for today?
          </motion.div>
          {s >= 1 && (
            <motion.div key="ask" {...item} className={SHOPPER}>
              {ASK}
            </motion.div>
          )}
          {s === 2 && (
            <motion.div key="typing-1" {...item} className="self-start">
              <Typing />
            </motion.div>
          )}
          {s >= 3 && (
            <motion.div key="answer" {...item} className={ASSISTANT}>
              Here are three that fit a small room and stay under €1,000.
            </motion.div>
          )}
          {s >= 3 && (
            <motion.div key="products" {...item} className="self-stretch">
              <Products picked={s >= 6} />
            </motion.div>
          )}
          {s >= 4 && (
            <motion.div key="follow-up" {...item} className={SHOPPER}>
              {FOLLOW_UP}
            </motion.div>
          )}
          {s === 5 && (
            <motion.div key="typing-2" {...item} className="self-start">
              <Typing />
            </motion.div>
          )}
          {s >= 6 && (
            <motion.div key="pick" {...item} className={ASSISTANT}>
              The sofa bed. The covers come off and go in the washing machine, and it opens into a bed for guests.
              <div className="mt-2.5">
                <span
                  className={`inline-flex h-8 items-center gap-1.5 rounded-[2px] border px-3 font-head font-semibold text-[13px] transition-colors duration-300 ${
                    s >= 7
                      ? "border-[var(--sw-blue)] bg-[var(--sw-blue)] text-white"
                      : "border-[var(--sw-blue)] bg-white text-[var(--sw-blue)]"
                  }`}
                >
                  {s >= 7 ? (
                    <>
                      <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      Added to cart
                    </>
                  ) : (
                    "Add to cart · €949"
                  )}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div aria-hidden className="shrink-0 border-t border-[#dfe1f0] px-4 py-3">
        <div className="flex min-h-11 items-center gap-2 rounded-[2px] border border-[#dfe1f0] py-1.5 pl-3.5 pr-1.5">
          <span className={`min-w-0 flex-1 text-[14px] leading-snug ${input ? "text-[var(--sw-black)]" : "text-[var(--sw-black)]/40"}`}>
            {input || "Ask for anything you need"}
            {input && <span className="ml-px inline-block h-4 w-px translate-y-0.5 animate-pulse bg-[var(--sw-black)]" />}
          </span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] transition-colors ${
              input ? "bg-[var(--sw-blue)] text-white" : "bg-[#f0f1fa] text-[var(--sw-black)]/35"
            }`}
          >
            <ArrowUp className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </div>
  );
}
