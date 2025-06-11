<template>
  <ContentContainer :class="containerClass">
    <slot />
  </ContentContainer>
</template>

<script setup>
import { computed } from "vue";

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
