/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["default", "en-US", "en-GB", "es", "fr", "de"],
    defaultLocale: "default",
    localeDetection: true,
    domains: [
      {
        domain: "luansingjavier.info",
        defaultLocale: "default",
      },
    ],
  },
  images: {
    domains: ["luansingjavier.info"],
  },
};

module.exports = nextConfig;
