<template>
  <div class="tag" :class="{ 'tag--light': lightBackground }">
    {{ label }}
  </div>
</template>

<script lang="ts" setup>
defineProps({
  label: {
    type: String,
    default: "Tag",
  },
  lightBackground: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped lang="postcss">
.tag {
  @apply flex items-center justify-center rounded-full bg-background-dark px-3 py-1 text-xs font-medium text-background;

  &--light {
    @apply bg-background-light-contrast text-letter dark:bg-background-dark-contrast dark:text-letter-dark;
  }
}
</style>
