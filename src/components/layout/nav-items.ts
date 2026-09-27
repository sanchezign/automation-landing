import { sectionIds } from "@/config/site"
import type { Dictionary } from "@/i18n/dictionaries/en"

export type NavItem = { href: string; label: string }

export function getNavItems(nav: Dictionary["nav"]): NavItem[] {
  return [
    { href: `#${sectionIds.services}`, label: nav.services },
    { href: `#${sectionIds.process}`, label: nav.process },
    { href: `#${sectionIds.caseStudy}`, label: nav.caseStudy },
    { href: `#${sectionIds.packages}`, label: nav.packages },
    { href: `#${sectionIds.about}`, label: nav.about },
    { href: `#${sectionIds.faq}`, label: nav.faq },
  ]
}
