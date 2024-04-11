<template>
  <div class="container relative mx-auto flex min-h-screen items-center" id="hero">
    <div class="w-full">
      <h6
        class="fade-in-hero pb-1 pt-1 text-left text-5xl font-bold text-primary md:text-6xl"
        :style="{ 'transition-delay': 200 + 'ms' }"
      >
        <ContentSlot :use="$slots.head" unwrap="p" />
      </h6>
      <h6
        class="fade-in-hero max-w-2xl py-2 text-left text-lg leading-normal text-accent md:text-xl"
        :style="{ 'transition-delay': 300 + 'ms' }"
      >
        <ContentSlot :use="$slots.desc" unwrap="p" />
      </h6>
    </div>
    <div class="absolute bottom-[7%] left-0 right-0 w-full flex justify-center">
      <ChevronDoubleDownIcon class="text-neutral h-7 w-7 md:h-8 md:w-8" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {ChevronDoubleDownIcon} from "@heroicons/vue/24/solid";
</script>