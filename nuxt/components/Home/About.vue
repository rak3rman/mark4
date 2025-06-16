<!--
  Home About Component
  About section with expandable content and fade/blur effect on mobile
  
  Features:
  - Expandable content on mobile with smooth animation
  - Visual fade/blur gradient for collapsed state
  - "Read more" toggle functionality
  - Automatic reset on component mount
  - Responsive behavior (expansion only on mobile)
-->
<template>
  <HomeWrapper id="about">
    <!-- Section header -->
    <Header
      num="01."
      topic="About"
      title="Relentlessly radical."
      punchline="High impact, high quality."
      description="I'm constantly exploring new ideas, technologies, and methods to create software that genuinely moves the needle."
    />

    <div>
      <!-- Content Text Slot -->
      <div class="relative mx-auto text-accent">
        <!-- Hidden checkbox to control expand/collapse -->
        <input
          id="about-expand"
          type="checkbox"
          class="peer hidden"
          ref="expandCheckbox"
        />

        <!-- Expandable content container -->
        <div
          class="fade-in-expand max-h-[40rem] overflow-hidden transition-all duration-500 ease-in-out peer-checked:max-h-[5000px] md:max-h-none"
        >
          <slot />
        </div>

        <!-- Fade/blur effect at bottom (mobile only) -->
        <div
          class="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-[8rem] peer-checked:hidden md:hidden"
        >
          <!-- Gradient fade -->
          <div
            class="h-full w-full bg-gradient-to-b from-transparent via-base-100/80 to-base-100"
          ></div>

          <!-- Gradual blur with mask -->
          <div
            class="absolute left-0 top-0 h-full w-full backdrop-blur-[2px]"
            style="
              mask-image: linear-gradient(
                to bottom,
                transparent 0%,
                oklch(var(--b1)) 50%,
                oklch(var(--b1)) 100%
              );
              -webkit-mask-image: linear-gradient(
                to bottom,
                transparent 0%,
                oklch(var(--b1)) 50%,
                oklch(var(--b1)) 100%
              );
            "
          ></div>
        </div>

        <!-- Read more button (mobile only) -->
        <label
          for="about-expand"
          class="absolute bottom-2 z-20 flex cursor-pointer items-center items-center border-none bg-transparent px-2.5 py-[14px] text-left font-medium text-white shadow-sm peer-checked:hidden md:hidden"
        >
          Read more
          <ChevronDownIcon class="ml-1 mt-[1px] h-5 w-5 text-white" />
        </label>
      </div>
    </div>
  </HomeWrapper>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/16/solid";

const expandCheckbox = ref<HTMLInputElement | null>(null);

onMounted(() => {
  // Always reset the checkbox to unchecked on mount
  if (expandCheckbox.value) {
    expandCheckbox.value.checked = false;
  }
});
</script>
