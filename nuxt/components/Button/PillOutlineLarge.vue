<template>
  <div
    class="flex items-center rounded-xl border-[1.5px] px-[20px] py-[7px] transition-all duration-200 ease-out active:scale-95"
    :class="
      props.class
        ? props.class
        : 'border-neutral text-accent hover:border-primary hover:text-primary'
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

<style scoped>
div {
  transition:
    transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 200ms ease-out,
    color 200ms ease-out;
}
</style>
