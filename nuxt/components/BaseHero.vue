<template>
  <div class="relative overflow-hidden" id="hero">
    <ContentContainer
      class="container flex min-h-[90vh] items-center sm:min-h-screen"
    >
      <slot />
    </ContentContainer>
    <div
      class="fade-in-hero absolute bottom-[7%] left-0 right-0 flex w-full justify-center"
      :style="{ 'transition-delay': arrowDelay + 'ms' }"
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

const props = defineProps({
  arrowDelay: {
    type: Number,
    default: 400,
  },
});

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
