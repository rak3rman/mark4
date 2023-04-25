<template>
  <ul class="list-none p-0">
    <li v-for="bullet in bullets" class="p-0">
      <ResumeText>&#8226;&#8192; {{ bullet }}</ResumeText>
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