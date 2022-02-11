/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  devIndicators: {
    autoPrerender: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
