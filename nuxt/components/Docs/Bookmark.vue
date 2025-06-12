<!--
  Docs Bookmark Component
  
  A bookmark-style link component for documentation with icons and descriptions.
  Features presentation or link icons and responsive layout with hover effects.
  
  @props {String} link - The URL to link to
  @props {Boolean} presentation - Whether to show a presentation icon instead of link icon
-->
<template>
  <NuxtLink
    :to="props.link"
    target="_blank"
    class="my-3 block items-center rounded-lg bg-base-200 p-4 shadow-md sm:flex"
  >
    <!-- Icon section -->
    <div
      class="mb-1.5 mr-4 mt-0.5 h-auto w-8 flex-none text-secondary sm:my-0 sm:ml-1 sm:w-9"
    >
      <PresentationChartLineIcon v-if="props.presentation" />
      <LinkIcon v-else />
    </div>

    <!-- Content section -->
    <div class="text-lg font-medium leading-6 tracking-normal text-primary">
      <!-- Title slot -->
      <slot name="title" mdc-unwrap="p" />

      <!-- Description slot -->
      <div class="text-sm text-accent">
        <slot name="desc" mdc-unwrap="p" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { LinkIcon, PresentationChartLineIcon } from "@heroicons/vue/24/outline";

// Component props with validation
const props = defineProps({
  link: {
    type: String,
    required: true,
    validator: (value: string) => value.trim().length > 0,
  },
  presentation: {
    type: Boolean,
    default: false,
  },
});
</script>
