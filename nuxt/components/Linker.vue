<template>
  <NuxtLink
    :to="props.href"
    class="group inline transition duration-300 hover:text-secondary"
  >
    <slot />
    <span
      class="-mt-0.5 mb-1 block h-[1.2px] max-w-0 bg-secondary opacity-70 transition-all delay-75 duration-500 group-hover:max-w-full"
    ></span>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
