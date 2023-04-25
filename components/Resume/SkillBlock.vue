<template>
  <div class="">
    <ResumeHeader class="flex flex-col lg:flex-row lg:items-center">
      {{ block.group }}
      <ResumeText class="pt-[1.5px] lg:pl-1.5">
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