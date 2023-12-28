<template>
  <div>
    <!--    Quickview     -->
    <ProjectsQuickview
      :show="quick_show"
      :proj="quick_proj"
      @clear="quick_show = false"
    />

    <!--  Featured Projects  -->
    <Header num="03." title="Projects" id="projects" fade />
    <ProjectsFeatured fade />

    <!--  Noteworthy Projects  -->
    <div class="flex items-center justify-between pt-12 pb-4 fade-in">
      <div>
        <div class="text-3xl text-neutral font-bold leading-tight text-left">
          Other Neat Stuff
        </div>
        <div class="pt-1 text-md text-secondary font-mono text-left">
          Mighty projects. Huge breadth. <br />
          May blow your socks off.
        </div>
      </div>
      <div class="flex space-x-3 pr-2">
        <a>
          <Squares2X2Icon
            class="h-6 w-6 transition ease-in-out duration-300 hover:text-secondary"
            :class="{ 'text-secondary': grid }"
            @click="grid = true"
          />
        </a>
        <a>
          <Bars4Icon
            class="h-6 w-6 transition ease-in-out duration-300 hover:text-secondary"
            :class="{ 'text-secondary': !grid }"
            @click="grid = false"
          />
        </a>
      </div>
    </div>

    <!--    Grid/List     -->
    <ProjectsGrid
      v-if="grid"
      @quick="
        (proj) => {
          quick_proj = proj;
          quick_show = true;
        }
      "
    />
    <ProjectsList
      v-else
      @quick="
        (proj) => {
          quick_proj = proj;
          quick_show = true;
        }
      "
    />
  </div>
</template>

<script setup>
import { Squares2X2Icon, Bars4Icon } from "@heroicons/vue/20/solid";

const grid = ref(true);

const quick_proj = ref(null);
const quick_show = ref(false);
</script>