"use client";

function HeroBg() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 620px at 18% 22%, #2a3380 0%, transparent 55%)," +
            "radial-gradient(800px 580px at 85% 82%, #070a1e 0%, transparent 52%)," +
            "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-70 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(620px 900px at 28% 62%, rgba(7, 10, 30, 0.85), transparent 60%)," +
            "radial-gradient(540px 720px at 72% 28%, rgba(63, 74, 175, 0.22), transparent 60%)",
          filter: "blur(50px)",
        }}
      />
    </>
  );
}

/**
 * Visual: a stylized ChatGPT conversation showing an MCP App in action.
 * Concrete demo of what users get — not a brand spec card.
 */
function ChatMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-[4px] backdrop-blur"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.04) 100%), rgba(16,19,44,0.55)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.12)",
      }}
    >
      <div className="px-5 py-3 border-b border-white/10 flex items-center gap-2 text-[12px] text-white/55">
        <span className="h-2 w-2 rounded-full bg-[var(--sw-mint)]"></span>
        <span>chat.openai.com</span>
        <span className="ml-auto text-white/35">connected to your-store-app</span>
      </div>

      <div className="p-5 md:p-6 space-y-4">
        <div className="text-[12px] text-white/45 mb-1">You</div>
        <div className="text-white text-[15px] leading-relaxed">
          Find me a waterproof hiking jacket under €200, in stock for next-day delivery.
        </div>

        <div className="border-t border-white/10 pt-4 mt-4">
          <div className="flex items-center gap-2 text-[12px] text-white/45 mb-3">
            <span className="font-head font-semibold text-white">ChatGPT</span>
            <span className="text-white/30">·</span>
            <span>your-store-app · 3 results · all in stock</span>
          </div>

          <div className="space-y-2">
            <div className="rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center justify-between gap-4">
              <div>
                <div className="text-white text-[14px] font-semibold">North Face Resolve 2</div>
                <div className="text-white/50 text-[12px] mt-0.5">M, L in stock · ships next-day</div>
              </div>
              <div className="text-white font-head text-[16px] tabular-nums">€179</div>
            </div>
            <div className="rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center justify-between gap-4">
              <div>
                <div className="text-white text-[14px] font-semibold">Patagonia Torrentshell</div>
                <div className="text-white/50 text-[12px] mt-0.5">S, M, L in stock · ships next-day</div>
              </div>
              <div className="text-white font-head text-[16px] tabular-nums">€189</div>
            </div>
            <div className="rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-3 flex items-center justify-between gap-4">
              <div>
                <div className="text-white text-[14px] font-semibold">Marmot PreCip Eco</div>
                <div className="text-white/50 text-[12px] mt-0.5">M in stock · ships next-day</div>
              </div>
              <div className="text-white font-head text-[16px] tabular-nums">€169</div>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2 text-[12px] text-white/55">
            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-[var(--sw-mint)]"></span>
            <span>Pulled from your live catalog · stock checked at request time · checkout link ready</span>
          </div>
        </div>
      </div>

      <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between text-[11px] text-white/45">
        <span>Tools called: <span className="text-white/75">search_products</span> · <span className="text-white/75">check_stock</span></span>
        <span className="text-white/35">2.1s</span>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative -mt-[60px] md:-mt-[75px] overflow-hidden min-h-screen flex flex-col">
      <HeroBg />

      <div className="flex-1 flex items-center">
        <div className="wrap relative z-10 pt-28 md:pt-36 pb-16 md:pb-24 w-full">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.15fr_1fr] items-start">
            <div>
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8 md:mb-10">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  ChatGPT App development · MCP · OpenAI
                </span>
              </div>

              <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[18ch]">
                ChatGPT Apps for{" "}
                <span style={{ color: "var(--sw-mint)" }}>eCommerce</span>.
              </h1>

              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[58ch] leading-relaxed">
                Build an <span className="font-semibold text-white">MCP-powered ChatGPT App</span> connected to your real catalog, real prices, and real customer data. Customers can search, compare, reorder, request quotes, get support, and complete workflows directly inside ChatGPT.
              </p>
              <p className="mt-4 text-[15px] md:text-[16px] text-white/75 max-w-[58ch] leading-relaxed">
                We design, build, deploy, and prepare your app for OpenAI review – with prebuilt blueprints for Shopify, Adobe Commerce, B2B commerce, and the systems behind them.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--sw-mint)] px-7 py-3.5 font-head font-semibold text-[14px] text-[var(--sw-mint)] hover:bg-[var(--sw-mint)] hover:text-[var(--sw-black)] transition"
                >
                  Get my MCP App plan →
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-white/40 px-7 py-3.5 font-head font-semibold text-[14px] text-white hover:bg-white/10 transition"
                >
                  See package pricing
                </a>
              </div>
            </div>

            <div className="lg:pt-16">
              <ChatMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
