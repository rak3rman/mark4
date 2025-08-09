<!--
  Home Experience Component
  
  Professional experience showcase with interactive discipline tabs and company logos.
  
  Features:
  - Floating resume preview with click-to-view functionality
  - Professional disciplines list with animated tabs
  - Company logo cloud display
  - Technical specialization categorization
-->
<template>
  <HomeWrapper id="experience">
    <!-- Section header with resume/CV links -->
    <Header
      num="02."
      topic="Experience"
      title="Redefining <i>full-stack</i>."
      punchline="Technical depth, and breadth."
      description="I'm obsessed with building true end-to-end technical infrastructure and user interfaces."
      fade
    >
      <!-- Resume download link -->
      <a
        href="/radison-akerman-resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="mr-3 mt-4 inline-flex items-center"
      >
        <ButtonPillOutlineLarge>
          Resume
          <ArrowUpRightIcon class="-mr-1 mb-1.5 ml-0.5 h-3.5 w-3.5" />
        </ButtonPillOutlineLarge>
      </a>

      <!-- CV download link -->
      <a
        href="/radison-akerman-cv.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="mt-4 inline-flex items-center"
      >
        <ButtonPillOutlineLarge>
          Curriculum Vitae
          <ArrowUpRightIcon class="-mr-1 mb-1.5 ml-0.5 h-3.5 w-3.5" />
        </ButtonPillOutlineLarge>
      </a>
    </Header>

    <div class="mt-4">
      <!-- Floating resume preview (desktop only) -->
      <ClientOnly fallback-tag="div">
        <div
          class="relative z-10 float-right hidden max-w-md pb-5 pl-10 pt-[4.8px] lg:block"
        >
          <a
            href="/radison-akerman-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <!-- Resume preview container with styling -->
            <div
              class="-m-2 rounded-xl bg-base-200/60 p-2 ring-1 ring-inset ring-primary/10 lg:-m-4 lg:rounded-2xl lg:p-3"
            >
              <div
                data-theme="dark"
                class="rounded-lg bg-base-200 p-6 shadow-2xl ring-1 ring-accent/10"
              >
                <!-- Scaled resume component -->
                <SummarizeResume
                  class="h-[30.3rem] origin-top-left scale-[41%]"
                />
              </div>
            </div>

            <!-- Click instruction text -->
            <div class="flex justify-center pt-6 text-xs text-neutral">
              <CursorArrowRippleIcon class="h-4 pr-0.5" />
              <i>Click to view a slick, light-mode version of this resume!</i>
            </div>
          </a>
        </div>
      </ClientOnly>

      <!-- Professional disciplines section -->
      <div class="z-0">
        <div
          class="mx-auto text-primary lg:col-start-1 lg:row-start-1 lg:max-w-full"
        >
          <div class="w-full">
            <!-- Discipline tab items -->
            <div class="relative w-full" v-for="tab in expTabs" :key="tab.id">
              <!-- Decorative gradient line -->
              <div class="items-top absolute inset-0 flex">
                <div
                  class="relative h-[1px] w-full overflow-hidden bg-gradient-to-r from-primary/15 via-primary/5 via-[100%] to-base-100 md:via-[70%]"
                />
              </div>

              <!-- Tab content container -->
              <div class="relative justify-start py-8 md:py-[1.3em]">
                <!-- Tab icon -->
                <div
                  class="mb-4 block w-9 rounded-lg transition duration-300 ease-in-out sm:mb-0"
                >
                  <div class="flex sm:absolute sm:left-0 sm:mt-1">
                    <component :is="tab.icon" class="h-9 w-9 rounded-lg bg-base-300 p-[7.5px] transition duration-300 ease-in-out" />
                  </div>
                </div>

                <!-- Tab title -->
                <div
                  class="text-md font-medium leading-[1.3em] text-primary transition duration-300 ease-in-out sm:pl-16"
                >
                  <div>
                    <span class="absolute inset-0"></span>
                    {{ tab.name }}
                  </div>
                </div>

                <!-- Tab description -->
                <div class="mt-0.5 leading-[1.4em] text-neutral sm:pl-16">
                  {{ tab.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission statement section -->
    <div
      class="w-full pt-[3.6em] text-left text-xl leading-tight text-neutral md:text-2xl lg:pt-24"
    >
      <span class="text-primary">On a quest for quality.</span>
      I thrive in fast-moving, early-stage teams where the pressure's real and
      the product matters. I bring contagious energy, craft under constraint,
      and the kind of care that shows up in the edge cases.
    </div>

    <!-- Company logos grid -->
    <div
      class="grid w-full grid-cols-2 items-center justify-center gap-x-7 gap-y-10 pt-24 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-14 lg:max-w-none lg:pt-20 lg:pt-[6.5em]"
    >
      <ImageDelivery
        class="w-[8rem] object-contain object-left md:w-[10rem]"
        id="0fc9126a-5a1b-423e-f93d-a41f491cc200"
        alt="Vista Power Logo"
        type="experienceLogo"
      />
      <ImageDelivery
        class="w-[10rem] object-contain object-left md:w-[12rem]"
        id="f163f81d-3b7a-49cc-99a1-41b104077f00"
        alt="SpaceX Logo"
        type="experienceLogo"
      />
      <ImageDelivery
        class="w-[10rem] object-contain object-left md:w-[12rem]"
        id="8335dd31-40d0-4178-8a47-4be36065f400"
        alt="University of Illinois Chicago Logo"
        type="experienceLogo"
      />
    </div>
  </HomeWrapper>
</template>

<script setup lang="ts">
import { ArrowUpRightIcon, CursorArrowRippleIcon } from "@heroicons/vue/20/solid";
import { 
  UserGroupIcon, 
  ArrowsRightLeftIcon, 
  CursorArrowRaysIcon,
  CpuChipIcon,
  Square3Stack3DIcon
} from "@heroicons/vue/24/solid";

// Professional discipline tabs configuration
const expTabs = [
  {
    id: "product-leadership",
    name: "Technical Leadership",
    desc: "Proven ability to lead software initiatives from concept to launch with strategic, technical, and product-driven clarity.",
    icon: UserGroupIcon,
  },
  {
    id: "web-interfaces",
    name: "User Interfaces & Experiences",
    desc: 'I eat pain points for breakfast. Obsessive about design details, user flow, and "wow, they thought of everything" moments.',
    icon: CursorArrowRaysIcon,
  },
  {
    id: "fullstack",
    name: "APIs & Data Systems",
    desc: "Experience building composable services and data ingestion pipelines that serve critical environments.",
    icon: ArrowsRightLeftIcon,
  },
  {
    id: "network",
    name: "Platform Infrastructure",
    desc: "Expertise in designing scalable, cloud-native architecture that is automated, modular, and built for developer velocity.",
    icon: Square3Stack3DIcon,
  },
  {
    id: "ce",
    name: "Computer Engineering",
    desc: "I've designed and fabricated complete products. Self-taught in microcontrollers, CAD, 3D printing, and PCB design.",
    icon: CpuChipIcon,
  },
];
</script>

<style scoped>
.border-gradient {
  background: linear-gradient(to right, var(--tw-gradient-stops));
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
