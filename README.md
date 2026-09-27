# AI Agents & Automation — Landing

Landing page to promote AI agent and automation services (n8n, Microsoft Copilot Studio,
WhatsApp bots, integrations). English primary, Spanish secondary.

**Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui · Zod · pnpm · Vercel

## Requirements

- Node.js 20+
- pnpm

## Setup

```bash
pnpm install
cp .env.example .env.local   # then fill in the values
pnpm dev                     # http://localhost:3000
```

The app validates env vars on startup (`src/env.ts`) and fails fast if any is missing or invalid.

## Environment variables

| Var                           | Description                                                        |
| ----------------------------- | ------------------------------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`        | Canonical site URL (metadata, sitemap, OG)                         |
| `NEXT_PUBLIC_CONTACT_EMAIL`   | Email used in `mailto:` links                                      |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number for `wa.me` links — digits only, with country code |

## Scripts

| Script                              | What it does           |
| ----------------------------------- | ---------------------- |
| `pnpm dev`                          | Dev server (Turbopack) |
| `pnpm build`                        | Production build       |
| `pnpm lint`                         | ESLint                 |
| `pnpm typecheck`                    | TypeScript check       |
| `pnpm format` / `pnpm format:check` | Prettier               |

## Deploy

Vercel. Set the three env vars above in the Vercel project settings.
