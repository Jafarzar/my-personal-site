/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  reactStrictMode: true, // was there by default
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: "@svgr/webpack",
    });

    // Important: return the modified config
    return config;
  },
  images: {
    domains: ["www.datocms-assets.com"],
  },
};
