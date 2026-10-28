/**
 * Cross-stitch patterns, drawn as text grids. Each character is one stitch:
 *
 *   R rose     G sage     B cocoa      Y sand     P blush
 *   H hair     S skin     K ink          E eyes (dark in both themes)     .  empty
 *
 * A lowercase letter is a stitch that's "planned but not stitched yet": it renders faintly,
 * like the printed grid on a half-finished pattern.
 */

export type ThreadColor = "rose" | "sage" | "cocoa" | "sand" | "blush";

export const threadVar: Record<string, string> = {
  R: "var(--thread-rose)",
  G: "var(--thread-sage)",
  B: "var(--thread-cocoa)",
  Y: "var(--thread-sand)",
  P: "var(--thread-blush)",
  H: "var(--thread-hair)",
  S: "var(--thread-skin)",
  K: "var(--color-ink)",
  E: "#2b211b",
};

// prettier-ignore
export const patterns = {
  // Placeholder avatar until there's a real photo to stitch from.
  avatar: [
    "...HHHHHH...",
    "..HHHHHHHH..",
    ".HHHHHHHHHH.",
    ".HHSSSSSSHH.",
    "HHSSSSSSSSHH",
    "HHSESSSSESHH",
    "HHSSSSSSSSHH",
    "HHPSSEESSPHH",
    "HH.SSSSSS.HH",
    "HH..SSSS..HH",
    "...RRRRRR...",
    "..RRRRRRRR..",
  ],
  monogram: [
    "R.....R",
    "RR...RR",
    "R.R.R.R",
    "R..R..R",
    "R.....R",
  ],
  heart: [
    ".RR...RR.",
    "RRRR.RRRR",
    "RRRRRRRRR",
    "RRRRRRRRR",
    ".RRRRRRR.",
    "..RRRRR..",
    "...RRR...",
    "....R....",
  ],
  captions: [
    ".KKKKKKKK.",
    "K........K",
    "K.BB..BB.K",
    "K.B...B..K",
    "K.BB..BB.K",
    "K........K",
    ".KKKKKKKK.",
    "..KK......",
  ],
  check: [
    "........",
    ".......G",
    "......GG",
    ".....GG.",
    "G...GG..",
    "GG.GG...",
    ".GGG....",
    "..G.....",
  ],
  sprout: [
    "GG....GG",
    "GGG..GGG",
    ".GGG.GG.",
    "...GG...",
    "...G....",
    "...G....",
    ".BBBBBB.",
    "..BBBB..",
  ],
  bell: [
    "...RR...",
    "..RRRR..",
    ".RRRRRR.",
    ".RRRRRR.",
    ".RRRRRR.",
    "RRRRRRRR",
    "...KK...",
    "........",
  ],
  strawberry: [
    "...GG...",
    ".GGGGGG.",
    "RRRRRRRR",
    "RYRRRYRR",
    "RRRYRRRR",
    ".RYRRRY.",
    "..RRRR..",
    "...RR...",
  ],
  dress: [
    "..R...R..",
    "..RR.RR..",
    "...RRR...",
    "..RRRRR..",
    "...GGG...",
    "..RRRRR..",
    ".RRRRRRR.",
    "RRRRRRRRR",
  ],
  film: [
    "K.K.K.K.K",
    "KKKKKKKKK",
    "KBBBKYYYK",
    "KBBBKYYYK",
    "KBBBKYYYK",
    "KKKKKKKKK",
    "K.K.K.K.K",
  ],
  // A laptop that's only partly stitched: the side project still in progress.
  wip: [
    ".KKKKKKKkkk.",
    ".KBBBBBbbbk.",
    ".KBGGBBbbbk.",
    ".KBBbbbbbbk.",
    ".Kbbbbbbbbk.",
    ".kkkkkkkkkk.",
    "kkkkkkkkkkkk",
  ],
} satisfies Record<string, string[]>;

export type PatternName = keyof typeof patterns;
