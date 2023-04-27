<template>
  <NuxtLink
    :to="props.link"
    target="_blank"
    class="flex items-center rounded-lg p-4 bg-primary shadow-md ring-1 ring-primary-focus my-3"
  >
    <PresentationChartLineIcon
      class="h-9 w-9 ml-1 mr-3 text-secondary flex-none"
      v-if="props.presentation"
    />
    <LinkIcon class="h-9 w-9 ml-1 mr-3 text-secondary flex-none" v-else />
    <div class="text-lg font-medium tracking-tight leading-6 text-neutral">
      <ContentSlot :use="$slots.title" unwrap="p" />
      <div class="text-sm text-accent">
        <ContentSlot :use="$slots.desc" unwrap="p" />
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { LinkIcon, PresentationChartLineIcon } from "@heroicons/vue/24/outline";

const props = defineProps({
  link: String,
  presentation: String,
});
</script>