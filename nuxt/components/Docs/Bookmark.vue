<template>
  <NuxtLink
    :to="props.link"
    target="_blank"
    class="my-3 block items-center rounded-lg bg-base-200 p-4 shadow-md sm:flex"
  >
    <div
      class="mb-1.5 mr-4 mt-0.5 h-auto w-8 flex-none text-secondary sm:my-0 sm:ml-1 sm:w-9"
    >
      <PresentationChartLineIcon v-if="props.presentation" />
      <LinkIcon v-else />
    </div>

    <div class="text-lg font-medium leading-6 tracking-normal text-primary">
      <slot name="title" mdc-unwrap="p" />
      <div class="text-sm text-accent">
        <slot name="desc" mdc-unwrap="p" />
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
