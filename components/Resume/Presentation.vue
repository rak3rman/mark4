<template>
  <div>
    <ResumeHeader>
      {{ pres.title }}
      <span class="text-accent">@ {{ pres.issuer }}</span>
    </ResumeHeader>
    <ResumeSubheader>
      {{ pres.given.map((d) => formatDateRange(d, undefined)).join(", ") }}
      //
      {{ pres.location }}
    </ResumeSubheader>
    <ResumeBullets v-if="pres.bullets.length > 0" :bullets="pres.bullets" />
  </div>
</template>

<script setup>
let props = defineProps({
  pres: {
    type: Object,
  },
});
</script>