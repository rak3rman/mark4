<template>
  <div>
    <ResumeHeader>
      {{ edu.school }}
    </ResumeHeader>
    <ResumeSubheader>
      {{ formatDateRange(edu.start, edu.end, true) }} // {{ edu.location }}
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