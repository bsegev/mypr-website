/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/en',
      },
    ]
  },
}

module.exports = nextConfig 