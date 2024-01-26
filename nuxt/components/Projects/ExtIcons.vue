<template>
  <div class="flex pb-1.5">
    <NuxtLink
      class="-mb-1 -mt-[1px] transition duration-300 ease-in-out hover:text-secondary"
      :to="project?.media?.youtube"
      v-if="project?.media?.youtube"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        fill="currentColor"
        class="-mb-2 mr-2.5 h-7 w-7"
      >
        <title>YouTube</title>
        <path
          d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
        />
      </svg>
    </NuxtLink>
    <NuxtLink
      class="transition duration-300 ease-in-out hover:text-secondary"
      :to="project?.media?.github"
      v-if="project?.media?.github"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="-mb-2 mr-2.5 mt-1 h-5 w-5"
      >
        <title>GitHub</title>
        <path
          d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
        ></path>
      </svg>
    </NuxtLink>
    <NuxtLink
      class="transition duration-300 ease-in-out hover:text-secondary"
      :to="project?.media?.external"
      v-if="project?.media?.external"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="-mb-2 h-6 w-6"
      >
        <title>External Link</title>
        <path
          d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
        ></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
      </svg>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { Project } from "~/summarize/models/Project";

type Project = z.infer<typeof Project>;

defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
});
</script>
