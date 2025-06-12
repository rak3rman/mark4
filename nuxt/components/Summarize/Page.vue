<!--
  Summarize Page Component
  
  A page layout wrapper for resume/CV content with fixed dimensions and footer.
  Provides consistent page sizing and includes page numbering and version info.
  
  @props {Number} page - Current page number
  @props {Number} total - Total number of pages
-->
<template>
  <div class="h-[73.68rem] w-[54rem]">
    <div class="flex h-full flex-col overflow-hidden">
      <!-- Main content area -->
      <div class="grow">
        <slot />
      </div>

      <!-- Footer with page info and version -->
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

<script setup lang="ts">
import { DateTime } from "luxon";

// Runtime configuration
const config = useRuntimeConfig();

// Component props with validation
defineProps({
  page: {
    type: Number,
    validator: (value: number) => value > 0,
  },
  total: {
    type: Number,
    validator: (value: number) => value > 0,
  },
});
</script>
