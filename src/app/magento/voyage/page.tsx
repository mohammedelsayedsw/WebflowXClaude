"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import {
  ArrowUpRight,
  ArrowRight,
  ArrowDown,
  Plus,
  Minus,
  Code,
  ArrowRightLeft,
  Layers,
  Database,
  Cloud,
  Users,
  Activity,
  ShieldCheck,
  Settings,
  ClipboardCheck,
  Gauge,
  RefreshCw,
  Search,
  Megaphone,
  TrendingUp,
  Sparkles,
  Globe,
  BarChart3,
} from "lucide-react";
/* ==================================================================
   MAGENTO COMMERCE · scandiweb · v10
   Image-led. Field-guide voice. Three pillars: Build / Optimize / Grow.
   No decoration. The paintings do the work.
   ================================================================== */

const ease = [0.32, 0.72, 0, 1] as const;

const INK = "var(--sw-black)";
const INK_SOFT = "rgba(16,19,44,0.7)";
const INK_FAINT = "rgba(16,19,44,0.55)";
const CREAM = "var(--sw-beige)";
const MINT = "var(--sw-mint)";
const SERIF = "var(--font-serif), 'Cormorant Garamond', Garamond, Georgia, serif";
const SCRIPT = "var(--font-script), 'Italianno', 'Snell Roundhand', cursive";

/* ----------------- Serif accent + tiny ornaments ----------------- */

function Serif({
  children,
  italic = true,
  style,
  className,
}: {
  children: React.ReactNode;
  italic?: boolean;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <span
      className={className}
      style={{
        fontFamily: SERIF,
        fontStyle: italic ? "italic" : "normal",
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/* Small printers' mark for section breaks (asterism). */
function Ornament({
  color = INK_FAINT,
  size = 14,
}: {
  color?: string;
  size?: number;
}) {
  return (
    <div
      className="flex items-center justify-center gap-3"
      aria-hidden="true"
      style={{ color, fontFamily: SERIF, fontSize: size }}
    >
      <span
        aria-hidden
        style={{
          width: 40,
          height: 1,
          background: "currentColor",
          opacity: 0.4,
        }}
      />
      <span style={{ letterSpacing: "0.4em" }}>⁂</span>
      <span
        aria-hidden
        style={{
          width: 40,
          height: 1,
          background: "currentColor",
          opacity: 0.4,
        }}
      />
    </div>
  );
}

/* ----------------- Primitives ----------------- */

function Reveal({
  children,
  delay = 0,
  amount = 0.25,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.9, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/* A painting plate. If the image is missing, falls back to a colored
   placeholder showing the keyword so we can see which slot is empty. */
function Plate({
  keyword,
  alt,
  priority = false,
  className,
}: {
  keyword: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  const [errored, setErrored] = useState(false);
  if (errored) {
    return (
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, #4DA3E0 0%, #7EBEDD 50%, #E8B068 100%)",
        }}
      >
        <span
          className="font-head text-white"
          style={{
            fontSize: 18,
            letterSpacing: "0.06em",
            textShadow: "0 1px 3px rgba(0,0,0,0.3)",
          }}
        >
          [{keyword}]
        </span>
      </div>
    );
  }
  return (
    <img
      src={`/solutions/magento/voyage/${keyword}.png`}
      alt={alt}
      onError={() => setErrored(true)}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      className={`absolute inset-0 w-full h-full object-cover ${className ?? ""}`}
    />
  );
}

/* ----------------- Hero ----------------- */

function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Inverse mapping so clouds shift opposite to mouse — depth-parallax feel
  const cloudX = useTransform(mouseX, [-1, 1], [28, -28]);
  const cloudY = useTransform(mouseY, [-1, 1], [14, -14]);

  const springX = useSpring(cloudX, { stiffness: 40, damping: 18, mass: 0.6 });
  const springY = useSpring(cloudY, { stiffness: 40, damping: 18, mass: 0.6 });

  // Scroll-based parallax — works on touch devices too
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const scrollCloudY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const scrollCloudX = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ background: "#06080F" }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0">
        <Plate
          keyword="hero"
          alt="An eighteenth century merchant ship sailing on bright turquoise ocean past distant islands at sunrise"
          priority
          className="object-[72%_center] md:object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.4) 75%, rgba(0,0,0,0.85) 100%)",
          }}
        />
        {/* Top scrim — gives the shared site Header (white wordmark + menu) contrast against the bright clouds. */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          aria-hidden="true"
          style={{
            height: 140,
            background:
              "linear-gradient(to bottom, rgba(6,8,15,0.55) 0%, rgba(6,8,15,0.28) 55%, rgba(6,8,15,0) 100%)",
          }}
        />
      </div>

      {/* Scroll parallax wrapper — hidden on mobile, active md+ */}
      <motion.div
        className="hidden md:block absolute inset-x-0 top-0 pointer-events-none overflow-hidden"
        style={{
          x: scrollCloudX,
          y: scrollCloudY,
          height: "75%",
        }}
        aria-hidden="true"
      >
        {/* Mouse parallax (desktop) + responsive sizing */}
        <motion.img
          src="/solutions/magento/voyage/clouds.png"
          alt=""
          className="absolute top-0 -left-[50%] w-[200%] sm:-left-[25%] sm:w-[150%] md:-left-[6%] md:w-[112%] h-auto pointer-events-none select-none"
          style={{
            x: springX,
            y: springY,
            maxHeight: "80vh",
          }}
          draggable={false}
        />
      </motion.div>

      <div className="relative z-10 flex-1 flex items-end pb-28 md:pb-16 lg:pb-20">
        <div className="wrap w-full">
          <Reveal>
            <h1
              className="text-white"
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(46px, 7.5vw, 116px)",
                lineHeight: 0.98,
                fontWeight: 600,
                letterSpacing: "-0.015em",
                maxWidth: "22ch",
                textShadow: "0 2px 32px rgba(0,0,0,0.55)",
              }}
            >
              Build, run, and grow your Magento store.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p
              className="mt-6 md:mt-7 text-white max-w-[58ch]"
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "clamp(18px, 1.45vw, 24px)",
                lineHeight: 1.4,
                fontWeight: 400,
                color: "#ffffff",
                textShadow: "0 2px 24px rgba(0,0,0,0.55)",
              }}
            >
              Start your journey with the world&rsquo;s most-certified Magento
              and Hyvä agency for B2C, B2B, and omnichannel merchants.
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-9 md:mt-12 flex flex-wrap items-center gap-5 md:gap-6">
              <a
                href="#start"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-[2px] text-white font-head font-medium group transition-all"
                style={{
                  border: "1px solid rgba(255,255,255,0.85)",
                  background: "rgba(0,0,0,0.35)",
                  backdropFilter: "blur(4px)",
                  WebkitBackdropFilter: "blur(4px)",
                  fontSize: "15.5px",
                }}
              >
                Book a discovery call
                <ArrowUpRight className="h-4.5 w-4.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#support"
                className="inline-flex items-center gap-2 font-head font-medium hover:opacity-80 transition-opacity"
                style={{
                  color: "#ffffff",
                  fontSize: "15.5px",
                  letterSpacing: "0.005em",
                  textShadow: "0 2px 18px rgba(0,0,0,0.55)",
                }}
              >
                Request urgent support
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Opening ----------------- */

function Opening() {
  const ctas = [
    { label: "I want to build a Magento store.", href: "#start" },
    { label: "I want to optimize my Magento store.", href: "#start" },
    { label: "I want to grow my Magento store.", href: "#start" },
  ];
  return (
    <section id="chapters" style={{ background: CREAM }}>
      <div className="wrap py-24 md:py-36">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-20 items-start">
          <div className="max-w-[60ch]">
            <Reveal>
              <div
                style={{
                  fontFamily: SERIF,
                  fontWeight: 600,
                  fontSize: "14px",
                  color: INK_FAINT,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                What scandiweb covers
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <p
                className="mt-6 md:mt-8"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(28px, 3vw, 44px)",
                  lineHeight: 1.2,
                  fontWeight: 500,
                  color: INK,
                  letterSpacing: "-0.01em",
                }}
              >
                Build. Optimize. Grow. The full scope of work an Adobe
                Commerce store needs after launch.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p
                className="mt-8 md:mt-10 leading-relaxed"
                style={{
                  fontSize: "clamp(17px, 1.25vw, 20px)",
                  color: INK_SOFT,
                  lineHeight: 1.6,
                }}
              >
                We have delivered all three for 700 brands since Magento
                launched in 2008. Many of those merchants have stayed with
                us for more than ten years.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div
                className="mt-10 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 pt-8"
                style={{ borderTop: "1px solid rgba(16,19,44,0.18)" }}
              >
                {[
                  { v: "2,100+", l: "projects shipped" },
                  { v: "$4B+", l: "annual client revenue generated" },
                  { v: "99.99%", l: "uptime guarantee" },
                ].map((s) => (
                  <div key={s.l}>
                    <div
                      style={{
                        fontFamily: SERIF,
                        fontSize: "clamp(34px, 3.4vw, 48px)",
                        lineHeight: 1,
                        fontWeight: 500,
                        color: INK,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {s.v}
                    </div>
                    <div
                      className="mt-2"
                      style={{
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        fontSize: "14.5px",
                        color: INK_FAINT,
                        lineHeight: 1.4,
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="flex flex-col gap-4">
              {ctas.map((c, i) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-center justify-between gap-4 p-6 md:p-7 transition-all"
                  style={{
                    border: `1px solid ${INK}`,
                    background: i === 0 ? INK : "transparent",
                    color: i === 0 ? "#ffffff" : INK,
                  }}
                >
                  <span
                    style={{
                      fontFamily: SERIF,
                      fontSize: "clamp(18px, 1.5vw, 23px)",
                      fontWeight: 500,
                      lineHeight: 1.25,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {c.label}
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Client logo strip (used inside Footprint) ----------------- */

const CLIENT_LOGOS: { src: string; alt: string }[] = [
  { src: "puma.svg", alt: "PUMA" },
  { src: "samsung.svg", alt: "Samsung" },
  { src: "elo.svg", alt: "ELO" },
  { src: "laderach.svg", alt: "Läderach" },
  { src: "bmw.svg", alt: "BMW" },
  { src: "mitsu.svg", alt: "Mitsubishi" },
  { src: "ford.svg", alt: "Ford" },
  { src: "client-frame.svg", alt: "Client" },
  { src: "bechtle.svg", alt: "Bechtle" },
  { src: "walmart.svg", alt: "Walmart" },
  { src: "national-instruments.svg", alt: "National Instruments" },
];

function ClientLogoStrip({ onDark = false }: { onDark?: boolean }) {
  const loop = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex items-center gap-14 md:gap-20 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((logo, i) => (
          <span
            key={i}
            className="shrink-0 flex items-center justify-center"
            style={{ height: 56 }}
          >
            <img
              src={`/solutions/magento/voyage/logos/${logo.src}`}
              alt={logo.alt}
              style={{
                height: 36,
                width: "auto",
                maxWidth: 160,
                objectFit: "contain",
                opacity: onDark ? 0.95 : 0.85,
                filter: onDark
                  ? "brightness(0) invert(1)"
                  : "grayscale(1)",
              }}
            />
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ----------------- Scope grid (categorized table) ----------------- */

type ScopeGroup = {
  title: string;
  description?: string;
  items: string[];
  featured?: boolean;
};

function ScopeGrid({
  label,
  groups,
}: {
  label: string;
  groups: ScopeGroup[];
}) {
  // Mobile accordion: 0 by default, -1 = all closed.
  const [openIdx, setOpenIdx] = useState<number>(0);
  // Desktop left-rail picker: which category's items are shown on the right.
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeGroup = groups[activeIdx] ?? groups[0];

  return (
    <Reveal delay={0.12}>
      <div className="mt-14 md:mt-20">
        <div
          className="flex items-center gap-3"
          style={{
            marginBottom: 26,
          }}
        >
          <span
            style={{
              width: 9,
              height: 9,
              background: "var(--sw-blue)",
              display: "inline-block",
              flexShrink: 0,
              transform: "rotate(45deg)",
            }}
          />
          <span
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(20px, 1.7vw, 28px)",
              fontWeight: 600,
              color: INK,
              letterSpacing: "-0.005em",
              lineHeight: 1.3,
            }}
          >
            {label}
          </span>
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden">
          {groups.map((group, i) => {
            const open = openIdx === i;
            return (
              <div
                key={group.title}
                style={{
                  borderBottom: "1px solid rgba(16,19,44,0.18)",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 py-4 text-left"
                  style={{
                    fontFamily: SERIF,
                    fontSize: "14px",
                    fontWeight: 600,
                    color: INK,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    {group.title}
                    {group.featured && (
                      <span
                        aria-hidden="true"
                        style={{
                          fontSize: 13,
                          color: "var(--sw-blue)",
                          lineHeight: 1,
                        }}
                      >
                        ★
                      </span>
                    )}
                  </span>
                  <span
                    style={{
                      display: "inline-flex",
                      width: 28,
                      height: 28,
                      border: `1px solid ${INK}`,
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.2s",
                      background: open ? INK : "transparent",
                      color: open ? "#fff" : INK,
                    }}
                  >
                    {open ? (
                      <Minus className="h-3.5 w-3.5" />
                    ) : (
                      <Plus className="h-3.5 w-3.5" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease }}
                      className="overflow-hidden"
                    >
                      <ul
                        className="pb-5"
                        style={{
                          fontFamily: SERIF,
                          fontSize: "17px",
                          color: INK,
                          lineHeight: 1.85,
                          fontWeight: 500,
                        }}
                      >
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Desktop: left-rail categories + right-panel items */}
        <div
          className="hidden md:grid items-stretch"
          style={{
            gridTemplateColumns: "minmax(220px, 280px) 1fr",
            border: "1px solid rgba(16,19,44,0.18)",
            background: "rgba(255,253,247,0.5)",
          }}
        >
          {/* Left rail */}
          <div
            style={{
              borderRight: "1px solid rgba(16,19,44,0.16)",
              padding: "16px 0",
            }}
          >
            {groups.map((group, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className="w-full text-left flex items-center justify-between gap-3 transition-colors"
                  style={{
                    padding: "14px 24px",
                    fontFamily: SERIF,
                    fontSize: "15px",
                    fontWeight: 700,
                    color: INK,
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    background: isActive
                      ? "rgba(16,19,44,0.06)"
                      : "transparent",
                    borderLeft: `3px solid ${
                      isActive ? "var(--sw-blue)" : "transparent"
                    }`,
                    cursor: "pointer",
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    {group.title}
                    {group.featured && (
                      <span
                        aria-hidden="true"
                        style={{
                          fontSize: 13,
                          color: "var(--sw-blue)",
                          lineHeight: 1,
                        }}
                      >
                        ★
                      </span>
                    )}
                  </span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-opacity"
                    style={{
                      opacity: isActive ? 0.7 : 0,
                      color: INK,
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Right panel */}
          <div
            style={{
              padding: "32px 36px 32px",
              backgroundImage:
                "radial-gradient(circle, rgba(16,19,44,0.06) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
              backgroundPosition: "0 0",
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeGroup?.title}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.22, ease }}
              >
                {/* Top row: counter on the left, title + description on the right */}
                <div
                  className="flex items-start gap-6"
                  style={{
                    paddingBottom: 18,
                    marginBottom: 22,
                    borderBottom: "1px solid rgba(16,19,44,0.18)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontStyle: "italic",
                      fontSize: "clamp(20px, 1.7vw, 28px)",
                      color: INK_FAINT,
                      letterSpacing: "0.01em",
                      lineHeight: 1,
                      whiteSpace: "nowrap",
                      paddingTop: 4,
                    }}
                  >
                    {activeIdx + 1} / {groups.length}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="inline-flex items-center gap-2.5"
                      style={{
                        fontFamily: SERIF,
                        fontSize: "clamp(26px, 2.4vw, 36px)",
                        fontWeight: 600,
                        color: INK,
                        letterSpacing: "-0.01em",
                        lineHeight: 1.1,
                      }}
                    >
                      {activeGroup?.title}
                      {activeGroup?.featured && (
                        <span
                          aria-hidden="true"
                          style={{
                            fontSize: 22,
                            color: "var(--sw-blue)",
                            lineHeight: 1,
                          }}
                        >
                          ★
                        </span>
                      )}
                    </div>
                    {activeGroup?.description && (
                      <p
                        className="mt-3"
                        style={{
                          fontFamily: SERIF,
                          fontSize: "clamp(18px, 1.5vw, 22px)",
                          color: INK_SOFT,
                          lineHeight: 1.45,
                          maxWidth: "62ch",
                        }}
                      >
                        {activeGroup.description}
                      </p>
                    )}
                  </div>
                </div>

                <ul
                  className="grid gap-x-10 gap-y-2.5"
                  style={{
                    gridTemplateColumns: `repeat(${
                      (activeGroup?.items.length ?? 0) > 4 ? 2 : 1
                    }, minmax(0, 1fr))`,
                    fontFamily: SERIF,
                    fontSize: "18.5px",
                    color: INK,
                    lineHeight: 1.65,
                    fontWeight: 500,
                  }}
                >
                  {activeGroup?.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3"
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          width: 6,
                          height: 6,
                          background: "var(--sw-blue)",
                          display: "inline-block",
                          flexShrink: 0,
                          transform: "rotate(45deg)",
                          marginTop: 9,
                        }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/* ----------------- Impact stats — engraved-plate style ----------------- */

function EngravedPlate({
  label,
  children,
  className,
  footnote,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
  footnote?: string;
}) {
  return (
    <div
      className={`h-full flex flex-col ${className ?? ""}`}
      style={{
        border: "1px solid rgba(16,19,44,0.35)",
        background: "rgba(255,253,247,0.6)",
      }}
    >
      <div
        style={{
          padding: "18px 28px",
          background: "rgba(255,253,247,0.6)",
          borderBottom: "1px solid rgba(16,19,44,0.22)",
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <span
          style={{
            width: 9,
            height: 9,
            background: "var(--sw-blue)",
            display: "inline-block",
            flexShrink: 0,
            transform: "rotate(45deg)",
          }}
        />
        <span
          style={{
            fontFamily: SERIF,
            fontWeight: 600,
            fontSize: "clamp(16px, 1.4vw, 22px)",
            color: INK,
            letterSpacing: "-0.005em",
            lineHeight: 1.3,
          }}
        >
          {label}
        </span>
      </div>
      <div
        className="flex-1 flex flex-col items-stretch"
        style={{
          padding: "32px 28px",
          backgroundImage:
            "radial-gradient(circle, rgba(16,19,44,0.07) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
          backgroundPosition: "0 0",
        }}
      >
        <div className="flex-1 flex items-start justify-center w-full">
          {children}
        </div>
        {footnote && (
          <div
            className="mt-5 md:mt-6"
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "clamp(14px, 1.1vw, 16px)",
              color: INK_FAINT,
              lineHeight: 1.45,
              textAlign: "center",
              letterSpacing: "0.005em",
            }}
          >
            {footnote}
          </div>
        )}
      </div>
    </div>
  );
}

function RevenueChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const W = 1200;
  const H = 340;
  const PAD = { left: 56, right: 24, top: 30, bottom: 50 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  // 18 months: months 1-6 stagnant/declining, scandiweb engaged at month 6, then growth
  const data = [
    100, 96, 92, 87, 82, 78, 78, 86, 98, 114, 132, 152, 172, 192, 210, 226, 240, 252,
  ];
  const yMin = 0;
  const yMax = 280;

  const monthLabels = ["I", "III", "V", "VII", "IX", "XI", "XIII", "XV", "XVII"];

  const points = data.map((v, i) => ({
    x: PAD.left + (i / (data.length - 1)) * innerW,
    y: PAD.top + ((yMax - v) / (yMax - yMin)) * innerH,
  }));

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x.toFixed(2)} ${p.y.toFixed(2)}`)
    .join(" ");
  const last = points[points.length - 1];
  const baseline = PAD.top + innerH;
  const fillPath = `${path} L ${last.x.toFixed(2)} ${baseline} L ${PAD.left} ${baseline} Z`;

  const engagedX = points[6].x;
  const yTicks = [0, 50, 100, 150, 200, 250];

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      style={{ maxHeight: 360 }}
    >
      <defs>
        <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3F4AAF" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3F4AAF" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Y grid + labels (italic serif) */}
      {yTicks.map((v) => {
        const y = PAD.top + ((yMax - v) / (yMax - yMin)) * innerH;
        return (
          <g key={v}>
            <line
              x1={PAD.left}
              y1={y}
              x2={PAD.left + innerW}
              y2={y}
              stroke="rgba(16,19,44,0.12)"
              strokeWidth="0.5"
            />
            <text
              x={PAD.left - 14}
              y={y + 5}
              fontSize="22"
              fill="rgba(16,19,44,0.78)"
              textAnchor="end"
              fontFamily="var(--font-serif), Cormorant Garamond, serif"
              fontStyle="italic"
            >
              {v}
            </text>
          </g>
        );
      })}

      {/* X-axis labels in Roman numerals, italic serif */}
      {monthLabels.map((l, i) => {
        const idx = i * 2;
        const x = points[idx].x;
        return (
          <text
            key={i}
            x={x}
            y={H - 20}
            fontSize="20"
            fill="rgba(16,19,44,0.78)"
            textAnchor="middle"
            fontFamily="var(--font-serif), Cormorant Garamond, serif"
            fontStyle="italic"
          >
            {l}
          </text>
        );
      })}

      {/* Axis baselines — clean engraved feel */}
      <line
        x1={PAD.left}
        y1={baseline}
        x2={PAD.left + innerW}
        y2={baseline}
        stroke="rgba(16,19,44,0.5)"
        strokeWidth="0.6"
      />
      <line
        x1={PAD.left}
        y1={PAD.top}
        x2={PAD.left}
        y2={baseline}
        stroke="rgba(16,19,44,0.5)"
        strokeWidth="0.6"
      />

      {/* scandiweb engaged — vertical line + italic serif label */}
      <line
        x1={engagedX}
        y1={PAD.top}
        x2={engagedX}
        y2={baseline}
        stroke="rgba(16,19,44,0.55)"
        strokeWidth="0.8"
        strokeDasharray="3 5"
      />
      <text
        x={engagedX + 12}
        y={PAD.top + 24}
        fontSize="28"
        fill="var(--sw-black)"
        textAnchor="start"
        fontFamily="var(--font-serif), Cormorant Garamond, serif"
        fontStyle="italic"
      >
        scandiweb engaged
      </text>

      {/* Area fill */}
      <motion.path
        d={fillPath}
        fill="url(#revFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.4, delay: 0.4 }}
      />

      {/* Line */}
      <motion.path
        d={path}
        stroke="#3F4AAF"
        strokeWidth="2.4"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeDasharray="3000"
        initial={{ strokeDashoffset: 3000 }}
        animate={{ strokeDashoffset: inView ? 0 : 3000 }}
        transition={{ duration: 2.4, delay: 0.2, ease: [0.32, 0.72, 0, 1] }}
      />

      {/* End marker + italic serif growth label */}
      <motion.circle
        cx={last.x}
        cy={last.y}
        r="5"
        fill="#3F4AAF"
        initial={{ scale: 0 }}
        animate={{ scale: inView ? 1 : 0 }}
        transition={{ duration: 0.4, delay: 2.4 }}
      />
      <motion.text
        x={last.x - 10}
        y={last.y - 14}
        fontSize="28"
        fill="var(--sw-black)"
        textAnchor="end"
        fontFamily="var(--font-serif), Cormorant Garamond, serif"
        fontStyle="italic"
        fontWeight="500"
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 2.6 }}
      >
        +152%
      </motion.text>
    </svg>
  );
}

function ConversionChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const W = 600;
  const H = 340;
  const PAD = { left: 56, right: 24, top: 56, bottom: 64 };
  const innerH = H - PAD.top - PAD.bottom;

  const data = [
    { label: "Before.", value: 1.8, color: "rgba(16,19,44,0.32)" },
    { label: "Industry average.", value: 2.5, color: "rgba(16,19,44,0.5)" },
    { label: "With scandiweb.", value: 3.5, color: "#3F4AAF" },
  ];
  const yMax = 5;
  const yTicks = [0, 1, 2, 3, 4, 5];

  const barWidth = 80;
  const gap = 56;
  const totalWidth = data.length * barWidth + (data.length - 1) * gap;
  const xStart = PAD.left + (W - PAD.left - PAD.right - totalWidth) / 2;
  const baseline = PAD.top + innerH;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      style={{ maxHeight: 340 }}
    >
      {/* Y grid */}
      {yTicks.map((v) => {
        const y = PAD.top + ((yMax - v) / yMax) * innerH;
        return (
          <g key={v}>
            <line
              x1={PAD.left}
              y1={y}
              x2={W - PAD.right}
              y2={y}
              stroke="rgba(16,19,44,0.1)"
              strokeWidth="0.5"
            />
            <text
              x={PAD.left - 12}
              y={y + 5}
              fontSize="22"
              fill="rgba(16,19,44,0.78)"
              textAnchor="end"
              fontFamily="var(--font-serif), Cormorant Garamond, serif"
              fontStyle="italic"
            >
              {v}%
            </text>
          </g>
        );
      })}

      {/* Baselines */}
      <line
        x1={PAD.left}
        y1={baseline}
        x2={W - PAD.right}
        y2={baseline}
        stroke="rgba(16,19,44,0.5)"
        strokeWidth="0.6"
      />
      <line
        x1={PAD.left}
        y1={PAD.top}
        x2={PAD.left}
        y2={baseline}
        stroke="rgba(16,19,44,0.5)"
        strokeWidth="0.6"
      />

      {/* Bars */}
      {data.map((d, i) => {
        const x = xStart + i * (barWidth + gap);
        const barHeight = (d.value / yMax) * innerH;
        const y = baseline - barHeight;

        return (
          <g key={d.label}>
            <motion.rect
              x={x}
              width={barWidth}
              fill={d.color}
              initial={{ height: 0, y: baseline }}
              animate={
                inView
                  ? { height: barHeight, y }
                  : { height: 0, y: baseline }
              }
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.18,
                ease: [0.32, 0.72, 0, 1],
              }}
            />
            <motion.text
              x={x + barWidth / 2}
              y={y - 16}
              fontSize="34"
              fontFamily="var(--font-serif), Cormorant Garamond, serif"
              fontStyle="italic"
              fontWeight="500"
              fill={i === 2 ? "#3F4AAF" : INK}
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.18 }}
            >
              {d.value}%
            </motion.text>
            <text
              x={x + barWidth / 2}
              y={H - 22}
              fontSize="20"
              fill={INK_FAINT}
              textAnchor="middle"
              fontFamily="var(--font-serif), Cormorant Garamond, serif"
              fontStyle="italic"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function AwardsCard() {
  const awards = [
    {
      src: "award-design-curve.png",
      alt: "Design Curve Award Winner, New Orange Awards",
    },
    {
      src: "award-record-holder.png",
      alt: "Conversion Booster Record Holder",
    },
    {
      src: "award-design-pioneer.png",
      alt: "Design Pioneer Award, Meet Magento Ecommerce Excellence Awards",
    },
    {
      src: "award-pim.png",
      alt: "Award-Winning PIM Implementation by scandiweb",
    },
    {
      src: "award-mercedes-design.png",
      alt: "Mercedes-Benz Design Award",
    },
    {
      src: "award-webby.png",
      alt: "The Webby Awards",
    },
  ];
  return (
    <div
      className="h-full flex flex-col"
      style={{
        border: "1px solid rgba(16,19,44,0.35)",
        background: "rgba(255,253,247,0.6)",
      }}
    >
      <div
        style={{
          padding: "18px 28px",
          background: "rgba(255,253,247,0.6)",
          borderBottom: "1px solid rgba(16,19,44,0.22)",
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <span
          style={{
            width: 9,
            height: 9,
            background: "var(--sw-blue)",
            display: "inline-block",
            flexShrink: 0,
            transform: "rotate(45deg)",
          }}
        />
        <span
          style={{
            fontFamily: SERIF,
            fontWeight: 600,
            fontSize: "clamp(16px, 1.4vw, 22px)",
            color: INK,
            letterSpacing: "-0.005em",
            lineHeight: 1.3,
          }}
        >
          Award-winning designs.
        </span>
      </div>
      <div
        className="flex-1 flex flex-col"
        style={{
          padding: "28px 24px",
          backgroundImage:
            "radial-gradient(circle, rgba(16,19,44,0.07) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      >
        <p
          className="leading-relaxed"
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "clamp(17px, 1.45vw, 21px)",
            color: INK_SOFT,
            lineHeight: 1.5,
            maxWidth: "42ch",
          }}
        >
          More than 20 industry awards for design, performance, and
          engineering on Adobe Commerce.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-5 items-center justify-items-center flex-1">
          {awards.map((b) => (
            <img
              key={b.src}
              src={`/solutions/magento/voyage/badges/${b.src}`}
              alt={b.alt}
              style={{
                width: "100%",
                maxWidth: 140,
                height: "auto",
                maxHeight: 76,
                objectFit: "contain",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function IntegrationsDashboard() {
  const integrations = [
    {
      name: "Fulfillments",
      category: "Order routing",
      title: "Order routing",
      kpis: [
        { l: "Orders routed today", v: "8,402" },
        { l: "Ship-from-store share", v: "38%" },
        { l: "Avg time to dispatch", v: "1h 12m" },
        { l: "Routing exceptions", v: "12" },
      ],
      spark: [12, 14, 18, 22, 28, 26, 32, 35, 40, 42, 48, 52, 58, 62, 64, 68],
      activity: [
        "Order #80211 · ship from Berlin",
        "Order #80205 · DC East",
        "Backorder release · 4 SKUs",
        "Exception · 1 cancelled",
      ],
      coverage: {
        label: "Fulfillment network",
        big: "284",
        bigLabel: "nodes online",
        rows: [
          { l: "Distribution centers", v: "12" },
          { l: "Ship-from-store pods", v: "138" },
          { l: "3PL partners", v: "8" },
          { l: "Cross-dock hubs", v: "4" },
        ],
      },
      queue: {
        label: "Routing queue",
        big: "412",
        bigLabel: "orders to dispatch",
        bars: [8, 14, 12, 22, 18, 16, 4],
        barsLabel: "last 7 days",
      },
      delta: "+18.4%",
    },
    {
      name: "Stores",
      category: "Inventory and POS",
      title: "Store inventory and POS",
      kpis: [
        { l: "Stores connected", v: "134" },
        { l: "SKUs tracked, live", v: "62,914" },
        { l: "In-store revenue today", v: "$184,210" },
        { l: "POS terminals online", v: "248 / 248" },
      ],
      spark: [42, 48, 50, 54, 56, 60, 62, 66, 68, 72, 74, 78, 82, 84, 88, 92],
      activity: [
        "Berlin Mitte · 12 sales · last 10 min",
        "Zurich main · POS sync OK",
        "London Soho · inventory reserved",
        "NYC SoHo · daily close 6:08 PM",
      ],
      coverage: {
        label: "Store coverage",
        big: "134",
        bigLabel: "stores online",
        rows: [
          { l: "Europe", v: "62" },
          { l: "North America", v: "38" },
          { l: "Asia and Pacific", v: "22" },
          { l: "Middle East and Africa", v: "12" },
        ],
      },
      queue: {
        label: "POS today",
        big: "1,248",
        bigLabel: "items sold, last hour",
        bars: [12, 18, 22, 32, 28, 24, 18],
        barsLabel: "by hour, today",
      },
      delta: "+12.1%",
    },
    {
      name: "Pickup",
      category: "BOPIS and curbside",
      title: "Pickup and curbside",
      kpis: [
        { l: "BOPIS orders today", v: "1,247" },
        { l: "Avg pickup time", v: "4h 18m" },
        { l: "Pickup conversion uplift", v: "+24%" },
        { l: "Cancelled before pickup", v: "0.8%" },
      ],
      spark: [4, 6, 5, 8, 7, 10, 9, 12, 11, 14, 13, 16, 18, 21, 20, 24],
      activity: [
        "Order #80214 · ready · Hamburg",
        "Order #80212 · picked up",
        "Curbside · 4 cars in queue",
        "Locker drop · Munich · 6 items",
      ],
      coverage: {
        label: "Pickup network",
        big: "248",
        bigLabel: "pickup locations",
        rows: [
          { l: "In-store pickup", v: "134" },
          { l: "Curbside enabled", v: "88" },
          { l: "Smart lockers", v: "26" },
        ],
      },
      queue: {
        label: "Pickup queue",
        big: "84",
        bigLabel: "orders ready to collect",
        bars: [4, 8, 12, 18, 22, 16, 8],
        barsLabel: "last 24 hours",
      },
      delta: "+34.8%",
    },
    {
      name: "Returns",
      category: "In-store and mail",
      title: "Returns workflow",
      kpis: [
        { l: "Returns today", v: "412" },
        { l: "In-store return share", v: "61%" },
        { l: "Avg refund time", v: "3h 4m" },
        { l: "Net return rate, 30 d", v: "6.4%" },
      ],
      spark: [22, 25, 24, 26, 28, 30, 28, 32, 30, 34, 32, 36, 34, 38, 36, 40],
      activity: [
        "Return #41021 · restocked",
        "Return #41019 · refunded €248",
        "Exchange · size swap · in-store",
        "Mail return · in transit · 32",
      ],
      coverage: {
        label: "Return network",
        big: "158",
        bigLabel: "return points",
        rows: [
          { l: "In-store returns", v: "134" },
          { l: "Mail return centers", v: "18" },
          { l: "Partner drop-offs", v: "6" },
        ],
      },
      queue: {
        label: "Returns inbox",
        big: "62",
        bigLabel: "awaiting restock",
        bars: [4, 8, 6, 12, 10, 8, 4],
        barsLabel: "last 7 days",
      },
      delta: "-2.4%",
    },
    {
      name: "Marketplaces",
      category: "Amazon, eBay, TikTok",
      title: "Marketplace sync",
      kpis: [
        { l: "Listings live", v: "12,840" },
        { l: "Marketplaces connected", v: "7" },
        { l: "Marketplace orders today", v: "1,148" },
        { l: "Sync errors, last hour", v: "0" },
      ],
      spark: [38, 42, 48, 52, 58, 62, 68, 72, 78, 82, 88, 92, 96, 102, 108, 114],
      activity: [
        "Amazon DE · 248 orders",
        "TikTok Shop · 96 orders",
        "eBay UK · price feed · OK",
        "Listing update · 412 SKUs",
      ],
      coverage: {
        label: "Channels live",
        big: "7",
        bigLabel: "marketplaces syncing",
        rows: [
          { l: "Amazon", v: "EU and US" },
          { l: "eBay", v: "UK and DE" },
          { l: "Walmart", v: "US" },
          { l: "TikTok Shop", v: "UK and US" },
        ],
      },
      queue: {
        label: "Listing queue",
        big: "248",
        bigLabel: "listings to publish",
        bars: [14, 22, 18, 32, 26, 22, 12],
        barsLabel: "last 7 days",
      },
      delta: "+22.4%",
    },
    {
      name: "Loyalty",
      category: "Cross-channel",
      title: "Cross-channel loyalty",
      kpis: [
        { l: "Members, live", v: "1,204,810" },
        { l: "Points earned today", v: "248,402" },
        { l: "Online to offline lift", v: "+18%" },
        { l: "Redemptions today", v: "3,124" },
      ],
      spark: [8, 12, 14, 18, 22, 26, 30, 36, 42, 48, 54, 60, 64, 70, 76, 82],
      activity: [
        "Member #2148 · redeemed in store",
        "Member #2147 · tier upgrade",
        "Campaign · double points active",
        "Online enroll · 412 today",
      ],
      coverage: {
        label: "Membership tiers",
        big: "4",
        bigLabel: "active tiers",
        rows: [
          { l: "Bronze", v: "814,210" },
          { l: "Silver", v: "248,402" },
          { l: "Gold", v: "124,180" },
          { l: "Platinum", v: "18,018" },
        ],
      },
      queue: {
        label: "Redemption queue",
        big: "124",
        bigLabel: "in-store redemptions waiting",
        bars: [8, 12, 18, 22, 18, 14, 8],
        barsLabel: "last 24 hours",
      },
      delta: "+8.6%",
    },
  ];

  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  useEffect(() => {
    if (userPaused) return;
    const id = window.setInterval(() => {
      setActive((a) => (a + 1) % integrations.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, [integrations.length, userPaused]);

  const pickTab = (i: number) => {
    setActive(i);
    setUserPaused(true);
  };

  const current = integrations[active];

  const renderSparkline = (data: number[], height = 56, color = INK) => {
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = Math.max(1, max - min);
    const w = 100 / (data.length - 1);
    const pts = data
      .map(
        (v, i) =>
          `${(i * w).toFixed(2)},${(((max - v) / range) * 100).toFixed(2)}`,
      )
      .join(" ");
    return (
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{ width: "100%", height, display: "block" }}
      >
        <polyline
          fill="none"
          stroke={color}
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
          points={pts}
        />
      </svg>
    );
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ minHeight: 540 }}>
      {/* Integration tabs row — desktop grid, mobile horizontal scroll */}
      <div
        className="hidden md:grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${integrations.length}, 1fr)`,
        }}
      >
        {integrations.map((it, i) => (
          <button
            key={it.name}
            type="button"
            onClick={() => pickTab(i)}
            className="text-left transition-all"
            style={{
              padding: "10px 12px",
              border: `1px solid ${
                i === active ? INK : "rgba(16,19,44,0.18)"
              }`,
              background:
                i === active ? INK : "rgba(255,253,247,0.5)",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                fontFamily: SERIF,
                fontWeight: 600,
                fontSize: "14.5px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: i === active ? "#ffffff" : INK,
                lineHeight: 1.1,
              }}
            >
              {it.name}
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "14px",
                color:
                  i === active
                    ? "rgba(255,255,255,0.72)"
                    : INK_FAINT,
                marginTop: 3,
                lineHeight: 1.1,
              }}
            >
              {it.category}
            </div>
          </button>
        ))}
      </div>

      {/* Mobile tabs: horizontal scroll */}
      <div
        className="md:hidden flex gap-2 overflow-x-auto"
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {integrations.map((it, i) => (
          <button
            key={it.name}
            type="button"
            onClick={() => pickTab(i)}
            className="text-left transition-all shrink-0"
            style={{
              padding: "10px 14px",
              border: `1px solid ${
                i === active ? INK : "rgba(16,19,44,0.18)"
              }`,
              background:
                i === active ? INK : "rgba(255,253,247,0.5)",
              cursor: "pointer",
              minWidth: 130,
            }}
          >
            <div
              style={{
                fontFamily: SERIF,
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: i === active ? "#ffffff" : INK,
                lineHeight: 1.1,
              }}
            >
              {it.name}
            </div>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "14.5px",
                color:
                  i === active
                    ? "rgba(255,255,255,0.72)"
                    : INK_FAINT,
                marginTop: 3,
                lineHeight: 1.1,
                whiteSpace: "nowrap",
              }}
            >
              {it.category}
            </div>
          </button>
        ))}
      </div>

      {/* Main grid: left + center + right (mobile shows center only) */}
      <div
        className="flex-1 mt-3 grid gap-3 grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_minmax(0,1fr)]"
      >
        {/* LEFT column — hidden on mobile */}
        <div className="hidden md:flex flex-col gap-3">
          {/* Coverage panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`coverage-${current.name}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease }}
              className="p-3.5"
              style={{
                border: "1px solid rgba(16,19,44,0.22)",
                background: "rgba(255,253,247,0.7)",
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontWeight: 600,
                  fontSize: "13.5px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: INK_FAINT,
                  marginBottom: 10,
                }}
              >
                {current.coverage.label}
              </div>
              <div className="flex items-baseline justify-between">
                <span
                  style={{
                    fontFamily: SERIF,
                    fontSize: "30px",
                    color: INK,
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {current.coverage.big}
                </span>
                <span
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: "15.5px",
                    color: INK_FAINT,
                  }}
                >
                  {current.coverage.bigLabel}
                </span>
              </div>
              <div className="mt-3 flex flex-col gap-1.5">
                {current.coverage.rows.map((row) => (
                  <div
                    key={row.l}
                    className="flex items-baseline justify-between gap-3"
                  >
                    <span
                      style={{
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        fontSize: "15.5px",
                        color: INK_FAINT,
                      }}
                    >
                      {row.l}
                    </span>
                    <span
                      style={{
                        fontFamily: SERIF,
                        fontSize: "16.5px",
                        color: INK,
                        fontWeight: 500,
                      }}
                    >
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Queue panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`queue-${current.name}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease, delay: 0.04 }}
              className="p-3.5 flex-1"
              style={{
                border: "1px solid rgba(16,19,44,0.22)",
                background: "rgba(255,253,247,0.7)",
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontWeight: 600,
                  fontSize: "13.5px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: INK_FAINT,
                  marginBottom: 10,
                }}
              >
                {current.queue.label}
              </div>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: "32px",
                  color: INK,
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: "-0.015em",
                }}
              >
                {current.queue.big}
              </div>
              <div
                className="mt-1"
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "15.5px",
                  color: INK_FAINT,
                }}
              >
                {current.queue.bigLabel}
              </div>
              <div
                className="mt-4 grid gap-1"
                style={{ gridTemplateColumns: `repeat(${current.queue.bars.length}, 1fr)` }}
              >
                {current.queue.bars.map((v, i) => {
                  const maxBar = Math.max(...current.queue.bars);
                  return (
                    <div key={i} className="flex flex-col-reverse h-12">
                      <div
                        style={{
                          height: `${(v / maxBar) * 100}%`,
                          background: INK,
                          opacity: 0.78,
                        }}
                      />
                    </div>
                  );
                })}
              </div>
              <div
                className="mt-1.5"
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "14px",
                  color: INK_FAINT,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {current.queue.barsLabel}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CENTER main */}
        <div
          className="p-5 md:p-6 relative overflow-hidden"
          style={{
            border: "2px solid rgba(16,19,44,0.5)",
            background: "rgba(255,253,247,0.92)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.32, ease }}
              className="h-full flex flex-col"
            >
              <div className="flex items-baseline justify-between flex-wrap gap-2">
                <div
                  style={{
                    fontFamily: SERIF,
                    fontWeight: 600,
                    fontSize: "14.5px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: INK,
                  }}
                >
                  Magento · {current.name}
                </div>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: "15.5px",
                    color: INK_FAINT,
                  }}
                >
                  live, last 24 h
                </div>
              </div>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(26px, 2.6vw, 36px)",
                  lineHeight: 1.05,
                  fontWeight: 500,
                  color: INK,
                  letterSpacing: "-0.015em",
                  marginTop: 12,
                }}
              >
                {current.title}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3">
                {current.kpis.map((r) => (
                  <div key={r.l}>
                    <div
                      style={{
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        fontSize: "15px",
                        color: INK_FAINT,
                        lineHeight: 1.2,
                      }}
                    >
                      {r.l}
                    </div>
                    <div
                      style={{
                        fontFamily: SERIF,
                        fontSize: "clamp(20px, 1.8vw, 26px)",
                        fontWeight: 500,
                        color: INK,
                        letterSpacing: "-0.015em",
                        lineHeight: 1.1,
                        marginTop: 4,
                      }}
                    >
                      {r.v}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-5">
                <div
                  style={{
                    fontFamily: SERIF,
                    fontWeight: 600,
                    fontSize: "13.5px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: INK_FAINT,
                    marginBottom: 6,
                  }}
                >
                  Throughput, last hour
                </div>
                {renderSparkline(current.spark, 60, "var(--sw-blue)")}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT column — hidden on mobile */}
        <div className="hidden md:flex flex-col gap-3">
          {/* Recent activity */}
          <div
            className="p-3.5 flex-1"
            style={{
              border: "1px solid rgba(16,19,44,0.22)",
              background: "rgba(255,253,247,0.7)",
              minHeight: 0,
            }}
          >
            <div
              style={{
                fontFamily: SERIF,
                fontWeight: 600,
                fontSize: "13.5px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: INK_FAINT,
                marginBottom: 10,
              }}
            >
              Recent activity
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {current.activity.map((line, i) => (
                  <div
                    key={i}
                    style={{
                      paddingTop: 8,
                      paddingBottom: 8,
                      borderTop:
                        i === 0
                          ? "none"
                          : "1px solid rgba(16,19,44,0.12)",
                      fontFamily: SERIF,
                      fontSize: "15.5px",
                      color: INK,
                      lineHeight: 1.3,
                    }}
                  >
                    {line}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Volume sparkline */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`volume-${current.name}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease, delay: 0.08 }}
              className="p-3.5"
              style={{
                border: "1px solid rgba(16,19,44,0.22)",
                background: "rgba(255,253,247,0.7)",
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontWeight: 600,
                  fontSize: "13.5px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: INK_FAINT,
                  marginBottom: 8,
                }}
              >
                Volume · 30 d
              </div>
              {renderSparkline(current.spark.slice().reverse(), 36, INK)}
              <div
                className="mt-1 flex items-baseline justify-between"
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "14.5px",
                  color: INK_FAINT,
                }}
              >
                <span>
                  {current.delta.startsWith("-") ? "↓ vs prior" : "↑ vs prior"}
                </span>
                <span
                  style={{
                    color: INK,
                    fontStyle: "normal",
                    fontWeight: 500,
                  }}
                >
                  {current.delta}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function ImpactStats() {
  return (
    <section style={{ background: CREAM }}>
      <div className="wrap pt-20 md:pt-28 pb-20 md:pb-32">
        <Reveal>
          <h3
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(40px, 6vw, 92px)",
              lineHeight: 1.02,
              fontWeight: 500,
              color: INK,
              letterSpacing: "-0.015em",
              maxWidth: "20ch",
            }}
          >
            What changes after we take over.
          </h3>
        </Reveal>
        <Reveal delay={0.05}>
          <div
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "clamp(17px, 1.4vw, 22px)",
              color: INK_FAINT,
              marginTop: 18,
              maxWidth: "60ch",
            }}
          >
            Averages from the first twelve months of recent retainer accounts.
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 md:mt-16">
            <EngravedPlate
              label="Monthly revenue index, before and after we take over."
              footnote="Average lift across customers we ran for the last 12 months."
            >
              <RevenueChart />
            </EngravedPlate>
          </div>
        </Reveal>

        <div className="mt-6 md:mt-8 grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <Reveal delay={0.18} className="h-full">
            <EngravedPlate
              label="Website conversion rate vs the industry average."
              footnote="Average uplift across customers we ran for the last 12 months."
            >
              <ConversionChart />
            </EngravedPlate>
          </Reveal>
          <Reveal delay={0.24} className="h-full">
            <AwardsCard />
          </Reveal>
        </div>
        <div className="mt-6 md:mt-8">
          <Reveal delay={0.3}>
            <EngravedPlate label="We run, maintain, and grow your omnichannel.">
              <IntegrationsDashboard />
            </EngravedPlate>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Growth stats (plates for Grow chapter) ----------------- */

function ChannelChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  const W = 1200;
  const H = 360;
  const PAD = { left: 56, right: 200, top: 30, bottom: 50 };
  const innerW = W - PAD.left - PAD.right;
  const innerH = H - PAD.top - PAD.bottom;

  const channels = [
    { name: "SEO", color: "#3F4AAF", data: [8, 12, 18, 25, 34, 44, 56, 70, 84, 99, 114, 128] },
    { name: "AI search", color: "#8B4F9F", data: [0, 0, 2, 6, 14, 26, 42, 58, 72, 84, 95, 105] },
    { name: "Paid acquisition", color: "#B85C3C", data: [5, 9, 14, 20, 27, 34, 42, 50, 58, 65, 71, 76] },
    { name: "Email + SMS", color: "#5C8C5C", data: [3, 5, 8, 12, 17, 22, 28, 34, 40, 45, 50, 54] },
    { name: "Marketplaces", color: "#7E6B4A", data: [0, 0, 2, 6, 12, 19, 27, 35, 42, 48, 54, 60] },
  ];

  const yMax = 140;
  const yTicks = [0, 35, 70, 105, 140];
  const weekLabels = ["I", "III", "V", "VII", "IX", "XI"];

  const baseline = PAD.top + innerH;

  const pathFromData = (data: number[]) =>
    data
      .map((v, i) => {
        const x = PAD.left + (i / (data.length - 1)) * innerW;
        const y = PAD.top + ((yMax - v) / yMax) * innerH;
        return `${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
      })
      .join(" ");

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      style={{ maxHeight: 380 }}
    >
      {yTicks.map((v) => {
        const y = PAD.top + ((yMax - v) / yMax) * innerH;
        return (
          <g key={v}>
            <line
              x1={PAD.left}
              y1={y}
              x2={PAD.left + innerW}
              y2={y}
              stroke="rgba(16,19,44,0.12)"
              strokeWidth="0.5"
            />
            <text
              x={PAD.left - 14}
              y={y + 5}
              fontSize="16"
              fill="rgba(16,19,44,0.72)"
              textAnchor="end"
              fontFamily="var(--font-serif), Cormorant Garamond, serif"
              fontStyle="italic"
            >
              {v}
            </text>
          </g>
        );
      })}

      {weekLabels.map((l, i) => {
        const idx = i * 2;
        const x = PAD.left + (idx / 11) * innerW;
        return (
          <text
            key={i}
            x={x}
            y={H - 22}
            fontSize="15"
            fill="rgba(16,19,44,0.72)"
            textAnchor="middle"
            fontFamily="var(--font-serif), Cormorant Garamond, serif"
            fontStyle="italic"
          >
            {l}
          </text>
        );
      })}

      <line
        x1={PAD.left}
        y1={baseline}
        x2={PAD.left + innerW}
        y2={baseline}
        stroke="rgba(16,19,44,0.5)"
        strokeWidth="0.6"
      />
      <line
        x1={PAD.left}
        y1={PAD.top}
        x2={PAD.left}
        y2={baseline}
        stroke="rgba(16,19,44,0.5)"
        strokeWidth="0.6"
      />

      {(() => {
        const endX = PAD.left + innerW;
        const endpoints = channels.map((ch) => ({
          y: PAD.top + ((yMax - ch.data[ch.data.length - 1]) / yMax) * innerH,
        }));
        // Stagger labels so they never overlap. Walk from top to bottom in
        // sorted Y order, push each label down to enforce a minimum gap.
        const minSpacing = 24;
        const sortedIdx = endpoints
          .map((_, i) => i)
          .sort((a, b) => endpoints[a].y - endpoints[b].y);
        const labelYs: number[] = new Array(channels.length).fill(0);
        let lastY = -Infinity;
        for (const i of sortedIdx) {
          const y = Math.max(endpoints[i].y, lastY + minSpacing);
          labelYs[i] = y;
          lastY = y;
        }
        return channels.map((ch, i) => (
          <g key={ch.name}>
            <motion.path
              d={pathFromData(ch.data)}
              stroke={ch.color}
              strokeWidth="2.2"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeDasharray="2200"
              initial={{ strokeDashoffset: 2200 }}
              animate={{ strokeDashoffset: inView ? 0 : 2200 }}
              transition={{
                duration: 2.2,
                delay: 0.2 + i * 0.15,
                ease: [0.32, 0.72, 0, 1],
              }}
            />
            <motion.circle
              cx={endX}
              cy={endpoints[i].y}
              r="4"
              fill={ch.color}
              initial={{ scale: 0 }}
              animate={{ scale: inView ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 2.4 + i * 0.1 }}
            />
            {/* Leader line from endpoint to label if they differ */}
            {Math.abs(labelYs[i] - endpoints[i].y) > 1 && (
              <motion.line
                x1={endX + 4}
                y1={endpoints[i].y}
                x2={endX + 16}
                y2={labelYs[i]}
                stroke={ch.color}
                strokeWidth="0.8"
                strokeDasharray="2 3"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 0.55 : 0 }}
                transition={{ duration: 0.5, delay: 2.5 + i * 0.1 }}
              />
            )}
            <motion.text
              x={endX + 18}
              y={labelYs[i] + 5}
              fontSize="18"
              fill={ch.color}
              fontFamily="var(--font-serif), Cormorant Garamond, serif"
              fontStyle="italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 2.6 + i * 0.1 }}
            >
              {ch.name}
            </motion.text>
          </g>
        ));
      })()}
    </svg>
  );
}

function AOVChart() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const W = 600;
  const H = 340;
  const PAD = { left: 64, right: 24, top: 56, bottom: 64 };
  const innerH = H - PAD.top - PAD.bottom;

  // Returning customer share — universal across DTC, B2C, B2B, subscription
  const data = [
    { label: "Before.", value: 22, color: "rgba(16,19,44,0.32)" },
    { label: "Industry average.", value: 28, color: "rgba(16,19,44,0.5)" },
    { label: "With scandiweb.", value: 41, color: "#3F4AAF" },
  ];
  const yMax = 50;
  const yTicks = [0, 10, 20, 30, 40, 50];

  const barWidth = 80;
  const gap = 56;
  const totalWidth = data.length * barWidth + (data.length - 1) * gap;
  const xStart = PAD.left + (W - PAD.left - PAD.right - totalWidth) / 2;
  const baseline = PAD.top + innerH;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      style={{ maxHeight: 340 }}
    >
      {yTicks.map((v) => {
        const y = PAD.top + ((yMax - v) / yMax) * innerH;
        return (
          <g key={v}>
            <line
              x1={PAD.left}
              y1={y}
              x2={W - PAD.right}
              y2={y}
              stroke="rgba(16,19,44,0.1)"
              strokeWidth="0.5"
            />
            <text
              x={PAD.left - 12}
              y={y + 5}
              fontSize="20"
              fill="rgba(16,19,44,0.78)"
              textAnchor="end"
              fontFamily="var(--font-serif), Cormorant Garamond, serif"
              fontStyle="italic"
            >
              {v}%
            </text>
          </g>
        );
      })}

      <line
        x1={PAD.left}
        y1={baseline}
        x2={W - PAD.right}
        y2={baseline}
        stroke="rgba(16,19,44,0.5)"
        strokeWidth="0.6"
      />
      <line
        x1={PAD.left}
        y1={PAD.top}
        x2={PAD.left}
        y2={baseline}
        stroke="rgba(16,19,44,0.5)"
        strokeWidth="0.6"
      />

      {data.map((d, i) => {
        const x = xStart + i * (barWidth + gap);
        const barHeight = (d.value / yMax) * innerH;
        const y = baseline - barHeight;
        return (
          <g key={d.label}>
            <motion.rect
              x={x}
              width={barWidth}
              fill={d.color}
              initial={{ height: 0, y: baseline }}
              animate={inView ? { height: barHeight, y } : { height: 0, y: baseline }}
              transition={{
                duration: 0.8,
                delay: 0.2 + i * 0.18,
                ease: [0.32, 0.72, 0, 1],
              }}
            />
            <motion.text
              x={x + barWidth / 2}
              y={y - 16}
              fontSize="34"
              fontFamily="var(--font-serif), Cormorant Garamond, serif"
              fontStyle="italic"
              fontWeight="500"
              fill={i === 2 ? "#3F4AAF" : INK}
              textAnchor="middle"
              initial={{ opacity: 0 }}
              animate={{ opacity: inView ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.18 }}
            >
              {d.value}%
            </motion.text>
            <text
              x={x + barWidth / 2}
              y={H - 22}
              fontSize="20"
              fill={INK_FAINT}
              textAnchor="middle"
              fontFamily="var(--font-serif), Cormorant Garamond, serif"
              fontStyle="italic"
            >
              {d.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function AISearchSequence() {
  const t = (delay: number) => ({
    initial: { opacity: 0, y: 6 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay, ease: [0.32, 0.72, 0, 1] as [number, number, number, number] },
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: SERIF,
    fontStyle: "italic",
    fontSize: "14px",
    color: "rgba(16,19,44,0.7)",
    letterSpacing: "0.04em",
    marginBottom: 8,
  };

  const Result = ({
    rank,
    children,
    highlighted,
  }: {
    rank: number;
    children: React.ReactNode;
    highlighted?: boolean;
  }) => (
    <div
      style={{
        display: "flex",
        gap: 14,
        padding: "12px 16px",
        background: highlighted ? "rgba(63,74,175,0.08)" : "transparent",
        borderLeft: highlighted
          ? "2px solid #3F4AAF"
          : "2px solid rgba(16,19,44,0.12)",
        fontFamily: SERIF,
        fontSize: "clamp(16px, 1.35vw, 20px)",
        lineHeight: 1.45,
      }}
    >
      <span
        style={{
          color: highlighted ? "#3F4AAF" : INK_FAINT,
          fontWeight: 500,
          minWidth: "1.2em",
        }}
      >
        {rank}.
      </span>
      <span
        style={{
          color: highlighted ? "#3F4AAF" : INK_SOFT,
          fontWeight: highlighted ? 600 : 400,
          fontStyle: highlighted ? "normal" : "normal",
        }}
      >
        {children}
      </span>
    </div>
  );

  return (
    <div className="w-full flex flex-col gap-4">
      {/* User question */}
      <motion.div {...t(0.4)}>
        <div style={labelStyle}>You ask.</div>
        <div
          style={{
            padding: "13px 16px",
            background: "rgba(16,19,44,0.04)",
            border: "1px solid rgba(16,19,44,0.12)",
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "clamp(17px, 1.45vw, 22px)",
            color: INK,
            lineHeight: 1.45,
          }}
        >
          &ldquo;What are the best running shoes for a first marathon?&rdquo;
        </div>
      </motion.div>

      {/* Thinking dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.6,
          delay: 1.6,
          times: [0, 0.15, 0.85, 1],
        }}
        className="flex gap-2 items-center"
        style={{ padding: "0 14px", height: 14 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: INK_FAINT }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }}
          />
        ))}
      </motion.div>

      {/* AI response intro */}
      <motion.div {...t(3.0)}>
        <div style={labelStyle}>The answer engine replies.</div>
        <div
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(16px, 1.35vw, 20px)",
            color: INK_SOFT,
            lineHeight: 1.55,
          }}
        >
          Based on expert reviews and runner feedback, here are the top
          picks:
        </div>
      </motion.div>

      {/* Results */}
      <div className="flex flex-col gap-1.5">
        <motion.div {...t(3.7)}>
          <Result rank={1} highlighted>
            Your product&nbsp;&mdash; top expert pick for first-timers
          </Result>
        </motion.div>
        <motion.div {...t(4.2)}>
          <Result rank={2}>
            Pacemaster Pro Marathon&nbsp;&mdash; competitive racers
          </Result>
        </motion.div>
        <motion.div {...t(4.7)}>
          <Result rank={3}>
            Stride Elite Carbon&nbsp;&mdash; elite runners
          </Result>
        </motion.div>
      </div>
    </div>
  );
}

function AISearchDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, amount: 0.3 });
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setCycle((c) => c + 1), 9500);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div
      ref={ref}
      className="w-full h-full flex flex-col justify-center"
      style={{ padding: "4px" }}
    >
      <AISearchSequence key={cycle} />
    </div>
  );
}

function VideoFacade({
  videoId,
  title,
  posterSrc,
}: {
  videoId: string;
  title: string;
  posterSrc?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const fallbackPoster = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
        title={title}
        className="absolute inset-0 w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      onClick={() => setPlaying(true)}
      type="button"
      aria-label={`Play video: ${title}`}
      className="absolute inset-0 w-full h-full group cursor-pointer"
    >
      <img
        src={posterSrc ?? fallbackPoster}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => {
          const img = e.currentTarget;
          if (img.src !== `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`) {
            img.src = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
          }
        }}
      />
      <div
        className="absolute inset-0 transition-colors group-hover:bg-black/15"
        style={{ background: "rgba(0,0,0,0.08)" }}
      />
      <div
        className="absolute bottom-5 left-5 md:bottom-7 md:left-7 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
        style={{
          width: 56,
          height: 56,
          border: "1.5px solid rgba(255,255,255,0.95)",
          background: "rgba(0,0,0,0.4)",
          borderRadius: "50%",
        }}
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          style={{ marginLeft: 3 }}
        >
          <path d="M8 5v14l11-7z" fill="rgba(255,255,255,0.98)" />
        </svg>
      </div>
    </button>
  );
}

function VideoTestimonial() {
  return (
    <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-start">
      <div
        className="relative w-full"
        style={{
          aspectRatio: "16 / 9",
          border: "1px solid rgba(16,19,44,0.25)",
          overflow: "hidden",
        }}
      >
        <VideoFacade
          videoId="RukTjQjC66w"
          title="A scandiweb growth retainer client tells the story"
        />
      </div>

      <div className="flex flex-col gap-8">
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {[
            { v: "+108%", l: "YoY revenue", primary: true },
            { v: "4–5×", l: "ROAS, sustained" },
            { v: "+208%", l: "organic traffic" },
          ].map((s) => (
            <div key={s.l}>
              <div
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(28px, 2.6vw, 40px)",
                  lineHeight: 1,
                  fontWeight: 500,
                  color: s.primary ? "#3F4AAF" : INK,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.v}
              </div>
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "13.5px",
                  color: INK_FAINT,
                  marginTop: 6,
                  lineHeight: 1.3,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>

        <div>
          <blockquote
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "clamp(16px, 1.3vw, 20px)",
              color: INK,
              lineHeight: 1.5,
              paddingLeft: 16,
              borderLeft: "2px solid rgba(63,74,175,0.55)",
              margin: 0,
            }}
          >
            &ldquo;What started as fragmented digital activity became a
            repeatable DTC growth system. This foundation helped us double
            DTC revenue year over year while expanding into new markets.&rdquo;
          </blockquote>
          <div
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "14px",
              color: INK_FAINT,
              marginTop: 14,
              paddingLeft: 16,
            }}
          >
            FELCO, Global Finance Director
          </div>
        </div>
      </div>
    </div>
  );
}

function GrowthStats() {
  return (
    <div className="mt-20 md:mt-28">
      <Reveal>
        <h3
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(36px, 5vw, 76px)",
            lineHeight: 1.02,
            fontWeight: 500,
            color: INK,
            letterSpacing: "-0.015em",
            maxWidth: "22ch",
          }}
        >
          We make Magento stores grow.
        </h3>
      </Reveal>
      <Reveal delay={0.05}>
        <div
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "clamp(17px, 1.4vw, 22px)",
            color: INK_FAINT,
            marginTop: 18,
            maxWidth: "60ch",
          }}
        >
          Revenue mix, average order value, and AI search visibility, across
          recent retainer accounts.
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 md:mt-16">
          <EngravedPlate
            label="We grow every channel that moves your revenue."
            footnote="Average channel mix across customers we ran for the last 12 months."
          >
            <ChannelChart />
          </EngravedPlate>
        </div>
      </Reveal>

      <div className="mt-6 md:mt-8 grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
        <Reveal delay={0.18} className="h-full">
          <EngravedPlate
            label="Returning customer share, against the industry."
            footnote="Lifecycle marketing across welcome flows, post-purchase, win-back, and VIP tiers."
          >
            <AOVChart />
          </EngravedPlate>
        </Reveal>
        <Reveal delay={0.24} className="h-full">
          <EngravedPlate label="Rank 1st on AI searches.">
            <AISearchDemo />
          </EngravedPlate>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <div className="mt-6 md:mt-8">
          <EngravedPlate label="Sometimes almost tripling online revenue.">
            <VideoTestimonial />
          </EngravedPlate>
        </div>
      </Reveal>
    </div>
  );
}

/* ----------------- Chapter primitives ----------------- */

/* Build-chapter highlights: 3 boxes (time to ship, awards, team). */
function MiniTimeChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const rows = [
    {
      label: "Custom build",
      weeksLabel: "9 to 12 months",
      weeks: 44,
      accent: false,
    },
    {
      label: "scandiweb agile methodology",
      weeksLabel: "8 to 12 weeks",
      weeks: 10,
      accent: true,
    },
  ];
  const maxWeeks = 48;

  return (
    <div ref={ref} className="w-full">
      {/* Hero claim */}
      <div className="mb-10 md:mb-12">
        <div
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(72px, 9.5vw, 124px)",
            lineHeight: 0.92,
            color: INK,
            fontWeight: 500,
            letterSpacing: "-0.025em",
          }}
        >
          5×
        </div>
        <div
          className="mt-5"
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "clamp(19px, 1.6vw, 25px)",
            color: INK_SOFT,
            lineHeight: 1.3,
            maxWidth: "26ch",
          }}
        >
          faster than the typical custom build.
        </div>
      </div>

      {rows.map((r, i) => (
        <div key={r.label} className={i === 0 ? "mb-6" : ""}>
          <div className="flex items-baseline justify-between gap-3 mb-2">
            <span
              style={{
                fontFamily: SERIF,
                fontSize: "19px",
                color: INK,
                fontWeight: r.accent ? 600 : 500,
              }}
            >
              {r.label}
            </span>
            <span
              style={{
                fontFamily: SERIF,
                fontStyle: r.accent ? "normal" : "italic",
                fontSize: "17px",
                color: r.accent ? INK : INK_SOFT,
                fontWeight: r.accent ? 600 : 400,
                whiteSpace: "nowrap",
              }}
            >
              {r.weeksLabel}
            </span>
          </div>
          <div
            className="relative"
            style={{
              height: 28,
              background: "rgba(16,19,44,0.07)",
              border: "1px solid rgba(16,19,44,0.15)",
            }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{
                duration: 1.0,
                delay: 0.15 + i * 0.18,
                ease,
              }}
              style={{
                transformOrigin: "left",
                height: "100%",
                width: `${(r.weeks / maxWeeks) * 100}%`,
                background: r.accent ? "var(--sw-blue)" : INK,
                opacity: r.accent ? 0.95 : 0.85,
              }}
            />
          </div>
        </div>
      ))}

      <div
        className="grid mt-3 pt-2.5"
        style={{
          gridTemplateColumns: "repeat(5, 1fr)",
          borderTop: "1px solid rgba(16,19,44,0.2)",
        }}
      >
        {["0", "XII", "XXIV", "XXXVI", "XLVIII"].map((tick, i) => (
          <div
            key={tick}
            style={{
              textAlign: i === 0 ? "left" : i === 4 ? "right" : "center",
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "14px",
              color: INK_SOFT,
              letterSpacing: "0.04em",
            }}
          >
            {tick}
          </div>
        ))}
      </div>

      <div
        className="mt-6"
        style={{
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "18.5px",
          color: INK_SOFT,
          lineHeight: 1.5,
        }}
      >
        Same scope. Kickoff to production.
      </div>
    </div>
  );
}

function MiniCostChart() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const columns = [
    {
      label: "Custom build",
      costLabel: "industry baseline",
      costM: 100,
      accent: false,
    },
    {
      label: "scandiweb agile methodology",
      costLabel: "delivered cost",
      costM: 30,
      accent: true,
    },
  ];
  const maxCost = 110;
  const chartHeight = 200;

  return (
    <div ref={ref} className="w-full">
      {/* Hero claim */}
      <div className="mb-10 md:mb-12">
        <div
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(72px, 9.5vw, 124px)",
            lineHeight: 0.92,
            color: INK,
            fontWeight: 500,
            letterSpacing: "-0.025em",
          }}
        >
          70%
        </div>
        <div
          className="mt-5"
          style={{
            fontFamily: SERIF,
            fontStyle: "italic",
            fontSize: "clamp(19px, 1.6vw, 25px)",
            color: INK_SOFT,
            lineHeight: 1.3,
            maxWidth: "26ch",
          }}
        >
          lower spend on equivalent scope.
        </div>
      </div>

      <div
        className="relative"
        style={{
          height: chartHeight,
          borderBottom: "1px solid rgba(16,19,44,0.5)",
        }}
      >
        <div
          className="grid h-full"
          style={{
            gridTemplateColumns: "repeat(2, 1fr)",
            columnGap: 24,
          }}
        >
          {columns.map((c, i) => {
            const barHeight = (c.costM / maxCost) * chartHeight;
            return (
              <div
                key={c.label}
                className="relative h-full flex flex-col justify-end items-center"
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: barHeight + 8,
                    fontFamily: SERIF,
                    fontStyle: c.accent ? "normal" : "italic",
                    fontSize: "17px",
                    color: c.accent ? INK : INK_SOFT,
                    fontWeight: c.accent ? 600 : 400,
                    whiteSpace: "nowrap",
                  }}
                >
                  {c.costLabel}
                </div>
                <motion.div
                  initial={{ height: 0 }}
                  animate={inView ? { height: barHeight } : { height: 0 }}
                  transition={{
                    duration: 1.0,
                    delay: 0.15 + i * 0.18,
                    ease,
                  }}
                  style={{
                    width: "100%",
                    maxWidth: 124,
                    minHeight: 8,
                    background: c.accent ? "var(--sw-blue)" : INK,
                    opacity: c.accent ? 0.95 : 0.88,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <div
        className="grid mt-4"
        style={{
          gridTemplateColumns: "repeat(2, 1fr)",
          columnGap: 24,
        }}
      >
        {columns.map((c) => (
          <div
            key={c.label}
            className="text-center"
            style={{
              fontFamily: SERIF,
              fontSize: "19px",
              color: INK,
              fontWeight: c.accent ? 600 : 500,
            }}
          >
            {c.label}
          </div>
        ))}
      </div>

      <div
        className="mt-6"
        style={{
          fontFamily: SERIF,
          fontStyle: "italic",
          fontSize: "18.5px",
          color: INK_SOFT,
          lineHeight: 1.5,
        }}
      >
        Smaller team, fewer handoffs, fewer change orders.
      </div>
    </div>
  );
}

type Service = {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
};

type Badge = { src: string; alt: string };

function ChapterDetail({
  services,
  comparison,
  badges,
  badgesLabel,
  expandedScope,
  expandedScopeLabel,
  chart,
}: {
  services?: Service[];
  comparison?: { label: string; typical: string; scandiweb: string }[];
  badges?: Badge[];
  badgesLabel?: string;
  expandedScope?: ScopeGroup[];
  expandedScopeLabel?: string;
  chart?: React.ReactNode;
}) {
  const hasServices = services && services.length > 0;
  return (
    <section style={{ background: CREAM }}>
      <div className="wrap py-20 md:py-24">
        <div className="max-w-[72ch]">
          {hasServices && (
            <Reveal>
              <ul
                className="grid sm:grid-cols-2 gap-y-3.5 gap-x-12"
                style={{ fontSize: "17px", color: INK }}
              >
                {services!.map(({ label }) => (
                  <li key={label} className="leading-snug">
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {comparison && (
            <Reveal delay={0.08}>
              <div className="mt-14 md:mt-16">
                <div
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: "clamp(16px, 1.25vw, 19px)",
                    color: INK_FAINT,
                  }}
                >
                  How we run differently.
                </div>
                <div
                  className="mt-5 border-t"
                  style={{ borderColor: "rgba(16,19,44,0.18)" }}
                >
                  <div
                    className="grid grid-cols-[1.5fr_1fr_1fr] gap-3 md:gap-6 py-3 md:py-3.5 border-b"
                    style={{ borderColor: "rgba(16,19,44,0.18)" }}
                  >
                    <div />
                    <div
                      style={{
                        fontSize: "12.5px",
                        color: INK_FAINT,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                      }}
                    >
                      Most agencies
                    </div>
                    <div
                      style={{
                        fontSize: "12.5px",
                        color: "var(--sw-blue)",
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        fontWeight: 600,
                      }}
                    >
                      scandiweb
                    </div>
                  </div>
                  {comparison.map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[1.5fr_1fr_1fr] gap-3 md:gap-6 py-3.5 md:py-4 border-b"
                      style={{ borderColor: "rgba(16,19,44,0.08)" }}
                    >
                      <div
                        style={{
                          fontSize: "14.5px",
                          color: INK,
                          fontWeight: 500,
                        }}
                      >
                        {row.label}
                      </div>
                      <div style={{ fontSize: "14px", color: INK_FAINT }}>
                        {row.typical}
                      </div>
                      <div
                        style={{
                          fontSize: "14px",
                          color: INK,
                          fontWeight: 500,
                        }}
                      >
                        {row.scandiweb}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>

        {chart && <div className="mt-14 md:mt-20">{chart}</div>}

        {expandedScope && (
          <ScopeGrid
            label={expandedScopeLabel ?? "Everything in scope."}
            groups={expandedScope}
          />
        )}

        {badges && badges.length > 0 && (
          <div className="mt-16 md:mt-24">
            <Reveal>
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "clamp(16px, 1.3vw, 22px)",
                  color: INK_FAINT,
                  textAlign: "center",
                }}
              >
                {badgesLabel ?? "Verified expertise."}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              {/* Mobile: auto-scrolling infinite loop */}
              <div className="sm:hidden mt-8 relative overflow-hidden -mx-5">
                <motion.div
                  className="flex gap-8 whitespace-nowrap items-center"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...badges, ...badges].map((b, i) => (
                    <div
                      key={`${b.src}-${i}`}
                      className="flex items-center justify-center shrink-0"
                      style={{ width: 180, height: 110 }}
                    >
                      <img
                        src={`/solutions/magento/voyage/badges/${b.src}`}
                        alt={b.alt}
                        style={{
                          height: 72,
                          width: "auto",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
              {/* Desktop: grid */}
              <div
                className="hidden sm:grid mt-8 md:mt-10 mx-auto grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center"
                style={{ maxWidth: 1200 }}
              >
                {badges.map((b) => (
                  <div
                    key={b.src}
                    className="flex items-center justify-center"
                    style={{ width: "100%", height: 120 }}
                  >
                    <img
                      src={`/solutions/magento/voyage/badges/${b.src}`}
                      alt={b.alt}
                      style={{
                        height: 80,
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        )}
      </div>
    </section>
  );
}

/* ----------------- Build chapter ----------------- */

function BuildChapter() {
  return (
    <>
      {/* Book spread: image left, text right, cream */}
      <section id="build" className="relative" style={{ background: CREAM }}>
        <div className="grid lg:grid-cols-2 lg:min-h-screen">
          <div className="relative w-full aspect-[16/9] lg:aspect-auto lg:h-auto lg:min-h-screen">
            <Plate
              keyword="build"
              alt="An eighteenth century shipyard at golden hour, carpenters building the wooden hull of a tall ship"
            />
          </div>
          <div className="flex items-center px-6 sm:px-10 md:px-16 lg:px-20 py-16 lg:py-12">
            <div className="max-w-[48ch]">
              <Reveal>
                <div
                  className="flex items-baseline gap-2.5"
                  style={{
                    fontFamily: SERIF,
                    color: INK_FAINT,
                  }}
                >
                  <span
                    style={{
                      fontStyle: "italic",
                      fontSize: "clamp(15px, 1.15vw, 18px)",
                    }}
                  >
                    Chapter
                  </span>
                  <span
                    style={{
                      fontSize: "clamp(26px, 2.2vw, 36px)",
                      color: INK,
                      letterSpacing: "-0.01em",
                      lineHeight: 1,
                    }}
                  >
                    I
                  </span>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <h2
                  className="mt-3 md:mt-5"
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(46px, 5.5vw, 88px)",
                    lineHeight: 0.96,
                    fontWeight: 500,
                    color: INK,
                    letterSpacing: "-0.015em",
                  }}
                >
                  Build.
                </h2>
              </Reveal>
              <Reveal delay={0.15}>
                <p
                  className="mt-7 md:mt-9 leading-relaxed"
                  style={{
                    fontSize: "clamp(17px, 1.3vw, 20px)",
                    color: INK_SOFT,
                    lineHeight: 1.55,
                  }}
                >
                  Most clients come to us in one of two states. About to
                  launch on Magento, or already on it and ready for a
                  rebuild. The right architecture depends on the team and
                  stack you already have, so we stay agnostic across
                  storefront, headless, and replatforming options.
                </p>
              </Reveal>
              <Reveal delay={0.22}>
                <div className="mt-8 md:mt-10">
                  <a
                    href="#start"
                    className="inline-flex items-center gap-3 px-6 py-3.5 font-head font-medium transition-all group"
                    style={{
                      border: `1px solid ${INK}`,
                      color: INK,
                      fontSize: "15px",
                    }}
                  >
                    Talk to us about a build
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
      <ChapterDetail
        expandedScope={[
          {
            title: "Store types",
            description:
              "Every commerce model Magento supports, in production.",
            items: [
              "B2C storefronts",
              "B2B portals",
              "D2C direct-to-consumer",
              "Omnichannel + POS",
              "Marketplaces",
              "Subscription commerce",
              "Wholesale",
            ],
          },
          {
            title: "Storefronts",
            description:
              "We pick the storefront tech that fits your speed targets and team.",
            items: [
              "Standard Magento",
              "Hyvä Themes",
              "Hyvä Checkout",
              "Headless / API-first",
              "PWA Studio",
              "Composable commerce",
              "Native mobile apps",
            ],
          },
          {
            title: "Replatforms",
            description:
              "Migrations onto Magento from any other commerce platform.",
            items: [
              "Magento 1 → Magento 2",
              "Shopify → Magento",
              "BigCommerce → Magento",
              "Salesforce Commerce → Magento",
              "Custom builds → Magento",
              "Legacy migrations",
            ],
          },
          {
            title: "Markets",
            description:
              "Magento configured for multiple countries, currencies, and brands.",
            items: [
              "Multi-region",
              "Multi-currency",
              "Multi-language",
              "Multi-brand",
              "Multi-warehouse",
              "Tax + compliance",
            ],
          },
        ]}
        expandedScopeLabel="What we build, for whom."
        chart={
          <div className="max-w-[1080px]">
            <Reveal>
              <h3
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(34px, 4.4vw, 60px)",
                  lineHeight: 1.05,
                  fontWeight: 500,
                  color: INK,
                  letterSpacing: "-0.015em",
                  maxWidth: "26ch",
                }}
              >
                Magento delivered in weeks, not multi-year programs.
              </h3>
            </Reveal>
            <Reveal delay={0.06}>
              <p
                className="mt-5 max-w-[60ch] leading-relaxed"
                style={{
                  fontSize: "17px",
                  color: INK_SOFT,
                  lineHeight: 1.6,
                }}
              >
                Compared to a traditional agency proposal of equivalent
                scope, across the kickoff-to-launch window.
              </p>
            </Reveal>
            <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
              <EngravedPlate label="Time to build a Magento store.">
                <MiniTimeChart />
              </EngravedPlate>
              <EngravedPlate label="Cost to build a Magento store.">
                <MiniCostChart />
              </EngravedPlate>
            </div>
            <Reveal delay={0.1}>
              <div
                className="mt-12 md:mt-16 max-w-[78ch] pl-6 md:pl-8"
                style={{
                  borderLeft: "2px solid var(--sw-blue)",
                }}
              >
                <p
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: "clamp(22px, 2vw, 32px)",
                    lineHeight: 1.4,
                    color: INK,
                    fontWeight: 400,
                  }}
                >
                  &ldquo;We changed the economics of retail software
                  delivery with Agile methodology, replacing multi-year
                  programs with architect-led builds delivered in
                  weeks.&rdquo;
                </p>
                <div
                  className="mt-5"
                  style={{
                    fontFamily: SERIF,
                    fontWeight: 600,
                    fontSize: "14px",
                    color: INK_FAINT,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Antons Sapriko · Founder
                </div>
              </div>
            </Reveal>
          </div>
        }
        badges={[
          {
            src: "adobe-solution-partner-gold.svg",
            alt: "Adobe Solution Partner Gold",
          },
          {
            src: "adobe-commerce-most-certified.svg",
            alt: "Adobe Commerce #1 Most Certified Agency",
          },
          {
            src: "hyva-platinum-partner.svg",
            alt: "Hyvä Platinum Partner",
          },
          {
            src: "hyva-most-certified.svg",
            alt: "Hyvä #1 Most Certified Agency",
          },
          {
            src: "magento-association-gold.svg",
            alt: "Magento Association Gold Member",
          },
        ]}
        badgesLabel="Recognized expertise."
      />
    </>
  );
}

/* ----------------- Optimize chapter ----------------- */

function OptimizeChapter() {
  return (
    <>
      {/* Contained vellum-style text card overlaid on the painting */}
      <section
        id="optimize"
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", background: "#06080F" }}
      >
        <div className="absolute inset-0">
          <Plate
            keyword="optimize"
            alt="An eighteenth century tall ship at a peaceful protected harbour in soft morning light, sailors tending the rigging"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.4) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-20">
          <div
            className="w-full max-w-[640px] p-8 md:p-12 lg:p-14"
            style={{
              background: "rgba(245, 240, 230, 0.96)",
              border: "1px solid rgba(16,19,44,0.12)",
              boxShadow: "0 24px 70px rgba(0,0,0,0.45)",
            }}
          >
            <Reveal>
              <div
                className="flex items-baseline gap-2.5"
                style={{
                  fontFamily: SERIF,
                  color: INK_FAINT,
                }}
              >
                <span
                  style={{
                    fontStyle: "italic",
                    fontSize: "clamp(15px, 1.15vw, 18px)",
                  }}
                >
                  Chapter
                </span>
                <span
                  style={{
                    fontSize: "clamp(26px, 2.2vw, 36px)",
                    color: INK,
                    letterSpacing: "-0.01em",
                    lineHeight: 1,
                  }}
                >
                  II
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="mt-3 md:mt-5"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(40px, 5vw, 72px)",
                  lineHeight: 0.96,
                  fontWeight: 500,
                  color: INK,
                  letterSpacing: "-0.015em",
                }}
              >
                Optimize.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p
                className="mt-6 leading-relaxed"
                style={{
                  fontSize: "clamp(16px, 1.25vw, 19px)",
                  color: INK_SOFT,
                  lineHeight: 1.55,
                }}
              >
                A live Magento store needs constant care to stay stable,
                secure, and fast. Adobe ships Magento patches every few
                months. Composer dependencies drift. Integrations break
                under traffic peaks. PCI requirements change every year.
                None of this stops on its own.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-7">
                <a
                  href="#start"
                  className="inline-flex items-center gap-3 px-6 py-3.5 font-head font-medium transition-all group"
                  style={{
                    border: `1px solid ${INK}`,
                    color: INK,
                    fontSize: "15px",
                  }}
                >
                  Talk to us about support
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <ImpactStats />
      <section style={{ background: CREAM }}>
        <div className="wrap pt-4 pb-20 md:pb-28">
          <ScopeGrid
            label="Integrations and technologies we run."
            groups={[
              {
                title: "ERP",
                description:
                  "Connect Magento to your inventory, accounting, and operations system.",
                items: ["SAP", "NetSuite", "Microsoft Dynamics", "Oracle", "Infor", "Sage", "Acumatica"],
              },
              {
                title: "PIM",
                description:
                  "Feed Magento product data from any modern PIM.",
                items: ["Akeneo", "Pimcore", "inRiver", "Salsify", "Plytix", "Bluestone PIM"],
              },
              {
                title: "CRM + CDP",
                description:
                  "Two-way customer data sync for segmentation, personalization, and CX.",
                items: ["Salesforce", "HubSpot", "Microsoft Dynamics 365", "Segment", "Adobe Experience Platform", "Klaviyo"],
              },
              {
                title: "Search",
                description:
                  "Site search that converts better than the Magento default.",
                items: ["Algolia", "Klevu", "Coveo", "Elasticsuite", "Searchanise"],
              },
              {
                title: "Payments",
                description:
                  "Any gateway or wallet, certified for live traffic.",
                items: ["Adyen", "Stripe", "Braintree", "Klarna", "Affirm", "PayPal", "Apple Pay"],
              },
              {
                title: "Marketing + reviews",
                description:
                  "Connect Magento to your email, SMS, and review platforms.",
                items: ["Klaviyo", "Mailchimp", "Bloomreach", "ActiveCampaign", "Yotpo", "Trustpilot", "Bazaarvoice"],
              },
              {
                title: "Performance + UX",
                description:
                  "Speed and conversion work, measured on every build.",
                items: ["Core Web Vitals", "LCP, INP, CLS budgets", "UX research", "A/B testing", "Heatmaps", "Session recording"],
              },
              {
                title: "Compliance",
                description:
                  "Keep the store legal in every market you sell into.",
                items: ["GDPR", "EU AI Act", "WCAG accessibility"],
              },
              {
                title: "AI commerce",
                featured: true,
                description:
                  "AI doing real operational work on top of Magento. Forecasting, automation, internal tools.",
                items: [
                  "Conversational commerce",
                  "Inventory forecasting",
                  "MCP apps",
                  "Internal procurement & buying platforms",
                  "Pricing & margin forecasts",
                  "Inventory automation",
                ],
              },
            ]}
          />

          {/* Security and compliance certifications */}
          <div className="mt-20 md:mt-28">
            <Reveal>
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "clamp(16px, 1.3vw, 22px)",
                  color: INK_FAINT,
                  textAlign: "center",
                }}
              >
                Independently audited and certified.
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              {/* Mobile: auto-scrolling infinite loop */}
              <div className="sm:hidden mt-8 relative overflow-hidden -mx-5">
                <motion.div
                  className="flex gap-8 whitespace-nowrap items-center"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[
                    ...Array.from({ length: 12 }, (_, i) => i + 1),
                    ...Array.from({ length: 12 }, (_, i) => i + 1),
                  ].map((n, i) => (
                    <div
                      key={`cert-${n}-${i}`}
                      className="flex items-center justify-center shrink-0"
                      style={{ width: 160, height: 110 }}
                    >
                      <img
                        src={`/solutions/magento/voyage/badges/cert-${n}.svg`}
                        alt={`Certification ${n}`}
                        style={{
                          height: 72,
                          width: "auto",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
              {/* Desktop: grid */}
              <div
                className="hidden sm:grid mt-8 md:mt-10 mx-auto grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 items-center justify-items-center"
                style={{ maxWidth: 1320 }}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
                  <div
                    key={n}
                    className="flex items-center justify-center"
                    style={{ width: "100%", height: 120 }}
                  >
                    <img
                      src={`/solutions/magento/voyage/badges/cert-${n}.svg`}
                      alt={`Certification ${n}`}
                      style={{
                        height: 80,
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* ----------------- Sea-monster moment (support) ----------------- */

function MonsterMoment() {
  return (
    <>
      {/* Image with minimal overlay — eyebrow + title only */}
      <section
        id="support"
        className="relative overflow-hidden"
        style={{ minHeight: "90vh", background: "#06080F" }}
      >
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/solutions/magento/voyage/monster.png"
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="A dramatic moonlit night at sea with a sea creature emerging beside a tall ship, the crew tending the rigging calmly by lantern light"
          >
            <source src="/solutions/magento/voyage/monster.mp4" type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.65) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 flex items-center justify-center" style={{ minHeight: "90vh" }}>
          <div className="wrap text-center">
            <Reveal>
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "clamp(17px, 1.4vw, 24px)",
                  color: "rgba(255,255,255,0.8)",
                  letterSpacing: "0.01em",
                }}
              >
                An interlude.
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="text-white mt-6 md:mt-8 mx-auto"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(54px, 8.5vw, 140px)",
                  lineHeight: 0.96,
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  maxWidth: "18ch",
                }}
              >
                When the kraken comes.
              </h2>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cream elaboration section with sea monster map */}
      <section style={{ background: CREAM }}>
        <div className="wrap py-20 md:py-28">
          <div className="grid lg:grid-cols-[0.85fr_1fr] gap-12 lg:gap-20 items-center">
            <Reveal>
              <img
                src="/solutions/magento/voyage/monster-map.png"
                alt="An engraved chart titled 'Magento store in troubled waters', labelling the hazards facing a Magento eCommerce store — downtime, security issues, broken checkout, slow site speed, code errors, database issues, extension conflicts, organic traffic drop, poor conversions — with a recovery route, safe harbour, and monitoring outposts"
                className="hidden md:block mx-auto w-full h-auto"
                style={{ maxWidth: 520 }}
              />
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: "clamp(16px, 1.3vw, 22px)",
                    color: INK_FAINT,
                    marginBottom: 18,
                  }}
                >
                  What support actually covers.
                </div>
                <p
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(22px, 2vw, 30px)",
                    lineHeight: 1.32,
                    color: INK,
                    fontWeight: 500,
                    letterSpacing: "-0.005em",
                  }}
                >
                  Downtime, checkout regressions, ranking drops, indexing
                  loss after a Google core update. We handle each.
                </p>
                <p
                  className="mt-6 leading-relaxed"
                  style={{
                    fontSize: "clamp(15.5px, 1.2vw, 18px)",
                    color: INK_SOFT,
                    lineHeight: 1.65,
                  }}
                >
                  When we maintain a Magento store, it usually runs without
                  incident. When something does break, we respond inside
                  eight minutes for platform incidents and the same way for
                  traffic drops, schema breaks, and indexing failures. So
                  when a Google core update lands, we have already seen it.
                </p>

                <div
                  className="mt-8 p-5 md:p-7"
                  style={{
                    border: "1px solid rgba(16,19,44,0.25)",
                    background: "rgba(255,253,247,0.65)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: SERIF,
                      fontWeight: 600,
                      fontSize: "12.5px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: INK,
                      marginBottom: 10,
                    }}
                  >
                    Managed hosting
                  </div>
                  <p
                    style={{
                      fontSize: "15.5px",
                      color: INK_SOFT,
                      lineHeight: 1.6,
                    }}
                  >
                    <strong style={{ color: INK, fontWeight: 600 }}>
                      ReadyMage
                    </strong>{" "}
                    is the most reliable Magento hosting available. Built
                    specifically for Magento. Auto-scaling, PCI-DSS-ready,
                    one-click staging, 24/7 monitored.
                  </p>
                </div>

                {/* CTAs sit outside the ReadyMage box */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#start"
                    className="inline-flex items-center gap-3 px-5 py-3 font-head font-medium transition-all group"
                    style={{
                      background: INK,
                      color: "#ffffff",
                      border: `1px solid ${INK}`,
                      fontSize: "14.5px",
                    }}
                  >
                    Talk to us about support
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <a
                    href="https://readymage.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-5 py-3 font-head font-medium transition-all group"
                    style={{
                      border: `1px solid ${INK}`,
                      color: INK,
                      fontSize: "14.5px",
                    }}
                  >
                    Explore ReadyMage
                    <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                <div className="mt-10 md:mt-12 grid grid-cols-3 gap-x-4 md:gap-x-8 pt-7" style={{ borderTop: "1px solid rgba(16,19,44,0.18)" }}>
                  {[
                    { v: "8 min", l: "response SLA" },
                    { v: "24 / 7", l: "operations center" },
                    { v: "99.99%", l: "uptime guarantee" },
                  ].map((s) => (
                    <div key={s.l}>
                      <div
                        style={{
                          fontFamily: SERIF,
                          fontSize: "clamp(24px, 2.5vw, 36px)",
                          lineHeight: 1,
                          fontWeight: 500,
                          color: INK,
                          letterSpacing: "-0.015em",
                        }}
                      >
                        {s.v}
                      </div>
                      <div
                        className="mt-2"
                        style={{
                          fontFamily: SERIF,
                          fontStyle: "italic",
                          fontSize: "14px",
                          color: INK_FAINT,
                        }}
                      >
                        {s.l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* Support coverage grid — categorized like ScopeGrid */}
          <div className="mt-20 md:mt-28">
            <ScopeGrid
              label="Specific issues we monitor, triage, and fix."
              groups={[
                {
                  title: "Speed and uptime",
                  description:
                    "What takes the store down or slows it past the point where it converts.",
                  items: [
                    "Downtime and outages",
                    "Slow site speed",
                    "Performance regressions",
                    "Database issues",
                    "Cache and reindex problems",
                  ],
                },
                {
                  title: "Code and dependencies",
                  description:
                    "Drift, conflicts, and runtime errors between releases.",
                  items: [
                    "Code errors and runtime exceptions",
                    "Extension conflicts",
                    "Composer dependency drift",
                  ],
                },
                {
                  title: "SEO and visibility",
                  description:
                    "Search risks after Google updates, redirects, or content changes.",
                  items: [
                    "Organic traffic drops",
                    "Indexing loss after core updates",
                    "Schema and structured-data breaks",
                  ],
                },
                {
                  title: "Integrations and data",
                  description:
                    "Sync failures between Magento, ERP, CRM, and analytics.",
                  items: [
                    "Integration failures (ERP, CRM, PIM)",
                    "Analytics, GA4, and GTM breaks",
                  ],
                },
                {
                  title: "Revenue and trust",
                  description:
                    "Checkout bugs and security events that cost orders directly.",
                  items: ["Checkout regressions", "Security incidents"],
                },
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ----------------- Grow chapter ----------------- */

function GrowChapter() {
  return (
    <>
      {/* Full-viewport image with chapter intro overlaid */}
      <section
        id="grow"
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", background: "#06080F" }}
      >
        <div className="absolute inset-0">
          <Plate
            keyword="grow"
            alt="A bustling eighteenth century harbour market at golden hour with merchants unloading goods from tall ships"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.78) 22%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0) 75%)",
            }}
          />
        </div>
        <div className="relative z-10 min-h-screen flex items-end pb-16 md:pb-24">
          <div className="wrap w-full">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 lg:gap-24 items-end">
              <div>
                <Reveal>
                  <div
                    className="flex items-baseline gap-2.5"
                    style={{
                      fontFamily: SERIF,
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    <span
                      style={{
                        fontStyle: "italic",
                        fontSize: "clamp(15px, 1.15vw, 18px)",
                      }}
                    >
                      Chapter
                    </span>
                    <span
                      style={{
                        fontSize: "clamp(26px, 2.2vw, 36px)",
                        color: "#ffffff",
                        letterSpacing: "-0.01em",
                        lineHeight: 1,
                      }}
                    >
                      III
                    </span>
                  </div>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2
                    className="mt-3 md:mt-5 text-white"
                    style={{
                      fontFamily: SERIF,
                      fontSize: "clamp(46px, 5.5vw, 88px)",
                      lineHeight: 0.96,
                      fontWeight: 500,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    Grow.
                  </h2>
                </Reveal>
              </div>
              <div className="max-w-[58ch] pb-2 md:pb-6">
                <Reveal delay={0.15}>
                  <p
                    style={{
                      fontFamily: SERIF,
                      fontSize: "clamp(19px, 1.6vw, 26px)",
                      lineHeight: 1.4,
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.95)",
                      letterSpacing: "-0.005em",
                    }}
                  >
                    Once Magento is stable and fast, the work shifts to
                    revenue. SEO, paid, CRO, email, retention, marketplaces,
                    and new markets. We run all of it on the same team that
                    keeps the store running.
                  </p>
                </Reveal>
                <Reveal delay={0.22}>
                  <div className="mt-7 md:mt-8">
                    <a
                      href="#start"
                      className="inline-flex items-center gap-3 px-6 py-3.5 font-head font-medium transition-all group"
                      style={{
                        border: "1px solid rgba(255,255,255,0.85)",
                        background: "rgba(0,0,0,0.35)",
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)",
                        color: "#ffffff",
                        fontSize: "15px",
                      }}
                    >
                      Talk to us about growth
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: CREAM }}>
        <div className="wrap py-20 md:py-28">
          <GrowthStats />

          <div className="mt-20 md:mt-28">
            <ScopeGrid
              label="Growth channels we run."
            groups={[
              {
                title: "SEO",
                description:
                  "Win the queries your buyers actually use.",
                items: ["Organic SEO", "Technical SEO", "AEO + AI search", "Content strategy", "Schema + structured data"],
              },
              {
                title: "Paid",
                description:
                  "Google, Meta, programmatic, affiliate. Planned, bought, optimized.",
                items: ["Google Ads", "Meta Ads", "Programmatic", "Affiliate", "Influencer", "Display + retargeting"],
              },
              {
                title: "CRO + UX",
                description:
                  "Lift revenue without buying more traffic.",
                items: ["A/B testing", "UX research", "Heatmaps", "Session recording", "Funnel analytics", "Personalization"],
              },
              {
                title: "Email + SMS",
                description:
                  "Welcome, post-purchase, win-back, VIP.",
                items: ["Klaviyo", "Mailchimp", "Omnisend", "ActiveCampaign", "Attentive", "Listrak"],
              },
              {
                title: "Loyalty + reviews",
                description:
                  "Programs and pipelines that compound over time.",
                items: ["Yotpo", "Smile", "LoyaltyLion", "Annex Cloud", "Trustpilot", "Bazaarvoice"],
              },
              {
                title: "Marketplaces",
                description:
                  "Sell on Amazon, eBay, TikTok Shop, and the rest.",
                items: ["Amazon", "eBay", "Walmart", "Etsy", "ManoMano", "TikTok Shop", "Instagram Shopping"],
              },
              {
                title: "Market expansion",
                description:
                  "New countries, currencies, and languages. Without forking the codebase.",
                items: ["New countries", "New languages", "Multi-currency", "Tax + duties", "Localization", "Cross-border logistics"],
              },
            ]}
            />
          </div>

          {/* Growth ecosystem partnerships */}
          <div className="mt-20 md:mt-28">
            <Reveal>
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "clamp(16px, 1.3vw, 22px)",
                  color: INK_FAINT,
                  textAlign: "center",
                }}
              >
                The growth ecosystem we plug into.
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              {/* Mobile: auto-scrolling infinite loop */}
              <div className="sm:hidden mt-8 relative overflow-hidden -mx-5">
                <motion.div
                  className="flex gap-8 whitespace-nowrap items-center"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[
                    ...Array.from({ length: 6 }, (_, i) => i + 1),
                    ...Array.from({ length: 6 }, (_, i) => i + 1),
                  ].map((n, i) => (
                    <div
                      key={`growth-${n}-${i}`}
                      className="flex items-center justify-center shrink-0"
                      style={{ width: 180, height: 110 }}
                    >
                      <img
                        src={`/solutions/magento/voyage/badges/growth-${n}.svg`}
                        alt={`Growth partner ${n}`}
                        style={{
                          height: 72,
                          width: "auto",
                          maxWidth: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
              {/* Desktop: grid */}
              <div
                className="hidden sm:grid mt-8 md:mt-10 mx-auto grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 items-center justify-items-center"
                style={{ maxWidth: 1320 }}
              >
                {Array.from({ length: 6 }, (_, i) => i + 1).map((n) => (
                  <div
                    key={n}
                    className="flex items-center justify-center"
                    style={{ width: "100%", height: 120 }}
                  >
                    <img
                      src={`/solutions/magento/voyage/badges/growth-${n}.svg`}
                      alt={`Growth partner ${n}`}
                      style={{
                        height: 80,
                        width: "auto",
                        maxWidth: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* ----------------- Footprint ----------------- */

function Footprint() {
  return (
    <>
      {/* Full-bleed atlas image with text positioned bottom-right and logos overlaid at the bottom */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", background: "#06080F" }}
      >
        <div className="absolute inset-0">
          <Plate
            keyword="worldmap"
            alt="An aerial painterly view of many eighteenth century tall ships sailing across the open ocean in different directions"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.45) 78%, rgba(0,0,0,0.88) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 min-h-screen flex items-end justify-end pb-40 md:pb-52 px-6 md:px-12 lg:px-20">
          <div className="text-right" style={{ maxWidth: "min(900px, 70vw)" }}>
            <Reveal>
              <div
                style={{
                  fontFamily: SERIF,
                  fontWeight: 600,
                  fontSize: "clamp(13px, 1.1vw, 16px)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.92)",
                  textShadow: "0 2px 14px rgba(0,0,0,0.6)",
                }}
              >
                An atlas of merchants
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="text-white mt-4 md:mt-5"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(46px, 7vw, 108px)",
                  lineHeight: 1,
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  whiteSpace: "nowrap",
                }}
              >
                <span className="block">700 merchants.</span>
                <span className="block">Six continents.</span>
              </h2>
            </Reveal>
          </div>
        </div>

        {/* Client logos overlaid along the bottom of the image */}
        <div
          className="absolute bottom-0 inset-x-0 z-20 pt-8 md:pt-12 pb-7 md:pb-9"
          style={{
            background:
              "linear-gradient(to top, rgba(6,8,15,0.85) 0%, rgba(6,8,15,0.4) 70%, rgba(6,8,15,0) 100%)",
          }}
        >
          <div className="wrap mb-5 md:mb-7">
            <Reveal>
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "clamp(18px, 2vw, 28px)",
                  color: "rgba(255,255,255,0.95)",
                  letterSpacing: "0.005em",
                  textShadow: "0 2px 16px rgba(0,0,0,0.55)",
                }}
              >
                Magento merchants we have built and grown.
              </div>
            </Reveal>
          </div>
          <Reveal>
            <ClientLogoStrip onDark />
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ----------------- Cases ----------------- */

type Case = {
  keyword?: string;
  alt: string;
  brand: string;
  industry: string;
  bgColor: string;
  bigStat: string;
  bigStatLabel: string;
  subStats: { value: string; label: string }[];
  headline: string;
  challenge: string;
  intervention: string;
  outcome: string;
  quote: string;
  quoteAttr: string;
  badge?: string;
};

const CASES: Case[] = [
  {
    keyword: "laderach-case",
    alt: "A vibrant alpine village market street with mountains in the background, painted in eighteenth century style",
    brand: "Läderach",
    industry: "Swiss luxury · 50+ countries",
    bgColor: "#321F11",
    bigStat: "+39%",
    bigStatLabel: "revenue, after the Hyvä rebuild.",
    badge: "Award-winning design",
    subStats: [
      { value: "+48%", label: "conversion" },
      { value: "1.8s", label: "LCP, desktop" },
      { value: "134", label: "boutiques served" },
    ],
    headline:
      "A Swiss chocolatier moved 134 boutiques onto one storefront, with zero freezes through peak.",
    challenge:
      "Fragmented WordPress and Magento sites slowed launches and leaked revenue across 50+ countries. Holiday seasons used to mean code freezes.",
    intervention:
      "One Adobe Commerce with Hyvä on top, multi-storeview architecture, Pimcore PIM, AWS auto-scaled. Rebuilt in six months from kickoff to launch.",
    outcome:
      "+39% revenue, +48% conversion, +25.5% engagement, +52.9% users. PageSpeed 93 to 99. LCP 1.8s desktop. Design Curve Award at 2023 Meet Magento NYC.",
    quote: "scandiweb is supportive, solution-oriented digital experts.",
    quoteAttr: "Claudia Schioenning, Head of eCommerce, Läderach",
  },
  {
    keyword: "puma-case",
    alt: "A bright harbor at sunrise with a tall ship and a leopard surveying the bay",
    brand: "PUMA",
    industry: "Sportswear · 4 markets",
    bgColor: "#2A1B10",
    bigStat: "95 days",
    bigStatLabel: "from sign-off to four new markets live.",
    subStats: [
      { value: "+62%", label: "organic revenue, YoY" },
      { value: "$3.9M", label: "projected uplift" },
      { value: "3 to 4×", label: "faster than the portfolio" },
    ],
    headline:
      "Four PUMA markets built and launched in 95 days. Then SEO grew organic revenue 62% YoY.",
    challenge:
      "Multiple PUMA markets needed new stores, fast. Past migrations had cost about 10% of organic traffic for months. Growth could not survive another bad relaunch.",
    intervention:
      "We built and launched four CBC markets in 95 days. SEO joined the build to fix 404s, pagination, schema markup, and search titles, market by market, without freezing trade.",
    outcome:
      "Sites went live three to four times faster than other sites in the PUMA portfolio. +62% organic revenue YoY across CBC. Canada +73.98%, India +124.73%, Japan +53.92%, UK +36.26%. Around $3.9M projected uplift.",
    quote:
      "Partnering with scandiweb's team allowed us to bring a site to market that has 3 to 4 times better performance than any other site in the client's portfolio.",
    quoteAttr: "Jason Barney, Technical Consultant, PUMA",
  },
  {
    keyword: "closing",
    alt: "An eighteenth century painting of a calm evening harbor at sunset",
    brand: "Umniah",
    industry: "Telecom · Jordan",
    bgColor: "#0D1234",
    bigStat: "+86%",
    bigStatLabel: "cart-to-view rate",
    badge: "Award-winning design",
    subStats: [
      { value: "+71.2%", label: "purchase-to-view rate" },
      { value: "+41.1%", label: "items purchased" },
      { value: "+72.1%", label: "organic sessions" },
    ],
    headline:
      "Jordan's national telecom moved its eShop off a legacy frontend onto Magento and Hyvä.",
    challenge:
      "The legacy storefront could not keep up with the way customers compared telecom plans. Opaque bundle pricing, heavy mobile UX and a frontend that blocked any meaningful improvement.",
    intervention:
      "Storefront rebuilt on Magento 2 with Hyvä. Plans restructured into comparable, configurable flows. Insider personalization and a custom Hyperpay checkout module wired in. Full technical SEO preserved.",
    outcome:
      "+86% cart-to-view, +71.2% purchase-to-view, +41.1% items purchased, +72.1% organic sessions, 300+ new ranking keywords. Design Pioneer Award at 2025 Meet Magento NYC.",
    quote: "Setting a new standard in telecom eCommerce.",
    quoteAttr: "Design Pioneer Award · 2025 Meet Magento NYC",
  },
  {
    keyword: "beautyworks",
    alt: "An eighteenth century English coastal port at peak summer with tall ships",
    brand: "Beauty Works",
    industry: "UK · B2C and salon-pro B2B",
    bgColor: "#4F1F1A",
    bigStat: "+80%",
    bigStatLabel: "conversion uplift",
    subStats: [
      { value: "$1.3M", label: "new revenue" },
      { value: "25K+", label: "concurrent shoppers" },
      { value: "+32%", label: "revenue, YoY" },
    ],
    headline:
      "Conversion lifted 80 percent on Hyvä, held steady through 25K concurrent shoppers.",
    challenge:
      "Influencer-led drops kept slamming the storefront. A B2B salon-pro channel shared the same Magento backend, fighting B2C for capacity.",
    intervention:
      "Adobe Commerce backbone, Hyvä storefront on top, B2C and salon-pro on shared rails. 24/7 SOC monitoring through every launch.",
    outcome:
      "+80% conversion, +32% YoY revenue, $1.3M new revenue. 25,000 concurrent shoppers held through the Molly-Mae launch with no rise in support contacts.",
    quote:
      "I value scandiweb as a partner and would very much like to keep the existing team for the long term.",
    quoteAttr: "Steve Keatley, Beauty Works",
  },
];

function CaseCard({ cs, index }: { cs: Case; index: number }) {
  const num = String(index + 1);
  return (
    <article
      className="flex-shrink-0 snap-center snap-always flex flex-col"
      style={{ width: "min(1180px, 90vw)" }}
    >
      {/* Top: visible painting with bottom-only darkening for stats */}
      <div
        className="relative overflow-hidden aspect-[4/5] md:aspect-[16/9]"
        style={{
          background: cs.bgColor,
          maxHeight: "min(620px, 62vh)",
        }}
      >
        {cs.keyword && <Plate keyword={cs.keyword} alt={cs.alt} />}

        {/* Top: light wash to keep brand chip readable on bright skies */}
        <div
          className="absolute inset-x-0 top-0 pointer-events-none"
          style={{
            height: "26%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Bottom: stronger darkening where the stats sit */}
        <div
          className="absolute inset-x-0 bottom-0 pointer-events-none"
          style={{
            height: "60%",
            background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, ${cs.bgColor}CC 55%, ${cs.bgColor}F2 100%)`,
          }}
        />

        {/* Top labels — desktop: brand left, industry+badge right */}
        <div
          className="hidden md:flex absolute top-6 md:top-8 left-6 md:left-8 right-6 md:right-8 justify-between items-start gap-4"
          style={{
            fontFamily: SERIF,
            fontWeight: 600,
            fontSize: "clamp(19px, 1.7vw, 24px)",
            color: "rgba(255,255,255,1)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textShadow: "0 1px 6px rgba(0,0,0,0.6)",
          }}
        >
          <span className="flex items-center gap-3">
            <span
              style={{
                width: 7,
                height: 7,
                background: "rgba(255,255,255,0.95)",
                transform: "rotate(45deg)",
                display: "inline-block",
                boxShadow: "0 1px 4px rgba(0,0,0,0.4)",
              }}
            />
            {cs.brand}
          </span>
          <span className="flex flex-col items-end gap-2.5">
            <span>{cs.industry}</span>
            {cs.badge && (
              <span
                className="inline-flex items-center gap-2"
                style={{
                  fontFamily: SERIF,
                  fontWeight: 600,
                  fontSize: "16px",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,1)",
                  padding: "8px 14px 8px 12px",
                  border: "1px solid rgba(255,255,255,0.5)",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  textShadow: "none",
                }}
              >
                <span style={{ fontSize: 12, lineHeight: 1 }}>✦</span>
                {cs.badge}
              </span>
            )}
          </span>
        </div>

        {/* Mobile labels — brand row at top, industry + badge stacked below */}
        <div
          className="md:hidden absolute top-4 left-4 right-4 flex flex-col gap-2"
          style={{
            fontFamily: SERIF,
            fontWeight: 600,
            color: "rgba(255,255,255,0.96)",
            textShadow: "0 1px 6px rgba(0,0,0,0.55)",
          }}
        >
          <span
            className="flex items-center gap-2.5"
            style={{
              fontSize: "17px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "rgba(255,255,255,0.95)",
                transform: "rotate(45deg)",
                display: "inline-block",
              }}
            />
            {cs.brand}
          </span>
          <span
            style={{
              fontSize: "15px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.95)",
            }}
          >
            {cs.industry}
          </span>
          {cs.badge && (
            <span
              className="inline-flex items-center gap-2 self-start"
              style={{
                fontFamily: SERIF,
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.95)",
                padding: "4px 9px 4px 8px",
                border: "1px solid rgba(255,255,255,0.45)",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(6px)",
                WebkitBackdropFilter: "blur(6px)",
                textShadow: "none",
              }}
            >
              <span style={{ fontSize: 11, lineHeight: 1 }}>✦</span>
              {cs.badge}
            </span>
          )}
        </div>

        {/* Bottom row: big stat on the left, fixed-width sub-stats on the right */}
        <div
          className="absolute inset-x-6 md:inset-x-10 lg:inset-x-12 bottom-6 md:bottom-8 grid items-end gap-6 md:gap-10"
          style={{ gridTemplateColumns: "1fr auto" }}
        >
          <div>
            <div
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(68px, 9.5vw, 132px)",
                lineHeight: 0.95,
                color: "rgba(255,255,255,0.98)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
              }}
            >
              {cs.bigStat}
            </div>
            <div
              className="mt-3"
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "clamp(17px, 1.4vw, 22px)",
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "0.01em",
              }}
            >
              {cs.bigStatLabel}
            </div>
          </div>

          {/* Sub-stats panel — fixed width + equal columns so all four cards match */}
          <div
            className="hidden sm:grid"
            style={{
              gridTemplateColumns: "repeat(3, 1fr)",
              columnGap: 28,
              padding: "26px 32px",
              width: "clamp(440px, 44%, 560px)",
              background: "rgba(8,10,18,0.42)",
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              justifySelf: "end",
            }}
          >
            {cs.subStats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(34px, 3vw, 44px)",
                    fontWeight: 500,
                    color: "rgba(255,255,255,1)",
                    lineHeight: 1,
                    letterSpacing: "-0.015em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(18px, 1.4vw, 21px)",
                    color: "rgba(255,255,255,0.95)",
                    letterSpacing: "0.005em",
                    marginTop: 12,
                    lineHeight: 1.3,
                    minHeight: "2.5em",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: cream content. min-height locks all four cards to one height */}
      <div
        className="px-6 md:px-10 lg:px-14 py-9 md:py-11 lg:py-12 flex flex-col"
        style={{
          background: "rgba(255,253,247,0.65)",
          border: "1px solid rgba(16,19,44,0.12)",
          borderTop: "none",
          minHeight: "clamp(440px, 36vw, 560px)",
        }}
      >
        <div
          style={{
            fontFamily: SERIF,
            fontWeight: 600,
            fontSize: "18px",
            color: INK,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {num} · {cs.brand}
        </div>
        <h3
          className="mt-4"
          style={{
            fontFamily: SERIF,
            fontSize: "clamp(30px, 3.4vw, 50px)",
            lineHeight: 1.08,
            fontWeight: 500,
            color: INK,
            letterSpacing: "-0.015em",
            maxWidth: "44ch",
          }}
        >
          {cs.headline}
        </h3>

        <div className="mt-8 md:mt-10 grid md:grid-cols-3 gap-7 md:gap-10">
          {(
            [
              ["Challenge", cs.challenge],
              ["Intervention", cs.intervention],
              ["Outcome", cs.outcome],
            ] as const
          ).map(([label, body], i) => (
            <div key={label}>
              <div className="flex items-baseline gap-3 mb-3">
                <span
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "var(--sw-blue)",
                    lineHeight: 1,
                  }}
                >
                  {i + 1}.
                </span>
                <span
                  style={{
                    fontFamily: SERIF,
                    fontWeight: 600,
                    fontSize: "16px",
                    color: INK,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  {label}
                </span>
              </div>
              <div
                style={{
                  borderTop: "2px solid var(--sw-blue)",
                  marginBottom: 16,
                  width: "32px",
                }}
              />
              <p
                style={{
                  fontSize: "16.5px",
                  color: INK_SOFT,
                  lineHeight: 1.65,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        <div
          className="mt-auto pt-7 md:pt-8"
          style={{ borderTop: "1px solid rgba(16,19,44,0.15)" }}
        >
          <p
            style={{
              fontFamily: SERIF,
              fontStyle: "italic",
              fontSize: "clamp(19px, 1.6vw, 25px)",
              color: INK,
              lineHeight: 1.4,
              maxWidth: "62ch",
            }}
          >
            &ldquo;{cs.quote}&rdquo;
          </p>
          <div
            className="mt-3"
            style={{
              fontSize: "13.5px",
              color: INK_FAINT,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {cs.quoteAttr}
          </div>
        </div>
      </div>
    </article>
  );
}

function Cases() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef({ startX: 0, scrollLeft: 0, hasMoved: false });

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 8);
      setCanNext(el.scrollLeft < max - 8);
      // Track active card by which one is closest to the viewport center
      const articles = Array.from(
        el.querySelectorAll<HTMLElement>("article"),
      );
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      articles.forEach((a, i) => {
        const mid = a.offsetLeft + a.offsetWidth / 2;
        const dist = Math.abs(mid - center);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });
      setActiveIndex(best);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Mouse drag-to-scroll. Snap is disabled during drag (re-enabled on release)
  // so the carriage doesn't fight the cursor.
  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    // Ignore drags that start on interactive elements
    const target = e.target as HTMLElement;
    if (target.closest("button, a, input, textarea")) return;
    setIsDragging(true);
    dragRef.current = {
      startX: e.pageX,
      scrollLeft: el.scrollLeft,
      hasMoved: false,
    };
    el.style.scrollSnapType = "none";
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const delta = e.pageX - dragRef.current.startX;
    if (Math.abs(delta) > 4) dragRef.current.hasMoved = true;
    el.scrollLeft = dragRef.current.scrollLeft - delta;
  };

  const endDrag = () => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(false);
    // Re-enable snap so the nearest card locks in after release
    requestAnimationFrame(() => {
      el.style.scrollSnapType = "x mandatory";
    });
  };

  const scrollToIndex = (i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const articles = el.querySelectorAll<HTMLElement>("article");
    const target = articles[Math.max(0, Math.min(i, articles.length - 1))];
    if (!target) return;
    el.scrollTo({
      left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  const ArrowBtn = ({
    dir,
    enabled,
  }: {
    dir: "prev" | "next";
    enabled: boolean;
  }) => (
    <button
      type="button"
      aria-label={dir === "prev" ? "Previous case" : "Next case"}
      onClick={() => scrollToIndex(activeIndex + (dir === "next" ? 1 : -1))}
      disabled={!enabled}
      style={{
        width: 52,
        height: 52,
        borderRadius: 999,
        border: "1px solid rgba(16,19,44,0.35)",
        background: "transparent",
        color: INK,
        fontFamily: SERIF,
        fontSize: 26,
        lineHeight: 1,
        opacity: enabled ? 1 : 0.28,
        cursor: enabled ? "pointer" : "default",
        transition: "background 0.2s ease, border-color 0.2s ease",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onMouseEnter={(e) => {
        if (!enabled) return;
        e.currentTarget.style.background = "rgba(16,19,44,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
      }}
    >
      <span style={{ transform: "translateY(-1px)" }}>
        {dir === "prev" ? "‹" : "›"}
      </span>
    </button>
  );

  return (
    <section style={{ background: CREAM }}>
      <div className="wrap pt-14 md:pt-20 pb-8 md:pb-10">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <Reveal>
            <h2
              className="max-w-[28ch]"
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(34px, 4.4vw, 64px)",
                lineHeight: 1.05,
                fontWeight: 500,
                color: INK,
                letterSpacing: "-0.015em",
              }}
            >
              Some voyages scandiweb helped happen.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-4">
              <div
                style={{
                  fontFamily: SERIF,
                  fontWeight: 600,
                  fontSize: 22,
                  color: INK,
                  letterSpacing: "0.06em",
                  minWidth: 64,
                }}
              >
                {activeIndex + 1} / {CASES.length}
              </div>
              <div className="flex gap-3">
                <ArrowBtn dir="prev" enabled={canPrev} />
                <ArrowBtn dir="next" enabled={canNext} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="overflow-x-auto pb-20 md:pb-28 cases-scroll"
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        style={{
          scrollbarWidth: "none",
          WebkitOverflowScrolling: "touch",
          scrollSnapType: "x mandatory",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: isDragging ? "none" : "auto",
        }}
      >
        <div
          className="flex gap-6 md:gap-8 px-5 md:px-12 lg:px-[6vw]"
          style={{
            pointerEvents: isDragging ? "none" : "auto",
          }}
        >
          {CASES.map((cs, i) => (
            <CaseCard key={cs.brand} cs={cs} index={i} />
          ))}
          <div className="shrink-0" style={{ width: "5vw" }} aria-hidden="true" />
        </div>
      </div>

      <style jsx>{`
        .cases-scroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

/* ----------------- Team ----------------- */

function Team() {
  const roles = [
    {
      role: "Technical Account Manager",
      tenure: "Adobe-certified since 2012",
      promise:
        "Knows your stack by the file name. On every incident call, every QBR, every escalation.",
    },
    {
      role: "Delivery Manager",
      tenure: "12+ years on enterprise commerce",
      promise:
        "Owns the release calendar. Knows when to push and when to hold. Predictable Wednesday deploys.",
    },
    {
      role: "Senior Adobe Commerce Architect",
      tenure: "Adobe-certified since 2014",
      promise:
        "Writes the spec. Reviews the code. Stays on the call until production is green.",
    },
    {
      role: "Lead Hyvä Engineer",
      tenure: "Hyvä-certified, top 10 globally",
      promise:
        "Owns the storefront. Hyvä Swift contributor. The reason your LCP starts with a 1.",
    },
  ];

  return (
    <>
      {/* Image full bleed with translucent dark text card centered */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "100vh", background: "#06080F" }}
      >
        <div className="absolute inset-0">
          <Plate
            keyword="team"
            alt="An intimate scene aboard an eighteenth century tall ship at dusk, an experienced captain at the helm with crew working in warm lamplight nearby"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.55) 100%)",
            }}
          />
        </div>
        <div className="relative z-10 min-h-screen flex items-center justify-center px-5 py-20">
          <div
            className="w-full max-w-[640px] p-8 md:p-12 lg:p-14"
            style={{
              background: "rgba(8, 10, 22, 0.7)",
              border: "1px solid rgba(255,255,255,0.18)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.5)",
            }}
          >
            <Reveal>
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "clamp(15px, 1.15vw, 18px)",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                The crew.
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <h2
                className="text-white mt-4 md:mt-5"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(36px, 4.8vw, 64px)",
                  lineHeight: 1.05,
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                }}
              >
                The same humans in week one as month twelve.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p
                className="mt-6 leading-relaxed"
                style={{
                  fontSize: "clamp(16px, 1.25vw, 19px)",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.55,
                }}
              >
                A named technical account manager. A named delivery manager. A
                named architect. A named lead Hyvä engineer. They are on every
                call. They never rotate off your account.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section style={{ background: CREAM }}>
        <div className="wrap py-16 md:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {roles.map((r, i) => (
              <Reveal key={r.role} delay={i * 0.05}>
                <div>
                  <div
                    className="font-head"
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: INK,
                      lineHeight: 1.25,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {r.role}
                  </div>
                  <div
                    className="mt-1.5"
                    style={{ fontSize: "13.5px", color: INK_FAINT }}
                  >
                    {r.tenure}
                  </div>
                  <p
                    className="mt-5 leading-relaxed"
                    style={{ fontSize: "15px", color: INK_SOFT, lineHeight: 1.55 }}
                  >
                    {r.promise}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ----------------- Heritage (Riga) ----------------- */

function Heritage() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: "100vh", background: "#06080F" }}
    >
      <div className="absolute inset-0">
        <Plate
          keyword="riga"
          alt="The old Hanseatic city of Riga in Latvia at soft pink dawn, painterly church spires rising over half-timbered merchant houses, tall ships moored on the Daugava river"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0) 70%)",
          }}
        />
      </div>
      {/* Text positioned at top — like a manuscript page header */}
      <div className="relative z-10 min-h-screen flex items-start pt-28 md:pt-36">
        <div className="wrap w-full">
          <div className="max-w-[68ch]">
            <Reveal>
              <div
                style={{
                  fontFamily: SERIF,
                  fontStyle: "italic",
                  fontSize: "clamp(16px, 1.3vw, 22px)",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                Magento, since 2008.
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="text-white mt-4 md:mt-5"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(52px, 8vw, 124px)",
                  lineHeight: 0.96,
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  maxWidth: "22ch",
                }}
              >
                Where the practice was built.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p
                className="mt-7 md:mt-9 leading-relaxed"
                style={{
                  fontSize: "clamp(17px, 1.45vw, 22px)",
                  color: "rgba(255,255,255,0.92)",
                  lineHeight: 1.55,
                }}
              >
                Adobe Commerce Gold. Hyvä Platinum. The #1 most-certified
                agency on both, with 894+ active certifications and 2,100+
                projects shipped since Magento launched.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p
                className="mt-6 leading-relaxed"
                style={{
                  fontSize: "16.5px",
                  color: "rgba(255,255,255,0.78)",
                  lineHeight: 1.6,
                }}
              >
                Organizers of more editions of Meet Magento than any company in
                the world. New York. Canada. Baltics. The official Adobe
                Commerce community events for both regions.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Pricing ----------------- */

function Pricing() {
  const tiers = [
    {
      path: "Build",
      offer: "$5,000 off any new Magento build.",
      fineprint:
        "Up to 25% discount per invoice. We back more Magento stores.",
      body:
        "A new Adobe Commerce store, a replatform, or a Hyvä storefront on an existing one. Discovery, architecture, build, and handover under one engagement.",
      points: [
        "Discovery and architecture",
        "Architect on the account",
        "Fixed scope, fixed price",
        "Handover and team training",
      ],
      cta: "Get $5,000 off",
    },
    {
      path: "Optimize",
      offer: "50% off the first 40 hours of work.",
      fineprint:
        "Use the hours for development, integration, design, monitoring, or fixes.",
      body:
        "Magento development, integration work, design changes, support, and platform care. Pull from a single block of hours, extend into a retainer when ready.",
      points: [
        "Magento and Hyvä development",
        "Third-party integration work",
        "UX and design changes",
        "Monitoring, fixes, and security",
      ],
      cta: "Get 50% off",
      highlight: true,
    },
    {
      path: "Grow",
      offer: "50% off the first 40 hours of work.",
      fineprint:
        "Pick the stream: SEO, paid, CRO, email, marketplaces, or AI search.",
      body:
        "A fixed block of growth time to test the channel of your choice. Strategy, execution, and weekly reporting included.",
      points: [
        "Pick any one channel to test",
        "Weekly experiments and reporting",
        "Full data and reporting access",
        "Extendable into a retainer",
      ],
      cta: "Get 50% off",
    },
  ];

  return (
    <section id="pricing" style={{ background: CREAM }}>
      <div className="wrap py-20 md:py-32">
        <Reveal>
          <h2
            style={{
              fontFamily: SERIF,
              fontSize: "clamp(40px, 5.5vw, 88px)",
              lineHeight: 1.02,
              fontWeight: 500,
              color: INK,
              letterSpacing: "-0.015em",
              maxWidth: "22ch",
            }}
          >
            One offer per path.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p
            className="mt-6 max-w-[60ch] leading-relaxed"
            style={{ fontSize: "18px", color: INK_SOFT, lineHeight: 1.6 }}
          >
            A concrete way to start on Build, Optimize, or Grow. Final scope
            and pricing are confirmed on the discovery call.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7">
          {tiers.map((t, i) => (
            <Reveal key={t.path} delay={i * 0.06}>
              <div
                className="relative h-full rounded-[4px] p-7 md:p-9 flex flex-col"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(16,19,44,0.2)",
                  minHeight: 520,
                }}
              >
                <div
                  className="inline-flex items-center gap-2"
                  style={{
                    alignSelf: "flex-start",
                    padding: "5px 12px",
                    border: "1px solid var(--sw-blue)",
                    background: "rgba(63,74,175,0.08)",
                  }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      background: "var(--sw-blue)",
                      transform: "rotate(45deg)",
                      display: "inline-block",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: SERIF,
                      fontWeight: 600,
                      fontSize: "11.5px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--sw-blue)",
                    }}
                  >
                    {t.path}
                  </span>
                </div>
                <h3
                  className="mt-5"
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(24px, 2.4vw, 32px)",
                    lineHeight: 1.15,
                    fontWeight: 500,
                    color: INK,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t.offer}
                </h3>
                <div
                  className="mt-2"
                  style={{
                    fontSize: "12.5px",
                    color: INK_FAINT,
                    lineHeight: 1.45,
                  }}
                >
                  {t.fineprint}
                </div>
                <p
                  className="mt-6 pt-5 leading-relaxed"
                  style={{
                    fontSize: "15px",
                    color: INK_SOFT,
                    lineHeight: 1.55,
                    borderTop: "1px solid rgba(16,19,44,0.15)",
                  }}
                >
                  {t.body}
                </p>
                <ul className="mt-6 space-y-2.5 flex-1" style={{ fontSize: "14.5px" }}>
                  {t.points.map((p) => (
                    <li
                      key={p}
                      className="leading-snug"
                      style={{ color: "rgba(16,19,44,0.8)" }}
                    >
                      {p}
                    </li>
                  ))}
                </ul>
                <a
                  href="#start"
                  className="mt-8 h-12 flex items-center justify-center gap-2 font-head font-medium transition-all group"
                  style={{
                    border: `1px solid ${INK}`,
                    color: INK,
                    fontSize: "14.5px",
                  }}
                >
                  {t.cta}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Support card — primary 24/7 message, secondary ticket review */}
        <Reveal delay={0.24}>
          <div
            className="mt-5 lg:mt-7 p-7 md:p-10 lg:p-12 grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-14"
            style={{ background: INK, color: "#ffffff" }}
          >
            <div>
              <div
                className="inline-flex items-center gap-2"
                style={{
                  padding: "5px 12px",
                  border: "1px solid rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.06)",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    background: "rgba(255,255,255,0.9)",
                    transform: "rotate(45deg)",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: SERIF,
                    fontWeight: 600,
                    fontSize: "11.5px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.95)",
                  }}
                >
                  Support
                </span>
              </div>
              <h3
                className="mt-5"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(28px, 2.8vw, 40px)",
                  lineHeight: 1.15,
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  maxWidth: "30ch",
                }}
              >
                24/7 Magento support. Have an urgent request?
              </h3>
              <p
                className="mt-4 leading-relaxed"
                style={{
                  fontSize: "15.5px",
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.6,
                  maxWidth: "62ch",
                }}
              >
                Round-the-clock monitoring, incident response, and platform
                care for live Magento stores. Adobe-certified, SOC
                monitored, performance and security covered. When something
                breaks, we are already on it.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#start"
                  className="inline-flex items-center gap-3 px-6 py-3.5 font-head font-medium transition-all group"
                  style={{
                    background: "#ffffff",
                    color: INK,
                    fontSize: "15px",
                    border: "1px solid #ffffff",
                  }}
                >
                  Talk to us about support
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href="https://readymage.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 font-head font-medium transition-all group"
                  style={{
                    background: "transparent",
                    color: "#ffffff",
                    fontSize: "15px",
                    border: "1px solid rgba(255,255,255,0.5)",
                  }}
                >
                  Explore ReadyMage
                  <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Secondary: ticket review */}
            <div
              className="p-6 lg:p-7"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.18)",
                alignSelf: "center",
              }}
            >
              <div
                style={{
                  fontFamily: SERIF,
                  fontWeight: 600,
                  fontSize: "10.5px",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.75)",
                }}
              >
                Or just send us a ticket
              </div>
              <h4
                className="mt-3"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(19px, 1.6vw, 24px)",
                  lineHeight: 1.2,
                  fontWeight: 500,
                  color: "#ffffff",
                  letterSpacing: "-0.005em",
                }}
              >
                Free review of one stuck Magento ticket, within 24 hours.
              </h4>
              <p
                className="mt-3 leading-relaxed"
                style={{
                  fontSize: "13.5px",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.55,
                }}
              >
                A bug that keeps coming back, an issue another vendor
                cannot solve. Diagnosis and path forward in 24 hours. No
                commitment, no fee.
              </p>
              <a
                href="#start"
                className="mt-5 inline-flex items-center gap-2 transition-all group"
                style={{
                  fontFamily: SERIF,
                  fontWeight: 600,
                  fontSize: "13.5px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  borderBottom: "1px solid rgba(255,255,255,0.5)",
                  paddingBottom: 4,
                }}
              >
                Send the ticket
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------- FAQ ----------------- */

const FAQS = [
  {
    q: "Do you work with Adobe Commerce Cloud, or only on-prem?",
    a: "Both. We run engagements on Adobe Commerce Cloud, on-prem Adobe Commerce, and Magento Open Source. We host on AWS via our ReadyMage platform when clients want a managed setup, or integrate with existing Adobe Commerce Cloud infrastructure when that is the constraint.",
  },
  {
    q: "Can you take over from another Magento agency?",
    a: "Yes. About a third of our retainers start as takeovers. We run a structured handover audit, document the inherited stack, and stabilize in the first sprint before adding new work. Most takeovers complete handover inside four weeks.",
  },
  {
    q: "Are you a certified Adobe Solution Partner?",
    a: "Adobe Gold Solutions Partner, the highest commercial tier. 894 active Adobe certifications across the team. 600 Magento specialists. Verifiable on the Adobe Partner Finder.",
  },
  {
    q: "Do you offer 24/7 Magento support?",
    a: "Yes, on the retainer engagement. 24/7 monitoring across infrastructure, application, and frontend. An 8-minute response SLA by certified engineers. Live status updates while we work an incident. PCI and ISO 27001 audit trail.",
  },
  {
    q: "Can you migrate from Magento 1 to Adobe Commerce 2?",
    a: "Yes. Magento 1 to Adobe Commerce 2.4.x migrations are a core service. Data, configuration, extensions, frontend, integrations. We typically replatform onto Hyvä for the frontend in the same engagement.",
  },
  {
    q: "Will the team rotate?",
    a: "No. The named technical account manager and delivery manager stay on your account from kickoff through year five. Engineers may rotate across releases but the leadership pair is constant.",
  },
  {
    q: "What does it cost?",
    a: "Stabilization sprints start at $8K. Monthly retainers run $8K to $25K. Full-team enterprise engagements run $50K to $250K per month. Final scope confirmed in the discovery call.",
  },
];

function FAQItem({ item, i }: { item: (typeof FAQS)[number]; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease, delay: i * 0.04 }}
      className="border-t"
      style={{ borderColor: "rgba(16,19,44,0.15)" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full py-6 md:py-7 flex items-center justify-between gap-5 text-left group"
      >
        <span
          className="font-head"
          style={{
            fontSize: "clamp(17px, 1.4vw, 21px)",
            fontWeight: 500,
            color: INK,
            letterSpacing: "-0.005em",
            lineHeight: 1.35,
          }}
        >
          {item.q}
        </span>
        <span
          className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all"
          style={{
            background: open ? "rgba(16,19,44,0.06)" : "transparent",
            border: `1px solid ${INK}`,
            color: INK,
          }}
        >
          {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <p
              className="pb-7 pr-6 md:pr-12 leading-relaxed"
              style={{ fontSize: "15.5px", color: INK_SOFT, lineHeight: 1.65 }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function Faq() {
  return (
    <section id="faq" style={{ background: CREAM }}>
      <div className="wrap py-20 md:py-32">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
          <div>
            <Reveal>
              <h2
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(34px, 4.5vw, 64px)",
                  lineHeight: 1.02,
                  fontWeight: 500,
                  color: INK,
                  letterSpacing: "-0.015em",
                  maxWidth: "16ch",
                }}
              >
                Specific questions, specific answers.
              </h2>
            </Reveal>
          </div>
          <div>
            {FAQS.map((item, i) => (
              <FAQItem key={item.q} item={item} i={i} />
            ))}
            <div
              className="border-t"
              style={{ borderColor: "rgba(16,19,44,0.15)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Closing ----------------- */

function Closing() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "#06080F", minHeight: "90vh" }}
    >
      <div className="absolute inset-0">
        <Plate
          keyword="closing"
          alt="A peaceful eighteenth century harbour at sunset, lanterns lit along the quay, tall ships moored with sails furled, warm pink and amber sky reflecting on calm water"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,0,0,0.15) 30%, rgba(0,0,0,0.65) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 min-h-[90vh] flex items-center justify-center px-6 py-20">
        <div
          className="text-center mx-auto"
          style={{ maxWidth: "min(900px, 92vw)" }}
        >
          <Reveal>
            <div
              style={{
                fontFamily: SERIF,
                fontStyle: "italic",
                fontSize: "clamp(17px, 1.4vw, 22px)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              & a port to come home to.
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2
              className="text-white mt-6 md:mt-8"
              style={{
                fontFamily: SERIF,
                fontSize: "clamp(40px, 7vw, 96px)",
                lineHeight: 1.02,
                fontWeight: 500,
                letterSpacing: "-0.015em",
              }}
            >
              <span className="block">Your Magento store, fully run.</span>
              <span className="block">Starting Monday.</span>
            </h2>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Final CTA ----------------- */

function HubSpotForm() {
  const PORTAL_ID = "25724996";
  const FORM_GUID = "bfc21a90-021d-4a05-86be-a86fb8110793";
  type Status = "idle" | "submitting" | "error";
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const fields = [
    { name: "firstname", label: "First name", placeholder: "Your first name", type: "text", required: true },
    { name: "email", label: "Work email", placeholder: "you@company.com", type: "email", required: true },
    { name: "website", label: "Company website", placeholder: "https://your-store.com", type: "url", required: false },
    { name: "phone", label: "Phone number", placeholder: "+1 555 000 0000", type: "tel", required: false },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const payloadFields = Array.from(formData.entries())
      .filter(([, v]) => String(v).trim() !== "")
      .map(([name, value]) => ({
        objectTypeId: "0-1",
        name,
        value: String(value),
      }));

    const getCookie = (name: string) => {
      const m = document.cookie.match(
        new RegExp("(^|;\\s*)" + name + "=([^;]+)"),
      );
      return m ? decodeURIComponent(m[2]) : undefined;
    };

    const hutk = getCookie("hubspotutk");

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${PORTAL_ID}/${FORM_GUID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields: payloadFields,
            context: {
              hutk,
              pageUri:
                typeof window !== "undefined" ? window.location.href : undefined,
              pageName:
                typeof document !== "undefined" ? document.title : undefined,
            },
          }),
        },
      );

      if (res.ok) {
        if (typeof window !== "undefined") {
          window.location.href = "/success";
        }
        return;
      }
      const body = (await res.json().catch(() => null)) as
        | { message?: string }
        | null;
      setErrorMsg(
        body?.message ||
          "Something went wrong submitting the form. Please try again.",
      );
      setStatus("error");
    } catch {
      setStatus("error");
      setErrorMsg("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-5">
        {fields.map((f) => (
          <div key={f.name}>
            <label
              htmlFor={`hs-field-${f.name}`}
              className="block font-head"
              style={{
                fontSize: "13px",
                color: INK_FAINT,
                letterSpacing: "0.005em",
              }}
            >
              {f.label}
            </label>
            <input
              id={`hs-field-${f.name}`}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              required={f.required}
              disabled={status === "submitting"}
              autoComplete={
                f.type === "email"
                  ? "email"
                  : f.name === "firstname"
                  ? "given-name"
                  : f.name === "website"
                  ? "url"
                  : f.name === "phone"
                  ? "tel"
                  : "off"
              }
              className="mt-2 w-full px-4 py-3 rounded-[2px] focus:outline-none transition-all"
              style={{
                background: "transparent",
                border: `1px solid rgba(16,19,44,0.2)`,
                color: INK,
                fontSize: "15px",
              }}
            />
          </div>
        ))}

        <div>
          <label
            htmlFor="hs-field-message"
            className="block font-head"
            style={{
              fontSize: "13px",
              color: INK_FAINT,
              letterSpacing: "0.005em",
            }}
          >
            What can we help with?
          </label>
          <textarea
            id="hs-field-message"
            name="message"
            placeholder="Build, support, growth, or a specific ticket. A sentence is fine."
            rows={4}
            disabled={status === "submitting"}
            className="mt-2 w-full px-4 py-3 rounded-[2px] focus:outline-none transition-all resize-y"
            style={{
              background: "transparent",
              border: `1px solid rgba(16,19,44,0.2)`,
              color: INK,
              fontSize: "15px",
              fontFamily: "inherit",
              lineHeight: 1.5,
              minHeight: 96,
            }}
          />
        </div>

        {status === "error" && (
          <div
            style={{
              fontSize: "13px",
              color: "rgba(176,68,68,0.9)",
              lineHeight: 1.45,
            }}
          >
            {errorMsg}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full h-14 flex items-center justify-center gap-3 font-head font-medium transition-all group mt-2"
          style={{
            background: INK,
            border: `1px solid ${INK}`,
            color: "#ffffff",
            fontSize: "15.5px",
            opacity: status === "submitting" ? 0.7 : 1,
            cursor: status === "submitting" ? "wait" : "pointer",
          }}
        >
          {status === "submitting"
            ? "Sending..."
            : "Book my discovery call"}
          {status !== "submitting" && (
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          )}
        </button>

        <div
          style={{
            fontSize: "12.5px",
            color: INK_FAINT,
            lineHeight: 1.5,
            marginTop: 14,
          }}
        >
          By submitting, you agree we may contact you about your enquiry.
          We do not share your data.
        </div>
      </div>
    </form>
  );
}


function FinalCta() {
  return (
    <>
      <section
        id="start"
        className="relative overflow-hidden"
        style={{ background: CREAM }}
      >
        {/* Background texture: dot grid + faint compass */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(16,19,44,0.075) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            backgroundPosition: "0 0",
            opacity: 0.7,
          }}
        />
        <svg
          className="absolute pointer-events-none hidden md:block"
          aria-hidden="true"
          viewBox="0 0 400 400"
          style={{
            top: "50%",
            left: "27%",
            transform: "translate(-50%, -50%)",
            width: 620,
            height: 620,
            opacity: 0.09,
            zIndex: 1,
          }}
        >
          <circle cx="200" cy="200" r="180" stroke={INK} strokeWidth="1.5" fill="none" />
          <circle cx="200" cy="200" r="135" stroke={INK} strokeWidth="0.8" fill="none" />
          <circle cx="200" cy="200" r="80" stroke={INK} strokeWidth="0.6" fill="none" />
          {/* Cardinal lines */}
          <line x1="200" y1="20" x2="200" y2="380" stroke={INK} strokeWidth="0.8" />
          <line x1="20" y1="200" x2="380" y2="200" stroke={INK} strokeWidth="0.8" />
          <line x1="73" y1="73" x2="327" y2="327" stroke={INK} strokeWidth="0.4" />
          <line x1="327" y1="73" x2="73" y2="327" stroke={INK} strokeWidth="0.4" />
          {/* Fleur-de-lis style N marker */}
          <polygon
            points="200,40 188,200 200,180 212,200"
            fill={INK}
            opacity="0.7"
          />
          <polygon
            points="200,360 188,200 200,220 212,200"
            fill={INK}
            opacity="0.35"
          />
          <text
            x="200"
            y="14"
            fontSize="14"
            fill={INK}
            textAnchor="middle"
            fontFamily="var(--font-serif), Cormorant Garamond, serif"
            fontStyle="italic"
            opacity="0.85"
          >
            N
          </text>
        </svg>

        <div className="relative z-10 wrap py-20 md:py-32">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-center">
            <Reveal>
              <div>
                <div
                  className="mb-5"
                  style={{
                    fontFamily: SERIF,
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--sw-blue)",
                  }}
                >
                  Discovery
                </div>
                <h2
                  style={{
                    fontFamily: SERIF,
                    fontSize: "clamp(40px, 5.5vw, 84px)",
                    lineHeight: 1.02,
                    fontWeight: 500,
                    color: INK,
                    letterSpacing: "-0.015em",
                    maxWidth: "18ch",
                  }}
                >
                  Book a 30-minute discovery call.
                </h2>
                <p
                  className="mt-7 max-w-[50ch] leading-relaxed"
                  style={{ fontSize: "18px", color: INK_SOFT, lineHeight: 1.6 }}
                >
                  30 minutes, no obligation. We listen, ask, and reply with a
                  written summary inside 24 hours.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div
                className="p-7 md:p-9"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(16,19,44,0.12)",
                  boxShadow: "0 16px 48px rgba(16,19,44,0.06)",
                }}
              >
                <HubSpotForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ocean banner — meaningful headline + CTA */}
      <section
        className="relative overflow-hidden"
        style={{ background: "#0E2B40" }}
      >
        <div className="absolute inset-0">
          <img
            src="/solutions/magento/voyage/finalcta.png"
            alt=""
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "center 35%",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(8,18,32,0.18) 0%, rgba(8,18,32,0.5) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 flex items-center justify-center text-center px-6 py-24 md:py-32 lg:py-40">
          <div className="max-w-[64ch] md:max-w-[72ch]">
            <Reveal>
              <div
                style={{
                  fontFamily: SERIF,
                  fontWeight: 600,
                  fontSize: "clamp(12px, 1.1vw, 14px)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.9)",
                  textShadow: "0 2px 16px rgba(0,0,0,0.55)",
                }}
              >
                Adobe Commerce, since 2008
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                className="text-white mt-5 md:mt-7"
                style={{
                  fontFamily: SERIF,
                  fontSize: "clamp(36px, 5.5vw, 72px)",
                  lineHeight: 1.06,
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  textShadow: "0 2px 32px rgba(0,0,0,0.55)",
                }}
              >
                700 brands trust us with their Magento.
                <br className="hidden md:inline" />{" "}
                Talk to us about yours.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="mt-8 md:mt-10 flex items-center justify-center">
                <a
                  href="#start"
                  className="inline-flex items-center gap-3 px-7 py-4 font-head font-medium transition-all group"
                  style={{
                    background: "#ffffff",
                    color: INK,
                    fontSize: "15.5px",
                    border: "1px solid #ffffff",
                    boxShadow: "0 12px 36px rgba(0,0,0,0.3)",
                  }}
                >
                  Book a discovery call
                  <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

/* ----------------- Sticky CTA ----------------- */

function ScrollNav() {
  const NAV_ITEMS = [
    { href: "#build", id: "build", label: "Build" },
    { href: "#optimize", id: "optimize", label: "Optimize" },
    { href: "#grow", id: "grow", label: "Grow" },
    { href: "#support", id: "support", label: "Support" },
    { href: "#pricing", id: "pricing", label: "Pricing" },
  ] as const;

  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState<number[]>(
    () => NAV_ITEMS.map(() => 0),
  );

  useEffect(() => {
    const clamp = (n: number) => Math.max(0, Math.min(1, n));
    const handle = () => {
      const y = window.scrollY;
      const h = window.innerHeight;
      const doc = document.documentElement.scrollHeight;

      const startEl = document.getElementById("start");
      const startTop = startEl
        ? startEl.getBoundingClientRect().top + window.scrollY
        : doc;
      setShow(y > h * 0.6 && y < startTop - 80);

      // Per-section progress: how much of each section's height has passed
      // the viewport's bottom edge. Treats each chapter as a "filled" tab once
      // you've scrolled past it.
      const viewportBottom = y + h;
      setProgress(
        NAV_ITEMS.map((item) => {
          const el = document.getElementById(item.id);
          if (!el) return 0;
          const top = el.getBoundingClientRect().top + window.scrollY;
          const height = el.offsetHeight || 1;
          return clamp((viewportBottom - top) / height);
        }),
      );
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The active item is the last one whose progress is between 0 and 1 (or, if
  // none is active, the last fully-passed one).
  const activeIndex = (() => {
    for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
      if (progress[i] > 0 && progress[i] < 1) return i;
    }
    for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
      if (progress[i] >= 1) return i;
    }
    return -1;
  })();

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease }}
        >
          <div
            style={{
              background: "rgba(255,253,247,0.86)",
              borderBottom: "1px solid rgba(16,19,44,0.12)",
              backdropFilter: "blur(16px) saturate(140%)",
              WebkitBackdropFilter: "blur(16px) saturate(140%)",
            }}
          >
            <div className="wrap flex items-center justify-between gap-4 py-3.5 md:py-4">
              {/* Brand — black scandiweb logo */}
              <a href="#top" className="flex items-center" aria-label="scandiweb">
                <img
                  src="/solutions/logos/scandiweb-black.svg"
                  alt="scandiweb"
                  style={{ height: 22, width: "auto" }}
                />
              </a>

              {/* Navigation pills — desktop only, each with a scroll progress bar */}
              <nav className="hidden lg:flex items-center gap-1">
                {NAV_ITEMS.map((it, i) => {
                  const p = progress[i] ?? 0;
                  const isActive = i === activeIndex;
                  return (
                    <a
                      key={it.href}
                      href={it.href}
                      className="font-head px-4 pt-2 pb-2.5 transition-colors hover:bg-[rgba(16,19,44,0.06)] relative"
                      style={{
                        fontSize: "13.5px",
                        fontWeight: isActive ? 600 : 500,
                        color: INK,
                        letterSpacing: "0.005em",
                      }}
                    >
                      {it.label}
                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          left: 16,
                          right: 16,
                          bottom: 4,
                          height: 2,
                          background: "rgba(16,19,44,0.12)",
                          overflow: "hidden",
                        }}
                      >
                        <span
                          style={{
                            display: "block",
                            width: `${p * 100}%`,
                            height: "100%",
                            background: "var(--sw-blue)",
                            transition: "width 0.15s linear",
                          }}
                        />
                      </span>
                    </a>
                  );
                })}
              </nav>

              {/* CTA */}
              <a
                href="#start"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 md:px-5 md:py-3 font-head font-medium transition-all group"
                style={{
                  background: INK,
                  color: "#ffffff",
                  fontSize: "13.5px",
                  border: `1px solid ${INK}`,
                }}
              >
                <span className="hidden sm:inline">Book a discovery call</span>
                <span className="sm:hidden">Book a call</span>
                <ArrowUpRight className="h-3.5 w-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handle = () => {
      const y = window.scrollY;
      const h = window.innerHeight;
      const doc = document.documentElement.scrollHeight;
      setShow(y > h * 0.8 && y < doc - h - 600);
    };
    window.addEventListener("scroll", handle, { passive: true });
    handle();
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-5 right-5 md:bottom-7 md:right-7 z-50 max-w-[calc(100vw-2.5rem)]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.4, ease }}
        >
          <a
            href="#start"
            className="inline-flex items-center gap-3 px-5 py-3.5 font-head font-medium transition-all group"
            style={{
              background: INK,
              color: "#ffffff",
              fontSize: "14.5px",
              boxShadow: "0 12px 36px rgba(0,0,0,0.4)",
            }}
          >
            Book a discovery call
            <ArrowUpRight className="h-4 w-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ----------------- Page ----------------- */

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <Cases />
      <Opening />

      <BuildChapter />
      <OptimizeChapter />
      <GrowChapter />
      <MonsterMoment />

      <Footprint />

      <Pricing />

      <FinalCta />

      <ScrollNav />
    </main>
  );
}
