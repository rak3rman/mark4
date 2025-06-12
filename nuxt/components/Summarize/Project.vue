<!--
  Summarize Project Component
  
  Displays project information including title, external link, dates, and bullets.
  Used in resume/CV for project portfolio with optional subheader display.
  
  @props {Project} project - Object containing project details
  @props {Boolean} showSubheader - Whether to show the subheader with dates
-->
<template>
  <div>
    <!-- Project title with optional external link -->
    <SummarizeHeader>
      {{ project.title }}
      <a
        v-if="project.media?.external && !showSubheader"
        class="text-accent"
        :href="project.media.external"
      >
        @ {{ project.media.external.replace(/(^\w+:|^)\/\//, "") }}
      </a>
    </SummarizeHeader>

    <!-- Optional subheader with dates and link -->
    <SummarizeSubheader v-if="showSubheader">
      {{ formatEventDates(project.dates, false) }}
      <a
        v-if="project.media?.external"
        class="text-accent"
        :href="project.media.external"
      >
        // {{ project.media.external.replace(/(^\w+:|^)\/\//, "") }}
      </a>
    </SummarizeSubheader>

    <!-- Project bullets -->
    <SummarizeBullets :bullets="project.bullets" />
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { formatEventDates } from "~/utils/formatEventDates";
import { Project } from "~/summarize/models/Project";

// Types
type ProjectType = z.infer<typeof Project>;

// Component props with validation
defineProps({
  project: {
    type: Object as PropType<ProjectType>,
    required: true,
  },
  showSubheader: {
    type: Boolean,
    default: false,
  },
});
</script>
