/* POST JSON with one retry. Used for the funnels' own server routes (Omnisend save + booking link).
   Why: in the Facebook / Instagram in-app browsers on iPhone the first request sometimes never comes
   back (17 and 24 Oct 2026: two Retention leads emailed but never saved to Omnisend). A second try a
   moment later almost always gets through. Retries only on a network error, a timeout or a 5xx; a 4xx
   is an answer and is returned as is. Never throws: res is null when every try failed.
   The routes are safe to call twice: Omnisend upserts the same contact, tags merge. */

export type RetryResult = { res: Response | null; tries: number };

export async function postWithRetry(
  url: string,
  body: unknown,
  { tries = 2, delayMs = 1500, timeoutMs = 20000, keepalive = false }: { tries?: number; delayMs?: number; timeoutMs?: number; keepalive?: boolean } = {},
): Promise<RetryResult> {
  const json = JSON.stringify(body);
  for (let i = 1; i <= tries; i++) {
    try {
      const ctl = typeof AbortController !== "undefined" ? new AbortController() : null;
      const timer = ctl ? setTimeout(() => ctl.abort(), timeoutMs) : null;
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
        keepalive,
        signal: ctl ? ctl.signal : undefined,
      }).finally(() => { if (timer) clearTimeout(timer); });
      if (res.status < 500 || i === tries) return { res, tries: i };
    } catch {
      if (i === tries) return { res: null, tries: i };
    }
    await new Promise((r) => setTimeout(r, delayMs));
  }
  return { res: null, tries };
}
