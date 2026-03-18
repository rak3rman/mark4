<template>
  <div class="pt-[5em]">
    <div class="relative w-full">
      <!-- Top border accent line -->
      <div class="items-top pointer-events-none absolute inset-0 flex">
        <div class="w-full border-t border-neutral" />
      </div>

      <!-- Topic section -->
      <div class="relative flex justify-start pt-5">
        <DrawingLabel prefix="SECTION" :num="`${props.num}.0`" :label="props.topic" />
      </div>

      <!-- Main content grid -->
      <div class="grid w-full grid-cols-12 gap-8 py-[5.5em]">
        <div
          class="col-span-12 flex flex-col justify-center sm:col-span-9 lg:col-span-7"
        >
          <!-- Title with responsive text breaking -->
          <div
            class="whitespace-pre-line text-left text-4xl font-medium leading-[1.125em] tracking-[0.4px] text-primary min-[400px]:whitespace-normal md:text-5xl"
            v-html="props.title.replace(/(\S+)\s+(\S+)/g, '$1\n$2')"
          />

          <!-- Punchline and description -->
          <div
            class="mr-4 mt-4 text-left text-lg leading-6 text-neutral md:text-xl md:leading-tight"
          >
            <span class="text-primary">{{ props.punchline }}</span>
            {{ props.description }}
          </div>

          <!-- Slot content -->
          <div class="relative z-10 pt-1">
            <slot />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component props with validation
const props = defineProps({
  num: {
    type: String,
    required: true,
    validator: (value: string) => value.trim().length > 0,
  },
  topic: {
    type: String,
    required: true,
    validator: (value: string) => value.trim().length > 0,
  },
  title: {
    type: String,
    required: true,
    validator: (value: string) => value.trim().length > 0,
  },
  punchline: {
    type: String,
    required: true,
    validator: (value: string) => value.trim().length > 0,
  },
  description: {
    type: String,
    required: true,
    validator: (value: string) => value.trim().length > 0,
  },
});
</script>
