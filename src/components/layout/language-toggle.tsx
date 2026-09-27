"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { LOCALE_COOKIE, switchLocalePath, type Locale } from "@/i18n/config"

type Props = {
  lang: Locale
  label: string
}

/** EN ⇄ ES switch. Keeps the current path and section (#hash) and remembers the choice. */
export function LanguageToggle({ lang, label }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const target: Locale = lang === "en" ? "es" : "en"

  function handleClick() {
    document.cookie = `${LOCALE_COOKIE}=${target}; path=/; max-age=31536000; samesite=lax`
    router.push(`${switchLocalePath(pathname, target)}${window.location.hash}`)
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleClick}
      aria-label={label}
      title={label}
      className="font-semibold"
    >
      <span className="text-foreground">{lang.toUpperCase()}</span>
      <span className="text-muted-foreground" aria-hidden>
        /
      </span>
      <span className="text-muted-foreground">{target.toUpperCase()}</span>
    </Button>
  )
}
