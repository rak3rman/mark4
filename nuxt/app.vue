<!-- RF Nuxt Header, Rev. 04/17/23 -->

<template>
  <Html
    class="h-full scroll-smooth bg-base-100 tracking-wide"
    lang="en"
    data-theme="dark"
  />

  <!-- Critical resource hints for performance -->
  <Link rel="preconnect" href="https://imagedelivery.net" crossorigin />

  <!-- Preload critical fonts for better performance -->
  <Link
    rel="preload"
    href="/fonts/SF-Pro-Display/SF-Pro-Display-Regular.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />
  <Link
    rel="preload"
    href="/fonts/SF-Pro-Display/SF-Pro-Display-Bold.woff2"
    as="font"
    type="font/woff2"
    crossorigin="anonymous"
  />

  <!-- Optimized favicon with multiple sizes -->
  <FaviconLinks id="cbeec7ce-7b51-4cc2-81bb-e72289777900" />

  <!-- DNS prefetch for external domains -->
  <Link rel="dns-prefetch" href="//imagedelivery.net" />
  <Link rel="dns-prefetch" href="//chickens.rakerman.com" />
  <Link rel="dns-prefetch" href="//vistapower.com" />
  <Link rel="dns-prefetch" href="//spacex.com" />
  <Link rel="dns-prefetch" href="//codeinplace.stanford.edu" />
  <Link rel="dns-prefetch" href="//uic.edu" />
  <Link rel="dns-prefetch" href="//radicalplatforms.org" />

  <!-- PWA theme colors -->
  <Meta name="theme-color" content="#000000" />
  <Meta name="apple-mobile-web-app-capable" content="yes" />
  <Meta
    name="apple-mobile-web-app-status-bar-style"
    content="black-translucent"
  />
  <Meta name="apple-mobile-web-app-title" content="Radison" />

  <!-- Performance hints -->
  <Meta name="format-detection" content="telephone=no" />
  <Meta
    name="viewport"
    content="width=device-width, initial-scale=1, viewport-fit=cover"
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
// PWA update handler
if (process.client) {
  navigator.serviceWorker?.addEventListener("controllerchange", () => {
    window.location.reload();
  });
}
</script>
