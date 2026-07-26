import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Import .svg files as React components (via SVGR). Turbopack is the
  // default bundler (`next dev`/`next build`); the webpack rule below is
  // kept as a fallback for anyone running with `--webpack`.
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
