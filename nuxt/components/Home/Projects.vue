<!--
  Home Projects Component
  
  A projects showcase section with featured projects, grid/list toggle, and quickview modal.
  Features dynamic view switching and project interaction handling.
-->
<template>
  <div id="projects">
    <HomeWrapper :no-margin-bottom="grid">
      <!-- Project quickview modal -->
      <ProjectsQuickview
        :show="quickShow"
        :project="quickProject!"
        @clear="quickShow = false"
        v-if="quickProject"
      />

      <!-- Featured projects section -->
      <Header
        num="03."
        topic="Projects"
        title="Projects make perfect."
        punchline="From prototype to powerhouse."
        description="Every project serves as a foundational learning experience, yielding pixel-perfect applications that solve real problems."
      />
      <ProjectsFeatured />

      <!-- Noteworthy projects header with view toggle -->
      <div class="items-center justify-between py-10">
        <div>
          <div
            class="max-w-5xl text-left text-2xl leading-tight text-neutral md:text-3xl"
          >
            <span class="text-primary">Trial by wireframe.</span>
            These projects weren't assignments — they were love letters to real
            painpoints I've discovered in my own life.
          </div>
        </div>

        <!-- View toggle controls -->
        <div class="mt-5 flex space-x-3 pr-2">
          <a
            class="tooltip tooltip-bottom tooltip-secondary"
            data-tip="View as grid"
          >
            <Squares2X2Icon
              class="h-6 w-6 transition duration-300 ease-in-out hover:text-secondary"
              :class="{ 'text-secondary': grid }"
              @click="grid = true"
            />
          </a>
          <a
            class="tooltip tooltip-bottom tooltip-secondary"
            data-tip="View as table"
          >
            <Bars4Icon
              class="h-6 w-6 transition duration-300 ease-in-out hover:text-secondary"
              :class="{ 'text-secondary': !grid }"
              @click="grid = false"
            />
          </a>
        </div>
      </div>

      <!-- List view -->
      <ProjectsList v-if="!grid" @quick="handleQuickview" />
    </HomeWrapper>

    <!-- Grid view -->
    <ProjectsGrid v-if="grid" @quick="handleQuickview" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Squares2X2Icon, Bars4Icon } from "@heroicons/vue/20/solid";
import { z } from "zod";
import { Project } from "~/summarize/models/Project";

// Type definition for Project
type Project = z.infer<typeof Project>;

// Reactive state
const grid = ref<boolean>(true);
const quickProject = ref<Project | null>(null);
const quickShow = ref<boolean>(false);

/**
 * Handles project quickview display
 * @param project - The project to display in quickview
 */
const handleQuickview = (project: Project): void => {
  quickProject.value = project;
  quickShow.value = true;
};
</script>
