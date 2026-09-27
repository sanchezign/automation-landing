import type { Locale } from "./config"
import { en } from "./dictionaries/en"
import { es } from "./dictionaries/es"

const dictionaries = { en, es } as const

export function getDictionary(locale: Locale) {
  return dictionaries[locale]
}
