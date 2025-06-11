<template>
  <div
    class="container relative mx-auto flex min-h-screen items-center"
    id="hero"
  >
    <div class="w-full">
      <h6
        class="fade-in-hero pb-1 pt-1 text-left text-5xl font-bold text-primary md:text-6xl"
        :style="{ 'transition-delay': 200 + 'ms' }"
      >
        <slot name="head" mdc-unwrap="p" />
      </h6>
      <h6
        class="fade-in-hero max-w-2xl py-2 text-left text-lg leading-normal text-accent md:text-xl"
        :style="{ 'transition-delay': 300 + 'ms' }"
      >
        <slot name="desc" mdc-unwrap="p" />
      </h6>
    </div>
    <div
      class="fade-in-hero absolute bottom-[7%] left-0 right-0 flex w-full justify-center"
      :style="{ 'transition-delay': 400 + 'ms' }"
    >
      <ChevronDoubleDownIcon
        :class="[
          'h-7 w-7 transition-opacity duration-500 md:h-8 md:w-8',
          isMuted ? 'opacity-20' : 'opacity-100',
          'text-neutral',
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid";

const isMuted = ref(false);

let observer: IntersectionObserver | null = null;

onMounted(() => {
  const hero = document.getElementById("hero");
  observer = new window.IntersectionObserver(
    ([entry]) => {
      isMuted.value = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    },
    { threshold: 0.3 },
  );
  if (hero) observer.observe(hero);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>
