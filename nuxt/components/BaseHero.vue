<!--
  BaseHero Component
  
  A foundational hero section with animated scroll indicator.
  Features intersection observer functionality to control scroll arrow visibility.
  
  @props {Number} arrowDelay - Delay in milliseconds for the scroll arrow animation
-->
<template>
  <div class="relative overflow-hidden" id="hero">
    <!-- Main hero content -->
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

// Component props with validation
const props = defineProps({
  arrowDelay: {
    type: Number,
    default: 400,
    validator: (value: number) => value >= 0,
  },
});

// Reactive state
const isMuted = ref<boolean>(false);

// Intersection observer instance
let observer: IntersectionObserver | null = null;

/**
 * Sets up intersection observer to track hero visibility
 * and control scroll arrow opacity
 */
const setupIntersectionObserver = (): void => {
  const heroElement = document.getElementById("hero");
  if (!heroElement) return;

  observer = new IntersectionObserver(
    ([entry]) => {
      isMuted.value = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    },
    { threshold: 0.3 },
  );

  observer.observe(heroElement);
};

// Lifecycle hooks
onMounted(() => {
  setupIntersectionObserver();
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>
