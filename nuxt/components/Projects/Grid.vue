<template>
  <div>
    <!--    Grid     -->
    <ul
      role="list"
      class="mt-4 grid grid-cols-1 lg:grid-cols-3 -m-3 list-none p-0"
    >
      <li
        v-for="project in ProjectsFiltered.slice(0, limit)"
        class="col-span-1 flex flex-col space-y-8 pb-0 fade-in"
      >
        <!--    Card     -->
        <div
          class="flex-1 flex flex-col rounded-lg p-8 shadow-md ring-1 ring-primary-focus m-3"
          @click="emit('quick', project)"
        >
          <div class="flow-root items-center mb-4">
            <ComputerDesktopIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-if="project.type === 'application'"
            />
            <PuzzlePieceIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-else-if="project.type === 'microservice'"
            />
            <CpuChipIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-else-if="project.type === 'electronics'"
            />
            <TagIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-else-if="project.type === 'package'"
            />
            <WrenchIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-else-if="project.type === 'utility'"
            />
            <RectangleGroupIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-else-if="project.type === 'website'"
            />
            <div class="float-right flex">
              <ProjectsExtIcons :project="project" />
            </div>
          </div>
          <div
            class="flex items-center text-lg font-medium tracking-tight leading-6 text-neutral"
          >
            {{ project.title }}
            <div class="ml-1.5 inline-flex" v-if="project.tag">
              <span
                class="inline-flex items-center rounded-full border border-secondary px-[7px] h-[20px] text-[0.7rem] font-medium text-secondary"
              >
                {{ project.tag }}
              </span>
            </div>
            <div
              class="ml-1.5 inline-flex"
              v-if="project.dates[project.dates.length - 1].end === undefined"
            >
              <span
                class="inline-flex items-center rounded-full border border-accent-focus px-[7px] h-[20px] text-[0.7rem] font-medium text-accent-focus"
              >
                Archived
              </span>
            </div>
          </div>
          <h6 class="mt-1.5 text-sm text-accent">
            {{ project.short_description }}
          </h6>
          <div class="flex flex-grow items-end mt-1.5">
            <div
              class="flex flex-wrap text-xs text-accent font-light font-mono"
            >
              <h6 v-for="tool in project.tools" class="pr-2.5">{{ tool }}</h6>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="pt-10 pb-4 fade-in" v-if="ProjectsFiltered.length > starting">
      <div class="flex flex-col sm:flex-row justify-center">
        <a
          @click="limit += increment"
          v-if="limit < ProjectsFiltered.length"
          class="text-center px-4 py-2 m-1 border border-secondary text-base leading-normal font-mono rounded-md text-secondary hover:bg-primary-focus"
        >
          Show
          {{ Math.min(increment, ProjectsFiltered.length - limit) }} more
          project{{ ProjectsFiltered.length > starting + 1 ? "s" : "" }}
        </a>
        <a
          @click="limit -= increment"
          v-if="limit >= increment + starting"
          class="text-center px-4 py-2 m-1 border border-secondary text-base leading-normal font-mono rounded-md text-secondary hover:bg-primary-focus"
        >
          Hide
          {{ Math.min(increment, ProjectsFiltered.length - limit + increment) }}
          project{{ ProjectsFiltered.length > starting + 1 ? "s" : "" }}
        </a>
      </div>
    </div>
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

const ProjectsParsed: Project[] = ProjectsJSON.map((obj: any) =>
  Project.readonly().parse(obj)
).sort(sortEventDates);

const ProjectsFiltered: Project[] = ProjectsParsed.filter(
  (e: Project) => !e.is_featured
);

const emit = defineEmits(["quick"]);

const starting = 9;
const increment = 6;
const limit = ref(starting);
</script>