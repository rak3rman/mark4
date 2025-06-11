<script lang="ts" setup>
definePageMeta({
  layout: "resume",
});

// Only show this page in development mode
if (process.env.NODE_ENV !== "development") {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}

const { data: page } = await useAsyncData("content-resume", () => {
  return queryCollection("content").path("/resume").first();
});

// Set SEO meta
useSeoMeta(page.value?.seo || {});
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>
    <h1>Page not found</h1>
  </div>
</template>
