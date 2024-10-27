import { variantConfig } from "./config/variant";

const LANG = variantConfig.siteLangs[variantConfig.siteVariant];

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  pages: true,
  devtools: { enabled: false },
  css: ["~/assets/css/global.pcss"],
  modules: ["@nuxtjs/color-mode", "@nuxt/image"],
  hooks: {
    "pages:extend"(pages) {
      pages.push({
        path: `/${LANG.routes.projects}/:slug`,
        file: "~/pages/projects/[slug].vue",
      });
    },
  },
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
      ...(variantConfig.processEnvironment === "production"
        ? { cssnano: {} }
        : {}),
    },
  },
});
