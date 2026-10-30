/* Lead email relay shared by the funnels (Retention, AEO Hotels, AEO Clinics).
   1. Try FormSubmit (the lead email the team and the lead-processing tasks rely on), with a time limit.
   2. Always hand the full lead to the hub (hub.adiligence.com/lead.php): it stores it for the hub
      Submissions panel and, when FormSubmit failed, sends the same email itself.
   Never throws: a lead must never be blocked by an email service (FormSubmit was down from 29 Oct 2026). */

export const LEAD_HUB = "https://hub.adiligence.com/lead.php";
const FORMSUBMIT = "https://formsubmit.co/ajax/9d1b2680c9cd3f7648a04329a9ece4aa";

export type LeadFunnel = "retention" | "aeo-hotels" | "aeo-clinics";
export type RelayResult = { fsOk: boolean; fsKind: string; hub: string };

export async function relayLead(funnel: LeadFunnel, lead: Record<string, string>, timeoutMs = 8000): Promise<RelayResult> {
  let fsOk = false, fsKind = "unknown";
  try {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), timeoutMs);
    const r = await fetch(FORMSUBMIT, {
      method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(lead), signal: ctl.signal,
    });
    clearTimeout(timer);
    const j = (await r.json().catch(() => ({}))) as { success?: string | boolean; message?: string };
    fsOk = r.ok && String(j.success) === "true";
    fsKind = fsOk ? "ok" : `${r.status}: ${String(j.message || "unknown").slice(0, 80)}`;
  } catch (e) {
    fsKind = "network: " + String(e).slice(0, 80);
  }
  const fields: Record<string, string> = {};
  for (const [k, v] of Object.entries(lead)) if (!k.startsWith("_") && k !== "company_website") fields[k] = String(v ?? "");
  let hub = "skip";
  try {
    const r = await fetch(LEAD_HUB, {
      method: "POST", headers: { "Content-Type": "application/json" }, keepalive: true,
      body: JSON.stringify({ funnel, subject: lead._subject || "", fs_ok: fsOk, fields }),
    });
    const j = (await r.json().catch(() => ({}))) as { mailed?: number | null };
    hub = r.ok ? (j.mailed === 1 ? "mailed" : j.mailed === 0 ? "mail-failed" : "stored") : String(r.status);
  } catch (e) {
    hub = "network: " + String(e).slice(0, 60);
  }
  return { fsOk, fsKind, hub };
}
