<template>
  <div class="fixed left-0 right-0 top-0 z-10 backdrop-blur-xl">
    <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6">
      <nav
        class="relative flex h-10 items-center justify-center"
        aria-label="Global"
      >
        <div class="absolute inset-y-0 left-0 flex flex-1 items-center">
          <div class="flex w-auto items-center justify-between">
            <NuxtLink to="/" class="fade-in-nav">
              <span class="sr-only">RAkerman</span>
              <NuxtImg
                class="h-5 w-auto sm:h-6"
                src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm"
                alt="RAkerman Logo"
              />
            </NuxtLink>
          </div>
        </div>
        <div
          class="fade-in-nav absolute inset-y-0 right-0 flex items-center justify-end"
          :style="{ 'transition-delay': 100 + 'ms' }"
        >
          <span class="inline-flex rounded-md shadow">
            <NuxtLink
              to="/"
              class="inline-flex items-center rounded-md border border-secondary px-4 py-2 font-mono text-sm text-secondary hover:bg-primary-focus"
            >
              Back Home
            </NuxtLink>
          </span>
        </div>
      </nav>
    </div>
  </div>
</template>
