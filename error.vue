<template>
  <NuxtLayout>
    <div
      class="error-index"
      v-if="
        error.statusCode === '404' ||
        error.statusCode === 404 ||
        error.statusCode === '500' ||
        error.statusCode === 500
      "
    >
      <h1 class="error-index__title">{{ lang.errorPage.error }}</h1>
      <h2 class="error-index__subtitle">{{ lang.errorPage.title }}</h2>
      <p class="error-index__description">
        {{ lang.errorPage.description }}
      </p>

      <NuxtLink
        to="/"
        class="error-index__button"
        :title="lang.errorPage.backToHome"
      >
        {{ lang.errorPage.backToHome }}
      </NuxtLink>
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
defineProps({
  error: {
    type: Object as PropType<{ statusCode: string | number; message: string }>,
    required: true,
  },
});

const { lang } = useLang();

useHead({
  title: lang.value.seo.error.title,
  meta: [
    {
      name: "description",
      content: lang.value.seo.error.description,
    },
  ],
});
</script>

<style scoped lang="postcss">
.error-index {
  @apply container flex h-screen flex-col items-center gap-y-6 pt-5 md:px-10 lg:max-w-[960px] lg:px-5;

  &__title {
    @apply text-[120px] font-bold text-letter dark:text-letter-dark lg:text-[170px];
  }

  &__subtitle {
    @apply text-2xl font-bold text-letter dark:text-letter-dark lg:text-5xl;
  }

  &__button {
    @apply block w-fit rounded-lg bg-link px-6 py-4 text-center text-sm font-medium text-white dark:bg-link-dark dark:text-letter lg:flex-shrink-0;
  }
}
</style>
