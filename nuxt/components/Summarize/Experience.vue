<template>
  <div>
    <SummarizeHeader>
      {{ experience.title }}
      <span class="text-accent">@ {{ experience.organization }}</span>
    </SummarizeHeader>
    <SummarizeSubheader>
      {{ formatEventDates(experience.dates, false) }} //
      {{ experience.location }}
    </SummarizeSubheader>
    <SummarizeBullets :bullets="experience.bullets" />
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { formatEventDates } from "~/utils/formatEventDates";
import { Experience } from "~/summarize/models/Experience";

type Experience = z.infer<typeof Experience>;

defineProps({
  experience: {
    type: Object as PropType<Experience>,
    required: true,
  },
});
</script>
