/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: '/aibrio.com/',
  images: { unoptimized: true },
};

export default nextConfig;
