<template>
  <NuxtLink
    :to="props.link"
    target="_blank"
    class="ring-base-100-focus my-3 flex items-center rounded-lg bg-base-100 p-4 shadow-md ring-1"
  >
    <PresentationChartLineIcon
      class="ml-1 mr-3 h-9 w-9 flex-none text-secondary"
      v-if="props.presentation"
    />
    <LinkIcon class="ml-1 mr-3 h-9 w-9 flex-none text-secondary" v-else />
    <div class="text-lg font-medium leading-6 tracking-tight text-primary">
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
