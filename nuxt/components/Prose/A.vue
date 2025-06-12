<!--
  Prose A Component
  
  A styled anchor/link component for prose content.
  Features consistent underline styling with secondary color accent.
  
  @props {String} href - The URL or route to link to
  @props {String} target - Optional target attribute for link behavior
-->
<template>
  <NuxtLink
    class="underline decoration-secondary decoration-[1.5px] underline-offset-2"
    :href="href"
    :target="target"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
// Component props with validation
defineProps({
  href: {
    type: String,
    required: true,
    validator: (value: string) => value.trim().length > 0,
  },
  target: {
    type: String,
    default: undefined,
    validator: (value: string | undefined) => {
      if (!value) return true;
      return ["_blank", "_self", "_parent", "_top"].includes(value);
    },
  },
});
</script>
