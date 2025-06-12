<!--
  Summarize SkillSet Component
  
  Displays a skill set with title and comma-separated skills list.
  Used in resume/CV for organizing technical skills by category.
  
  @props {SkillSet} skillset - Object containing set name and skills array
-->
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

// Types
type SkillSetType = z.infer<typeof SkillSet>;

// Component props with validation
defineProps({
  skillset: {
    type: Object as PropType<SkillSetType>,
    required: true,
  },
});
</script>
