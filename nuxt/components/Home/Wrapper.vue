<!--
  Home Wrapper Component
  
  A wrapper component for home page sections with configurable margins.
  Provides consistent spacing and layout structure for home content areas.
  
  @props {Boolean} noMarginTop - Whether to remove top margin
  @props {Boolean} noMarginBottom - Whether to remove bottom margin
-->
<template>
  <ContentContainer :class="containerClass">
    <slot />
  </ContentContainer>
</template>

<script setup lang="ts">
import { computed } from "vue";

// Component props with defaults
const props = defineProps({
  noMarginTop: {
    type: Boolean,
    default: false,
  },
  noMarginBottom: {
    type: Boolean,
    default: false,
  },
});

/**
 * Computed CSS classes based on margin configuration
 */
const containerClass = computed(() => [
  "container",
  "snap-none",
  "items-center",
  {
    "my-10 md:my-12": !props.noMarginTop && !props.noMarginBottom,
    "mt-0 mb-10 md:mb-12": props.noMarginTop && !props.noMarginBottom,
    "mt-10 md:mt-12 mb-0": !props.noMarginTop && props.noMarginBottom,
    "mt-0 mb-0": props.noMarginTop && props.noMarginBottom,
  },
]);
</script>
