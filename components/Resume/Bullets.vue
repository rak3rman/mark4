<template>
  <ul class="py-0">
    <li v-for="bullet in bullets" class="py-0">
      <ResumeText>{{ bullet }}</ResumeText>
    </li>
  </ul>
</template>

<script setup>
let props = defineProps({
  bullets: {
    type: Array,
  },
});
</script>