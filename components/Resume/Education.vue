<template>
  <div class="">
    <ResumeHeader>
      {{ edu.school }}
    </ResumeHeader>
    <ResumeSubheader>
      {{ formatDateRange(edu.start, edu.end) }} // {{ edu.location }}
    </ResumeSubheader>
    <ResumeText>
      {{ edu.desc }}
    </ResumeText>
  </div>
</template>

<script setup>
let props = defineProps({
  edu: {
    type: Object,
  },
});
</script>