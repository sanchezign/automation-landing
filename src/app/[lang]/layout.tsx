import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { notFound } from "next/navigation"
import { FloatingWhatsapp } from "@/components/layout/floating-whatsapp"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { siteConfig } from "@/config/site"
import { hasLocale, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { languageAlternates, ogLocales, siteUrl } from "@/lib/seo"
import "../globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

type Props = Readonly<{
  children: React.ReactNode
  params: Promise<{ lang: string }>
}>

// Only /en and /es exist; everything is prerendered at build time.
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Omit<Props, "children">): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const { meta } = getDictionary(lang)

  return {
    metadataBase: siteUrl,
    title: meta.title,
    description: meta.description,
    authors: [{ name: siteConfig.name, url: siteConfig.links.github }],
    creator: siteConfig.name,
    alternates: {
      canonical: `/${lang}`,
      languages: languageAlternates(),
    },
    // og:image / twitter:image come from ./opengraph-image.tsx
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: siteConfig.name,
      title: meta.title,
      description: meta.description,
      locale: ogLocales[lang],
      alternateLocale: locales.filter((l) => l !== lang).map((l) => ogLocales[l]),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
    robots: { index: true, follow: true },
  }
}

export default async function RootLayout({ children, params }: Props) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = getDictionary(lang)

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="flex min-h-svh flex-col">
              <SiteHeader lang={lang} dict={dict} />
              <main className="flex-1">{children}</main>
              <SiteFooter dict={dict} />
            </div>
            <FloatingWhatsapp
              label={dict.contact.floatingLabel}
              message={dict.contact.whatsappMessage}
            />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
