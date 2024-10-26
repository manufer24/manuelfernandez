<template>
  <footer>
    <nav class="social-nav">
      <ul class="social-nav__list">
        <li class="social-nav__item">
          <NuxtLink
            class="social-nav__link social-nav__link--cv"
            to="#"
            target="_blank"
            :title="lang.toolTips.icons.resume.title"
            :alt="lang.toolTips.icons.resume.alt"
          >
            CV
          </NuxtLink>
        </li>
        <li class="social-nav__item">
          <NuxtLink
            class="social-nav__link"
            to="https://github.com/manufer24"
            target="_blank"
            :title="lang.toolTips.icons.github.title"
            :alt="lang.toolTips.icons.github.alt"
          >
            <svg
              width="16"
              height="16"
              class="social-nav__icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </NuxtLink>
        </li>
        <li class="social-nav__item">
          <NuxtLink
            to="https://www.linkedin.com/in/manuelferg24/"
            class="social-nav__link"
            target="_blank"
            :title="lang.toolTips.icons.linkedin.title"
            :alt="lang.toolTips.icons.linkedin.alt"
          >
            <svg
              width="16"
              height="16"
              class="social-nav__icon"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
              ></path>
            </svg>
          </NuxtLink>
        </li>
        <li class="social-nav__item">
          <NuxtLink
            to="mailto:manuelferg14@gmail.com"
            class="social-nav__link"
            target="_blank"
            :title="lang.toolTips.icons.email.title"
            :alt="lang.toolTips.icons.email.alt"
          >
            <svg
              width="16"
              height="16"
              class="social-nav__icon"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6.5 9.5 3 7.5v-6A1.5 1.5 0 0 1 4.5 0h7A1.5 1.5 0 0 1 13 1.5v6l-3.5 2L8 8.75l-1.5.75ZM1.059 3.635 2 3.133v3.753L0 5.713V5.4a2 2 0 0 1 1.059-1.765ZM16 5.713l-2 1.173V3.133l.941.502A2 2 0 0 1 16 5.4v.313Zm0 1.16-5.693 3.337L16 13.372v-6.5Zm-8 3.199 7.941 4.412A2 2 0 0 1 14 16H2a2 2 0 0 1-1.941-1.516L8 10.072Zm-8 3.3 5.693-3.162L0 6.873v6.5Z"
              ></path>
            </svg>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script lang="ts" setup>
const { lang } = useLang();
</script>

<style scoped lang="postcss">
& .social-nav {
  @apply mb-16 flex items-center justify-center py-10 lg:mb-0 lg:py-12;

  &__list {
    @apply flex gap-x-3 lg:gap-x-10;
  }

  &__link {
    @apply flex h-8 w-8 items-center justify-center rounded-full bg-background-light-contrast text-letter dark:bg-background-dark-contrast dark:text-letter-dark lg:h-10 lg:w-10 lg:transition-colors lg:duration-200 lg:ease-in-out lg:hover:bg-link lg:hover:text-background lg:hover:dark:bg-link-dark lg:hover:dark:text-background-dark;

    &--cv {
      @apply font-black;
    }

    &:hover .social-nav__icon {
      @apply lg:fill-background lg:dark:fill-background-dark;
    }
  }

  &__icon {
    @apply block h-4 w-4 fill-letter dark:fill-letter-dark lg:transition-colors lg:duration-300 lg:ease-in-out;
  }
}
</style>
