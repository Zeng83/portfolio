import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "zk-craft.com",
          },
        ],
        destination: "https://www.zk-craft.com/:path*",
        permanent: true, // 301 redirect
      },
    ];
  },
};

export default nextConfig;
