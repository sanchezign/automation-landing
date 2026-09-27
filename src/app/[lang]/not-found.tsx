"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { defaultLocale, hasLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

export default function NotFound() {
  const params = useParams<{ lang?: string }>()
  const lang = params.lang && hasLocale(params.lang) ? params.lang : defaultLocale
  const { notFound } = getDictionary(lang)

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-32 text-center">
      <p className="text-gradient text-6xl font-bold">404</p>
      <h1 className="text-2xl font-semibold">{notFound.title}</h1>
      <p className="text-muted-foreground">{notFound.description}</p>
      <Button asChild>
        <Link href={`/${lang}`}>{notFound.back}</Link>
      </Button>
    </section>
  )
}
