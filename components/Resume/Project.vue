<template>
  <div class="">
    <ResumeHeader>
      {{ proj.title }}
      <span class="text-accent" v-if="proj.links.ext"
        >@ {{ proj.links.ext.replace(/(^\w+:|^)\/\//, "") }}</span
      >
    </ResumeHeader>
    <ResumeBullets :bullets="proj.bullets" />
  </div>
</template>

<script setup>
let props = defineProps({
  proj: {
    type: Object,
  },
});
</script>