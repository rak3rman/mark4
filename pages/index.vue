<template>
  <div class="h-full">
    <Body class="bg-primary" />
    <RAFBanner />

    <div class="pt-6 pb-16 sm:pb-24">
      <Popover>
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span class="sr-only">RAkerman</span>
                  <img class="h-4 w-auto sm:h-6" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm" alt="" />
                </a>
                <div class="-mr-2 flex items-center md:hidden">
                  <PopoverButton class="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Open main menu</span>
                    <MenuIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
            </div>
            <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <div class="md:space-x-8 pr-6">
                <a v-for="(item, index) in navigation" :key="item.name" :href="item.href" class="font-mono text-accent hover:text-secondary"><span class="text-secondary">{{ '0' + (index + 1) + '. ' }}</span> {{ item.name }}</a>
              </div>
              <span class="inline-flex rounded-md shadow">
                <a href="/resume" class="inline-flex items-center px-4 py-2 border border-secondary text-base font-mono rounded-md text-secondary hover:bg-primary-focus"> Resume </a>
              </span>
            </div>
          </nav>
        </div>

        <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
          <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-neutral ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm" alt="" />
                </div>
                <div class="-mr-2">
                  <PopoverButton class="bg-neutral rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
              </div>
              <a href="/resume" class="block w-full px-5 py-3 text-center font-medium text-secondary bg-gray-50 hover:bg-gray-100"> Resume </a>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>

      <main class="max-w-7xl mx-auto px-4 sm:px-6">
        <!--  Hero Section  -->
        <div class="container mx-auto flex flex-wrap flex-row items-center min-h-screen">
          <div class="flex flex-col w-full justify-center overflow-y-hidden mb-6">
            <p class="py-2 leading-normal text-secondary font-mono text-lg md:text-xl text-left">
              Hi there, my name is
            </p>
            <h1 class="pt-1 pb-1 text-5xl md:text-7xl text-neutral font-bold leading-tight text-left">
              Radison Akerman.
            </h1>
            <p class="py-2 leading-normal text-accent text-lg md:text-xl max-w-2xl text-left">
              I am highly skilled in internet. You might find me solving niche problems with full-blown web applications, out in the middle of nowhere with my camera, learning a random skill, or just cracking a laugh with my friends.
            </p>
            <span class="py-3 inline-flex rounded-md shadow">
              <a href="/resume" class="inline-flex items-center px-4 py-2 border border-secondary text-base leading-normal font-mono rounded-md text-secondary hover:bg-primary-focus"> Check out my lecture at UIC! </a>
            </span>
          </div>
        </div>

        <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">

          <!--  01. About  -->
          <HeaderLine num="01." title="About Me" />

          <!--  02. Experience  -->
          <HeaderLine num="02." title="What I've Worked On" />

          <!--  03. Projects  -->
          <HeaderLine num="03." title="Projects" />

          <!--  04. Contact  -->
          <HeaderLine num="04." title="Get In Touch" />

          <!--  Footer  -->
          <div class="w-full pt-16 text-sm text-center md:text-left fade-in">
            <h1 class="text-neutral opacity-70 pb-1 md:float-left md:mr-1">&copy; Radison Akerman {{new Date().getFullYear()}}.</h1>
            <h1 class="text-neutral opacity-70 pb-1 md:float-left md:mr-1">Designed and built from scratch.</h1>
            <h1 class="text-neutral opacity-70 pb-1 md:float-right"><a href="https://github.com/rak3rman/mark4">Mark 4. Release {{ config.public.gitMasterTag }}.</a></h1>
          </div>

        </div>
      </main>
    </div>

  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const config = useRuntimeConfig()

const navigation = [
  { name: 'About', href: '#' },
  { name: 'Experience', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'Contact', href: '#' },
]
</script>s
