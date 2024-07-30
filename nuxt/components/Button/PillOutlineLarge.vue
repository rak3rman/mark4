<template>
  <div
    class="flex items-center rounded-xl border-[1.5px] px-[20px] py-[7px] delay-75 duration-200"
    :class="
      props.class
        ? props.class
        : 'border-accent text-accent hover:border-primary hover:text-primary'
    "
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  class: String,
});
</script>
