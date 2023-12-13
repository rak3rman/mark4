<template>
  <div>
    <ResumeHeader>
      {{ award.title }}
      <span class="text-accent">@ {{ award.issuer }}</span>
    </ResumeHeader>
    <ResumeSubheader>
      {{
        award.given.map((d) => formatDateRange(d, undefined, false)).join(", ")
      }}
      //
      {{ award.location }}
    </ResumeSubheader>
    <ResumeText v-if="award.desc">
      {{ award.desc }}
    </ResumeText>
  </div>
</template>

<script setup>
let props = defineProps({
  award: {
    type: Object,
  },
});
</script>