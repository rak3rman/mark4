<!--
  Projects Featured Component
  
  Displays featured projects in an alternating layout with images and descriptions.
  Features responsive design with different layouts for mobile and desktop.
-->
<template>
  <div class="mb-6 mt-4 space-y-24 lg:mb-10 lg:mt-8">
    <div
      v-for="(project, index) in featuredProjects"
      :key="project.title || index"
      class="overflow-hidden lg:bg-transparent"
    >
      <div class="wrap mx-auto">
        <div class="grid grid-cols-10">
          <!-- Project image -->
          <div
            class="col-span-8 row-span-full -m-2 self-center md:col-span-6"
            :class="
              index % 2 === 0
                ? 'col-start-1 mr-4 md:col-start-1'
                : 'col-start-3 ml-4 md:col-start-5'
            "
          >
            <ImageDelivery
              v-if="project?.media?.desktop_screenshot_id"
              class="z-0 brightness-50 md:brightness-100"
              :id="project.media.desktop_screenshot_id"
              variant="xl"
              :alt="`${project.title} screenshot`"
              type="project"
              :width="800"
              :height="600"
            />
          </div>

          <!-- Project details -->
          <div
            class="z-0 col-span-9 row-span-full self-center md:col-span-4"
            :class="
              index % 2 === 0
                ? 'col-end-11 text-right md:col-end-11'
                : 'col-end-9 text-left md:col-end-5'
            "
          >
            <!-- Organization -->
            <h6 class="text-md mx-3 mb-1 font-mono text-secondary">
              {{ project.organization }}
            </h6>

            <!-- Project title -->
            <h6 class="mx-3 mb-5 text-3xl text-primary">
              {{ project.title }}
            </h6>

            <!-- Project description -->
            <div
              class="mb-4 rounded-lg bg-transparent p-4 shadow-xl backdrop-blur-[1.5px] backdrop-brightness-[0.4] md:bg-base-200"
            >
              <h6 class="text-md text-accent">
                {{ project.long_description }}
              </h6>
            </div>

            <!-- Technology stack -->
            <div
              class="mb-3 flex flex-wrap font-mono text-xs font-light text-accent"
              :class="index % 2 === 0 ? 'flex-row-reverse' : ''"
            >
              <h6
                v-for="tool in project.tools"
                :key="tool"
                class="pb-0.5"
                :class="index % 2 === 0 ? 'pr-4' : 'pl-3'"
              >
                {{ tool }}
              </h6>
            </div>

            <!-- External links -->
            <div
              class="mx-3"
              :class="index % 2 === 0 ? 'float-right' : 'float-left'"
            >
              <ProjectsExtIcons :project="project" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { z } from "zod";
import { Project } from "~/summarize/models/Project";
import ProjectsJSON from "~/summarize/data/projects.json";

// Types
type ProjectType = z.infer<typeof Project>;

/**
 * Parse and validate projects from JSON data
 */
const projectsParsed: ProjectType[] = ProjectsJSON.map((obj: any) =>
  Project.readonly().parse(obj),
);

/**
 * Filter projects to show only featured ones
 */
const featuredProjects: ProjectType[] = projectsParsed.filter(
  (project: ProjectType) => project.is_featured,
);
</script>
