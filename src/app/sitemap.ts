import type { MetadataRoute } from "next"
import { locales } from "@/i18n/config"
import { absoluteUrl, languageAlternates } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = Object.fromEntries(
    Object.entries(languageAlternates()).map(([lang, path]) => [lang, absoluteUrl(path)]),
  )

  return locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages: alternates },
  }))
}
