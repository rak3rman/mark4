<template>
  <NuxtImg
    :src="imageUrl"
    :alt="alt"
    :class="class"
    :preset="preset"
    :sizes="sizes"
    :width="width"
    :height="height"
    :loading="loading"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
interface Props {
  id: string;
  alt: string;
  variant?: string;
  type?:
    | "logo"
    | "project"
    | "hero"
    | "avatar"
    | "thumbnail"
    | "experienceLogo";
  class?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  customSizes?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "sm",
  type: "hero",
  loading: "lazy",
});

// Base URL for Image Delivery
const BASE_URL = "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g";

// Construct the full image URL
const imageUrl = computed(() => `${BASE_URL}/${props.id}/${props.variant}`);

// Simple preset mapping
const preset = computed(() => props.type);

// Simple sizes based on type
const sizes = computed(() => {
  if (props.customSizes) return props.customSizes;

  const defaultSizes = {
    logo: "sm:40px md:48px",
    experienceLogo: "sm:160px md:192px",
    avatar: "sm:64px md:80px",
    thumbnail: "xs:100vw sm:50vw md:300px",
    project: "xs:100vw sm:80vw md:60vw lg:600px",
    hero: "xs:100vw sm:90vw md:80vw lg:1200px",
  };

  return defaultSizes[props.type];
});
</script>
