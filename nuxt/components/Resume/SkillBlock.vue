<template>
  <div>
    <ResumeHeader class="flex flex-row items-center -mb-0.5">
      {{ block.group }}
      <ResumeText class="pl-1.5">
        {{ block.items.join(", ") }}
      </ResumeText>
    </ResumeHeader>
  </div>
</template>

<script setup>
let props = defineProps({
  block: {
    type: Object,
  },
});
</script>