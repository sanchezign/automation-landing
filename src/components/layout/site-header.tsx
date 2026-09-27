import Link from "next/link"
import { Button } from "@/components/ui/button"
import { sectionIds, siteConfig } from "@/config/site"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { LanguageToggle } from "./language-toggle"
import { MobileNav } from "./mobile-nav"
import { getNavItems } from "./nav-items"
import { ThemeToggle } from "./theme-toggle"

type Props = {
  lang: Locale
  dict: Dictionary
}

export function SiteHeader({ lang, dict }: Props) {
  const items = getNavItems(dict.nav)
  const cta = { href: `#${sectionIds.contact}`, label: dict.nav.cta }

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={`/${lang}`} className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-sm font-bold text-white">
            {siteConfig.shortName}
          </span>
          <span className="hidden whitespace-nowrap sm:inline">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <LanguageToggle lang={lang} label={dict.toggles.language} />
          <ThemeToggle label={dict.toggles.theme} />
          <Button asChild size="sm" className="ml-2 hidden lg:inline-flex">
            <a href={cta.href}>{cta.label}</a>
          </Button>
          <MobileNav
            items={items}
            cta={cta}
            openLabel={dict.nav.openMenu}
            title={dict.nav.menuTitle}
          />
        </div>
      </div>
    </header>
  )
}
