import type { PatternName } from "./patterns";

export interface Hobby {
  name: string;
  blurb: string;
  pattern: PatternName;
}

export const hobbies: Hobby[] = [
  {
    name: "Cross-stitching",
    blurb: "Pixel art, but slower and with more thread.",
    pattern: "strawberry",
  },
  {
    name: "Ballet",
    blurb: "Years of dance. I still point my toes while the build runs.",
    pattern: "bow",
  },
  {
    name: "Fashion",
    blurb: "Colour palettes are my favourite design system.",
    pattern: "dress",
  },
  {
    name: "Film",
    blurb: "Always with captions on (occupational hazard).",
    pattern: "film",
  },
];

// TODO(megan): fill these in with what you're actually up to.
export const currently = [
  { label: "shipping", value: "modernized legacy services" },
  { label: "stitching", value: "a tiny strawberry pattern" },
  { label: "watching", value: "something with good subtitles" },
];
