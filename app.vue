<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { variantConfig } from "./config/variant";
import { useRoute } from "vue-router";

useHead({
  htmlAttrs: {
    lang: variantConfig.siteLangCode[variantConfig.siteVariant].code,
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/assets/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/assets/favicon/favicon-16x16.png",
    },
    {
      rel: "shortcut icon",
      type: "image/x-icon",
      href: "/assets/favicon/favicon.ico",
    },
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
    {
      rel: "canonical",
      href: `${variantConfig.siteOrigin}${useRoute().fullPath}`,
    },
  ],
  meta: variantConfig.defaultMetaTags(variantConfig.siteVariant),
});
</script>
