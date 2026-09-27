import { Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { sectionIds } from "@/config/site"
import type { Dictionary } from "@/i18n/dictionaries/en"
import { mailtoUrl, whatsappUrl } from "@/lib/contact"

export function Contact({ copy }: { copy: Dictionary["contact"] }) {
  return (
    <section id={sectionIds.contact} className="px-4 py-20 sm:px-6 md:py-28">
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-brand to-brand-2 p-px">
        <div className="rounded-[calc(1.5rem-1px)] bg-card px-6 py-14 text-center sm:px-12">
          <p className="text-sm font-semibold tracking-wider text-primary uppercase">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">
            {copy.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">{copy.subtitle}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={whatsappUrl(copy.whatsappMessage)} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> {copy.whatsapp}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={mailtoUrl(copy.emailSubject)}>
                <Mail /> {copy.email}
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">{copy.responseTime}</p>
        </div>
      </div>
    </section>
  )
}
