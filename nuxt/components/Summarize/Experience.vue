<!--
  Summarize Experience Component
  
  Displays work experience information including title, organization, dates, location, and bullets.
  Used in resume/CV for professional experience section.
  
  @props {Experience} experience - Object containing experience details
-->
<template>
  <div>
    <!-- Job title and organization -->
    <SummarizeHeader>
      {{ experience.title }}
      <span class="text-accent">@ {{ experience.organization }}</span>
    </SummarizeHeader>

    <!-- Dates and location -->
    <SummarizeSubheader>
      {{ formatEventDates(experience.dates, false) }} //
      {{ experience.location }}
    </SummarizeSubheader>

    <!-- Experience bullets -->
    <SummarizeBullets :bullets="experience.bullets" />
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { formatEventDates } from "~/utils/formatEventDates";
import { Experience } from "~/summarize/models/Experience";

// Types
type ExperienceType = z.infer<typeof Experience>;

// Component props with validation
defineProps({
  experience: {
    type: Object as PropType<ExperienceType>,
    required: true,
  },
});
</script>
