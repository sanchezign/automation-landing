"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Icons swap via CSS so server and client markup match (no hydration flash) */}
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  )
}
