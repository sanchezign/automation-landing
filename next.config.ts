import type { NextConfig } from "next"

// Validate env vars at startup/build: fails fast if something is missing.
import "./src/env"

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // Profile photo served from GitHub
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com", pathname: "/u/**" },
    ],
  },
}

export default nextConfig
