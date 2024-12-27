import { variantConfig } from "~/config/variant";

export default defineNuxtPlugin(() => {
  const { public: config } = useRuntimeConfig();
  const lang = variantConfig.siteLang[config.variant as "english" | "spanish"];
  return {
    provide: {
      lang,
    },
  };
});
