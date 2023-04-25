<template>
  <div class="">
    <ResumeHeader>
      {{ proj.title }}
      <a class="text-accent" v-if="proj.links.ext" :href="proj.links.ext"
        >@ {{ proj.links.ext.replace(/(^\w+:|^)\/\//, "") }}</a
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