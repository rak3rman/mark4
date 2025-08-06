<!--
  Projects Grid Component
  Grid layout for displaying non-featured projects as cards
  
  Events:
  - quick: Emitted when a project card is clicked with project data
  
  Features:
  - Responsive grid with horizontal scroll
  - Snap scrolling behavior
  - Project type icons and status badges
  - Technology stack display
  - External link icons
  - Filters out featured projects
-->
<template>
  <div>
    <!-- Projects grid -->
    <ul
      role="list"
      class="no-scrollbar m-0 mt-4 grid snap-x grid-flow-col grid-rows-2 overflow-x-scroll px-8 sm:px-3 lg:px-[calc((100vw-63rem)/2)]"
    >
      <li
        v-for="project in ProjectsFiltered"
        class="col-span-1 flex snap-center flex-col space-y-8 pb-0"
      >
        <!-- Project card -->
        <div
          class="m-1.5 flex w-[20.5rem] flex-1 flex-col rounded-lg bg-base-200 p-6 md:m-3 md:w-96 md:p-8"
          @click="emit('quick', project)"
        >
          <!-- Header with icon and external links -->
          <div class="mb-4 flow-root items-center">
            <!-- Project type icon -->
            <ComputerDesktopIcon
              class="float-left h-12 w-12 text-secondary"
              aria-hidden="true"
              v-if="project.type === 'application'"
            />
            <PuzzlePieceIcon
              class="float-left h-12 w-12 text-secondary"
              aria-hidden="true"
              v-else-if="project.type === 'microservice'"
            />
            <CpuChipIcon
              class="float-left h-12 w-12 text-secondary"
              aria-hidden="true"
              v-else-if="project.type === 'electronics'"
            />
            <TagIcon
              class="float-left h-12 w-12 text-secondary"
              aria-hidden="true"
              v-else-if="project.type === 'package'"
            />
            <WrenchIcon
              class="float-left h-12 w-12 text-secondary"
              aria-hidden="true"
              v-else-if="project.type === 'utility'"
            />
            <RectangleGroupIcon
              class="float-left h-12 w-12 text-secondary"
              aria-hidden="true"
              v-else-if="project.type === 'website'"
            />

            <!-- External links -->
            <div class="float-right flex">
              <ProjectsExtIcons :project="project" />
            </div>
          </div>

          <!-- Project title and status badges -->
          <div
            class="flex items-center text-lg font-medium leading-6 tracking-normal text-primary"
          >
            {{ project.title }}
            <div class="ml-1.5 inline-flex" v-if="project.tag">
              <span
                class="inline-flex h-[20px] items-center rounded-lg border border-secondary px-[7px] text-[0.7rem] font-medium text-secondary"
              >
                {{ project.tag }}
              </span>
            </div>
            <div
              class="ml-1.5 inline-flex"
              v-if="project.dates[project.dates.length - 1].end !== undefined"
            >
              <span
                class="inline-flex h-[20px] items-center rounded-lg border border-accent-focus px-[7px] text-[0.7rem] font-medium text-accent-focus"
              >
                Archived
              </span>
            </div>
          </div>

          <!-- Project description -->
          <h6 class="mt-1.5 text-sm text-accent">
            {{ project.short_description }}
          </h6>

          <!-- Technology stack -->
          <div class="mt-1.5 flex flex-grow items-end">
            <div
              class="flex flex-wrap font-mono text-xs font-light text-accent"
            >
              <h6 v-for="tool in project.tools" class="pr-2.5">{{ tool }}</h6>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {
  CpuChipIcon,
  ComputerDesktopIcon,
  RectangleGroupIcon,
  PuzzlePieceIcon,
  WrenchIcon,
  TagIcon,
} from "@heroicons/vue/24/outline";
import { z } from "zod";
import { sortEventDates } from "~/utils/sortEventDates";
import { Project } from "~/summarize/models/Project";
import ProjectsJSON from "~/summarize/data/projects.json";

type Project = z.infer<typeof Project>;

// Parse and sort all projects
const ProjectsParsed: Project[] = ProjectsJSON.map((obj: any) =>
  Project.readonly().parse(obj),
).sort(sortEventDates);

// Filter out featured projects for grid display
const ProjectsFiltered: Project[] = ProjectsParsed.filter(
  (e: Project) => !e.is_featured,
);

const emit = defineEmits<{
  quick: [project: Project];
}>();
</script>
