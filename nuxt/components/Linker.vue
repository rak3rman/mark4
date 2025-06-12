<!--
  Linker Component
  
  A styled link component with animated underline effect.
  Features smooth hover transitions and consistent styling across the application.
  
  @props {String} href - The URL or route to link to
-->
<template>
  <NuxtLink
    :to="props.href"
    class="group inline transition duration-300 hover:text-secondary"
  >
    <slot />
    <!-- Animated underline effect -->
    <span
      class="-mt-0.5 mb-1 block h-[1.2px] max-w-0 bg-secondary opacity-70 transition-all delay-75 duration-500 group-hover:max-w-full"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
// Component props with validation
const props = defineProps({
  href: {
    type: String,
    required: true,
    validator: (value: string) => value.trim().length > 0,
  },
});
</script>
