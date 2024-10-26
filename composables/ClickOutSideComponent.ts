export const useClickOutSideComponent = (callback: () => void) => {
  return (componentRef: Ref<HTMLElement | null>) => {
    const onClick = (event: Event) => {
      if (!componentRef.value) return;
      if (!componentRef.value.contains(event.target as Node)) {
        callback();
      }
    };
    onMounted(() => {
      document.addEventListener("click", onClick);
    });
    onUnmounted(() => {
      document.removeEventListener("click", onClick);
    });
  };
};
