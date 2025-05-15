/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for static export (GitHub Pages)
  output: 'export',
  
  // Optional: Add if deploying to repository subfolder
  // basePath: '/todo-app',
  
  // Optional: Add images config if using Next.js Image optimization
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Optional: Enable React Strict Mode
  reactStrictMode: true,
  
  // Optional: Add trailingSlash for better GitHub Pages compatibility
  trailingSlash: true,
}

export default nextConfig