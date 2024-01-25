<template>
  <div>
    <SummarizeHeader>
      {{ presentation.title }}
      <span class="text-accent">@ {{ presentation.organization }}</span>
    </SummarizeHeader>
    <SummarizeSubheader>
      {{ formatEventDates(presentation.dates, false) }}
      //
      {{ presentation.location }}
    </SummarizeSubheader>
    <SummarizeText v-if="presentation.description">
      {{ presentation.description }}
    </SummarizeText>
    <SummarizeBullets :bullets="presentation.bullets" />
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { formatEventDates } from "~/utils/formatEventDates";
import { Presentation } from "~/summarize/models/Presentation";

type Presentation = z.infer<typeof Presentation>;

defineProps({
  presentation: {
    type: Object as PropType<Presentation>,
    required: true,
  },
});
</script>
