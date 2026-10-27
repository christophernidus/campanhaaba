import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  // Mantém os links do site antigo funcionando.
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/files-upload/:file*", destination: "/files/:file*", permanent: true },
    ];
  },
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
