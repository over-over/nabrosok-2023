/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // basePath: isProd ? '/nabrosok-2022' : '',
  assetPrefix: '',
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
