import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { sectionIds } from "@/config/site"
import { hasLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

type Props = { params: Promise<{ lang: string }> }

// Temporary hero — the full landing sections are built in milestone 3.
export default async function HomePage({ params }: Props) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = getDictionary(lang)

  return (
    <section className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-24 sm:px-6 md:py-32">
      <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
        <span className="text-gradient">{dict.hero.title}</span>
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">{dict.hero.subtitle}</p>
      <Button asChild size="lg">
        <a href={`#${sectionIds.contact}`}>{dict.nav.cta}</a>
      </Button>
    </section>
  )
}
