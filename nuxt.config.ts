import { variantConfig } from "./config/variant";

const LANG = variantConfig.siteLang[variantConfig.siteVariant];

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  pages: true,
  devtools: { enabled: false },
  css: ["~/assets/css/global.pcss"],
  modules: ["@nuxtjs/color-mode", "@nuxt/image"],
  colorMode: {
    preference: "system",
    classSuffix: "",
  },
  postcss: {
    plugins: {
      "postcss-import": {},
      "tailwindcss/nesting": {},
      tailwindcss: {},
      autoprefixer: {},
      ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
    },
  },
  hooks: {
    "pages:extend"(pages) {
      pages.push({
        path: `/${LANG.routes.projects}/:slug`,
        file: "~/pages/projects/[slug].vue",
      });
    },
  },
  runtimeConfig: {
    public: {
      origin: variantConfig.siteOrigin,
      variant: variantConfig.siteVariant as "english" | "spanish",
      lang: variantConfig.siteLangCode[variantConfig.siteVariant],
      siteName: variantConfig.siteName,
      host: variantConfig.siteFinalHost,
      mode: process.env.NODE_ENV,
      env: process.env.NODE_ENV,
      processEnvironment: variantConfig.processEnvironment,
    },
  },
});
