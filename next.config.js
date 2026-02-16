const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "src/styles")],
    prependData: `@import "@styles/variables"; @import "@styles/mixins";`,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
