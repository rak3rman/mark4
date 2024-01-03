<template>
  <div>
    <ResumeHeader>
      {{ presentation.title }}
      <span class="text-accent">@ {{ presentation.organization }}</span>
    </ResumeHeader>
    <ResumeSubheader>
      {{ formatEventDates(presentation.dates, false) }}
      //
      {{ presentation.location }}
    </ResumeSubheader>
    <ResumeText v-if="presentation.description">
      {{ presentation.description }}
    </ResumeText>
    <ResumeBullets :bullets="presentation.bullets" />
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