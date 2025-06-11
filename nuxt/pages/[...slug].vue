<script lang="ts" setup>
import { queryCollection, useRoute } from "#imports";

definePageMeta({
  layout: "default",
});

const route = useRoute();

const { data: page } = await useAsyncData(`content-${route.path}`, async () => {
  try {
    // Try to fetch the content using the route path directly
    const content = await queryCollection("content").path(route.path).first();
    return content;
  } catch (error) {
    console.error("Content fetch error:", error);
    return null;
  }
});

// Handle 404 if page not found
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}

// Set SEO meta
useSeoMeta(page.value?.seo || {});

// Handle OG Image
if (page.value?.ogImage) {
  defineOgImage(page.value.ogImage);
}
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>
    <h1>Page not found</h1>
  </div>
</template>
