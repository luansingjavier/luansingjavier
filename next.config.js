/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["default", "en-US", "en-GB", "es", "fr", "de"],
    defaultLocale: "default",
    domains: [
      {
        domain: "luansingjavier.info",
        defaultLocale: "default",
      },
      {
        domain: "luansingjavier.info/en-us",
        defaultLocale: "en-US",
      },
      {
        domain: "luansingjavier.info/en-gb",
        defaultLocale: "en-GB",
      },
      {
        domain: "luansingjavier.info/es",
        defaultLocale: "es",
      },
      {
        domain: "luansingjavier.info/fr",
        defaultLocale: "fr",
      },
      {
        domain: "luansingjavier.info/de",
        defaultLocale: "de",
      },
    ],
  },
  images: {
    domains: ["luansingjavier.info"],
  },
};

module.exports = nextConfig;
