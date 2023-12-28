<!-- RF Nuxt Header, Rev. 04/17/23 -->

<template>
  <Html class="h-full bg-base-100 tracking-wide scroll-smooth" lang="en" />
  <Link rel="icon" type="png" :href="config.public.meta.favicon" />
  <Body class="h-full bg-base-100" />
  <div class="h-full">
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right,#586CB2 0%,#059669 50%,#CCCCCC 100%)"
    />
    <NuxtPage />
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>