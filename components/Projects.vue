<template>
  <div>
    <Header num="03." title="Projects" id="projects" />
    <!--  Featured Projects  -->
    <div class="overflow-hidden lg:bg-transparent mt-6" v-for="(project, index) in featuredProjects">
      <div class="wrap mx-auto">
        <div class="grid grid-cols-10 ">
          <div class="row-span-full col-span-6 self-center -m-2" :class="index % 2 === 0 ? 'col-start-1' : 'col-start-5'">
            <img class="object-cover rounded-lg" :src="project.links.images[0]" alt="">
          </div>
          <div class="row-span-full col-span-5 self-center" :class="index % 2 === 0 ? 'text-right col-end-11' : 'text-left col-end-6'">
            <p class="text-secondary font-mono text-md mb-1 mx-3">
              Featured Project
            </p>
            <h1 class="text-neutral text-3xl mb-5 mx-3">
              {{ project.title }}
            </h1>
            <div class="p-4 bg-primary-focus shadow-xl rounded-lg mb-3">
              <p class="text-accent text-md">
                {{ project.desc }}
              </p>
            </div>
            <div class="flex flex-wrap text-xs text-accent font-light font-mono mb-1" :class="index % 2 === 0 ? 'flex-row-reverse' : ''">
              <p v-for="tool in project.tools" :class="index % 2 === 0 ? 'pr-4' : 'pl-3'">{{ tool }}</p>
            </div>
            <div class="flex mx-3" :class="index % 2 === 0 ? 'float-right' : 'float-left'">
              <a class="transition ease-in-out duration-300 hover:text-secondary" :href="project.links.github" v-if="project.links.github">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mt-3 mr-2.5">
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a class="transition ease-in-out duration-300 hover:text-secondary" :href="project.links.ext" v-if="project.links.ext">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 mt-2">
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  Noteworthy Projects  -->
    <ul role="list" class="mt-4 grid grid-cols-1 lg:grid-cols-3 -m-3">
      <li v-for="(project, index) in noteworthyProjects" class="col-span-1 flex flex-col space-y-8">
        <div class="flex-1 flex flex-col rounded-lg p-8 shadow-md ring-1 ring-primary-focus m-3" :class="index > 5 ? 'hidden lg:flex' : ''">
          <div class="flex items-center mb-4 flow-root">
            <FolderIcon class="h-12 w-12 text-secondary float-left" aria-hidden="true" />
            <div class="float-right flex">
              <a class="transition ease-in-out duration-300 hover:text-secondary" :href="project.links.github" v-if="project.links.github">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 mt-3 mr-2.5">
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a class="transition ease-in-out duration-300 hover:text-secondary" :href="project.links.ext" v-if="project.links.ext">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6 mt-2">
                  <title>External Link</title>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            </div>
          </div>
          <p class="text-lg font-medium tracking-tight leading-6 text-neutral">
            {{ project.title }}
          </p>
          <p class="mt-1.5 text-sm text-accent">
            {{ project.sub }}
          </p>
          <div class="flex flex-grow items-end mt-1.5">
            <div class="flex flex-wrap text-xs text-accent font-light font-mono">
              <p v-for="tool in project.tools" class="pr-2.5">{{ tool }}</p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { FolderIcon } from '@heroicons/vue/outline'
</script>

<script>
import projects from '../assets/projects.json'

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