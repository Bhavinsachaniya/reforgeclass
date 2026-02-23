import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  output: 'export', // Enables static export
  images: {
    unoptimized: true, // Required for static export with Next.js Image component
  },
};

export default nextConfig;
