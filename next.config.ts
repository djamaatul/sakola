import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.material-tailwind.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.blob.vercel-storage.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
