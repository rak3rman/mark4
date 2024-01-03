<template>
  <ul class="list-none p-0">
    <li v-for="bullet in bullets" class="p-0">
      <ResumeText>&#8226;&#8192; {{ bullet.text }}</ResumeText>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { z } from "zod";
import { Bullets } from "~/summarize/models/Bullets.js";
type Bullets = z.infer<typeof Bullets>;

defineProps({
  bullets: {
    type: Object as PropType<Bullets>,
    required: true,
  },
});
</script>