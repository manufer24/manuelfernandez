import { variantConfig } from "./config/variant";

const LANG = variantConfig.siteLangs[variantConfig.siteVariant];

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
      variant: process.env.NUXT_ENV_VARIANT,
      // variant: variantConfig.siteVariant as "english" | "spanish",
      siteName: variantConfig.siteName,
      mode: process.env.NODE_ENV,
      lang: variantConfig.siteLangCode[variantConfig.siteVariant].code,
      env: process.env.NODE_ENV,
      processEnvironment: variantConfig.processEnvironment,
    },
  },
});
