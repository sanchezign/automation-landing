import { env } from "@/env"
import { siteConfig } from "@/config/site"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { absoluteUrl } from "@/lib/seo"

type Props = { lang: Locale; dict: Dictionary }

/** Structured data (schema.org) so search engines understand who offers what. */
export function JsonLd({ lang, dict }: Props) {
  const url = absoluteUrl(`/${lang}`)
  const personId = `${absoluteUrl("/")}#person`

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: siteConfig.name,
        url,
        image: siteConfig.avatarUrl,
        jobTitle: "Full-stack Developer — AI Agents & Automation",
        email: `mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`,
        address: { "@type": "PostalAddress", addressLocality: "Montevideo", addressCountry: "UY" },
        sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
        knowsAbout: ["n8n", "Microsoft Copilot Studio", "AI agents", "Workflow automation"],
      },
      {
        "@type": "ProfessionalService",
        name: dict.meta.title,
        description: dict.meta.description,
        url,
        image: absoluteUrl(`/${lang}/opengraph-image`),
        founder: { "@id": personId },
        areaServed: "Worldwide",
        availableLanguage: ["English", "Spanish"],
        inLanguage: lang,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dict.services.title,
          itemListElement: dict.services.items.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.description,
            },
          })),
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      // Escape "<" so the JSON can never close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
