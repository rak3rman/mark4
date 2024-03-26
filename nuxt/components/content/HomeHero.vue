<template>
  <div
    id="hero"
    class="container relative mx-auto max-w-7xl overflow-hidden px-4 sm:px-6"
  >
    <div class="container mx-auto flex min-h-screen items-center">
      <div class="mt-8 w-full lg:grid lg:grid-cols-5 lg:gap-8">
        <div
          class="fade-in-hero hidden items-center justify-center lg:col-span-2 lg:col-start-4 lg:row-start-1 lg:flex"
          :style="{ 'transition-delay': 600 + 'ms' }"
        >
          <SvgPortrait1 class="max-w-full opacity-80" />
        </div>
        <div class="flex items-center lg:col-span-3">
          <SvgPortrait1
            class="absolute left-[18%] w-[130%] pb-48 opacity-10 lg:hidden"
            style="transform: rotateY(180deg)"
          />
          <div class="flex w-full flex-col justify-center overflow-y-hidden">
            <h6
              class="fade-in-hero py-2 text-left font-mono text-lg leading-normal text-secondary md:text-xl"
              :style="{ 'transition-delay': 300 + 'ms' }"
            >
              Hi there, my name is
            </h6>
            <h6
              class="fade-in-hero pb-1 pt-1 text-left text-4xl font-bold leading-tight text-neutral md:text-6xl"
              :style="{ 'transition-delay': 400 + 'ms' }"
            >
              Radison Akerman.
            </h6>
            <h6
              class="fade-in-hero max-w-2xl py-2 text-left text-[1.1rem] leading-normal text-accent md:text-lg"
              :style="{ 'transition-delay': 500 + 'ms' }"
            >
              <ContentSlot :use="$slots.default" unwrap="p" />
            </h6>
            <NuxtLink
              to="https://chickens.rakerman.com"
              class="fade-in-hero flex max-w-2xl items-center py-2"
              :style="{ 'transition-delay': 600 + 'ms' }"
            >
              <ButtonPillOutlineLarge
                class="border-warning text-warning hover:border-accent hover:text-accent"
                >Exploding Chickens: Celebrating 1,250+ Games Played!
                <ChevronRightIcon class="-mr-1 h-5 w-5" />
              </ButtonPillOutlineLarge>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/16/solid";
</script>
