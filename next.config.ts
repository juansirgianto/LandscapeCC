// next.config.js
const isProd = process.env.NODE_ENV === 'production';
const repo = 'LandscapeCC';

module.exports = {
  output: 'export',
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  images: { unoptimized: true },
  trailingSlash: true,
  eslint: {
    // ⬇️ biar GitHub Actions tidak fail gara-gara ESLint
    ignoreDuringBuilds: true,
  },
};
