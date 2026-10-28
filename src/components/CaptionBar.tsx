import { useEffect, useState } from "react";

interface Props {
  lines: string[];
  speaker?: string;
}

const TYPE_MS = 38;
const HOLD_MS = 2200;

/**
 * A broadcast-style closed-caption strip that types out each line, holds it, then moves on.
 * The animation is aria-hidden; screen readers get every line once as plain text instead.
 */
export default function CaptionBar({ lines, speaker = "MEGAN" }: Props) {
  const [lineIndex, setLineIndex] = useState(0);
  const [chars, setChars] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(query.matches);
    const onChange = (event: MediaQueryListEvent) => setReducedMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const line = lines[lineIndex];
    const timer =
      chars < line.length
        ? setTimeout(() => setChars(chars + 1), TYPE_MS)
        : setTimeout(() => {
            setLineIndex((lineIndex + 1) % lines.length);
            setChars(0);
          }, HOLD_MS);
    return () => clearTimeout(timer);
  }, [chars, lineIndex, lines, reducedMotion]);

  const line = lines[lineIndex];
  const isSoundCue = line.startsWith("[");
  const shown = reducedMotion ? lines[0] : line.slice(0, chars);

  return (
    <figure className="caption-bar">
      <figcaption className="caption-badge" aria-hidden="true">
        CC
      </figcaption>
      <p className="caption-text" aria-hidden="true">
        {!isSoundCue && <span className="caption-speaker">&gt;&gt; {speaker}: </span>}
        <span className={isSoundCue ? "caption-cue" : undefined}>{shown}</span>
        <span className="caption-cursor" />
      </p>
      <p className="sr-only">{lines.join(" ")}</p>
    </figure>
  );
}
