<template>
  <div
    class="fixed left-0 right-0 top-0 z-50 border-b-[1px] transition duration-300 ease-in"
    :class="{
      'border-accent/[0.02]': activeSection === 'hero',
      'border-accent/[0.15] bg-base-200/[0.8] backdrop-blur-xl backdrop-saturate-150':
        activeSection !== 'hero',
    }"
  >
    <ContentContainer class="py-2">
      <nav
        class="relative flex items-center justify-between text-[13px] sm:h-10 md:justify-center"
      >
        <div
          class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0"
        >
          <div class="flex w-full items-center justify-between md:w-auto">
            <NuxtLink to="/" class="fade-in-nav flex items-center">
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
            <div
              class="fade-in-nav my-1 -mr-1 flex items-center md:hidden"
              :style="{ 'transition-delay': 100 + 'ms' }"
            >
              <NuxtLink
                :to="section.href"
                :target="section.target || '_self'"
                v-for="section in props.nav_elements.filter((e) => e.is_cta)"
              >
                <ButtonPillSolidSmall>{{ section.name }}</ButtonPillSolidSmall>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end"
        >
          <div class="space-x-9 pr-7">
            <NuxtLink
              v-for="(section, index) in props.nav_elements.filter(
                (e) => !e.is_cta,
              )"
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
          <span
            class="fade-in-nav inline-flex"
            :style="{
              'transition-delay':
                (navLoaded
                  ? 50
                  : props.nav_elements.filter((e) => !e.is_cta).length * 100 +
                    300) + 'ms',
            }"
          >
            <NuxtLink
              :to="section.href"
              :target="section.target || '_self'"
              v-for="section in props.nav_elements.filter((e) => e.is_cta)"
            >
              <ButtonPillSolidSmall>{{ section.name }}</ButtonPillSolidSmall>
            </NuxtLink>
          </span>
        </div>
      </nav>
    </ContentContainer>
  </div>
</template>

<script setup>
const props = defineProps({
  nav_elements: {
    type: Array,
    validator(value, props) {
      return value.every((e) => e.name && e.href);
    },
    required: true,
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

const activeSection = ref("hero");
const navLoaded = ref(false);

let hero_observer = null;
let nav_observer = null;

onMounted(() => {
  if (props.has_hero) {
    hero_observer = new IntersectionObserver(
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
      hero_observer.observe(heroElement);
    }
  }

  if (props.nav_listen) {
    nav_observer = new IntersectionObserver(
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

    props.nav_elements
      .filter((e) => !e.is_cta)
      .forEach((section) => {
        const el = document.querySelector(section.href);
        if (el) {
          nav_observer.observe(el);
        }
      });
  }

  setTimeout(
    () => {
      navLoaded.value = true;
    },
    props.nav_elements.length * 100 + 300,
  );
});

onBeforeUnmount(() => {
  if (hero_observer) {
    hero_observer.disconnect();
  }
  if (nav_observer) {
    nav_observer.disconnect();
  }
});
</script>
