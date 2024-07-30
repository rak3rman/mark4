<template>
  <div class="pb-4 pt-[5rem]" :class="fade ? 'fade-in' : ''">
    <div class="relative w-full md:w-5/12"></div>
    <div class="relative w-full md:w-7/12">
      <div class="absolute inset-0 flex items-center" v-if="!hide_line">
        <div class="w-full border-t border-accent" />
      </div>
      <div class="relative flex justify-start">
        <h6
          class="flex items-center pr-6 text-left text-3xl font-bold leading-tight text-primary md:text-4xl"
          :class="hide_line ? '' : 'bg-base-100'"
        >
          <span class="pr-2 font-mono text-2xl text-secondary md:text-3xl">{{
            props.num
          }}</span>
          {{ props.title }}
        </h6>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  num: String,
  title: String,
  fade: Boolean,
  hide_line: Boolean,
});
</script>
