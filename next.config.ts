import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ubyttekkpuihhbkogznd.supabase.co",
      },
    ],
  },
};

export default nextConfig;
