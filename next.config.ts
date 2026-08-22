import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },

  // Canonical domain redirect: non-www → www
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "nrkcompany.com" }],
        destination: "https://www.nrkcompany.com/:path*",
        permanent: true, // 308 / 301 – signals canonical URL to Google
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "nrkconstruction.com" }],
        destination: "https://www.nrkcompany.com/:path*",
        permanent: true,
      },
    ];
  },

  // HTTP security headers – improves Google's trust/safety signals
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

