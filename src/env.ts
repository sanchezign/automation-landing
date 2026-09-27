import { z } from "zod"

/**
 * Single entry point for environment variables.
 * NEXT_PUBLIC_* vars must be referenced explicitly (not via spread)
 * so Next.js can inline them into the client bundle.
 */
const schema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url(),
  NEXT_PUBLIC_CONTACT_EMAIL: z.email(),
  // International format, digits only (e.g. 598XXXXXXXX), as required by wa.me links
  NEXT_PUBLIC_WHATSAPP_NUMBER: z
    .string()
    .regex(/^\d{8,15}$/, "Digits only, including country code, no + or spaces"),
})

const parsed = schema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  NEXT_PUBLIC_WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
})

if (!parsed.success) {
  throw new Error(`Invalid environment variables:\n${z.prettifyError(parsed.error)}`)
}

export const env = parsed.data
