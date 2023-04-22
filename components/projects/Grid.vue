<template>
  <div>
    <!--    Grid     -->
    <ul
      role="list"
      class="mt-4 grid grid-cols-1 lg:grid-cols-3 -m-3 list-none p-0"
    >
      <li
        v-for="(project, index) in projects.slice(0, limit)"
        class="col-span-1 flex flex-col space-y-8 pb-0 fade-in"
      >
        <!--    Card     -->
        <div
          class="flex-1 flex flex-col rounded-lg p-8 shadow-md ring-1 ring-primary-focus m-3"
          @click="emit('quick', project)"
        >
          <div class="flex items-center mb-4 flow-root">
            <RectangleGroupIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-if="project.type === 'website'"
            />
            <ComputerDesktopIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-else-if="project.type === 'application'"
            />
            <PuzzlePieceIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-else-if="project.type === 'microservice'"
            />
            <TagIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-else-if="project.type === 'package'"
            />
            <CpuChipIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-else-if="project.type === 'electronics'"
            />
            <WrenchIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-else-if="project.type === 'utility'"
            />
            <FolderIcon
              class="h-12 w-12 text-secondary float-left"
              aria-hidden="true"
              v-else
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
            <div class="ml-1.5 inline-flex" v-if="project.is_archived">
              <span
                class="inline-flex items-center rounded-full border border-accent-focus px-[7px] h-[20px] text-[0.7rem] font-medium text-accent-focus"
              >
                Archived
              </span>
            </div>
          </div>
          <h6 class="mt-1.5 text-sm text-accent">
            {{ project.sub }}
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
    <div class="pt-10 pb-4 fade-in" v-if="projects.length > starting">
      <div class="flex justify-center">
        <a
          @click="limit += increment"
          v-if="limit < projects.length"
          class="inline-flex items-center px-4 py-2 mx-1 border border-secondary text-base leading-normal font-mono rounded-md text-secondary hover:bg-primary-focus"
        >
          Show
          {{ Math.min(increment, projects.length - limit) }} more project{{
            projects.length > starting + 1 ? "s" : ""
          }}
        </a>
        <a
          @click="limit -= increment"
          v-if="limit >= increment + starting"
          class="inline-flex items-center px-4 py-2 mx-1 border border-secondary text-base leading-normal font-mono rounded-md text-secondary hover:bg-primary-focus"
        >
          Hide
          {{
            Math.min(increment, projects.length - limit + increment)
          }}
          project{{ projects.length > starting + 1 ? "s" : "" }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  FolderIcon,
  CpuChipIcon,
  ComputerDesktopIcon,
  RectangleGroupIcon,
  PuzzlePieceIcon,
  WrenchIcon,
  TagIcon,
} from "@heroicons/vue/24/outline";
import raw from "../../assets/projects.json";

const emit = defineEmits(["quick"]);

const starting = 9;
const increment = 6;
const limit = ref(starting);

const projects = computed(() => {
  return raw
    .filter((ele) => !ele.is_featured)
    .sort((a, b) => {
      return Date.parse(b.start) - Date.parse(a.start);
    });
});
</script>