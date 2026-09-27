import { notFound } from "next/navigation"

// Any unknown path under /en or /es renders the localized not-found page.
export default function CatchAllPage() {
  notFound()
}
