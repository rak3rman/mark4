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
      <div class="fade-in flex items-center justify-between pb-4 pt-12">
        <div>
          <div class="text-left text-3xl leading-tight text-neutral">
            Other Neat Stuff
          </div>
          <div class="text-md pt-1 text-left font-mono text-secondary">
            Mighty projects. Huge breadth. <br />
            May blow your socks off.
          </div>
        </div>
        <div class="flex space-x-3 pr-2">
          <a>
            <Squares2X2Icon
              class="h-6 w-6 transition duration-300 ease-in-out hover:text-secondary"
              :class="{ 'text-secondary': grid }"
              @click="grid = true"
            />
          </a>
          <a>
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
