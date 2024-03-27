<template>
  <div
    class="fixed left-0 right-0 top-0 z-50 border-b-[1px] backdrop-blur-xl backdrop-saturate-150 transition delay-100 duration-300 ease-in"
    :class="{
      'border-accent/[0.05] bg-base-100/[0.8]': activeSection === 'hero',
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
            <NuxtLink to="/" class="fade-in-nav">
              <span class="sr-only">RAkerman</span>
              <NuxtImg
                class="h-5 w-auto"
                src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/7ed7598b-5520-4e18-5159-daa458739b00/sm"
                alt="RAkerman Logo"
              />
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
              v-for="(item, index) in navigation"
              :key="item.name"
              :to="item.href"
              :style="{
                'transition-delay': (navLoaded ? 50 : index * 100 + 300) + 'ms',
              }"
              class="fade-in-nav text-accent hover:text-primary"
              :class="{ 'text-secondary': '#' + activeSection === item.href }"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
          <span
            class="fade-in-nav inline-flex"
            :style="{
              'transition-delay':
                (navLoaded ? 50 : navigation.length * 100 + 300) + 'ms',
            }"
          >
            <NuxtLink href="/radison-akerman-resume.pdf" target="_blank">
              <ButtonPillSolidSmall>Resume</ButtonPillSolidSmall>
            </NuxtLink>
          </span>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
const navigation = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  //  { name: "Photo", href: "#photography" },
  { name: "Contact", href: "#contact" },
];

const activeSection = ref("hero");
const navLoaded = ref(false);

let observer = null;
let elements = [];

onMounted(() => {
  const targets = [...navigation, { href: "#hero" }];

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id;
        }
      });
    },
    {
      //      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      rootMargin: "-300px",
    },
  );

  elements = targets.map((target) => {
    const el = document.querySelector(target.href);
    observer.observe(el);
    return el;
  });

  setTimeout(
    () => {
      navLoaded.value = true;
    },
    navigation.length * 100 + 300,
  );
});

onBeforeUnmount(() => {
  elements.forEach((el) => observer.unobserve(el));
});
</script>
