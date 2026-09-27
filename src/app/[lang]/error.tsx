"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { defaultLocale, hasLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

type Props = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ reset }: Props) {
  const params = useParams<{ lang?: string }>()
  const lang = params.lang && hasLocale(params.lang) ? params.lang : defaultLocale
  const { error } = getDictionary(lang)

  return (
    <section className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-32 text-center">
      <h1 className="text-2xl font-semibold">{error.title}</h1>
      <p className="text-muted-foreground">{error.description}</p>
      <Button onClick={reset}>{error.retry}</Button>
    </section>
  )
}
