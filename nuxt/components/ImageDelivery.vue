<!--
  ImageDelivery Component
  
  A wrapper for NuxtImg that integrates with Cloudflare Image Delivery service.
  Provides optimized image loading with presets and responsive sizing.
  
  @props {String} id - The unique image ID from Cloudflare Image Delivery
  @props {String} alt - Alt text for accessibility
  @props {String} variant - Image variant/size (default: 'sm')
  @props {String} type - Image type for preset and sizing logic
  @props {String} class - Custom CSS classes
  @props {Number} width - Optional explicit width
  @props {Number} height - Optional explicit height
  @props {String} loading - Loading strategy ('lazy' or 'eager')
  @props {String} customSizes - Custom responsive sizes string
-->
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
// Types
type ImageType =
  | "logo"
  | "project"
  | "hero"
  | "avatar"
  | "thumbnail"
  | "experienceLogo";

interface Props {
  id: string;
  alt: string;
  variant?: string;
  type?: ImageType;
  class?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
  customSizes?: string;
}

// Component props with defaults
const props = withDefaults(defineProps<Props>(), {
  variant: "sm",
  type: "hero",
  loading: "lazy",
});

// Constants
const BASE_URL = "https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g";

// Computed properties

/**
 * Constructs the full image URL using Cloudflare Image Delivery
 */
const imageUrl = computed(() => `${BASE_URL}/${props.id}/${props.variant}`);

/**
 * Simple preset mapping based on image type
 */
const preset = computed(() => props.type);

/**
 * Responsive sizes configuration based on image type
 */
const sizes = computed(() => {
  if (props.customSizes) return props.customSizes;

  const defaultSizes: Record<ImageType, string> = {
    logo: "sm:40px md:48px",
    experienceLogo: "sm:160px md:192px",
    avatar: "sm:64px md:80px",
    thumbnail: "xs:100vw sm:50vw md:300px",
    project: "xs:100vw sm:80vw md:60vw lg:600px",
    hero: "xs:100vw sm:90vw md:80vw lg:1200px",
  };

  return defaultSizes[props.type || "hero"];
});
</script>
