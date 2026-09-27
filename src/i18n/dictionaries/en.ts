/**
 * Source of truth for UI copy. `es.ts` must implement the same shape
 * (enforced by the `Dictionary` type), so a missing translation is a type error.
 */
export const en = {
  meta: {
    title: "Ignacio Sánchez — AI Agents & Automation",
    description:
      "I build AI agents and automations with n8n and Microsoft Copilot Studio that save your team hours every week.",
  },
  nav: {
    services: "Services",
    process: "Process",
    caseStudy: "Case study",
    packages: "Packages",
    about: "About",
    faq: "FAQ",
    cta: "Let's talk",
    openMenu: "Open menu",
    menuTitle: "Navigation",
  },
  toggles: {
    language: "Cambiar a español",
    theme: "Toggle dark mode",
  },
  hero: {
    title: "AI agents & automations that save your team hours",
    subtitle:
      "I design, build and deploy intelligent agents and workflows with n8n and Microsoft Copilot Studio.",
  },
  footer: {
    tagline: "AI agents, workflow automation and integrations.",
    contact: "Contact",
    links: "Links",
    rights: "All rights reserved.",
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist or was moved.",
    back: "Back to home",
  },
  error: {
    title: "Something went wrong",
    description: "An unexpected error occurred. Please try again.",
    retry: "Try again",
  },
}

export type Dictionary = typeof en
