<template>
  <div>
    <ResumeHeader>
      {{ education.organization }}
    </ResumeHeader>
    <ResumeSubheader>
      {{ formatEventDates(education.dates, true) }} // {{ education.location }}
    </ResumeSubheader>
    <ResumeText>
      {{ education.description }}
    </ResumeText>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { formatEventDates } from "~/utils/formatEventDates";
import { Education } from "~/summarize/models/Education";
type Education = z.infer<typeof Education>;

defineProps({
  education: {
    type: Object as PropType<Education>,
    required: true,
  },
});
</script>