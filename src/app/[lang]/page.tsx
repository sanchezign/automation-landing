import { notFound } from "next/navigation"
import { About } from "@/features/landing/components/about"
import { CaseStudy } from "@/features/landing/components/case-study"
import { Contact } from "@/features/landing/components/contact"
import { Faq } from "@/features/landing/components/faq"
import { Hero } from "@/features/landing/components/hero"
import { JsonLd } from "@/features/landing/components/json-ld"
import { Packages } from "@/features/landing/components/packages"
import { Process } from "@/features/landing/components/process"
import { Services } from "@/features/landing/components/services"
import { TechStack } from "@/features/landing/components/tech-stack"
import { hasLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

type Props = { params: Promise<{ lang: string }> }

export default async function HomePage({ params }: Props) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = getDictionary(lang)

  return (
    <>
      <JsonLd lang={lang} dict={dict} />
      <Hero dict={dict} />
      <Services copy={dict.services} />
      <Process copy={dict.process} />
      <CaseStudy copy={dict.caseStudy} />
      <TechStack copy={dict.tech} />
      <Packages copy={dict.packages} />
      <About copy={dict.about} />
      <Faq copy={dict.faq} />
      <Contact copy={dict.contact} />
    </>
  )
}
