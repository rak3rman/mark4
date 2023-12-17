<template>
  <div class="">
    <ResumeHeader>
      {{ proj.title }}
      <a
        class="text-accent"
        v-if="proj.links.ext && !showSubheader"
        :href="proj.links.ext"
        >@ {{ proj.links.ext.replace(/(^\w+:|^)\/\//, "") }}</a
      >
    </ResumeHeader>
    <ResumeSubheader v-if="showSubheader">
      {{ formatDateRange(proj.start, proj.end, false) }}
      <a class="text-accent" v-if="proj.links.ext" :href="proj.links.ext"
        >// {{ proj.links.ext.replace(/(^\w+:|^)\/\//, "") }}</a
      >
    </ResumeSubheader>
    <ResumeBullets :bullets="proj.bullets" />
  </div>
</template>

<script setup>
let props = defineProps({
  proj: {
    type: Object,
  },
  showSubheader: {
    type: Boolean,
    default: false,
  },
});
</script>