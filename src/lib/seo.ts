import { env } from "@/env"
import { defaultLocale, locales, type Locale } from "@/i18n/config"

export const siteUrl = new URL(env.NEXT_PUBLIC_SITE_URL)

/** Open Graph locale codes per site locale. */
export const ogLocales: Record<Locale, string> = {
  en: "en_US",
  es: "es_LA",
}

/** hreflang map for a locale-relative path: { en: "/en", es: "/es", "x-default": "/en" } */
export function languageAlternates(path = ""): Record<string, string> {
  const entries = locales.map((locale) => [locale, `/${locale}${path}`])
  return { ...Object.fromEntries(entries), "x-default": `/${defaultLocale}${path}` }
}

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString()
}
