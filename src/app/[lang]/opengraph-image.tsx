import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"
import { defaultLocale, hasLocale, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { heroStack } from "@/features/landing/data"

// Social preview (Open Graph / X). Generated at build time for /en and /es.
export const alt = `${siteConfig.name} — AI Agents & Automation`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

type Props = { params: Promise<{ lang: string }> }

export default async function OpengraphImage({ params }: Props) {
  const { lang } = await params
  const { hero } = getDictionary(hasLocale(lang) ? lang : defaultLocale)

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "linear-gradient(135deg, #0b1020 0%, #1a1f4d 55%, #0e4a5c 100%)",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 18,
            background: "linear-gradient(135deg, #5b5bf0, #22b8d4)",
            fontSize: 34,
            fontWeight: 700,
          }}
        >
          {siteConfig.shortName}
        </div>
        <div style={{ fontSize: 34, fontWeight: 600 }}>{siteConfig.name}</div>
      </div>

      <div style={{ display: "flex", fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>
        {hero.title}
      </div>

      <div style={{ display: "flex", gap: 16 }}>
        {heroStack.map((tool) => (
          <div
            key={tool}
            style={{
              display: "flex",
              padding: "10px 22px",
              borderRadius: 999,
              border: "2px solid rgba(255,255,255,0.3)",
              fontSize: 26,
            }}
          >
            {tool}
          </div>
        ))}
      </div>
    </div>,
    size,
  )
}
