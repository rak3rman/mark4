<!-- RF Nuxt Header, Rev. 04/17/23 -->

<template>
  <Html
    class="h-full scroll-smooth bg-base-100 tracking-wide"
    lang="en"
    data-theme="dark"
  />

  <Meta charset="utf-8" />

  <Link rel="preconnect" href="https://imagedelivery.net" crossorigin />
  <Link rel="dns-prefetch" href="//imagedelivery.net" />

  <FaviconLinks id="cbeec7ce-7b51-4cc2-81bb-e72289777900" />

  <Link rel="dns-prefetch" href="//chickens.rakerman.com" />
  <Link rel="dns-prefetch" href="//vistapower.com" />
  <Link rel="dns-prefetch" href="//spacex.com" />
  <Link rel="dns-prefetch" href="//codeinplace.stanford.edu" />
  <Link rel="dns-prefetch" href="//uic.edu" />
  <Link rel="dns-prefetch" href="//radicalplatforms.org" />

  <Meta name="theme-color" content="#08090a" />
  <Meta name="apple-mobile-web-app-capable" content="yes" />
  <Meta
    name="apple-mobile-web-app-status-bar-style"
    content="black-translucent"
  />
  <Meta name="apple-mobile-web-app-title" content="Radison" />

  <Meta name="format-detection" content="telephone=no" />
  <Meta
    name="viewport"
    content="width=device-width, initial-scale=1, viewport-fit=cover"
  />

  <Body class="h-full bg-base-100" />
  <div class="h-full">
    <NuxtLoadingIndicator
      color="repeating-linear-gradient(to right,#586CB2 0%,#86868B 50%,#5E5E5E 100%)"
      :height="1.5"
    />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// PWA update handler
if (process.client) {
  navigator.serviceWorker?.addEventListener("controllerchange", () => {
    window.location.reload();
  });
}
</script>
