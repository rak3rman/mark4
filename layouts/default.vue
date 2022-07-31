<template>
  <FadeInWrapper>
    <div class="relative overflow-hidden bg-primary h-full w-full">
      <div class="absolute min-w-full min-h-[80vh]">
        <SvgTopography1 class="opacity-[0.11]" style="transform: rotateX(180deg)"/>
      </div>

      <div class="pb-16">
        <Navbar />
        <main class="relative container overflow-hidden max-w-7xl mx-auto px-4 sm:px-6">
          <div class="container mx-auto items-center">

            <slot />

            <Footer />

          </div>
        </main>
      </div>
    </div>
  </FadeInWrapper>
</template>