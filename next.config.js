/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'staging.3w.ucorreos.com',
      '3w.ucorreos.com',
      'staging.3w.ucorreos.com/*'
    ],
  }
}

module.exports = nextConfig
