<template>
  <div class="relative w-full md:w-7/12 py-6">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-accent" />
    </div>
    <div class="relative flex justify-start">
      <h1 class="flex items-center pr-6 bg-primary text-3xl md:text-4xl text-neutral font-bold leading-tight text-left">
        <span class="font-mono pr-2 text-2xl md:text-3xl text-secondary">{{ props.num }}</span> {{ props.title }}
      </h1>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  num: String,
  title: String
})
</script>