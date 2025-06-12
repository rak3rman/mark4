<!--
  Summarize Presentation Component
  
  Displays presentation information including title, organization, dates, location, description, and bullets.
  Used in resume/CV for conference presentations and speaking engagements.
  
  @props {Presentation} presentation - Object containing presentation details
-->
<template>
  <div>
    <!-- Presentation title and organization -->
    <SummarizeHeader>
      {{ presentation.title }}
      <span class="text-accent">@ {{ presentation.organization }}</span>
    </SummarizeHeader>

    <!-- Dates and location -->
    <SummarizeSubheader>
      {{ formatEventDates(presentation.dates, false) }}
      //
      {{ presentation.location }}
    </SummarizeSubheader>

    <!-- Presentation description (optional) -->
    <SummarizeText v-if="presentation.description">
      {{ presentation.description }}
    </SummarizeText>

    <!-- Presentation bullets -->
    <SummarizeBullets :bullets="presentation.bullets" />
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { formatEventDates } from "~/utils/formatEventDates";
import { Presentation } from "~/summarize/models/Presentation";

// Types
type PresentationType = z.infer<typeof Presentation>;

// Component props with validation
defineProps({
  presentation: {
    type: Object as PropType<PresentationType>,
    required: true,
  },
});
</script>
