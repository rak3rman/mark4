<template>
  <div class="relative overflow-hidden h-full w-full">
    <div class="absolute min-w-full min-h-[80vh]">
      <SvgTopography1 class="opacity-[0.11]" style="transform: rotateX(180deg)"/>
    </div>

    <Body class="bg-primary" />
    <div class="pb-16">
      <Navbar />
      <main class="relative container overflow-hidden max-w-7xl mx-auto px-4 sm:px-6">
        <div class="container mx-auto items-center">

          <ContentDoc />

          <Footer />

        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const nuxtApp = useNuxtApp()

nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 300)
})
</script>
