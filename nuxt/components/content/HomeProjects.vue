<template>
  <div id="projects">
    <HomeWrapper>
      <!--    Quickview     -->
      <ProjectsQuickview
        :show="quick_show"
        :project="quick_project"
        @clear="quick_show = false"
      />

      <!--  Featured Projects  -->
      <Header num="03." title="Projects" fade />
      <ProjectsFeatured fade />

      <!--  Noteworthy Projects  -->
      <div class="fade-in items-center justify-between pb-4 pt-12 lg:flex">
        <div>
          <div
            class="max-w-5xl text-left text-2xl leading-tight text-neutral md:text-3xl"
          >
            <span class="text-primary"> Projects that have real impact. </span>
            Every project serves as a foundational learning experience, yielding
            cutting-edge applications that solve real-world problems.
          </div>
        </div>
        <div class="mt-5 flex space-x-3 pr-2 lg:ml-5 lg:mt-0">
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

      <!--    Grid/List     -->
      <ProjectsList
        v-if="!grid"
        @quick="
          (project) => {
            quick_project = project;
            quick_show = true;
          }
        "
      />
    </HomeWrapper>
    <ProjectsGrid
      v-if="grid"
      @quick="
        (project) => {
          quick_project = project;
          quick_show = true;
        }
      "
    />
  </div>
</template>

<script setup>
import { Squares2X2Icon, Bars4Icon } from "@heroicons/vue/20/solid";

const grid = ref(true);

const quick_project = ref(null);
const quick_show = ref(false);
</script>
