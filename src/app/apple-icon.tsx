import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"

// iOS home-screen icon (iOS applies its own rounded mask, so no border radius here).
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #5b5bf0, #22b8d4)",
        color: "white",
        fontSize: 84,
        fontWeight: 700,
      }}
    >
      {siteConfig.shortName}
    </div>,
    size,
  )
}
