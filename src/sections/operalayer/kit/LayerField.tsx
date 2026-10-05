"use client";

/**
 * OperaLayer's background: a curtain.
 *
 * Deep blue folds run edge to edge, darkened toward the centre so the copy sits
 * on near-black, with a soft valance at the top and the stage floor fading into
 * ink at the bottom. It does not move. `line={false}` (the form sections) keeps
 * the folds fainter so the form stays the focus.
 */
export function LayerField({ line = true }: { contained?: boolean; plane?: number; density?: number; line?: boolean }) {
  const folds =
    "repeating-linear-gradient(90deg, #0e1336 0px, #1d2566 1.6cqw, #0a0e28 3.4cqw, #141a48 4.6cqw, #0e1336 5.6cqw)";
  const centre = line
    ? "radial-gradient(45% 60% at 50% 45%, rgba(5,7,15,0.92) 0%, rgba(5,7,15,0.6) 55%, rgba(5,7,15,0) 80%)"
    : "radial-gradient(55% 70% at 50% 50%, rgba(5,7,15,0.95) 0%, rgba(5,7,15,0.75) 60%, rgba(5,7,15,0.35) 90%)";
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none" style={{ containerType: "inline-size" }}>
      <div className="absolute inset-0" style={{ background: `${centre}, ${folds}` }} />
      <div className="absolute inset-x-0 top-0 h-[14%]" style={{ background: "linear-gradient(180deg, #0a0e28, rgba(10,14,40,0))" }} />
      <div className="absolute inset-x-0 bottom-0 h-[22%]" style={{ background: "linear-gradient(0deg, #05070f, rgba(5,7,15,0))" }} />
    </div>
  );
}
