"use client";

/**
 * The same invoice, entered two ways, at the same moment.
 *
 * The left screen is a person typing: real per-character pacing, a typo that
 * gets backspaced, and a pause after each field while they look back at the
 * paper. The right screen takes the document, reads it and fills every field,
 * one step at a time and slowly enough to follow. Nothing is claimed in words
 * that the two screens do not show side by side, and there are no timers on
 * screen because the gap between them is the whole point.
 *
 * Under prefers-reduced-motion the race is not run at all. Both screens paint
 * their end state, the left one part way through and the right one waiting for
 * approval, which is the same comparison without the movement.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { Caret, DotRow, ScreenShell } from "./ScreenShell";

const FIELDS = [
  { label: "Supplier", value: "NORDIC SUPPLY AB" },
  { label: "Invoice no", value: "INV-48120" },
  { label: "Amount", value: "12,480.00" },
  { label: "Due date", value: "14/11/26" },
];

/** Where the mistyped character goes, and what gets typed by accident. */
const TYPO_AT = 4;
const TYPO_CHAR = "S";

/** How far the left screen has got when the animation is not run at all. */
const REDUCED_LEFT = ["NORDIC SUPPLY AB", "INV-481", "", ""];

/**
 * The right screen walks through four states, one at a time and slowly enough
 * to read. An earlier version ran them together in about a second and a half,
 * which was too much at once to follow: waiting for the document, the document
 * landing, the reading, and the finished entry now each get their own moment
 * and only ever show one status line.
 */
type RightPhase =
  | "idle"
  | "prompt"
  | "uploaded"
  | "reading"
  | "filling"
  | "done";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const rand = (a: number, b: number) => a + Math.random() * (b - a);

export function TypingRace() {
  const [left, setLeft] = useState<string[]>(["", "", "", ""]);
  const [leftField, setLeftField] = useState(0);
  const [rightPhase, setRightPhase] = useState<RightPhase>("idle");
  const [rightShown, setRightShown] = useState(0);
  const [rightDone, setRightDone] = useState(false);
  const [leftDone, setLeftDone] = useState(false);

  const root = useRef<HTMLDivElement>(null);
  // Bumped when the run must stop. Each async loop checks it before every
  // paint, so unmounting ends the run in flight rather than racing it.
  const runId = useRef(0);
  const started = useRef(false);
  // The loop waits on this rather than animating to an empty room.
  const visible = useRef(false);

  const showFinished = useCallback(() => {
    setLeft(REDUCED_LEFT);
    setLeftField(1);
    setRightPhase("done");
    setRightShown(FIELDS.length);
    setRightDone(true);
    setLeftDone(false);
  }, []);

  const play = useCallback(async () => {
    const id = ++runId.current;
    const live = () => runId.current === id;

    /** One pass of the race, from both screens empty to both finished. */
    const pass = async () => {
      setLeft(["", "", "", ""]);
      setLeftField(0);
      setRightPhase("idle");
      setRightShown(0);
      setRightDone(false);
      setLeftDone(false);

      // The person. One character at a time, with a wrong one early on.
      const typist = async () => {
        const out = ["", "", "", ""];
        for (let f = 0; f < FIELDS.length; f++) {
          if (!live()) return;
          setLeftField(f);
          const v = FIELDS[f].value;

          for (let i = 0; i < v.length; i++) {
            if (!live()) return;

            if (f === 0 && i === TYPO_AT) {
              out[f] = v.slice(0, i) + TYPO_CHAR;
              setLeft([...out]);
              await sleep(560); // noticing it
              if (!live()) return;
              out[f] = v.slice(0, i);
              setLeft([...out]); // backspace
              await sleep(260);
              if (!live()) return;
            }

            out[f] = v.slice(0, i + 1);
            setLeft([...out]);
            await sleep(rand(140, 260));
          }
          await sleep(1000); // looking back at the PDF
        }
        if (live()) setLeftDone(true);
      };

      // The other way, one step at a time. The left screen types for the
      // better part of a minute, so there is room to let each step be read.
      const filler = async () => {
        setRightPhase("prompt");
        // Long enough to be read without holding up the rest. A second and a
        // half was gone before anyone had looked across from the screen on the
        // left; four and a half left the screen sitting there.
        await sleep(2500);
        if (!live()) return;

        setRightPhase("uploaded");
        await sleep(1500);
        if (!live()) return;

        setRightPhase("reading");
        await sleep(1700);
        if (!live()) return;

        setRightPhase("filling");
        for (let i = 0; i < FIELDS.length; i++) {
          if (!live()) return;
          setRightShown(i + 1);
          await sleep(420);
        }
        await sleep(400);
        if (!live()) return;
        setRightPhase("done");
        setRightDone(true);
      };

      await Promise.all([typist(), filler()]);
    };

    /*
     * Round again after a pause. The right screen finishes while the left one
     * is still typing, and that moment is the whole argument, so anyone who
     * arrives partway through gets to see it come round rather than finding
     * two finished screens.
     *
     * It idles while the section is off screen rather than animating to an
     * empty room, and picks up when it comes back.
     */
    while (live()) {
      await pass();
      if (!live()) return;
      await sleep(4000);
      while (live() && !visible.current) await sleep(400);
    }
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) {
      showFinished();
      return;
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          visible.current = e.isIntersecting;
          if (e.isIntersecting && !started.current) {
            started.current = true;
            void play();
          }
        }),
      { threshold: 0.3 }
    );
    if (root.current) io.observe(root.current);

    // The ref object, not its value: the cleanup has to reach the current
    // run id at unmount, and reading `.current` here would capture the one
    // from this render instead.
    const runs = runId;
    return () => {
      io.disconnect();
      runs.current++; // stop whatever is mid-flight on unmount
    };
  }, [play, showFinished]);

  return (
    <div ref={root} className="mt-10 md:mt-14">
      <div className="grid gap-6 md:gap-5 lg:gap-6 md:grid-cols-2 md:items-start">
        {/* LEFT - by hand */}
        <div>
          <div className="mb-3 font-head font-bold text-[13px] md:text-[14px] uppercase tracking-[0.12em] text-[var(--sw-orange)]">
            Today
          </div>

          <ScreenShell screenId="AP4010" title="Invoice entry">
            <div className="mt-3 md:mt-4 min-h-[7em] flex flex-col">
              {FIELDS.map((f, i) => (
                <DotRow key={f.label} label={f.label}>
                  <span>
                    {left[i] || " "}
                    {/* The cursor sits in the field being typed, so the eye
                        knows where the person is. */}
                    {!leftDone && i === leftField ? <Caret className="ml-px" /> : null}
                  </span>
                </DotRow>
              ))}
            </div>
            {/* Held empty so both screens are the same height and the race is
                read side by side rather than as two different objects. */}
            <div className="mt-4 md:mt-5 min-h-[1.75em]" aria-hidden />
          </ScreenShell>

          <p className="mt-3 text-[var(--sw-black)]/55 text-[13px] md:text-[14px] leading-snug">
            You or a colleague typing every document by hand
          </p>
        </div>

        {/* RIGHT - read and filled */}
        <div>
          <div className="mb-3 font-head font-bold text-[13px] md:text-[14px] uppercase tracking-[0.12em] text-[var(--sw-blue)]">
            With LegacyBridge
          </div>

          <div className="relative">
            <ScreenShell screenId="AP4010" title="Invoice entry">
              {/* One state at a time. The field rows belong to the finished
                  entry, so each earlier step is a screen carrying a single
                  line rather than a set of empty fields with a caption under
                  them. The box stays four rows tall throughout, so the screen
                  never changes size and stays level with the one beside it. */}
              <div className="mt-3 md:mt-4 min-h-[7em] flex flex-col justify-center">
                {rightPhase === "filling" || rightPhase === "done" ? (
                  <div className="flex flex-col">
                    {FIELDS.map((f, i) => (
                      <DotRow key={f.label} label={f.label}>
                        <span
                          className={
                            "transition-opacity duration-200 " +
                            (i < rightShown ? "opacity-100" : "opacity-0")
                          }
                        >
                          {i < rightShown ? f.value : " "}
                        </span>
                      </DotRow>
                    ))}
                  </div>
                ) : (
                  <div>
                    {rightPhase === "prompt" ? (
                      <div className="flex items-center gap-2">
                        <span className="text-[#7dffb0]">Upload the document</span>
                        <Caret />
                      </div>
                    ) : null}

                    {rightPhase === "uploaded" ? (
                      <span className="text-[#7dffb0]">INV-48120.pdf uploaded</span>
                    ) : null}

                    {rightPhase === "reading" ? (
                      <div className="flex items-center gap-3">
                        <span className="text-[#7dffb0]">Processing...</span>
                        <span className="h-[3px] w-24 md:w-32 bg-[#3bf07a]/20 overflow-hidden rounded-[2px]">
                          <span className="block h-full bg-[#7dffb0] sw-progress-slow" />
                        </span>
                      </div>
                    ) : null}
                  </div>
                )}
              </div>

              {/* Only the finished entry has an approval line under it. */}
              <div className="mt-4 md:mt-5 min-h-[1.75em]">
                {rightPhase === "done" ? (
                  <div className="flex items-center gap-2.5 sw-pulse-line">
                    <span className="text-[#7dffb0]">Waiting for your approval</span>
                    <span className="rounded-[2px] border border-[#7dffb0] px-1.5 text-[#7dffb0] text-[10px] md:text-[11px] leading-[1.6]">
                      Enter
                    </span>
                  </div>
                ) : null}
              </div>
            </ScreenShell>

            {/* The document arriving. It sits over the screen and leaves once
                it has been read. */}
            {rightPhase === "uploaded" || rightPhase === "reading" ? (
              <div
                aria-hidden
                className="pointer-events-none absolute right-3 top-3 md:right-4 md:top-4 rounded-[4px] bg-white px-3 py-2 shadow-lg sw-pdf-in"
              >
                <span className="font-mono text-[10px] md:text-[11px] text-[var(--sw-black)]/80">
                  INV-48120.pdf
                </span>
              </div>
            ) : null}
          </div>

          <p
            className={
              "mt-3 min-h-[1.5em] text-[var(--sw-black)]/55 text-[13px] md:text-[14px] leading-snug transition-opacity duration-500 " +
              (rightDone ? "opacity-100" : "opacity-0")
            }
          >
            Filled in automatically and waiting for your approval
          </p>
        </div>
      </div>

    </div>
  );
}
