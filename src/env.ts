import { z } from "zod"

/**
 * Single entry point for environment variables.
 * NEXT_PUBLIC_* vars must be referenced explicitly (not via spread)
 * so Next.js can inline them into the client bundle.
 */
const schema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url(),
  NEXT_PUBLIC_CONTACT_EMAIL: z.email(),
})

const parsed = schema.safeParse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
})

if (!parsed.success) {
  throw new Error(`Invalid environment variables:\n${z.prettifyError(parsed.error)}`)
}

export const env = parsed.data
