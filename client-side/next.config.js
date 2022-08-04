/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["z-p3-scontent.flos1-1.fna.fbcdn.net","platform-lookaside.fbsbx.com"]
  }
}

module.exports = nextConfig
