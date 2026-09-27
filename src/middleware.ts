import { NextResponse, type NextRequest } from "next/server"
import { defaultLocale, hasLocale, LOCALE_COOKIE } from "@/i18n/config"

/**
 * Redirects locale-less paths to a locale: the one saved by the EN/ES toggle,
 * otherwise English (primary language of the site).
 */
export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const firstSegment = pathname.split("/")[1] ?? ""

  if (hasLocale(firstSegment)) return NextResponse.next()

  const saved = request.cookies.get(LOCALE_COOKIE)?.value ?? ""
  const locale = hasLocale(saved) ? saved : defaultLocale
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`
  url.search = search
  return NextResponse.redirect(url)
}

export const config = {
  // Skip Next internals, API routes, generated icons and any file with an extension
  // (favicon, robots.txt, sitemap.xml, images…)
  matcher: ["/((?!_next|api|icon|apple-icon|.*\\..*).*)"],
}
