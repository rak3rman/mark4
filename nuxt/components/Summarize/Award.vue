<!--
  Summarize Award Component
  
  Displays award information including title, organization, dates, location, and description.
  Used in resume/CV for achievements and recognition.
  
  @props {Award} award - Object containing award details
-->
<template>
  <div>
    <!-- Award title and organization -->
    <SummarizeHeader>
      {{ award.title }}
      <span class="text-accent">@ {{ award.organization }}</span>
    </SummarizeHeader>

    <!-- Dates and location -->
    <SummarizeSubheader>
      {{ formatEventDates(award.dates, false) }}
      //
      {{ award.location }}
    </SummarizeSubheader>

    <!-- Award description (optional) -->
    <SummarizeText v-if="award.description">
      {{ award.description }}
    </SummarizeText>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { formatEventDates } from "~/utils/formatEventDates";
import { Award } from "~/summarize/models/Award";

// Types
type AwardType = z.infer<typeof Award>;

// Component props with validation
defineProps({
  award: {
    type: Object as PropType<AwardType>,
    required: true,
  },
});
</script>
