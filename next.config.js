/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
});

const nextConfigWithPWA = withPWA({
  reactStrictMode: true,
});

module.exports = nextConfigWithPWA;
