import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  transpilePackages: ["lucide-react"], // add this
};

export default nextConfig;
