<!-- RF Nuxt Header, Rev. 04/17/23 -->

<template>
  <Html
    class="h-full scroll-smooth bg-base-100 tracking-wide"
    lang="en"
    data-theme="dark"
  />
  <Link
    rel="icon"
    type="png"
    href="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/cbeec7ce-7b51-4cc2-81bb-e72289777900/smn"
  />
  <Body class="h-full bg-base-100" />
  <div class="h-full">
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right,#586CB2 0%,#86868B 50%,#5E5E5E 100%)"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();
</script>
