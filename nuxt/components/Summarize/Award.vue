<template>
  <div>
    <SummarizeHeader>
      {{ award.title }}
      <span class="text-accent">@ {{ award.organization }}</span>
    </SummarizeHeader>
    <SummarizeSubheader>
      {{ formatEventDates(award.dates, false) }}
      //
      {{ award.location }}
    </SummarizeSubheader>
    <SummarizeText v-if="award.description">
      {{ award.description }}
    </SummarizeText>
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
