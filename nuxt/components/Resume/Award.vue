<template>
  <div>
    <ResumeHeader>
      {{ award.title }}
      <span class="text-accent">@ {{ award.organization }}</span>
    </ResumeHeader>
    <ResumeSubheader>
      {{ formatEventDates(award.dates, false) }}
      //
      {{ award.location }}
    </ResumeSubheader>
    <ResumeText v-if="award.description">
      {{ award.description }}
    </ResumeText>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { formatEventDates } from "~/utils/formatEventDates";
import { Award } from "~/summarize/models/Award";
type Award = z.infer<typeof Award>;

defineProps({
  award: {
    type: Object as PropType<Award>,
    required: true,
  },
});
</script>