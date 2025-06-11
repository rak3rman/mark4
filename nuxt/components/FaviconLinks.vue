<template>
  <!-- Optimized favicon with multiple sizes -->
  <Link
    rel="icon"
    type="image/png"
    sizes="32x32"
    :href="buildImageUrl(id, 'w=32')"
  />
  <Link
    rel="icon"
    type="image/png"
    sizes="16x16"
    :href="buildImageUrl(id, 'w=16')"
  />

  <!-- Apple touch icon for iOS -->
  <Link
    rel="apple-touch-icon"
    sizes="180x180"
    :href="buildImageUrl(id, 'w=180')"
  />
</template>

<script setup lang="ts">
import { buildImageUrl } from "~/utils/imageDelivery";

interface Props {
  id: string;
}

defineProps<Props>();
</script>
