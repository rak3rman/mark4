<!--
  Summarize Education Component
  
  Displays education information including organization, dates, location, and description.
  Used in resume/CV for academic background information.
  
  @props {Education} education - Object containing education details
-->
<template>
  <div>
    <!-- Institution name -->
    <SummarizeHeader>
      {{ education.organization }}
    </SummarizeHeader>

    <!-- Dates and location -->
    <SummarizeSubheader>
      {{ formatEventDates(education.dates, true) }} // {{ education.location }}
    </SummarizeSubheader>

    <!-- Education description -->
    <SummarizeText>
      {{ education.description }}
    </SummarizeText>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { formatEventDates } from "~/utils/formatEventDates";
import { Education } from "~/summarize/models/Education";

// Types
type EducationType = z.infer<typeof Education>;

// Component props with validation
defineProps({
  education: {
    type: Object as PropType<EducationType>,
    required: true,
  },
});
</script>
