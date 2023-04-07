<template>
    <a :href="[link]" target="_blank" class="flex  items-center rounded-lg p-4 shadow-md ring-1 ring-primary-focus my-3">
        <LinkIcon class="h-9 w-9 ml-1 mr-3 text-secondary float-left"/>
        <div class="text-lg font-medium tracking-tight leading-6 text-neutral">
            <ContentSlot :use="$slots.title" unwrap="p"/>
            <div class="text-sm text-accent">
                <ContentSlot :use="$slots.desc" unwrap="p"/>
            </div>
        </div>
    </a>
</template>

<script setup lang="ts">
import {
    LinkIcon
} from "@heroicons/vue/24/outline";

defineProps(['link'])
</script>