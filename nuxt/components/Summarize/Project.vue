<template>
  <div class="">
    <SummarizeHeader>
      {{ project.title }}
      <a
        class="text-accent"
        v-if="project.media?.external && !showSubheader"
        :href="project.media.external"
        >@ {{ project.media.external.replace(/(^\w+:|^)\/\//, "") }}</a
      >
    </SummarizeHeader>
    <SummarizeSubheader v-if="showSubheader">
      {{ formatEventDates(project.dates, false) }}
      <a
        class="text-accent"
        v-if="project.media?.external"
        :href="project.media.external"
        >// {{ project.media.external.replace(/(^\w+:|^)\/\//, "") }}</a
      >
    </SummarizeSubheader>
    <SummarizeBullets :bullets="project.bullets" />
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { formatEventDates } from "~/utils/formatEventDates";
import { Project } from "~/summarize/models/Project";

type Project = z.infer<typeof Project>;

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
  showSubheader: {
    type: Boolean,
    default: false,
  },
});
</script>
