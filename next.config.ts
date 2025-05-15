import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/todo_app',
  images: {
    unoptimized: true
  },
  assetPrefix: '/todo_app/',
  trailingSlash: true,
  reactStrictMode: true,
}

export default nextConfig