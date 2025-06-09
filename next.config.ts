import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/school',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  assetPrefix: '/school/',
};

export default nextConfig;

