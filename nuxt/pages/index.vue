<script lang="ts" setup>
definePageMeta({
  layout: "home",
});

const { data: page } = await useAsyncData("content-index", () => {
  return queryCollection("content").path("/").first();
});

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
