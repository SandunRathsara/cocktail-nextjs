const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: false
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects() {
    return [{ source: "/", destination: "/home", permanent: true }]
  }
}

module.exports = withPWA(nextConfig)
