<template>
  <header class="header">
    <nav class="header__nav">
      <nuxt-link
        to="/"
        class="header__logo"
        :title="lang.toolTips.homepage.title"
      >
        <img
          class="header__logo-img"
          width="24px"
          height="24px"
          src="/assets/png/logo/logo-portfolio.png"
          :alt="lang.toolTips.homepage.alt"
        />

        <span class="header__logo-text">Manuel Fernández</span>
      </nuxt-link>

      <!-- <div class="flex items-center gap-x-3">
        <HeaderDropdown class="hidden lg:block" />
        <HeaderDropdown dropdownVariant="up" class="block lg:hidden" />
        <HeaderThemeSwitcher />
      </div> -->
      <HeaderThemeSwitcher />
    </nav>
  </header>
</template>

<script lang="ts" setup>
const { lang } = useLang();
</script>

<style scoped lang="postcss">
.header {
  @apply fixed bottom-0 left-0 z-50 h-16 w-full border-t border-background-light-contrast bg-background dark:border-background-dark-contrast dark:bg-background-dark md:px-10 lg:sticky lg:top-0 lg:border-b lg:border-t-0 lg:px-5;

  &__nav {
    @apply container flex h-full w-full items-center justify-between lg:max-w-[960px];
  }

  &__logo {
    @apply flex items-center gap-x-3;

    &-img {
      @apply block h-6 w-6;
    }

    &-text {
      @apply hidden text-lg font-semibold text-letter dark:text-letter-dark md:block;
    }
  }
}
</style>
