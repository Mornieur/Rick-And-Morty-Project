/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['rickandmortyapi.com'],
  },
};

module.exports = nextConfig;
