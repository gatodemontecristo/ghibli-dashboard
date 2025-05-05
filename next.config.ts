import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org", "www.themoviedb.org"],
  },
};

export default nextConfig;
