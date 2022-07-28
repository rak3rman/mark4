<template>
  <div>
    <Header num="03." title="Projects" id="projects" />
    <!--  Featured Projects  -->
    <div class="overflow-hidden lg:bg-transparent mt-6" v-for="(project, index) in featuredProjects">
      <div class="wrap mx-auto">
        <div class="grid grid-cols-10 ">
          <div class="row-span-full col-span-8 md:col-span-6 self-center -m-2" :class="index % 2 === 0 ? 'col-start-1 md:col-start-1' : 'col-start-3 md:col-start-5'">
            <img class="object-cover rounded-lg" :src="project.links.images[0]" alt="">
          </div>
          <div class="row-span-full col-span-9 md:col-span-5 self-center" :class="index % 2 === 0 ? 'text-right col-end-11 md:col-end-11' : 'text-left col-end-9 md:col-end-6'">
            <h6 class="text-secondary font-mono text-md mb-1 mx-3">
              {{ project.made_at }}
            </h6>
            <h6 class="text-neutral text-3xl mb-5 mx-3">
              {{ project.title }}
            </h6>
            <div class="p-4 bg-transparent md:bg-primary-focus backdrop-brightness-[0.4] backdrop-blur-[1.5px] shadow-xl rounded-lg mb-3">
              <h6 class="text-accent text-md">
                {{ project.desc }}
              </h6>
            </div>
            <div class="flex flex-wrap text-xs text-accent font-light font-mono mb-1" :class="index % 2 === 0 ? 'flex-row-reverse' : ''">
              <h6 v-for="tool in project.tools" :class="index % 2 === 0 ? 'pr-4' : 'pl-3'">{{ tool }}</h6>
            </div>
            <div class="flex mx-3" :class="index % 2 === 0 ? 'float-right' : 'float-left'">
              <a class="transition ease-in-out duration-300 hover:text-secondary" :href="project.links.youtube" v-if="project.links.youtube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="h-7 w-7 mt-2 mr-2.5">
                  <title>YouTube</title>
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                </svg>
              </a>
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
    <div class="pt-12 pb-4">
      <h6 class="text-3xl text-neutral font-bold leading-tight text-left">
        Other neat stuff
      </h6>
      <h6 class="pt-1 text-md text-secondary font-mono text-left">
        Mighty projects. Huge breadth. <br> May blow your socks off.
      </h6>
    </div>
    <ul role="list" class="mt-4 grid grid-cols-1 lg:grid-cols-3 -m-3 list-none p-0">
      <li v-for="(project, index) in noteworthyProjects" class="col-span-1 flex flex-col space-y-8 pb-0">
        <div class="flex-1 flex flex-col rounded-lg p-8 shadow-md ring-1 ring-primary-focus m-3" :class="index > 5 ? 'hidden lg:flex' : ''">
          <div class="flex items-center mb-4 flow-root">
            <FolderIcon class="h-12 w-12 text-secondary float-left" aria-hidden="true" />
            <div class="float-right flex">
              <a class="transition ease-in-out duration-300 hover:text-secondary" :href="project.links.youtube" v-if="project.links.youtube">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="h-7 w-7 mt-2 mr-2.5">
                  <title>YouTube</title>
                  <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                </svg>
              </a>
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
<!--    <div class="pt-12 pb-4">-->
<!--      <NuxtLink to="/projects" class="flex justify-center pt-1 text-md text-secondary font-mono text-center">-->
<!--        (But wait, there is more) <br> View all {{ allProjects.length }} projects&nbsp&rarr;-->
<!--      </NuxtLink>-->
<!--    </div>-->
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