import type { ThreadColor } from "./patterns";

export interface SkillGroup {
  name: string;
  color: ThreadColor;
  skills: string[];
  note?: string;
}

export const skillGroups: SkillGroup[] = [
  {
    name: "AWS & infrastructure",
    color: "rose",
    skills: [
      "EKS",
      "EC2",
      "DynamoDB",
      "ElastiCache",
      "CloudWatch",
      "Amazon MQ",
      "CloudFormation",
      "Kubernetes",
      "Linux",
    ],
  },
  {
    name: "Languages",
    color: "sage",
    skills: ["Java", "Python", "SQL", "JavaScript", "C++", "Bash"],
  },
  {
    name: "Tools",
    color: "cocoa",
    skills: ["Git", "CI/CD", "HTML/CSS", "pandas", "Matplotlib"],
  },
  {
    name: "Research toolkit",
    color: "blush",
    skills: ["MATLAB", "LaTeX", "Molecular dynamics"],
    note: "where I learned to love data",
  },
];
