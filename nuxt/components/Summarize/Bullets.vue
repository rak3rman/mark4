<template>
  <ul class="list-none p-0">
    <li v-for="bullet in bullets" :key="bullet.text" class="p-0">
      <SummarizeText>&#8226;&#8192; {{ bullet.text }}</SummarizeText>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { z } from "zod";
import { Bullets } from "~/summarize/models/Bullets.js";

// Types
type BulletsType = z.infer<typeof Bullets>;

// Component props with validation
defineProps({
  bullets: {
    type: Object as PropType<BulletsType>,
    required: true,
  },
});
</script>
