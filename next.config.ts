import type { NextConfig } from "next"

// Validate env vars at startup/build: fails fast if something is missing.
import "./src/env"

const nextConfig: NextConfig = {
  poweredByHeader: false,
}

export default nextConfig
