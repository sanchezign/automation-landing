import { ImageResponse } from "next/og"
import { siteConfig } from "@/config/site"

// Brand favicon ("IS" on the indigo→cyan gradient), generated at build time.
export const size = { width: 64, height: 64 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        background: "linear-gradient(135deg, #5b5bf0, #22b8d4)",
        color: "white",
        fontSize: 30,
        fontWeight: 700,
      }}
    >
      {siteConfig.shortName}
    </div>,
    size,
  )
}
