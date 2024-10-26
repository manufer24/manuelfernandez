<template>
  <div
    class="lang-switcher"
    role="combobox"
    ref="dropdownMenu"
    aria-expanded="false"
    aria-haspopup="true"
    id="language-switcher"
  >
    <button
      class="lang-switcher__button"
      aria-haspopup="true"
      aria-label="Language switcher"
      @click="toggleDropdown"
    >
      <span class="lang-switcher__button-title">English</span>
      <img
        class="lang-switcher__button-icon lang-switcher__button-icon--light"
        :class="{ 'rotate-180': isOpenDropdown }"
        src="/public/assets/svg/icons/chevron-dark.svg"
        alt="icono"
      />
      <img
        class="lang-switcher__button-icon lang-switcher__button-icon--dark"
        :class="{ 'rotate-180': isOpenDropdown }"
        src="/public/assets/svg/icons/chevron-light.svg"
        alt="icono"
      />
    </button>
    <ul
      v-show="isOpenDropdown"
      class="lang-switcher__dropdown"
      :class="dropdownVariant"
      aria-label="Language options"
    >
      <li class="lang-switcher__dropdown-item">
        button2
        <!-- <button
          type="button"
          class="lang-switcher__dropdown-option"
          @click="switchLang('english')"
        >
          English
        </button> -->
      </li>
      <li class="lang-switcher__dropdown-item">
        button1
        <!-- <button
          type="button"
          class="lang-switcher__dropdown-option"
          @click="switchLang('spanish')"
        >
          {{ lang.greeting.hello }}
        </button> -->
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, type PropType } from "vue";
import { variantConfig } from "../../config/variant";
import { useClickOutSideComponent } from "../../composables/ClickOutSideComponent";
import { useTranslation } from "../../composables/useTranslation";

defineProps({
  title: {
    type: String,
    default: "dropdown",
  },
  dropdownVariant: {
    type: String as PropType<"down" | "up" | "left" | "right">,
    default: "down",
  },
});

// const { lang, switchLang } = useLang();

const dropdownMenu = ref<HTMLElement | null>(null);
const isOpenDropdown = ref(false);

// const { t, variant } = useTranslation();

// const switchVariant = (newVariant: typeof variantConfig.siteVariant) => {
//   variant.value = newVariant;
// };

const toggleDropdown = () => {
  isOpenDropdown.value = !isOpenDropdown.value;
};

const clickOutSide = useClickOutSideComponent(() => {
  isOpenDropdown.value = false;
});

clickOutSide(dropdownMenu);
</script>

<style scoped lang="postcss">
.lang-switcher {
  @apply relative h-full w-full bg-slate-500 bg-transparent;

  &__button {
    @apply flex w-full items-center gap-2 rounded-lg bg-background-light-contrast px-3 py-2 dark:bg-background-dark-contrast dark:text-background;

    &-icon {
      @apply fill-background-dark transition-transform duration-300 ease-in-out dark:fill-background;

      &--light {
        @apply flex dark:hidden;
      }

      &--dark {
        @apply hidden dark:flex;
      }
    }
  }

  &__dropdown {
    @apply absolute right-0 top-12 w-[200px] rounded-lg bg-background-light-contrast p-2 dark:bg-background-dark-contrast dark:text-background;

    &.up {
      @apply -top-[120px] right-0;
    }

    &-option {
      @apply block w-full cursor-pointer rounded-lg p-3 active:bg-background-dark dark:text-background lg:hover:bg-background lg:hover:dark:bg-background-dark;
    }
  }
}
</style>
<!-- <template>
  <div
    class="lang-switcher"
    role="combobox"
    ref="dropdownMenu"
    aria-expanded="false"
    aria-haspopup="true"
    id="language-switcher"
  >
    <button
      class="lang-switcher__button"
      aria-haspopup="true"
      aria-label="Language switcher"
      @click="toggleDropdown"
    >
      <span class="lang-switcher__button-title">English</span>
      <img
        class="lang-switcher__button-icon lang-switcher__button-icon--light"
        :class="{ 'rotate-180': isOpenDropdown }"
        src="/public/assets/svg/icons/chevron-dark.svg"
        alt="icono"
      />
      <img
        class="lang-switcher__button-icon lang-switcher__button-icon--dark"
        :class="{ 'rotate-180': isOpenDropdown }"
        src="/public/assets/svg/icons/chevron-light.svg"
        alt="icono"
      />
    </button>
    <ul
      v-show="isOpenDropdown"
      class="lang-switcher__dropdown"
      :class="dropdownVariant"
      aria-label="Language options"
    >
      <li class="lang-switcher__dropdown-item">
        <button
          type="button"
          class="lang-switcher__dropdown-option"
          @click="switchVariant('english')"
        >
          English
        </button>
      </li>
      <li class="lang-switcher__dropdown-item">
        <button
          type="button"
          class="lang-switcher__dropdown-option"
          @click="switchVariant('spanish')"
        >
          Español
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, type PropType } from "vue";
import { variantConfig } from "../../config/variant";
import { useClickOutSideComponent } from "../../composables/ClickOutSideComponent";
import { useTranslation } from "../../composables/useTranslation";

defineProps({
  title: {
    type: String,
    default: "dropdown",
  },
  dropdownVariant: {
    type: String as PropType<"down" | "up" | "left" | "right">,
    default: "down",
  },
});

const dropdownMenu = ref<HTMLElement | null>(null);
const isOpenDropdown = ref(false);

const { t, variant } = useTranslation();

const switchVariant = (newVariant: typeof variantConfig.siteVariant) => {
  variant.value = newVariant;
};

const toggleDropdown = () => {
  isOpenDropdown.value = !isOpenDropdown.value;
};

const clickOutSide = useClickOutSideComponent(() => {
  isOpenDropdown.value = false;
});

clickOutSide(dropdownMenu);
</script>

<style scoped lang="postcss">
.lang-switcher {
  @apply relative h-full w-full bg-slate-500 bg-transparent;

  &__button {
    @apply flex w-full items-center gap-2 rounded-lg bg-background-light-contrast px-3 py-2 dark:bg-background-dark-contrast dark:text-background;

    &-icon {
      @apply fill-background-dark transition-transform duration-300 ease-in-out dark:fill-background;

      &--light {
        @apply flex dark:hidden;
      }

      &--dark {
        @apply hidden dark:flex;
      }
    }
  }

  &__dropdown {
    @apply absolute right-0 top-12 w-[200px] rounded-lg bg-background-light-contrast p-2 dark:bg-background-dark-contrast dark:text-background;

    &.up {
      @apply -top-[120px] right-0;
    }

    &-option {
      @apply block w-full cursor-pointer rounded-lg p-3 active:bg-background-dark dark:text-background lg:hover:bg-background lg:hover:dark:bg-background-dark;
    }
  }
}
</style> -->
