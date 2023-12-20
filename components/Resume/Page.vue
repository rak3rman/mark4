<template>
  <div class="w-[54rem] h-[73.68rem]">
    <div class="flex flex-col h-full overflow-hidden">
      <div class="grow">
        <slot />
      </div>
      <div class="text-accent font-normal text-xs" v-if="page && total">
        Radison Akerman, Page {{ page }} of {{ total }}
        <NuxtLink
          class="opacity-50"
          to="https://github.com/rak3rman/mark4/commits/master/"
        >
          &nbsp#{{ config.public.gitMasterTag }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useRuntimeConfig();

let props = defineProps({
  page: Number,
  total: Number,
});
</script>