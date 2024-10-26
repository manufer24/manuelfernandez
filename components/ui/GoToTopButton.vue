<template>
  <button
    v-show="showButton"
    class="button"
    aria-label="Subir"
    @click="scrollTop"
  >
    <svg class="button__icon" width="24" height="24" viewBox="0 0 24 24">
      <path
        d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"
      ></path>
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);
const listener = ref<null | (() => void)>(null);

onMounted(() => {
  listener.value = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    showButton.value = scrollTop / (scrollHeight - clientHeight) > 0.3;
  };
  document.addEventListener("scroll", listener.value);
});

onUnmounted(() => {
  document.removeEventListener("scroll", listener.value as EventListener);
});

const scrollTop = () => {
  document.documentElement.style.scrollBehavior = "smooth";
  window.scroll(0, 1);
  document.documentElement.style.scrollBehavior = "unset";
};
</script>

<style lang="postcss">
.button {
  @apply fixed bottom-[70px] right-5 flex h-9 w-9 items-center justify-center rounded-full bg-link transition-opacity duration-300 dark:bg-link-dark lg:bottom-2 lg:h-11 lg:w-11;

  &__icon {
    @apply block h-full w-full rotate-180 fill-letter-dark object-contain dark:fill-letter;
  }
}
</style>
