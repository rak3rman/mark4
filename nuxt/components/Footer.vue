<!--
  Footer Component
  
  Application footer with social navigation links, copyright info, and legal/status links.
  Displays company information with responsive layout and hover effects.
-->
<template>
  <footer class="pt-14">
    <div
      class="pt-8 md:flex md:items-center md:justify-between md:border-t md:border-accent/20"
    >
      <!-- Social navigation links -->
      <div class="flex justify-center space-x-6 md:order-2">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :to="item.href"
          class="text-primary opacity-70 transition duration-300 hover:text-secondary"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
        </NuxtLink>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <!-- Copyright and credits -->
        <div>
          <h6
            class="pb-1 text-center text-sm text-primary opacity-70 md:float-left md:mr-1"
          >
            &copy; Radison Akerman {{ new Date().getFullYear() }}.
          </h6>
          <h6
            class="pb-1 text-center text-sm text-primary opacity-70 md:float-left md:mr-1"
          >
            Designed and built from scratch.
          </h6>
        </div>
        <div>
          <!-- Legal and status links -->
          <div class="flex justify-center md:float-left md:mr-1">
            <h6 class="mr-1 text-center text-sm text-primary opacity-70">
              <Linker href="/privacy">Privacy Policy.</Linker>
            </h6>
            <h6 class="mr-1 text-center text-sm text-primary opacity-70">
              <Linker href="/licensing">Licensing.</Linker>
            </h6>
            <h6 class="text-center text-sm text-primary opacity-70">
              <Linker href="https://status.rakerman.com">Status.</Linker>
            </h6>
          </div>
          <!-- Version info -->
          <div class="flex justify-center md:float-left md:mr-1">
            <h6 class="text-center text-sm text-primary opacity-70">
              <Linker href="https://github.com/rak3rman/mark4"
                >Mark 4 #{{ config.public.gitMasterTag }}
              </Linker>
            </h6>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineComponent, h } from "vue";

// Types
interface NavigationItem {
  name: string;
  href: string;
  icon: ReturnType<typeof defineComponent>;
}

// Runtime configuration
const config = useRuntimeConfig();

/**
 * Social navigation items with their respective icons
 */
const navigation: NavigationItem[] = [
  {
    name: "GitHub",
    href: "https://github.com/rak3rman",
    icon: defineComponent({
      name: "GitHubIcon",
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
            "clip-rule": "evenodd",
          }),
        ]),
    }),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/radison/",
    icon: defineComponent({
      name: "LinkedInIcon",
      render: () =>
        h("svg", { fill: "currentColor", viewBox: "0 0 448 512" }, [
          h("path", {
            "fill-rule": "evenodd",
            d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
            "clip-rule": "evenodd",
          }),
        ]),
    }),
  },
];
</script>
