import { computed, ref, watch } from "vue";
import { variantConfig } from "../config/variant";

export function useLang() {
  const siteVariant = ref(variantConfig.siteVariant);

  const lang = computed(() => variantConfig.siteLangs[siteVariant.value]);

  watch(siteVariant, (newVariant) => {
    variantConfig.siteVariant = newVariant;
  });

  const switchLang = (variant: "english" | "spanish") => {
    siteVariant.value = variant;
  };

  return {
    lang,
    switchLang,
  };
}

// import { computed } from "vue";
// import { variantConfig } from "../config/variant";

// export function useLang() {
//   const lang = computed(
//     () => variantConfig.siteLangs[variantConfig.siteVariant],
//   );

//   return {
//     lang,
//   };
// }
