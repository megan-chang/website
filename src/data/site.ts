export const site = {
  name: "Megan Chang",
  title: "Megan Chang · Backend Software Engineer",
  description:
    "Megan Chang is a backend software engineer in Toronto building live captioning, translation, and voice dubbing products.",
  location: "Toronto, ON",
  email: "megan.chang14@gmail.com",
  resume: "/Megan_Chang_Resume.pdf",
  links: {
    github: "https://github.com/megan-chang",
    linkedin: "https://www.linkedin.com/in/megan-chang-131240230/",
  },
} as const;

/** Lines typed out by the hero's closed-caption bar. Bracketed lines read like sound cues. */
export const captions: string[] = [
  "Hi! I'm Megan, a backend software engineer in Toronto.",
  "I build and run live captioning, translation, and voice dubbing at AI-Media.",
  "Keeping live captions running for customers around the world.",
  "[keyboard clacking intensifies]",
  "Fun fact: before I wrote the caption software, I WAS the captions.",
  "[upbeat crafting music]",
];

export const nav = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#research", label: "research" },
  { href: "#contact", label: "contact" },
] as const;
