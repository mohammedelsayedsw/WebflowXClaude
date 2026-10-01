"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Database, FileSpreadsheet, Mail, Warehouse, Users, Webhook, ShieldCheck, KeyRound, History, UserCheck, Plus, Minus } from "lucide-react";
import { OL, ease, SectionHead } from "@/sections/operalayer/ui";

/* Integrations: systems OperaLayer runs on in production, then what else it can read. */
const LIVE = [
  { name: "Microsoft Dynamics NAV", note: "Purchase orders in, goods receipts and invoices out" },
  { name: "Microsoft Business Central", note: "Orders and supplier data for seasonal purchasing" },
  { name: "Magento (Adobe Commerce)", note: "Prices sent to the store through its API" },
];
const ALSO = [
  { icon: Mail, name: "Shared inboxes" },
  { icon: FileSpreadsheet, name: "Spreadsheets and CSV" },
  { icon: Warehouse, name: "Warehouse systems" },
  { icon: Users, name: "CRM" },
  { icon: Database, name: "Databases" },
  { icon: Webhook, name: "Any system with an API" },
];

export function Integrations() {
  return (
    <section id="integrations" className="bg-[#f5f4f8] py-28 md:py-36">
      <div className="wrap">
        <SectionHead
          title="Works with the systems you already run"
          lede="OperaLayer reads from your ERP and writes back to it. Nothing gets migrated, and your team keeps working where it works today."
        />
        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 gap-4">
          {LIVE.map((s, i) => (
            <motion.div
              key={s.name}
              className="rounded-[8px] bg-white p-7 shadow-[0_0_0_1px_rgba(16,19,44,0.07),0_20px_40px_-30px_rgba(16,19,44,0.3)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-2 text-[13px] text-[#16a34a]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" /> In production
              </div>
              <div className="mt-4 font-head text-[var(--sw-black)] text-[22px] leading-tight">{s.name}</div>
              <div className="mt-2 text-[15px] text-[var(--sw-black)]/60 leading-relaxed">{s.note}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-6 gap-4">
          {ALSO.map((s) => (
            <div key={s.name} className="rounded-[8px] bg-white/60 p-5 shadow-[0_0_0_1px_rgba(16,19,44,0.06)]">
              <s.icon className="h-5 w-5 text-[var(--sw-blue)]" />
              <div className="mt-3 text-[15px] text-[var(--sw-black)]/80 leading-snug">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Rollout: four weeks to a live app. */
const WEEKS = [
  { w: "Week 1", t: "Working prototype", b: "You click through the app on your own data and your real workflow." },
  { w: "Weeks 1 to 2", t: "Shaped with your team", b: "The people who will use it review it, and it changes in front of them." },
  { w: "Weeks 2 to 3", t: "Production build", b: "Connected to your ERP, with access rights and an audit trail from day one." },
  { w: "Week 4", t: "Live", b: "Your team is trained, the documents are handed over, and 30 days of support start." },
];

export function Rollout() {
  const ref = useRef<HTMLDivElement>(null);
  const run = useInView(ref, { once: true, amount: 0.4 });
  return (
    <section id="rollout" className="relative py-28 md:py-36 overflow-hidden" style={{ background: "#0e0f1a" }}>
      <div className="wrap" ref={ref}>
        <SectionHead dark title="Live in four weeks, starting with one app" lede="Fixed scope for every app. The second one goes faster, because the connections to your systems are already in place." />
        <div className="mt-16 relative">
          <div className="hidden md:block absolute left-0 right-0 top-[7px] h-[2px] bg-white/10">
            <motion.div
              className="h-full origin-left"
              style={{ background: `linear-gradient(90deg, ${OL.violet}, #4ade80)` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: run ? 1 : 0 }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-4 gap-10 md:gap-8">
            {WEEKS.map((x, i) => (
              <motion.div
                key={x.w}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: run ? 1 : 0, y: run ? 0 : 12 }}
                transition={{ delay: 0.3 + i * 0.5, duration: 0.6, ease }}
              >
                <span className="block h-4 w-4 rounded-full border-2" style={{ borderColor: i === 3 ? "#4ade80" : OL.violet, background: "#0e0f1a" }} />
                <div className="mt-6 text-white/50 text-[14px]">{x.w}</div>
                <div className="mt-2 font-head text-white text-[22px]">{x.t}</div>
                <p className="mt-3 text-white/60 text-[15px] leading-relaxed max-w-[30ch]">{x.b}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Security and ownership */
const TRUST = [
  { icon: KeyRound, t: "Your code, your data", b: "You own what we build. No lock-in and no hidden costs." },
  { icon: UserCheck, t: "People make the calls", b: "AI does the routine checks. Anything unusual waits for a person to approve it." },
  { icon: History, t: "Every decision on record", b: "Who approved what, and when, is kept in an audit trail inside the app." },
  { icon: ShieldCheck, t: "ISO-based processes", b: "Information security, cloud security, and quality management follow ISO-based processes." },
];

export function Trust() {
  return (
    <section id="trust" className="bg-white py-28 md:py-36">
      <div className="wrap">
        <SectionHead title="Built for the systems that run your business" />
        <div className="mt-14 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {TRUST.map((x, i) => (
            <motion.div
              key={x.t}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease, delay: i * 0.08 }}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-[8px] bg-[var(--sw-blue)]/[0.08]">
                <x.icon className="h-5 w-5 text-[var(--sw-blue)]" />
              </span>
              <div className="mt-5 font-head text-[var(--sw-black)] text-[20px]">{x.t}</div>
              <p className="mt-2 text-[15px] text-[var(--sw-black)]/60 leading-relaxed">{x.b}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* FAQ */
const QA = [
  {
    q: "Is OperaLayer a replacement for our ERP?",
    a: "No. It reads from your ERP and writes back to it. The ERP stays your system of record, and OperaLayer takes over the work around it.",
  },
  {
    q: "Which ERPs does it work with?",
    a: "Apps run in production on Microsoft Dynamics NAV, Microsoft Business Central, and Magento (Adobe Commerce). For other systems we look at what they can share through an API, a database, or a file export before we scope the app.",
  },
  {
    q: "How long until the first app is live?",
    a: "Four weeks. You see a working prototype on your own data in the first week, and the scope is fixed before the build starts.",
  },
  {
    q: "Who owns the code and the data?",
    a: "You do. There is no lock-in, and your data stays in your systems.",
  },
  {
    q: "How is AI used with our data?",
    a: "AI reads documents and suggests matches, and a person approves anything unusual. Data goes to an external AI service only when that use is agreed with you in advance and risk assessed.",
  },
  {
    q: "What if our problem is not on the list of apps?",
    a: "Most apps started as one client's problem. We scope yours the same way, and it follows the same four-week plan.",
  },
];

function QAItem({ q, a }: { q: string; a: string }) {
  return (
    <details className="group border-b border-[var(--sw-black)]/10 py-6 [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-start justify-between gap-6 font-head text-[var(--sw-black)] text-[18px] md:text-[20px]">
        <span>{q}</span>
        <Plus className="h-5 w-5 shrink-0 text-[var(--sw-black)]/50 group-open:hidden" />
        <Minus className="h-5 w-5 shrink-0 text-[var(--sw-blue)] hidden group-open:block" />
      </summary>
      <p className="pt-4 pr-10 text-[16px] text-[var(--sw-black)]/65 leading-relaxed max-w-[64ch]">{a}</p>
    </details>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-[#f5f4f8] py-28 md:py-36">
      <div className="wrap grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] gap-12">
        <SectionHead title="Questions teams ask before they start" />
        <div className="border-t border-[var(--sw-black)]/10">
          {QA.map((x) => (
            <QAItem key={x.q} {...x} />
          ))}
        </div>
      </div>
    </section>
  );
}
