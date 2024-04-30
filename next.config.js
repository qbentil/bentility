/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();
const withTM = require('next-transpile-modules')(['react-markdown']);

const nextConfig = removeImports({
  reactStrictMode: true,
  images: {
    domains: ["codersquiz.netlify.app", "img.shields.io"],
  },
});

module.exports = withTM(nextConfig);
