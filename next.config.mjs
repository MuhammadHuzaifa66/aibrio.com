/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: '/aibrio.com/',
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true, // 👈 allows build to succeed even with TS errors
  },
};

export default nextConfig;
