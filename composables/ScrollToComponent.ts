import { ref, onMounted } from "vue";
import { useWindowScroll } from "@vueuse/core";

export const useScrollToComponent = () => {
  const { y } = useWindowScroll();

  const scrollToBlock = (blockId: string) => {
    const blockRef = ref<HTMLElement | null>(null);

    onMounted(() => {
      blockRef.value = document.querySelector(blockId);
    });

    if (!blockRef.value) return;

    y.value = blockRef.value.getBoundingClientRect().top - 20;
  };

  return scrollToBlock;
};

// an example of how can you use it

/*
<template>
  <div>
    <button @click="scrollToBlock('my-block')">Scroll to block</button>
    <div id="my-block">This is the block</div>
  </div>
</template>

<script>
import { useScrollToComponent } from './useScrollToComponent'

export default {
  setup() {
    const scrollToBlock = useScrollToComponent()

    return {
      scrollToBlock,
    }
  },
}
</script>
*/
