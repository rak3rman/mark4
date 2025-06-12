<!--
  PillOutlineLarge Button Component
  
  A large pill-shaped button with outline styling and hover effects.
  Features smooth transitions and active state scaling.
  
  @props {String} class - Optional custom CSS classes to override default styling
-->
<template>
  <div
    class="flex items-center rounded-xl border-[1.5px] px-[20px] py-[7px] transition-all duration-200 ease-out active:scale-95"
    :class="buttonClasses"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Component props
const props = defineProps({
  class: {
    type: String,
    default: "",
  },
});

/**
 * Computed CSS classes for the button
 * Uses custom classes if provided, otherwise defaults to outline styling
 */
const buttonClasses = computed(() => {
  return (
    props.class ||
    "border-neutral text-accent hover:border-primary hover:text-primary"
  );
});
</script>

<style scoped>
/* Enhanced transition effects for smooth interactions */
div {
  transition:
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 200ms ease-out,
    color 200ms ease-out;
}
</style>
