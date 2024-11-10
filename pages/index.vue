<template>
  <div>
    <section class="main-container">
      <article>
        <h1 class="main-container__title">
          <NuxtImg
            class="title-image"
            src="/assets/webp/avatar-img.webp"
            :alt="lang.toolTips.profile.alt"
            :title="lang.toolTips.profile.title"
          />
          <span class="title-text">{{ lang.greeting.hello }} 👋🏻</span>
        </h1>

        <p>
          {{ lang.greeting.me }}
          <b class="bold-color-text">{{ lang.greeting.name }}</b
          >{{ lang.greeting.comma }}
          {{ lang.greeting.job }}
        </p>

        <p>
          {{ lang.greeting.currently }}
          <b class="bold-color-text">{{ lang.greeting.company }}</b
          >{{ lang.greeting.comma }}
          {{ lang.greeting.where }}
        </p>

        <h2 class="section-title">{{ lang.expertise.title }}</h2>

        <p>
          {{ lang.expertise.description }}
        </p>

        <ul class="main-container__list">
          <li v-for="(item, index) in lang.expertise.list" :key="index">
            <b>{{ item.title }}</b>
            {{ item.description }}
          </li>
        </ul>

        <h2 class="section-title section-title--link">
          <NuxtLink
            :to="`/assets/pdf/${variantConfig.siteVariant}/cv-manuel-fernandez.pdf`"
            target="_blank"
            download
            :title="lang.toolTips.icons.resume.title"
            :alt="lang.toolTips.icons.resume.alt"
            >{{ lang.expertise.downloadCV }}</NuxtLink
          >
        </h2>
      </article>

      <hr />

      <article class="main-container__article">
        <h2 class="main-container__subtitle">{{ lang.projects.title }}</h2>

        <section>
          <ul>
            <li v-for="info in projectsCardData" :key="info.id">
              <CardsProjectcard :info="info" />
            </li>
          </ul>
        </section>
      </article>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { variantConfig } from "~/config/variant";
import { API_DATA } from "~/server/api-data";

const {
  public: { origin },
} = useRuntimeConfig();
const Route = useRoute();
// const { $lang } = useNuxtApp(); // @TODO: check how to use this
const { lang } = useLang();

const projectsCardData = API_DATA.projectsCardData;

useHead({
  title: lang.value.seo.homepage.title,
  meta: [
    {
      name: "title",
      content: lang.value.seo.homepage.title,
    },
    {
      name: "description",
      content: lang.value.seo.homepage.description,
    },
    {
      hid: "og:title",
      property: "og:title",
      content: lang.value.seo.homepage.title,
    },
    {
      hid: "og:description",
      property: "og:description",
      content: lang.value.seo.homepage.description,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: origin + Route.path,
    },
    {
      hid: "twitter:title",
      property: "twitter:title",
      content: lang.value.seo.homepage.title,
    },
    {
      hid: "twitter:description",
      property: "twitter:description",
      content: lang.value.seo.homepage.description,
    },
    {
      hid: "twitter:url",
      property: "twitter:url",
      content: origin + Route.path,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: origin + Route.path,
    },
  ],
  // link: [
  //   {
  //     rel: "canonical",
  //     href: `${variantConfig.siteOrigin}${useRoute().fullPath}`,
  //   },
  // ],
});
</script>

<style scoped lang="postcss">
.main-container {
  @apply container pt-5 md:px-10 lg:max-w-[960px] lg:px-5;

  &__title {
    @apply my-6 flex items-center justify-start gap-x-3 lg:my-10;

    & .title-text {
      @apply text-4xl font-bold text-letter dark:text-letter-dark lg:text-6xl;
    }

    & .title-image {
      @apply block h-[70px] w-[70px] rounded-full bg-background-light-contrast object-cover dark:bg-background-dark-contrast;
    }
  }

  &__subtitle {
    @apply my-6 text-end text-3xl font-bold text-letter dark:text-letter-dark lg:mb-10 lg:text-[56px];
  }

  & .section-title {
    @apply my-6 block text-2xl font-bold text-letter dark:text-letter-dark lg:my-10 lg:text-3xl;

    &--link {
      @apply block text-link dark:text-link-dark lg:hover:underline;
    }
  }

  &__list {
    @apply mb-6 list-disc space-y-4 pl-5 text-lg text-letter dark:text-letter-dark lg:mb-8 lg:text-xl;
  }

  & .bold-color-text {
    @apply text-link dark:text-link-dark;
  }

  &__article {
    & .projects-list {
      @apply space-y-1;
    }
  }
}
</style>
