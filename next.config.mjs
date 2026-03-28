/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // for static export
  trailingSlash: true,       // ensures correct paths
  assetPrefix: '/aibrio.com/', // 👈 Add your repo name here
  images: { unoptimized: true },
};

export default nextConfig;
