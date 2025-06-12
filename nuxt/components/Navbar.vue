<!--
  Navbar Component
  
  A responsive navigation bar with intersection observer functionality.
  Features dynamic styling based on scroll position and active sections.
  
  @props {Array} nav_elements - Array of navigation items with name, href, and optional is_cta
  @props {Boolean} has_hero - Whether the page has a hero section to observe
  @props {Boolean} nav_listen - Whether to listen for section changes for navigation highlighting
-->
<template>
  <div
    class="fixed left-0 right-0 top-0 z-50 border-b-[1px] transition duration-300 ease-in"
    :class="{
      'border-accent/[0.02]': activeSection === 'hero',
      'backdrop-saturate-150 border-accent/[0.15] bg-base-200/[0.8] backdrop-blur-xl':
        activeSection !== 'hero',
    }"
  >
    <ContentContainer class="py-2">
      <nav
        class="relative flex items-center justify-between text-[13px] sm:h-10 md:justify-center"
      >
        <!-- Logo and mobile CTA section -->
        <div
          class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0"
        >
          <div class="flex w-full items-center justify-between md:w-auto">
            <!-- Logo -->
            <NuxtLink
              to="/"
              class="fade-in-nav flex items-center"
              @click="scrollToTop"
            >
              <ImageDelivery
                class="mb-[1.5px] h-[1.3rem] w-auto"
                id="874f0866-25fb-4224-cc22-205d60921800"
                alt="RAkerman Logo"
                type="logo"
                :loading="'eager'"
              />
              <div
                class="pl-3 pt-[0.3px] text-[1.1rem] font-medium leading-none text-primary md:text-[1.2rem]"
              >
                Radison Akerman
              </div>
            </NuxtLink>

            <!-- Mobile CTA button -->
            <div
              class="fade-in-nav my-1 -mr-1 flex items-center md:hidden"
              :style="{ 'transition-delay': 100 + 'ms' }"
            >
              <NuxtLink
                v-for="section in ctaElements"
                :key="section.name"
                :to="section.href"
                :target="section.target || '_self'"
              >
                <ButtonPillSolidSmall>{{ section.name }}</ButtonPillSolidSmall>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Desktop navigation -->
        <div
          class="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end"
        >
          <!-- Navigation links -->
          <div class="space-x-9 pr-7">
            <NuxtLink
              v-for="(section, index) in navElements"
              :key="section.name"
              :to="section.href"
              :target="section.target || '_self'"
              :style="{
                'transition-delay': (navLoaded ? 50 : index * 100 + 300) + 'ms',
              }"
              class="fade-in-nav text-accent hover:text-primary"
              :class="{
                'text-secondary': '#' + activeSection === section.href,
              }"
            >
              {{ section.name }}
            </NuxtLink>
          </div>

          <!-- Desktop CTA button -->
          <span
            class="fade-in-nav inline-flex"
            :style="{
              'transition-delay':
                (navLoaded ? 50 : navElements.length * 100 + 300) + 'ms',
            }"
          >
            <NuxtLink
              v-for="section in ctaElements"
              :key="section.name"
              :to="section.href"
              :target="section.target || '_self'"
            >
              <ButtonPillSolidSmall>{{ section.name }}</ButtonPillSolidSmall>
            </NuxtLink>
          </span>
        </div>
      </nav>
    </ContentContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

// Types
interface NavElement {
  name: string;
  href: string;
  target?: string;
  is_cta?: boolean;
}

// Component props with validation
const props = defineProps({
  nav_elements: {
    type: Array as PropType<NavElement[]>,
    required: true,
    validator: (value: NavElement[]) => {
      return value.every((e) => e.name && e.href);
    },
  },
  has_hero: {
    type: Boolean,
    default: false,
  },
  nav_listen: {
    type: Boolean,
    default: false,
  },
});

// Reactive state
const activeSection = ref<string>("hero");
const navLoaded = ref<boolean>(false);

// Computed properties
const navElements = computed(() => props.nav_elements.filter((e) => !e.is_cta));
const ctaElements = computed(() => props.nav_elements.filter((e) => e.is_cta));

// Intersection observers
let heroObserver: IntersectionObserver | null = null;
let navObserver: IntersectionObserver | null = null;

/**
 * Scrolls to the top of the page smoothly
 */
const scrollToTop = (): void => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

/**
 * Sets up intersection observer for hero section
 */
const setupHeroObserver = (): void => {
  if (!props.has_hero) return;

  heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        } else if (!props.nav_listen) {
          activeSection.value = "content";
        }
      });
    },
    {
      threshold: [0],
      rootMargin: "-80% 0% 0% 0%",
    },
  );

  const heroElement = document.querySelector("#hero");
  if (heroElement) {
    heroObserver.observe(heroElement);
  }
};

/**
 * Sets up intersection observer for navigation sections
 */
const setupNavObserver = (): void => {
  if (!props.nav_listen) return;

  navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      threshold: [0],
      rootMargin: "-20% 0% -20% 0%",
    },
  );

  navElements.value.forEach((section) => {
    const element = document.querySelector(section.href);
    if (element) {
      navObserver?.observe(element);
    }
  });
};

/**
 * Sets up navigation load animation timing
 */
const setupNavLoadTiming = (): void => {
  setTimeout(
    () => {
      navLoaded.value = true;
    },
    props.nav_elements.length * 100 + 300,
  );
};

// Lifecycle hooks
onMounted(() => {
  setupHeroObserver();
  setupNavObserver();
  setupNavLoadTiming();
});

onBeforeUnmount(() => {
  heroObserver?.disconnect();
  navObserver?.disconnect();
});
</script>
