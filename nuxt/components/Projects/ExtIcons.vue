<!--
  Projects ExtIcons Component
  
  Displays external link icons for projects (YouTube, GitHub, External Link).
  Features hover effects and conditional rendering based on available media links.
  
  @props {Project} project - Object containing project details and media links
-->
<template>
  <div class="flex gap-3 items-center">
    <!-- YouTube link -->
    <NuxtLink
      v-if="project?.media?.youtube"
      class="transition duration-300 ease-in-out hover:text-secondary"
      :to="project.media.youtube"
    >
      <VideoCameraIcon class="h-5 w-5" />
    </NuxtLink>

    <!-- GitHub link -->
    <NuxtLink
      v-if="project?.media?.github"
      class="transition duration-300 ease-in-out hover:text-secondary"
      :to="project.media.github"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 26 22"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-5 w-5"
      >
        <title>GitHub</title>
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        />
      </svg>
    </NuxtLink>

    <!-- External link -->
    <NuxtLink
      v-if="project?.media?.external"
      class="transition duration-300 ease-in-out hover:text-secondary"
      :to="project.media.external"
    >
      <LinkIcon class="h-5 w-5" />  
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { Project } from "~/summarize/models/Project";
import { LinkIcon, VideoCameraIcon } from "@heroicons/vue/24/outline";

// Types
type ProjectType = z.infer<typeof Project>;

// Component props with validation
defineProps({
  project: {
    type: Object as PropType<ProjectType>,
    required: true,
  },
});
</script>
