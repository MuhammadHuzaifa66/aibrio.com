// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }

// export default nextConfig


//---------------------------------
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',

//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   images: {
//     unoptimized: true,
//   },

//   trailingSlash: true,
// };

// export default nextConfig;
//------------------------------
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',

//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   images: {
//     unoptimized: true,
//   },

//   trailingSlash: true,

//   assetPrefix: './', // 👈 THIS FIXES STYLING
// };

// export default nextConfig;

//------------------------------
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

