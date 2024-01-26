<template>
  <div class="h-[73.68rem] w-[54rem]">
    <div class="flex h-full flex-col overflow-hidden">
      <div class="grow">
        <slot />
      </div>
      <div class="text-xs font-normal text-accent">
        <span v-if="page && total">
          Radison Akerman, Page {{ page }} of {{ total }}&nbsp
        </span>
        <NuxtLink
          class="opacity-50"
          to="https://github.com/rak3rman/mark4/commits/master/"
        >
          {{
            formatDateRange(
              DateTime.now().toISODate(),
              DateTime.now().toISODate(),
              false,
            )
          }}
          &nbsp#{{ config.public.gitMasterTag }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DateTime } from "luxon";

const config = useRuntimeConfig();

defineProps({
  page: Number,
  total: Number,
});
</script>
