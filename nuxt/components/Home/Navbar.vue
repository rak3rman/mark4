<template>
  <Popover class="fixed left-0 right-0 top-0 z-50 backdrop-blur-xl">
    <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6">
      <nav
        class="relative flex items-center justify-between sm:h-10 md:justify-center"
        aria-label="Global"
      >
        <div
          class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0"
        >
          <div class="flex w-full items-center justify-between md:w-auto">
            <NuxtLink to="/" class="fade-in-nav">
              <span class="sr-only">RAkerman</span>
              <NuxtImg
                class="h-5 w-auto sm:h-6"
                src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm"
                alt="RAkerman Logo"
              />
            </NuxtLink>
            <div
              class="fade-in-nav -mr-2 flex items-center md:hidden"
              :style="{ 'transition-delay': 100 + 'ms' }"
            >
              <PopoverButton
                class="inline-flex items-center justify-center rounded-md bg-base-100-focus p-2 text-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
              >
                <span class="sr-only">Open main menu</span>
                <Bars3Icon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
        </div>
        <div
          class="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end"
        >
          <div class="pr-6 md:space-x-6 lg:space-x-8">
            <NuxtLink
              v-for="(item, index) in navigation"
              :key="item.name"
              :to="item.href"
              :style="{ 'transition-delay': index * 100 + 300 + 'ms' }"
              class="fade-in-nav font-mono text-sm text-accent hover:text-secondary"
            >
              <span class="hidden text-secondary lg:inline">
                {{ "0" + (index + 1) + ". " }}
              </span>
              {{ item.name }}
            </NuxtLink>
          </div>
          <span
            class="fade-in-nav inline-flex rounded-md shadow"
            :style="{
              'transition-delay': navigation.length * 100 + 300 + 'ms',
            }"
          >
            <NuxtLink
              to="/radison-akerman-resume.pdf"
              target="_blank"
              class="inline-flex items-center rounded-md border border-secondary px-4 py-2 font-mono text-sm text-secondary hover:bg-base-100-focus"
            >
              Resume
            </NuxtLink>
          </span>
        </div>
      </nav>
    </div>

    <transition
      enter-active-class="duration-150 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        focus
        v-slot="{ close }"
        class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
      >
        <div
          class="overflow-hidden rounded-lg bg-base-100-focus shadow-md ring-1 ring-black ring-opacity-5"
        >
          <div class="flex items-center justify-between px-5 pt-4">
            <NuxtLink to="/">
              <span class="sr-only">RAkerman</span>
              <NuxtImg
                class="h-5 w-auto"
                src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm"
                alt="RAkerman Logo"
              />
            </NuxtLink>
            <div class="-mr-2">
              <PopoverButton
                class="inline-flex items-center justify-center rounded-md bg-base-100 p-2 text-accent hover:bg-base-100-focus focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
          <div class="px-2 pb-3 pt-2">
            <div
              v-for="(item, index) in navigation"
              class="block w-full text-left"
              @click="close()"
            >
              <NuxtLink
                :key="item.name"
                :to="item.href"
                :class="'delay-[' + index * 100 + ']'"
                class="block rounded-md px-3 py-2 font-mono text-base text-accent hover:bg-base-100 hover:text-secondary"
              >
                <span class="text-secondary">{{
                  "0" + (index + 1) + ". "
                }}</span>
                {{ item.name }}
              </NuxtLink>
            </div>
          </div>
          <NuxtLink
            to="/radison-akerman-resume.pdf"
            target="_blank"
            class="block w-full bg-secondary px-5 py-3 text-center font-medium text-neutral"
          >
            Resume
          </NuxtLink>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  //  { name: "Photo", href: "#photography" },
  { name: "Contact", href: "#contact" },
];
</script>
