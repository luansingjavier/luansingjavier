export const i18n = {
  defaultLocale: "en-US",
  locales: ["en-US", "en-GB", "es", "fr", "de"],
} as const;

export type Locale = (typeof i18n)["locales"][number];
