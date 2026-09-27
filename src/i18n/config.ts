export const locales = ["en", "es"] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

/** Cookie that remembers the language picked with the EN/ES toggle. */
export const LOCALE_COOKIE = "NEXT_LOCALE"

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}

/** Replaces (or adds) the locale segment of a pathname: /en/foo → /es/foo */
export function switchLocalePath(pathname: string, target: Locale): string {
  const segments = pathname.split("/")
  if (hasLocale(segments[1] ?? "")) {
    segments[1] = target
    return segments.join("/") || `/${target}`
  }
  return `/${target}${pathname === "/" ? "" : pathname}`
}
