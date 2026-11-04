import type { PatternName } from "./patterns";

export interface Highlight {
  title: string;
  body: string;
  pattern: PatternName;
  stack: string[];
}

export const highlights: Highlight[] = [
  {
    title: "Live captions at scale",
    body: "The backend behind AI-Media's captioning, translation, and dubbing products, used around the world.",
    pattern: "captions",
    stack: ["Java", "EKS", "DynamoDB", "Amazon MQ"],
  },
  {
    title: "A test suite from zero",
    body: "Designed and built the first automated test suite for the API products, so releases ship with confidence.",
    pattern: "check",
    stack: ["API tests", "CI/CD"],
  },
  {
    title: "Taming legacy code",
    body: "Modernizing services written by engineers who've since moved on, without slowing the release train.",
    pattern: "sprout",
    stack: ["Refactoring", "Code review"],
  },
  {
    title: "On-call, minus the panic",
    body: "Production incident response for systems people rely on live. Calm under pressure has been practised on air.",
    pattern: "bell",
    stack: ["CloudWatch", "ElastiCache", "Runbooks"],
  },
];
