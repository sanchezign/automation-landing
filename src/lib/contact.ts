import { env } from "@/env"

/** mailto: link, optionally with a prefilled subject. */
export function mailtoUrl(subject?: string): string {
  const base = `mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base
}
