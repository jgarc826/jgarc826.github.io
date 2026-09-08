import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build the site as plain static files (out/) so GitHub Pages can serve it.
  output: "export",
};

export default nextConfig;
