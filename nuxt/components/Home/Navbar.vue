<template>
  <div
    class="fixed left-0 right-0 top-0 z-50 border-b-[1px] backdrop-blur-xl backdrop-saturate-150 transition delay-100 duration-300 ease-in"
    :class="{
      'border-accent/[0.02] bg-base-100/[0.8]': activeSection === 'hero',
      'border-accent/[0.15] bg-base-200/[0.8]': activeSection !== 'hero',
    }"
  >
    <div class="mx-auto max-w-7xl px-4 py-2 sm:px-6">
      <nav
        class="relative flex items-center justify-between text-[13px] sm:h-10 md:justify-center"
      >
        <div
          class="flex flex-1 items-center md:absolute md:inset-y-0 md:left-0"
        >
          <div class="flex w-full items-center justify-between md:w-auto">
            <NuxtLink to="/" class="fade-in-nav flex items-center">
              <NuxtImg
                class="mb-[1px] h-[1.3rem] w-auto"
                src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/874f0866-25fb-4224-cc22-205d60921800/sm"
                alt="RAkerman Logo"
              />
              <div
                class="pl-3 text-[1.1rem] font-medium leading-none text-primary md:text-[1.2rem]"
              >
                Radison Akerman
              </div>
            </NuxtLink>
            <div
              class="fade-in-nav my-1 -mr-1 flex items-center md:hidden"
              :style="{ 'transition-delay': 100 + 'ms' }"
            >
              <NuxtLink href="/radison-akerman-resume.pdf" target="_blank">
                <ButtonPillSolidSmall>Resume</ButtonPillSolidSmall>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div
          class="hidden md:absolute md:inset-y-0 md:right-0 md:flex md:items-center md:justify-end"
        >
          <div class="space-x-9 pr-7">
            <NuxtLink
              v-for="(section, index) in props.navigation.filter(
                (e) => e.type === 'text',
              )"
              :key="section.name"
              :to="section.href"
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
                  : props.navigation.filter((e) => e.type !== 'hidden').length *
                      100 +
                    300) + 'ms',
            }"
          >
            <NuxtLink
              :href="section.href"
              target="_blank"
              v-for="section in props.navigation.filter(
                (e) => e.type === 'button',
              )"
            >
              <ButtonPillSolidSmall>{{ section.name }}</ButtonPillSolidSmall>
            </NuxtLink>
          </span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  navigation: Object,
});

const activeSection = ref("hero");
const navLoaded = ref(false);

let observer = null;
let elements = [];

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      threshold: [0],
      rootMargin: "-20%",
    },
  );

  elements = props.navigation.map((section) => {
    const el = document.querySelector(section.href);
    observer.observe(el);
    return el;
  });

  setTimeout(
    () => {
      navLoaded.value = true;
    },
    props.navigation.filter((e) => e.type !== "hidden").length * 100 + 300,
  );
});

onBeforeUnmount(() => {
  elements.forEach((el) => observer.unobserve(el));
});
</script>
