<template>
  <h6
    class="flex items-center text-left leading-tight font-mono text-[10px] text-neutral"
  >
    <template v-if="prefix != null && num != null">
      {{ prefix }} {{ num }} // {{ label.toUpperCase() }}
    </template>
    <template v-else>
      {{ label.toUpperCase() }}
    </template>
  </h6>
</template>

<script setup lang="ts">
defineProps<{
  prefix?: string;
  num?: string;
  label: string;
}>();
</script>
