<template>
  <div>
    <SummarizeHeader>
      {{ education.organization }}
    </SummarizeHeader>
    <SummarizeSubheader>
      {{ formatEventDates(education.dates, true) }} // {{ education.location }}
    </SummarizeSubheader>
    <SummarizeText>
      {{ education.description }}
    </SummarizeText>
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
