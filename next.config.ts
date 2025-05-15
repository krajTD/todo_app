import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '', // Keep empty if using root domain, or '/repo-name' if GitHub Pages subpath
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  reactStrictMode: true,
}

export default nextConfig