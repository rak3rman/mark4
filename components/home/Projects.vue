<template>
  <div>
    <Header num="03." title="Projects" id="projects" fade=true />
    <!--  Featured Projects  -->
    <ProjectsFeatured fade=true />

    <!--  Noteworthy Projects  -->
    <div class="pt-12 pb-4 fade-in">
      <h6 class="text-3xl text-neutral font-bold leading-tight text-left">
        Other neat stuff
      </h6>
      <h6 class="pt-1 text-md text-secondary font-mono text-left">
        Mighty projects. Huge breadth. <br> May blow your socks off.
      </h6>
    </div>
    <ul role="list" class="mt-4 grid grid-cols-1 lg:grid-cols-3 -m-3 list-none p-0">
      <li v-for="(project, index) in noteworthyProjects" class="col-span-1 flex flex-col space-y-8 pb-0 fade-in">
        <div class="flex-1 flex flex-col rounded-lg p-8 shadow-md ring-1 ring-primary-focus m-3" :class="index > 5 ? 'hidden lg:flex' : ''">
          <div class="flex items-center mb-4 flow-root">
            <FolderIcon class="h-12 w-12 text-secondary float-left" aria-hidden="true" />
            <div class="float-right flex">
              <ProjectsExtIcons :project="project" />
            </div>
          </div>
          <h6 class="text-lg font-medium tracking-tight leading-6 text-neutral">
            {{ project.title }}
          </h6>
          <h6 class="mt-1.5 text-sm text-accent">
            {{ project.sub }}
          </h6>
          <div class="flex flex-grow items-end mt-1.5">
            <div class="flex flex-wrap text-xs text-accent font-light font-mono">
              <h6 v-for="tool in project.tools" class="pr-2.5">{{ tool }}</h6>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="pt-12 pb-4">
      <NuxtLink to="/projects" class="flex justify-center pt-1 text-md text-secondary font-mono text-center">
        (But wait, there is more) <br> View all {{ allProjects.length }} projects&nbsp&rarr;
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { FolderIcon } from '@heroicons/vue/outline'
</script>

<script>
import projects from '../../assets/projects.json'

export default {
  computed: {
    allProjects() {
      return projects
    },
    featuredProjects() {
      return projects.filter((ele) => ele.is_featured)
    },
    noteworthyProjects() {
      return projects.filter((ele) => !ele.is_featured && !ele.is_archived)
    },
  },
}
</script>