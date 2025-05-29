<template>
  <HomeWrapper id="experience">
    <Header
      num="02."
      topic="Experience"
      title="Redefining <i>full-stack</i>."
      punchline="Technical depth, and breadth."
      description="I'm obsessed with building true end-to-end technical infrastructure and user interfaces."
      fade
    >
      <div>
        <NuxtLink
          to="/radison-akerman-resume.pdf"
          target="_blank"
          class="mr-3 mt-4 inline-flex items-center"
        >
          <ButtonPillOutlineLarge>
            Resume
            <ArrowUpRightIcon class="-mr-1 mb-1.5 ml-0.5 h-3.5 w-3.5" />
          </ButtonPillOutlineLarge>
        </NuxtLink>
        <NuxtLink
          to="/radison-akerman-cv.pdf"
          target="_blank"
          class="mt-4 inline-flex items-center"
        >
          <ButtonPillOutlineLarge>
            Curriculum Vitae
            <ArrowUpRightIcon class="-mr-1 mb-1.5 ml-0.5 h-3.5 w-3.5" />
          </ButtonPillOutlineLarge>
        </NuxtLink>
      </div>
    </Header>
    <div class="mt-4">
      <!-- Resume -->
      <div
        class="relative z-10 float-right hidden max-w-md pb-5 pl-10 pt-[4.8px] lg:block"
      >
        <NuxtLink href="/radison-akerman-resume.pdf" target="_blank">
          <div
            class="-m-2 rounded-xl bg-base-200/60 p-2 ring-1 ring-inset ring-primary/10 lg:-m-4 lg:rounded-2xl lg:p-3"
          >
            <div
              data-theme="dark"
              class="rounded-lg bg-base-200 p-6 shadow-2xl ring-1 ring-accent/10"
            >
              <SummarizeResume
                class="h-[30.3rem] origin-top-left scale-[41%]"
              />
            </div>
          </div>
          <div class="flex justify-center pt-6 text-xs text-neutral">
            <CursorArrowRaysIcon class="h-4 pr-0.5" />
            <i>Click to view a slick, light-mode version of this resume!</i>
          </div>
        </NuxtLink>
      </div>

      <!-- Professional Disciplines -->
      <!-- <Subheader> Professional Disciplines </Subheader> -->
      <div class="z-0">
        <div
          class="mx-auto text-primary lg:col-start-1 lg:row-start-1 lg:max-w-full"
        >
          <div class="w-full">
            <div class="relative w-full" v-for="tab in expTabs" :key="tab.id">
              <div class="items-top absolute inset-0 flex">
                <div
                  class="relative h-[1px] w-full overflow-hidden bg-gradient-to-r from-primary/15 via-primary/5 via-[100%] to-base-100 md:via-[70%]"
                />
              </div>
              <div class="relative justify-start py-8 md:py-[1.3em]">
                <div
                  class="bg-base-100-focus mb-4 block w-9 rounded-lg transition duration-300 ease-in-out sm:mb-0"
                >
                  <div class="flex sm:absolute sm:left-0 sm:mt-1">
                    <svg
                      aria-hidden="true"
                      class="h-9 w-9 rounded-lg bg-base-200 p-[7.5px] transition duration-300 ease-in-out"
                      fill="#fff"
                      :viewBox="tab.viewbox"
                      v-html="tab.icon"
                    ></svg>
                  </div>
                </div>
                <div
                  class="text-md font-medium leading-[1.3em] text-primary transition duration-300 ease-in-out sm:pl-16"
                >
                  <div>
                    <span class="absolute inset-0"></span>
                    {{ tab.name }}
                  </div>
                </div>
                <div class="mt-0.5 leading-[1.4em] text-neutral sm:pl-16">
                  {{ tab.desc }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  Logo Cloud  -->
    <div
      class="w-full pt-[3.6em] text-left text-xl leading-tight text-neutral md:text-2xl lg:pt-24"
    >
      <span class="text-primary">On a quest for quality.</span>
      I thrive in fast-moving, early-stage teams where the pressure's real and
      the product matters. I bring contagious energy, craft under constraint,
      and the kind of care that shows up in the edge cases.
    </div>
    <div
      class="grid w-full grid-cols-2 items-center justify-center gap-x-7 gap-y-10 pt-24 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-14 lg:max-w-none lg:pt-20 lg:pt-[6.5em]"
    >
      <NuxtImg
        class="w-[8rem] object-contain object-left md:w-[10rem]"
        src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/0fc9126a-5a1b-423e-f93d-a41f491cc200/sm"
        alt="Experience Logo White"
      />
      <NuxtImg
        class="w-[10rem] object-contain object-left md:w-[12rem]"
        src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/f163f81d-3b7a-49cc-99a1-41b104077f00/sm"
        alt="Experience Logo White"
      />
      <NuxtImg
        class="w-[10rem] object-contain object-left md:w-[12rem]"
        src="https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/8335dd31-40d0-4178-8a47-4be36065f400/sm"
        alt="Experience Logo White"
      />
    </div>

    <!--Testimonials-->
    <!--<div class="pb-8 pt-12">-->
    <!--  <h6 class="text-left text-3xl font-bold leading-tight text-primary">-->
    <!--    What Others Say-->
    <!--  </h6>-->
    <!--  <h6 class="text-md pt-1 text-left font-mono text-secondary">-->
    <!--    Don't take my word for it.-->
    <!--  </h6>-->
    <!--</div>-->
    <!--<ul role="list" class="-m-3 grid list-none grid-cols-1 p-0 lg:grid-cols-2">-->
    <!--  <li v-for="(group, index) in testimonials" class="mb-3 space-y-6 pb-0">-->
    <!--    <figure-->
    <!--      class="ring-base-100-focus m-3 rounded-lg p-8 shadow-md ring-1"-->
    <!--      v-for="testimonial in group"-->
    <!--      :class="index > 1 ? 'hidden lg:block' : ''"-->
    <!--    >-->
    <!--      <blockquote>-->
    <!--        <h6 class="text-lg tracking-tight text-primary">-->
    <!--          "{{ testimonial.quote }}"-->
    <!--        </h6>-->
    <!--      </blockquote>-->
    <!--      <figcaption class="mt-6 flex items-center">-->
    <!--        <div class="overflow-hidden rounded-full bg-secondary">-->
    <!--          <NuxtImg-->
    <!--            class="h-12 w-12 object-cover"-->
    <!--            :src="-->
    <!--              'https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/' +-->
    <!--              testimonial.img +-->
    <!--              '/sq'-->
    <!--            "-->
    <!--            alt="Image"-->
    <!--          />-->
    <!--        </div>-->
    <!--        <div class="ml-4">-->
    <!--          <div-->
    <!--            class="text-base font-medium leading-6 tracking-tight text-primary"-->
    <!--          >-->
    <!--            {{ testimonial.name }}-->
    <!--          </div>-->
    <!--          <div class="mt-0.5 text-sm text-accent">-->
    <!--            {{ testimonial.title }}-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </figcaption>-->
    <!--    </figure>-->
    <!--  </li>-->
    <!--</ul>-->
  </HomeWrapper>
</template>

<script setup lang="ts">
import { CursorArrowRaysIcon } from "@heroicons/vue/20/solid";
import { ArrowUpRightIcon } from "@heroicons/vue/16/solid";
import { z } from "zod";
import { sortEventDates } from "~/utils/sortEventDates";
import { Experience } from "~/summarize/models/Experience";
import ExperiencesJSON from "~/summarize/data/experiences.json";
import { defaultExperienceFilters } from "~/utils/defaultExperienceFilters";

type Experience = z.infer<typeof Experience>;

const ExperiencesParsed: Experience[] = ExperiencesJSON.map((obj: any) =>
  Experience.readonly().parse(obj),
).sort(sortEventDates);

const ExperienceLogoWhiteSet: Set<string | undefined> = new Set(
  ExperiencesParsed.filter(
    (e: Experience) =>
      defaultExperienceFilters(e) &&
      e.discipline === "professional" &&
      e?.media?.logo_white !== undefined,
  ).map((e: Experience) => e?.media?.logo_white),
);

const testimonials = [
  [
    {
      name: "Garrett Moore",
      title: "Political & Nonprofit Leadership",
      quote:
        "Radison is not your typical web developer. He is experienced and knowledgeable enough to take your website ideas and turn them into a fast, attractive, and extremely functional online site.",
      img: "7036ad5d-b460-4bcb-3a30-c863ecf00c00",
    },
  ],
];
</script>

<script lang="ts">
let limit_exp = true;
const selected_exp_tab = "fullstack";
const exp_tabs = [
  {
    id: "product-leadership",
    name: "Technical Leadership",
    desc: "Proven ability to lead software initiatives from concept to launch with strategic, technical, and product-driven clarity.",
    icon: '<path d="M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM1.49 15.326a.78.78 0 0 1-.358-.442 3 3 0 0 1 4.308-3.516 6.484 6.484 0 0 0-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 0 1-2.07-.655ZM16.44 15.98a4.97 4.97 0 0 0 2.07-.654.78.78 0 0 0 .357-.442 3 3 0 0 0-4.308-3.517 6.484 6.484 0 0 1 1.907 3.96 2.32 2.32 0 0 1-.026.654ZM18 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM5.304 16.19a.844.844 0 0 1-.277-.71 5 5 0 0 1 9.947 0 .843.843 0 0 1-.277.71A6.975 6.975 0 0 1 10 18a6.974 6.974 0 0 1-4.696-1.81Z" />',
    viewbox: "0 0 20 20",
  },
  {
    id: "web-interfaces",
    name: "User Interfaces & Experiences",
    desc: 'I eat pain points for breakfast. Obsessive about design details, user flow, and "wow, they thought of everything" moments.',
    icon: '<path d="M10 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 1ZM5.05 3.05a.75.75 0 0 1 1.06 0l1.062 1.06A.75.75 0 1 1 6.11 5.173L5.05 4.11a.75.75 0 0 1 0-1.06ZM14.95 3.05a.75.75 0 0 1 0 1.06l-1.06 1.062a.75.75 0 0 1-1.062-1.061l1.061-1.06a.75.75 0 0 1 1.06 0ZM3 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 3 8ZM14 8a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 14 8ZM7.172 10.828a.75.75 0 0 1 0 1.061L6.11 12.95a.75.75 0 0 1-1.06-1.06l1.06-1.06a.75.75 0 0 1 1.06 0ZM10.766 7.51a.75.75 0 0 0-1.37.365l-.492 6.861a.75.75 0 0 0 1.204.65l1.043-.799.985 3.678a.75.75 0 0 0 1.45-.388l-.978-3.646 1.292.204a.75.75 0 0 0 .74-1.16l-3.874-5.764Z" />',
    viewbox: "0 0 20 20",
  },
  {
    id: "fullstack",
    name: "APIs & Data Systems",
    desc: "Experience building composable services and data ingestion pipelines that serve critical environments.",
    icon: '<path fill-rule="evenodd" d="M13.2 2.24a.75.75 0 0 0 .04 1.06l2.1 1.95H6.75a.75.75 0 0 0 0 1.5h8.59l-2.1 1.95a.75.75 0 1 0 1.02 1.1l3.5-3.25a.75.75 0 0 0 0-1.1l-3.5-3.25a.75.75 0 0 0-1.06.04Zm-6.4 8a.75.75 0 0 0-1.06-.04l-3.5 3.25a.75.75 0 0 0 0 1.1l3.5 3.25a.75.75 0 1 0 1.02-1.1l-2.1-1.95h8.59a.75.75 0 0 0 0-1.5H4.66l2.1-1.95a.75.75 0 0 0 .04-1.06Z" clip-rule="evenodd" />',
    viewbox: "0 0 20 20",
  },
  {
    id: "network",
    name: "Platform Infrastructure",
    desc: "Expertise in designing scalable, cloud-native architecture that is automated, modular, and built for developer velocity.",
    icon: '<path d="m3.196 12.87-.825.483a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .758 0l7.25-4.25a.75.75 0 0 0 0-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 0 1-2.276 0L3.196 12.87Z" /><path d="m3.196 8.87-.825.483a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .758 0l7.25-4.25a.75.75 0 0 0 0-1.294l-.825-.484-5.666 3.322a2.25 2.25 0 0 1-2.276 0L3.196 8.87Z" /><path d="M10.38 1.103a.75.75 0 0 0-.76 0l-7.25 4.25a.75.75 0 0 0 0 1.294l7.25 4.25a.75.75 0 0 0 .76 0l7.25-4.25a.75.75 0 0 0 0-1.294l-7.25-4.25Z" />',
    viewbox: "0 0 20 20",
  },
  {
    id: "ce",
    name: "Computer Engineering",
    desc: "I've designed and fabricated complete products. Self-taught in microcontrollers, CAD, 3D printing, and PCB design.",
    icon: '<path d="M14 6H6v8h8V6Z" /><path fill-rule="evenodd" d="M9.25 3V1.75a.75.75 0 0 1 1.5 0V3h1.5V1.75a.75.75 0 0 1 1.5 0V3h.5A2.75 2.75 0 0 1 17 5.75v.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v1.5h1.25a.75.75 0 0 1 0 1.5H17v.5A2.75 2.75 0 0 1 14.25 17h-.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-1.5v1.25a.75.75 0 0 1-1.5 0V17h-.5A2.75 2.75 0 0 1 3 14.25v-.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-1.5H1.75a.75.75 0 0 1 0-1.5H3v-.5A2.75 2.75 0 0 1 5.75 3h.5V1.75a.75.75 0 0 1 1.5 0V3h1.5ZM4.5 5.75c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-8.5c-.69 0-1.25-.56-1.25-1.25v-8.5Z" clip-rule="evenodd" />',
    viewbox: "0 0 20 20",
  },
];

export default {
  data() {
    return {
      limitExp: limit_exp,
      selectedExpTab: selected_exp_tab,
    };
  },
  computed: {
    expTabs() {
      this.selectedExpTab;
      return exp_tabs;
    },
  },
  methods: {
    updateExpTab: function (val: any) {
      this.selectedExpTab = val;
    },
    updateExpLimit: function (val: any) {
      this.limitExp = val;
    },
  },
};
</script>

<style scoped>
.border-gradient {
  background: linear-gradient(to right, var(--tw-gradient-stops));
  -webkit-mask:
    linear-gradient(#fff 0 0) padding-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
</style>
