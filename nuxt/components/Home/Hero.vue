<!--
  Home Hero Component
  Primary landing component with introduction, portrait, and call-to-action button
  
  Props:
  - buttonText (string, optional): Text for the call-to-action button
  - buttonUrl (string, optional): URL for the call-to-action button
  
  Features:
  - Responsive design with different layouts for mobile and desktop
  - Animated fade-in sequence with staggered timings
  - Portrait SVG integration
  - MDC slot content support
-->
<template>
  <BaseHero :arrow-delay="700">
    <!-- Main grid layout -->
    <div class="mt-8 grid w-full grid-cols-5 gap-8">
      <!-- Desktop portrait section -->
      <div
        class="fade-in-hero -my-6 -ml-7 -mr-6 hidden items-center justify-center lg:col-span-2 lg:col-start-4 lg:row-start-1 lg:flex"
        :style="{ 'transition-delay': 600 + 'ms' }"
      >
        <SvgPortrait1 class="max-w-full opacity-80" />
      </div>

      <!-- Content section -->
      <div class="col-span-5 flex items-center sm:col-span-4 lg:col-span-3">
        <!-- Mobile background portrait -->
        <SvgPortrait1
          class="absolute left-[18%] w-[130%] pb-48 opacity-10 lg:hidden"
          style="transform: rotateY(180deg)"
        />

        <!-- Text content -->
        <div class="flex w-full flex-col justify-center overflow-y-hidden">
          <!-- Greeting -->
          <h6
            class="fade-in-hero py-1 text-left font-mono text-[17px] leading-normal text-secondary md:py-2 md:text-xl"
            :style="{ 'transition-delay': 300 + 'ms' }"
          >
            Hi there, my name is
          </h6>

          <!-- Name -->
          <h6
            class="fade-in-hero py-0 text-left text-4xl font-bold leading-tight text-primary md:py-1 md:text-6xl"
            :style="{ 'transition-delay': 400 + 'ms' }"
          >
            Radison Akerman.
          </h6>

          <!-- Description slot -->
          <h6
            class="fade-in-hero py-2 text-left text-[1.1rem] leading-normal text-accent md:text-lg"
            :style="{ 'transition-delay': 500 + 'ms' }"
          >
            <slot mdc-unwrap="p" />
          </h6>

          <!-- Call-to-action button -->
          <div
            class="fade-in-hero mb-2 hidden items-center py-1 text-left text-accent sm:flex sm:py-2"
            :style="{ 'transition-delay': (pageLoaded ? 0 : 600) + 'ms' }"
            v-if="buttonText"
          >
            <NuxtLink :to="buttonUrl">
              <ButtonPillOutlineLarge>
                {{ buttonText }}
                <ChevronRightIcon class="-mr-1 h-5 w-5" />
              </ButtonPillOutlineLarge>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </BaseHero>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/16/solid";

interface Props {
  buttonText?: string;
  buttonUrl?: string;
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: undefined,
  buttonUrl: undefined,
});

const pageLoaded = ref(false);

onMounted(() => {
  setTimeout(() => {
    pageLoaded.value = true;
  }, 600);
});
</script>
