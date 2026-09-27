/** Static, non-secret site data (no env vars here — those live in src/env.ts). */
export const siteConfig = {
  name: "Ignacio Sánchez",
  shortName: "IS",
  location: "Montevideo, Uruguay",
  avatarUrl: "https://avatars.githubusercontent.com/u/242884727?v=4",
  links: {
    github: "https://github.com/sanchezign",
    linkedin: "https://www.linkedin.com/in/ignacio-s%C3%A1nchez-greppi-30128b3a6/",
  },
} as const

/** In-page anchors used by the header nav (sections are built in milestone 3). */
export const sectionIds = {
  services: "services",
  process: "process",
  caseStudy: "case-study",
  packages: "packages",
  about: "about",
  faq: "faq",
  contact: "contact",
} as const
