<!--
  Projects List Component
  Table view of all projects with sortable columns and type icons
  
  Events:
  - quick: Emitted when a project row is clicked with project data
  
  Features:
  - Responsive table design
  - Project type icons
  - Formatted date ranges
  - Technology stack display
  - External links (desktop only)
  - Mobile-friendly organization display
-->
<template>
  <div class="flex flex-col">
    <div class="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <!-- Projects table -->
        <table class="min-w-full divide-y divide-accent/30">
          <!-- Table header -->
          <thead>
            <tr class="text-accent">
              <th
                scope="col"
                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6 md:pl-0"
              >
                Period
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold"
              >
                Title
              </th>
              <th
                scope="col"
                class="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell"
              >
                Made at
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold"
              >
                Built with
              </th>
              <th
                scope="col"
                class="hidden px-3 py-3.5 text-left text-sm font-semibold md:table-cell"
              >
                Link
              </th>
            </tr>
          </thead>

          <!-- Table body -->
          <tbody class="divide-y divide-accent/20">
            <tr
              v-for="project in ProjectsParsed"
              :key="project.title"
              @click="emit('quick', project)"
            >
              <!-- Date period -->
              <td
                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-accent sm:pl-6 md:pl-0"
              >
                {{ formatEventDates(project.dates) }}
              </td>

              <!-- Project title with type icon -->
              <td class="whitespace-nowrap px-3 py-4 text-sm text-primary">
                {{ project.title }}
                <RectangleGroupIcon
                  class="-mt-[3px] inline h-4 w-4 text-secondary"
                  aria-hidden="true"
                  v-if="project.type === 'website'"
                />
                <ComputerDesktopIcon
                  class="-mt-[3px] inline h-4 w-4 text-secondary"
                  aria-hidden="true"
                  v-else-if="project.type === 'application'"
                />
                <PuzzlePieceIcon
                  class="-mt-[3px] inline h-4 w-4 text-secondary"
                  aria-hidden="true"
                  v-else-if="project.type === 'microservice'"
                />
                <TagIcon
                  class="-mt-[3px] inline h-4 w-4 text-secondary"
                  aria-hidden="true"
                  v-else-if="project.type === 'package'"
                />
                <CpuChipIcon
                  class="-mt-[3px] inline h-4 w-4 text-secondary"
                  aria-hidden="true"
                  v-else-if="project.type === 'electronics'"
                />
                <WrenchIcon
                  class="-mt-[3px] inline h-4 w-4 text-secondary"
                  aria-hidden="true"
                  v-else-if="project.type === 'utility'"
                />
                <FolderIcon
                  class="-mt-[3px] inline h-4 w-4 text-secondary"
                  aria-hidden="true"
                  v-else
                />
                <!-- Mobile organization display -->
                <span class="table-cell font-light text-accent md:hidden">
                  {{ project.organization }}
                </span>
              </td>

              <!-- Organization (desktop only) -->
              <td
                class="hidden whitespace-nowrap px-3 py-4 text-sm text-accent md:table-cell"
              >
                {{ project.organization }}
              </td>

              <!-- Technology stack -->
              <td
                class="whitespace-nowrap px-3 py-4 font-mono text-xs font-light text-accent text-accent"
              >
                <div class="flex flex-wrap">
                  <h6 v-for="tool in project.tools" :class="'pr-4'">
                    {{ tool }}
                  </h6>
                </div>
              </td>

              <!-- External links (desktop only) -->
              <td
                class="hidden whitespace-nowrap px-3 py-4 text-sm text-accent md:table-cell"
              >
                <div class="flex items-center">
                  <ProjectsExtIcons :project="project" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  FolderIcon,
  CpuChipIcon,
  ComputerDesktopIcon,
  RectangleGroupIcon,
  PuzzlePieceIcon,
  WrenchIcon,
  TagIcon,
} from "@heroicons/vue/24/outline";
import { z } from "zod";
import { sortEventDates } from "~/utils/sortEventDates";
import { formatEventDates } from "~/utils/formatEventDates";
import { Project } from "~/summarize/models/Project";
import ProjectsJSON from "~/summarize/data/projects.json";

type Project = z.infer<typeof Project>;

// Parse and sort projects
const ProjectsParsed: Project[] = ProjectsJSON.map((obj: any) =>
  Project.readonly().parse(obj),
).sort(sortEventDates);

const emit = defineEmits<{
  quick: [project: Project];
}>();
</script>
