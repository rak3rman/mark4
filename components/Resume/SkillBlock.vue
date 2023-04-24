<template>
  <div class="">
    <ResumeHeader class="flex items-center">
      {{ block.group }}
      <ResumeText class="pt-[1.5px] pl-1.5">
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