import { MessageCircle } from "lucide-react"
import { whatsappUrl } from "@/lib/contact"

type Props = {
  label: string
  message: string
}

/** Floating WhatsApp shortcut for phones/tablets (desktop has the header CTA). */
export function FloatingWhatsapp({ label, message }: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed right-4 bottom-4 z-50 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:ring-4 focus-visible:ring-ring/50 focus-visible:outline-none lg:hidden"
    >
      <MessageCircle className="size-7" />
    </a>
  )
}
