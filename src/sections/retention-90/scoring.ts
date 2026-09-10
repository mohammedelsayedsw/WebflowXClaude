/* Scoring model. Ported 1:1 from the standalone funnel; do not tune without Marko. */

export type Answers = Record<string, number> & Record<`${string}_label`, string>;

export function computeScore(a: Record<string, number>): number {
  let s = 0;
  s += Math.min(30, Math.round((a.share / 0.3) * 30));
  s += Math.min(20, Math.round((a.flows / 10) * 20));
  s += [0, 7, 10][a.cart > 2 ? 2 : a.cart > 0 ? 1 : 0];
  s += a.sms === 3 ? 10 : a.sms === 1 ? 4 : 0;
  s += a.repl === 3 ? 10 : a.repl === 1 ? 3 : 6;
  s += a.disc === 3 ? 10 : a.disc === 1 ? 5 : 0;
  s += a.who >= 2 ? 10 : a.who === 1 ? 5 : 0;
  return Math.max(4, Math.min(96, s));
}

export function computeLeak(a: Record<string, number>): number {
  const rev = a.rev;
  const shareGap = Math.max(0, 0.3 - a.share);
  let leak = rev * shareGap * 0.6;
  const flowQuality = a.flows >= 7 && a.cart >= 2 ? 0.15 : 0.45;
  if (leak < rev * 0.02) leak = rev * a.share * flowQuality * 0.35;
  return Math.round(leak / 100) * 100;
}

export function fmt(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

export function fmtK(n: number): string {
  if (n >= 1000000) return "$" + (n / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1000) return "$" + (n / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  return "$" + Math.round(n);
}

export function cleanDomain(v: string): string {
  return v.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split(/[/?#]/)[0];
}

export function validDomain(v: string): boolean {
  return /^[a-z0-9][a-z0-9.-]*\.[a-z]{2,}$/.test(v);
}

/* tier: 0 = fine, 1 = worth addressing, 2 = urgent */
export function gapTiers(a: Record<string, number>) {
  const idx = (v: number, x: number, y: number) => (v === x ? 0 : v === y ? 1 : 2);
  return {
    ci: idx(a.cart, 3, 2),
    si: idx(a.sms, 3, 1),
    ri: idx(a.repl, 3, 1),
    di: idx(a.disc, 3, 1),
  };
}
