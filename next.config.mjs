/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['ieyzyrjbancljmqbcmkc.supabase.co'],
  },
  devIndicators: {
    buildActivity: false,
  },
}

export default nextConfig
