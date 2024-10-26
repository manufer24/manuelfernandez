<template>
  <div v-html="content" :class="['dynamic-content', className]"></div>
</template>

<script lang="ts" setup>
defineProps({
  content: {
    type: [String, Array<String>],
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
});
</script>

<style lang="postcss">
.dynamic-content {
  @apply text-letter dark:text-letter-dark;

  & h2 {
    @apply my-6 text-end text-3xl font-bold text-letter dark:text-letter-dark lg:mb-10 lg:text-[56px];
  }

  & h3 {
    @apply my-6 text-xl font-bold text-letter dark:text-letter-dark lg:my-10 lg:text-2xl;

    & a {
      @apply underline lg:hover:text-link lg:hover:dark:text-link-dark;
    }
  }

  & img {
    @apply block max-h-[400px] w-full object-contain;
  }

  & iframe {
    @apply mb-10 aspect-video rounded-lg;
  }

  & figcaption {
    @apply mt-2 text-sm text-letter dark:text-letter-dark;
  }

  & ul {
    @apply mb-6 list-disc space-y-4 pl-5 text-lg text-letter dark:text-letter-dark lg:mb-8 lg:text-xl;
  }

  & .section-grid-container {
    @apply grid grid-cols-1 gap-4 md:grid-cols-2;
  }
}
</style>
