<template>
  <div>
    <ResumeHeader class="flex flex-row items-center">
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