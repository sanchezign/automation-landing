import { env } from "@/env"

/** wa.me link, optionally with a prefilled message. */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${env.NEXT_PUBLIC_WHATSAPP_NUMBER}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

/** mailto: link, optionally with a prefilled subject. */
export function mailtoUrl(subject?: string): string {
  const base = `mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`
  return subject ? `${base}?subject=${encodeURIComponent(subject)}` : base
}
