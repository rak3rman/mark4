<template>
  <div class="pt-[5em]" :class="fade ? 'fade-in' : ''">
    <div class="relative w-full">
      <div class="items-top absolute inset-0 flex">
        <div class="w-full border-t border-accent" />
      </div>
      <div class="relative flex justify-start pt-5">
        <h6
          class="text-md flex items-center text-left leading-tight text-accent"
        >
          <span class="pr-1 font-mono text-[15px] text-neutral">
            {{ props.num }}
          </span>
          {{ props.topic }}
        </h6>
      </div>
      <div class="grid w-full grid-cols-12 gap-8 py-[5em]">
        <div
          class="col-span-12 flex flex-col justify-center sm:col-span-9 lg:col-span-7"
        >
          <div
            class="text-left text-5xl font-medium leading-[1.125em] tracking-[0.4px] text-primary"
            v-html="props.title"
          ></div>
          <div class="mt-4 text-left text-xl leading-tight text-neutral">
            <span class="text-primary">{{ props.punchline }}</span>
            {{ props.description }}
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  num: String,
  topic: String,
  title: String,
  punchline: String,
  description: String,
  fade: Boolean,
});
</script>
