<template>
  <div class="fixed top-0 left-0 right-0 py-4 backdrop-blur-xl z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <nav class="relative flex items-center h-10 justify-center" aria-label="Global">
        <div class="flex items-center flex-1 absolute inset-y-0 left-0">
          <div class="flex items-center justify-between w-auto">
            <a href="/">
              <span class="sr-only">RAkerman</span>
              <img class="h-5 w-auto sm:h-6" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm" alt="RAkerman Logo" />
            </a>
          </div>
        </div>
        <div class="absolute flex items-center justify-end inset-y-0 right-0">
          <span class="inline-flex rounded-md shadow">
            <a href="/" class="inline-flex items-center px-4 py-2 border border-secondary text-sm font-mono rounded-md text-secondary hover:bg-primary-focus"> Back Home </a>
          </span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  nav: Array
})
</script>