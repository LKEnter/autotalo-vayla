// Demo deploys (MORFOOS_DEMO=1): admin is not shipped; skip auth-secret guard during production builds.
if (process.env.MORFOOS_DEMO === "1" && !process.env.MORFOOS_AUTH_SECRET?.trim()) {
  process.env.MORFOOS_AUTH_SECRET = "demo-mode-build-placeholder";
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ["@morfoos/core", "@morfoos/morfoos-os"],
  images: {
    qualities: [70, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@morfoos/core"],
  },
};

export default nextConfig;
