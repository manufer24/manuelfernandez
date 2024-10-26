<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { variantConfig } from "./config/variant";

useHead({
  htmlAttrs: {
    lang: variantConfig.siteLangCode[variantConfig.siteVariant].code,
  },
  link: [
    {
      rel: "preload",
      href: "/assets/fonts/Poppins-Regular.woff",
      crossorigin: "anonymous",
      as: "font",
    },
    {
      rel: "preload",
      href: "/assets/fonts/Poppins-Medium.woff",
      crossorigin: "anonymous",
      as: "font",
    },
    {
      rel: "preload",
      href: "/assets/fonts/Poppins-SemiBold.woff",
      crossorigin: "anonymous",
      as: "font",
    },
    {
      rel: "preload",
      href: "/assets/fonts/Poppins-Bold.woff",
      crossorigin: "anonymous",
      as: "font",
    },
  ],
  meta: variantConfig.defaultMetaTags(variantConfig.siteVariant),
});
</script>
