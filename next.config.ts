import type { NextConfig } from "next";

const maybeLocalStorage = globalThis.localStorage as Storage | undefined;

if (typeof maybeLocalStorage !== 'undefined' && typeof maybeLocalStorage.getItem !== 'function') {
  Object.defineProperty(globalThis, 'localStorage', {
    value: undefined,
    configurable: true,
  });
}

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.bib$/,
      type: 'asset/source',
    });
    return config;
  },
};

export default nextConfig;
