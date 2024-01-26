<template>
  <div>
    <SummarizeHeader class="-mb-0.5 flex flex-row items-center">
      {{ skillset.set }}
      <SummarizeText class="pl-1.5">
        {{ skillset.skills.join(", ") }}
      </SummarizeText>
    </SummarizeHeader>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { SkillSet } from "~/summarize/models/SkillSet";

type SkillSet = z.infer<typeof SkillSet>;

defineProps({
  skillset: {
    type: Object as PropType<SkillSet>,
    required: true,
  },
});
</script>
