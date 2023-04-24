<template>
  <div class="">
    <ResumeHeader>
      {{ exp.title }}
      <span class="text-accent">@ {{ exp.company }}</span>
    </ResumeHeader>
    <ResumeSubheader>
      {{ formatDateRange(exp.start, exp.end) }} // {{ exp.location }}
    </ResumeSubheader>
    <ResumeBullets :bullets="exp.bullets" />
  </div>
</template>

<script setup>
let props = defineProps({
  exp: {
    type: Object,
  },
});
</script>