<template>
  <FadeInWrapper>
    <div class="relative h-full w-full overflow-hidden bg-base-100">
      <div class="absolute min-h-[80vh] min-w-full">
        <SvgTopography1
          class="opacity-[0.15]"
          style="transform: rotateX(180deg)"
        />
      </div>

      <div class="pb-16">
        <DocsNavbar />
        <main
          class="container relative mx-auto max-w-7xl overflow-hidden px-4 sm:px-6"
        >
          <div class="container mx-auto items-center">
            <slot />

            <Footer />
          </div>
        </main>
      </div>
    </div>
  </FadeInWrapper>
</template>
