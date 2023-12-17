<template>
  <div class="w-[54rem] h-[73.68rem]">
    <div class="flex flex-col h-full overflow-hidden">
      <div class="grow">
        <slot />
      </div>
      <div
        class="text-accent font-light text-[0.85rem] leading-5"
        v-if="page && total"
      >
        Radison Akerman, Page {{ page }} of {{ total }}
      </div>
    </div>
  </div>
</template>

<script setup>
let props = defineProps({
  page: Number,
  total: Number,
});
</script>