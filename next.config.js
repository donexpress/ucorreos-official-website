/** @type {import('next').NextConfig} */
const withImages = require("next-images");
const nextConfig = withImages({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    disableStaticImages: true,
    domains: [
      'localhost:3000',
      'staging.3w.ucorreos.com',
      '3w.ucorreos.com'
    ],
  },
  webpack(config, options) {
    return config;
}
  
})

module.exports = nextConfig
