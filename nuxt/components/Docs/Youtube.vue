<template>
  <div class="flex justify-center">
    <div class="max-w-4xl flex-1">
      <!-- Responsive video container with 16:9 aspect ratio -->
      <div class="aspect-h-9 aspect-w-16 mb-6 mt-3">
        <slot name="embed" />
      </div>
    </div>
  </div>
</template>
