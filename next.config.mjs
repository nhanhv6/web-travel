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
  output: 'standalone'
}

export default nextConfig
