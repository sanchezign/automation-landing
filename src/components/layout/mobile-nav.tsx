"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import type { NavItem } from "./nav-items"

type Props = {
  items: NavItem[]
  cta: NavItem
  openLabel: string
  title: string
}

export function MobileNav({ items, cta, openLabel, title }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden" aria-label={openLabel}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {items.map((item) => (
            <SheetClose asChild key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </a>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Button asChild className="mt-4">
              <a href={cta.href}>{cta.label}</a>
            </Button>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
