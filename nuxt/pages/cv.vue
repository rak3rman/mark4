<script lang="ts" setup>
definePageMeta({
  layout: false,
});

// Only show this page in development mode
if (process.env.NODE_ENV !== "development") {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
  });
}

// Set SEO meta
useSeoMeta({
  robots: {
    index: false,
    follow: false,
  },
});
</script>

<template>
  <Html data-theme="summarize" />
  <SummarizeCV />
</template>
