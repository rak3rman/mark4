<!--
  Projects Quickview Modal Component
  Modal dialog for detailed project viewing with media display
  
  Props:
  - show (boolean): Controls modal visibility
  - project (Project, optional): Project data to display
  
  Events:
  - clear: Emitted when modal should be closed
  
  Features:
  - Responsive modal with fade transitions
  - Spline 3D viewer integration
  - Project type icons and status badges
  - Media display (Spline or desktop screenshots)
  - Animated background blur elements
  - External link icons
-->
<template>
  <TransitionRoot as="template" :show="show" v-if="project">
    <Dialog as="div" class="relative z-10" @close="emit('clear')">
      <!-- Background overlay -->
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 hidden bg-base-100 bg-opacity-75 transition-opacity md:block"
        />
      </TransitionChild>

      <!-- Modal container -->
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-stretch justify-center pt-12 text-center md:items-center md:px-2 md:pt-0 lg:px-4"
        >
          <!-- Modal panel -->
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enter-to="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 md:scale-100"
            leave-to="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <DialogPanel
              class="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl"
            >
              <div
                class="relative flex w-full items-center overflow-hidden bg-base-200 shadow-2xl md:rounded-2xl"
                :class="{
                  'px-4 pb-8 pt-14 sm:px-6 sm:pt-8 md:p-6 lg:p-8':
                    !project?.media?.spline,
                }"
              >
                <!-- Close button -->
                <button
                  type="button"
                  class="absolute right-4 top-4 z-20 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                  @click="emit('clear')"
                >
                  <span class="sr-only">Close</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <!-- Blur Background -->
                <div
                  class="absolute inset-x-0 top-[calc(100%-13rem)] transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-33rem)]"
                >
                  <svg
                    class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                      fill-opacity=".3"
                      d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                      <linearGradient
                        id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                        x1="1155.49"
                        x2="-78.208"
                        y1=".177"
                        y2="474.645"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#9089FC" />
                        <stop offset="1" stop-color="#586CB2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <!-- Content grid -->
                <div
                  class="z-10 grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 lg:gap-x-8"
                  :class="{
                    'md:grid-cols-12':
                      project?.media?.spline ||
                      project?.media?.desktop_screenshot_id,
                  }"
                >
                  <!-- Media section -->
                  <div
                    class="flex flex-col justify-center md:col-span-5 md:h-full"
                    :class="{
                      hidden: !(
                        project?.media?.spline ||
                        project?.media?.desktop_screenshot_id
                      ),
                      'h-[70vh]': project?.media?.spline,
                    }"
                  >
                    <!-- Spline 3D viewer -->
                    <spline-viewer
                      loading-anim
                      :url="project?.media?.spline"
                      v-if="project?.media?.spline"
                    ></spline-viewer>

                    <!-- Desktop screenshot -->
                    <ImageDelivery
                      :id="project?.media?.desktop_screenshot_id"
                      variant="xl"
                      alt="Desktop Screenshot"
                      v-if="project?.media?.desktop_screenshot_id"
                      type="project"
                      :width="800"
                      :height="600"
                    />
                  </div>

                  <!-- Project details section -->
                  <div
                    class="md:col-span-7"
                    :class="{
                      'px-4 pb-12 md:py-6 md:pr-6 lg:py-8 lg:pr-8':
                        project?.media?.spline,
                    }"
                  >
                    <!-- Project type icon -->
                    <div class="mb-4 flow-root items-center">
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
                    </div>

                    <!-- Project title and badges -->
                    <div
                      class="flex items-center text-xl font-medium leading-6 tracking-tight text-primary"
                    >
                      {{ project.title }}
                      <div class="ml-1.5 inline-flex" v-if="project.tag">
                        <span
                          class="inline-flex h-[20px] items-center rounded-full border border-secondary px-[7px] text-[0.7rem] font-medium text-secondary"
                        >
                          {{ project.tag }}
                        </span>
                      </div>
                      <div
                        class="ml-1.5 inline-flex"
                        v-if="
                          project.dates[project.dates.length - 1].end !==
                          undefined
                        "
                      >
                        <span
                          class="inline-flex h-[20px] items-center rounded-full border border-accent-focus px-[7px] text-[0.7rem] font-medium text-accent-focus"
                        >
                          Archived
                        </span>
                      </div>
                    </div>

                    <!-- Organization -->
                    <div class="mt-1.5 flex items-center text-sm text-accent">
                      <AtSymbolIcon
                        class="float-left mr-1.5 h-4 w-4 text-secondary"
                      />
                      {{ project.organization }}
                    </div>

                    <!-- Dates -->
                    <div class="mt-0.5 flex items-center text-sm text-accent">
                      <CalendarDaysIcon
                        class="float-left mr-1.5 h-4 w-4 text-secondary"
                      />
                      {{ formatEventDates(project.dates, false) }}
                    </div>

                    <!-- Description -->
                    <div class="mt-1.5 text-sm text-accent">
                      {{
                        project.long_description
                          ? project.long_description
                          : project.short_description
                      }}
                    </div>

                    <!-- Tools used -->
                    <div class="mt-3 flex flex-grow items-end">
                      <div
                        class="flex flex-wrap font-mono text-xs font-light text-accent"
                      >
                        <h6 v-for="tool in project.tools" class="pr-2.5">
                          {{ tool }}
                        </h6>
                      </div>
                    </div>

                    <!-- External links -->
                    <div class="mt-3 flex">
                      <ProjectsExtIcons :project="project" />
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XMarkIcon } from "@heroicons/vue/24/outline";
import {
  ComputerDesktopIcon,
  CpuChipIcon,
  PuzzlePieceIcon,
  RectangleGroupIcon,
  TagIcon,
  WrenchIcon,
  CalendarDaysIcon,
  AtSymbolIcon,
} from "@heroicons/vue/24/outline";
import { z } from "zod";
import { formatEventDates } from "~/utils/formatEventDates";
import { Project } from "~/summarize/models/Project";

type Project = z.infer<typeof Project>;

interface Props {
  show: boolean;
  project?: Project;
}

defineProps<Props>();

const emit = defineEmits<{
  clear: [];
}>();

// Load Spline viewer script
useHead({
  script: [
    {
      src: "https://unpkg.com/@splinetool/viewer@0.9.290/build/spline-viewer.js",
      type: "module",
    },
  ],
});
</script>
