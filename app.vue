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

const config = useRuntimeConfig();

const variant = config.public.variant as "english" | "spanish";

useHead({
  htmlAttrs: {
    lang: variantConfig.siteLangCode[variant].code,
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
  meta: variantConfig.metaTags(variant),
});
</script>
