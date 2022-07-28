<template>
  <div class="pt-24 pb-4">
    <div class="relative w-full md:w-5/12"></div>
    <div class="relative w-full md:w-7/12">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-accent" />
      </div>
      <div class="relative flex justify-start">
        <h6 class="flex items-center pr-6 bg-primary text-3xl md:text-4xl text-neutral font-bold leading-tight text-left">
          <span class="font-mono pr-2 text-2xl md:text-3xl text-secondary">{{ props.num }}</span> {{ props.title }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  num: String,
  title: String
})
</script>