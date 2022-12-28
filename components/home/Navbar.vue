<template>
  <Popover class="fixed top-0 left-0 right-0 backdrop-blur-xl z-10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <nav class="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
        <div class="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="/" class="fade-in-nav">
              <span class="sr-only">RAkerman</span>
              <img class="h-5 w-auto sm:h-6" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm" alt="RAkerman Logo" />
            </a>
            <div class="-mr-2 flex items-center md:hidden fade-in-nav" :style="{ 'transition-delay': 100 + 'ms' }">
              <PopoverButton class="bg-primary-focus rounded-md p-2 inline-flex items-center justify-center text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
        </div>
        <div class="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
          <div class="md:space-x-8 pr-6">
            <NuxtLink
                v-for="(item, index) in navigation"
                :key="item.name"
                :to="item.href"
                :style="{ 'transition-delay': index*100+300 + 'ms' }"
                class="font-mono text-sm text-accent hover:text-secondary fade-in-nav">
              <span class="text-secondary">
                {{ '0' + (index + 1) + '. ' }}
              </span>
              {{ item.name }}
            </NuxtLink>
          </div>
          <span class="inline-flex rounded-md shadow fade-in-nav" :style="{ 'transition-delay': navigation.length*100+300 + 'ms' }">
            <NuxtLink to="/resume.pdf" target="_blank" class="inline-flex items-center px-4 py-2 border border-secondary text-sm font-mono rounded-md text-secondary hover:bg-primary-focus"> Resume </NuxtLink>
          </span>
        </div>
      </nav>
    </div>

    <transition enter-active-class="duration-150 ease-out" enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100" leave-active-class="duration-100 ease-in" leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
      <PopoverPanel focus class="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div class="rounded-lg shadow-md bg-primary-focus ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div class="px-5 pt-4 flex items-center justify-between">
            <div>
              <img class="h-5 w-auto" src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm" alt="RAkerman Logo" />
            </div>
            <div class="-mr-2">
              <PopoverButton class="bg-primary rounded-md p-2 inline-flex items-center justify-center text-accent hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="px-2 pt-2 pb-3">
            <PopoverButton v-for="(item, index) in navigation" class="block w-full text-left">
              <NuxtLink :key="item.name" :to="item.href" :class="'delay-[' + index*100 + ']'" class="block px-3 py-2 rounded-md text-base font-mono text-accent hover:text-secondary hover:bg-primary"><span class="text-secondary">{{ '0' + (index + 1) + '. ' }}</span> {{ item.name }}</NuxtLink>
            </PopoverButton>
          </div>
          <NuxtLink to="/resume.pdf" target="_blank" class="block w-full px-5 py-3 text-center font-medium text-neutral bg-secondary"> Resume </NuxtLink>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
</script>