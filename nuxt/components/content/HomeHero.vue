<template>
  <div class="relative overflow-hidden" id="hero">
    <VerticalSpacer
      class="container flex min-h-[90vh] items-center sm:min-h-screen"
    >
      <div class="mt-8 grid w-full grid-cols-5 gap-8">
        <div
          class="fade-in-hero -my-6 -ml-7 -mr-6 hidden items-center justify-center lg:col-span-2 lg:col-start-4 lg:row-start-1 lg:flex"
          :style="{ 'transition-delay': 600 + 'ms' }"
        >
          <SvgPortrait1 class="max-w-full opacity-80" />
        </div>
        <div class="col-span-5 flex items-center sm:col-span-4 lg:col-span-3">
          <SvgPortrait1
            class="absolute left-[18%] w-[130%] pb-48 opacity-10 lg:hidden"
            style="transform: rotateY(180deg)"
          />
          <div class="flex w-full flex-col justify-center overflow-y-hidden">
            <h6
              class="fade-in-hero py-1 text-left font-mono text-[17px] leading-normal text-secondary md:py-2 md:text-xl"
              :style="{ 'transition-delay': 300 + 'ms' }"
            >
              Hi there, my name is
            </h6>
            <h6
              class="fade-in-hero py-0 text-left text-4xl font-bold leading-tight text-primary md:py-1 md:text-6xl"
              :style="{ 'transition-delay': 400 + 'ms' }"
            >
              Radison Akerman.
            </h6>
            <h6
              class="fade-in-hero py-2 text-left text-[1.1rem] leading-normal text-accent md:text-lg"
              :style="{ 'transition-delay': 500 + 'ms' }"
            >
              <ContentSlot :use="$slots.default" unwrap="p" />
            </h6>
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
    </VerticalSpacer>
    <div
      class="fade-in-hero absolute bottom-[7%] left-0 right-0 flex w-full justify-center"
      :style="{ 'transition-delay': 700 + 'ms' }"
    >
      <ChevronDoubleDownIcon
        :class="[
          'h-7 w-7 transition-opacity duration-500 md:h-8 md:w-8',
          isMuted ? 'opacity-20' : 'opacity-100',
          'text-neutral',
        ]"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ChevronRightIcon } from "@heroicons/vue/16/solid";
import { ChevronDoubleDownIcon } from "@heroicons/vue/24/solid";

const pageLoaded = ref(false);
const isMuted = ref(false);

const props = defineProps({
  buttonText: {
    type: String,
  },
  buttonUrl: {
    type: String,
  },
});

let observer;

onMounted(() => {
  setTimeout(() => {
    pageLoaded.value = true;
  }, 600);

  const hero = document.getElementById("hero");
  observer = new window.IntersectionObserver(
    ([entry]) => {
      isMuted.value = !entry.isIntersecting && entry.boundingClientRect.top < 0;
    },
    { threshold: 0.3 },
  );
  if (hero) observer.observe(hero);
});

onBeforeUnmount(() => {
  if (observer) observer.disconnect();
});
</script>
