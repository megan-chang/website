/** Conventional-commit style tags shown in front of each release-note bullet. */
export type ChangeType = "feat" | "ops" | "test" | "lead" | "refactor" | "fix" | "chore";

export interface Change {
  type: ChangeType;
  text: string;
}

export interface Release {
  version: string;
  role: string;
  org: string;
  location?: string;
  start: string;
  end: string;
  /** One-line summary shown before the notes are expanded. */
  summary: string;
  changes: Change[];
  tag?: "latest" | "beta";
}

export const releases: Release[] = [
  {
    version: "v3.0.0",
    role: "Software Engineer",
    org: "AI-Media",
    location: "Toronto, ON",
    start: "Jan 2025",
    end: "Present",
    tag: "latest",
    summary: "Primary backend engineer for Lexi, Translate, and Voice Cloud.",
    changes: [
      {
        type: "feat",
        text: "Own the captioning, translation, and dubbing backends, from design doc to prod.",
      },
      {
        type: "feat",
        text: "Java services on AWS EKS, backed by DynamoDB, ElastiCache, and Amazon MQ.",
      },
      { type: "lead", text: "Scope the work, plan releases, and keep leadership in the loop." },
      { type: "ops", text: "On call when production needs me." },
      { type: "refactor", text: "Modernizing legacy services without slowing the release train." },
    ],
  },
  {
    version: "v2.0.0",
    role: "Junior Software Engineer",
    org: "AI-Media",
    start: "Oct 2023",
    end: "Jan 2025",
    summary: "Shipped Lexi features end to end, backend to frontend.",
    changes: [
      {
        type: "feat",
        text: "Built features across the Java/AWS backend and the eegcloud.tv site and API.",
      },
      { type: "ops", text: "Deployed and supported my own features in production." },
    ],
  },
  {
    version: "v1.0.0",
    role: "Software Engineer Intern",
    org: "AI-Media",
    start: "Jul 2023",
    end: "Oct 2023",
    summary: "Wrote the API products' first automated test suite.",
    changes: [
      { type: "test", text: "Took API testing from zero to automated." },
      { type: "fix", text: "First bug fixes and small features on the backend." },
    ],
  },
  {
    version: "v0.9.0",
    role: "Respeaker",
    org: "AI-Media",
    start: "Sept 2022",
    end: "Jul 2023",
    tag: "beta",
    summary: "Before I built the captions, I was the captions.",
    changes: [
      {
        type: "feat",
        text: "Voiced real-time captions for classes using Dragon speech recognition.",
      },
      { type: "ops", text: "Fixed technical issues live, mid-session. Great on-call training." },
    ],
  },
];
