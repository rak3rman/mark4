<template>
  <div>
    <ResumeHeader class="flex flex-row items-center -mb-0.5">
      {{ skillset.set }}
      <ResumeText class="pl-1.5">
        {{ skillset.skills.join(", ") }}
      </ResumeText>
    </ResumeHeader>
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