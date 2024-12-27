<template>
  <div>
    <section class="project-index" v-if="projectData">
      <div role="complementary" class="project-index__note">
        {{ $lang.warningNote }}
      </div>
      <h1 class="project-index__heading">{{ projectData.title }}</h1>

      <div class="project-index__technologies">
        <span class="technologies-title">{{ $lang.technologiesUsed }}</span>
        <ul class="tecnologies-list">
          <li v-for="(tech, index) in projectData.technologies" :key="index">
            <UiTags :label="tech" :light-background="true" />
          </li>
        </ul>
      </div>

      <UiDynamicContent
        v-if="projectData.content"
        :content="projectData.content"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { API_CONFIG } from "~/server/api-data";
import dynamicRouteGuard from "~/middleware/dynamicRouteGuard";

const { $lang } = useNuxtApp();

const route = useRoute();

const config = useRuntimeConfig();

const currentProject = route.params.slug;

const API_DATA = API_CONFIG[config.public.variant as "english" | "spanish"];

const projectData = API_DATA.projectData.find(
  (project) => project.slug === currentProject,
);

definePageMeta({
  middleware: [dynamicRouteGuard],
});

useHead({
  title: $lang.seo.projects.title,
  meta: [
    {
      name: "description",
      content: $lang.seo.projects.description,
    },
    {
      hid: "og:url",
      property: "og:url",
      content: config.public.origin + route.path,
    },
    {
      hid: "twitter:url",
      property: "twitter:url",
      content: config.public.origin + route.path,
    },
  ],
  link: [
    {
      rel: "canonical",
      href: config.public.origin + route.path,
    },
  ],
});
</script>

<style scoped lang="postcss">
.project-index {
  @apply container pt-5 lg:max-w-[960px];

  &__note {
    @apply rounded-lg border border-letter/20 bg-background-light-contrast p-3 text-[.8em] text-letter/60 dark:border-letter-dark/40 dark:bg-background-dark-contrast dark:text-letter-dark/60;
  }

  &__heading {
    @apply my-6 text-4xl font-bold text-letter dark:text-letter-dark lg:my-10 lg:text-6xl;
  }

  &__technologies {
    @apply mb-6 lg:mb-16;
    & .technologies-title {
      @apply text-sm font-medium text-letter dark:text-letter-dark;
    }

    & .tecnologies-list {
      @apply mt-2 flex flex-wrap gap-1;
    }
  }
}
</style>
