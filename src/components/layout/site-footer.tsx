import { ExternalLink, Mail, MessageCircle } from "lucide-react"
import { env } from "@/env"
import { siteConfig } from "@/config/site"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { mailtoUrl, whatsappUrl } from "@/lib/contact"

export function SiteFooter({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear()
  const linkClass =
    "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"

  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div className="space-y-2">
          <p className="font-semibold">{siteConfig.name}</p>
          <p className="text-sm text-muted-foreground">{dict.footer.tagline}</p>
          <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">{dict.footer.contact}</p>
          <ul className="space-y-2">
            <li>
              <a
                href={whatsappUrl(dict.contact.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={mailtoUrl(dict.contact.emailSubject)} className={linkClass}>
                <Mail className="size-4" /> {env.NEXT_PUBLIC_CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold">{dict.footer.links}</p>
          <ul className="space-y-2">
            <li>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <ExternalLink className="size-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                <ExternalLink className="size-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground sm:px-6">
          © {year} {siteConfig.name}. {dict.footer.rights}
        </p>
      </div>
    </footer>
  )
}
