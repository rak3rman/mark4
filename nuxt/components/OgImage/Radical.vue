<script setup>
import { computed } from "vue";
const props = defineProps({
  title: { type: String, required: false, default: "title" },
  description: { type: String, required: false, default: "description" },
  headline: { type: String, required: false, default: "headline" },
});
const title = computed(() => (props.title || "").slice(0, 60));
const description = computed(() => (props.description || "").slice(0, 200));
</script>

<template>
  <div class="relative flex h-full w-full flex-col justify-center bg-[#0f1011]">
    <div class="w-[600px] pl-[100px]">
      <p
        v-if="headline"
        class="mb-6 text-[24px] uppercase leading-normal text-[#586CB2]"
        style="font-family: SF Mono; font-weight: 400"
      >
        {{ headline }}
      </p>
      <h1
        v-if="title"
        class="m-0 mb-4 w-[600px] text-[75px] leading-tight text-[#f7f8f8]"
        style="
          font-family: Tiempos Headline;
          font-weight: 600;
          display: block;
          line-clamp: 2;
          text-overflow: ellipsis;
        "
      >
        {{ title }}
      </h1>
      <p
        v-if="description"
        class="text-[32px] leading-tight text-[#D1D5DB]"
        style="
          font-family: SF Pro Display;
          font-weight: 400;
          display: block;
          line-clamp: 3;
          text-overflow: ellipsis;
        "
      >
        {{ description }}
      </p>
    </div>
    <SvgPortrait1
      class="absolute right-[-200px] top-[-70px] opacity-20"
      style="transform: scaleX(-1); width: 900px; height: 900px"
    />
  </div>
</template>
