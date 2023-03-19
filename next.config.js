/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // destination: 'http://192.99.4.151:8081/:path*' // Proxy to Backend
        destination: 'http://192.99.10.41:8081/:path*' // Proxy to Backend
      }
    ]
  }
}

module.exports = nextConfig
