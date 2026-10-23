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

| Var                         | Description                                |
| --------------------------- | ------------------------------------------ |
| `NEXT_PUBLIC_SITE_URL`      | Canonical site URL (metadata, sitemap, OG) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Email used in `mailto:` links              |

## Scripts

| Script                              | What it does           |
| ----------------------------------- | ---------------------- |
| `pnpm dev`                          | Dev server (Turbopack) |
| `pnpm build`                        | Production build       |
| `pnpm lint`                         | ESLint                 |
| `pnpm typecheck`                    | TypeScript check       |
| `pnpm format` / `pnpm format:check` | Prettier               |

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs on every push to `main` and every PR:
format check → lint → typecheck → build. It uses placeholder env values (the real ones only
live in Vercel and `.env.local`).

## Deploy (Vercel)

1. Push the repo to GitHub (private is fine).
2. In Vercel: **Add New → Project → Import** the repo. Framework preset: Next.js (auto-detected).
   No root directory or build command changes needed.
3. In **Settings → Environment Variables** (Production + Preview) add:
   - `NEXT_PUBLIC_SITE_URL` — the production URL, e.g. `https://your-project.vercel.app`
     (later: your custom domain)
   - `NEXT_PUBLIC_CONTACT_EMAIL`
   - `ENABLE_EXPERIMENTAL_COREPACK` = `1` — makes Vercel use the pnpm version pinned in
     `package.json` (`packageManager`), which the lockfile requires.
4. Deploy. Node.js version comes from `engines.node` (24.x).

After changing `NEXT_PUBLIC_*` vars, redeploy: they are inlined at build time.

### Custom domain (later)

Add it in **Settings → Domains**, then update `NEXT_PUBLIC_SITE_URL` and redeploy so canonical
URLs, sitemap, robots and OG images point to the new domain.
