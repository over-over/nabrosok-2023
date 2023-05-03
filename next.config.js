const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: isProd ? '/nabrosok-2023' : '',
  assetPrefix: '',
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
