<template>
  <NuxtLink :to="`/${$lang.routes.projects}/${info.slug}`" class="project-card">
    <figure class="project-card__info">
      <NuxtImg
        placeholder
        loading="lazy"
        class="project-card__info-image"
        :src="info.image.src"
        :alt="info.image.alt"
        :title="info.image.alt"
      />

      <figcaption class="project-card__info-content">
        <span class="content-title">
          {{ info.title }}
          <small>({{ info.date }})</small>
        </span>
        <small class="content-description">{{ info.description }}</small>
      </figcaption>
    </figure>
  </NuxtLink>
</template>

<script lang="ts" setup>
const { $lang } = useNuxtApp();

defineProps({
  info: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="postcss">
.project-card {
  @apply flex border-b border-background-light-contrast py-4 dark:border-background-dark-contrast lg:items-center lg:px-4 lg:transition-colors lg:duration-200 lg:ease-in-out lg:hover:bg-background-light-contrast lg:dark:hover:bg-background-dark-contrast;

  &__info {
    @apply flex items-center gap-x-4 lg:gap-x-6;

    &-image {
      @apply block h-16 w-16 flex-shrink-0 rounded-full object-cover lg:h-24 lg:w-24;
    }

    &-content {
      @apply flex flex-col;

      & .content-title {
        @apply mb-1 text-base font-semibold text-letter dark:text-letter-dark lg:text-lg;

        & small {
          @apply font-normal;
        }
      }

      & .content-description {
        @apply text-sm text-letter dark:text-letter-dark lg:text-base;
      }
    }
  }
}
</style>
<!-- <template>
  <article class="project-card">
    <NuxtImg
      class="project-card__image"
      :src="info.image.src"
      width="150px"
      height="150px"
      :alt="info.alt"
      :title="info.title"
    />

    <section class="project-card__info">
      <h3 class="project-card__info-title">
        {{ info.title }} <small>({{ info.date }})</small>
      </h3>
      <p class="project-card__info-description">{{ info.description }}</p>
    </section>

    <NuxtLink :to="`/projects/${info.slug}`" class="project-card__button">
      read more
    </NuxtLink>
  </article>
</template>

<script lang="ts" setup>
defineProps({
  info: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="postcss">
.project-card {
  @apply flex flex-col gap-3 rounded-lg bg-background-light-contrast transition-colors duration-300 ease-in-out lg:flex-row lg:items-center lg:rounded-none lg:border-b lg:border-background-light-contrast lg:bg-transparent lg:p-4 lg:hover:bg-background-light-contrast lg:dark:border-background-dark-contrast lg:dark:hover:bg-background-dark-contrast;

  &__info {
    @apply flex flex-col px-4;

    &-title {
      @apply mb-2 text-lg font-bold text-letter dark:text-letter-dark lg:text-xl;

      & small {
        @apply font-normal;
      }
    }

    &-description {
      @apply mb-0 text-base;
    }
  }
  &__image {
    @apply block h-[250px] w-full flex-shrink-0 self-center rounded-t-lg border border-background-light-contrast object-contain dark:border-background-dark-contrast lg:h-[150px] lg:w-[150px] lg:rounded-none;
  }

  &__button {
    @apply mx-4 mb-4 w-fit rounded-lg bg-link px-6 py-4 text-center text-sm font-medium text-white dark:bg-link-dark dark:text-letter lg:flex-shrink-0;
  }
}
</style> -->
<!-- <template>
  <article class="project-card">
    <section class="project-card__info">
      <div>
        <h2 class="info-title">{{ info.title }}</h2>
        <div class="info-date-wrapper">
          <span class="info-date">{{ info.job }}</span>

          <span class="info-date">{{ info.date }}</span>
        </div>
      </div>

      <div class="info-description-wrapper">
        <p class="info-description">
          {{ info.description }}
        </p>

        <div class="info-technologies">
          <span class="info-technologies__title">Technologies Used:</span>
          <ul class="info-technologies__list">
            <li v-for="(item, index) in info.technologies" :key="index">
              <UiTags :label="item" />
            </li>
          </ul>
        </div>
      </div>

      <NuxtLink :to="`/projects/${info.slug}`" class="info-button">
        Read more
        <img
          class="info-button__icon"
          src="/public/assets/svg/icons/chevron-light.svg"
          alt="icono"
        />
      </NuxtLink>
    </section>
    <picture class="project-card__picture">
      <NuxtImg
        class="project-card__picture-image"
        :src="info.image.srcMobile"
        :alt="info.image.alt"
        :title="info.image.title"
        :srcSet="`${info.image.srcMobile} 320w, ${info.image.srcDesktop} 800w`"
      />
    </picture>
  </article>
</template>

<script lang="ts" setup>
defineProps({
  info: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="postcss">
.project-card {
  @apply flex flex-col gap-4 rounded-xl bg-background-light-contrast p-3 dark:bg-background-dark-contrast md:flex-row md:p-9;

  &__info {
    @apply flex flex-col justify-between gap-y-4;

    & .info-title {
      @apply mb-1 text-2xl font-bold text-letter dark:text-letter-dark lg:text-4xl;
    }

    & .info-date-wrapper {
      @apply flex flex-col;

      & .info-date {
        @apply text-sm text-letter dark:text-letter-dark;
      }
    }

    & .info-description-wrapper {
      @apply flex flex-col gap-y-4;

      & .info-description {
        @apply mb-0 text-base text-letter dark:text-letter-dark lg:text-lg;
      }
    }

    & .info-technologies {
      @apply mb-0 text-sm font-medium text-letter dark:text-letter-dark;

      &__title {
        @apply text-sm font-medium text-letter dark:text-letter-dark;
      }

      &__list {
        @apply mt-2 flex flex-wrap gap-1;
      }
    }

    & .info-button {
      @apply mt-5 flex w-fit items-center gap-x-2 rounded-lg bg-letter px-6 py-4 text-sm text-background transition-colors duration-300 ease-in-out;

      &__icon {
        @apply ml-auto block h-5 w-5 -rotate-90 transition-transform duration-300 ease-in-out;
      }
    }

    & .info-button:hover .info-button__icon {
      @apply lg:translate-x-2;
    }
  }

  &__picture {
    @apply h-full w-full flex-shrink-0 rounded-xl md:h-[400px] md:w-[400px];

    &-image {
      @apply h-full w-full rounded-xl object-contain;

      &--mobile {
        @apply block lg:hidden;
      }

      &--desktop {
        @apply hidden lg:block;
      }
    }
  }
}
</style> -->
