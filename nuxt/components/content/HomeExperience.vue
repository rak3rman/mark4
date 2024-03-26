<template>
  <HomeWrapper id="experience">
    <!--  Tabs  -->
    <Header num="02." title="Experience" fade />
    <div class="mt-4">
      <div
        class="relative z-10 float-right hidden max-w-md pb-5 pl-10 pt-1 lg:block"
      >
        <div
          class="-m-2 rounded-xl bg-neutral/5 p-2 ring-1 ring-inset ring-neutral/10 lg:-m-4 lg:rounded-2xl lg:p-4"
        >
          <div
            data-theme="summarize"
            class="rounded-md bg-white p-6 shadow-2xl ring-1 ring-accent/10"
          >
            <SummarizeResume class="h-[30.3rem] origin-top-left scale-[41%]" />
          </div>
        </div>
      </div>
      <div class="z-0 mt-8 lg:mt-0">
        <div
          class="mx-auto text-neutral lg:col-start-1 lg:row-start-1 lg:max-w-full"
        >
          <!--  Entries  -->
          <div class="fade-in pb-2 pt-6">
            <h6 class="text-left text-3xl leading-tight text-neutral">
              Professional Disciplines
            </h6>
            <h6 class="text-md pt-1 text-left font-mono text-secondary">
              Multi-talented. Multi-disciplined.
            </h6>
          </div>

          <div class="my-4 w-full">
            <NuxtLink
              class="fade-in relative transition duration-300 ease-in-out"
              v-for="tab in expTabs"
              :key="tab.id"
              @click="updateExpTab(tab.id)"
              :class="[
                tab.id === selectedExpTab ? '' : 'opacity-75 hover:opacity-100',
              ]"
            >
              <div
                class="mb-2 block w-9 rounded-lg transition duration-300 ease-in-out sm:mb-0"
                :class="[
                  tab.id === selectedExpTab
                    ? 'bg-secondary'
                    : 'bg-base-100-focus',
                ]"
              >
                <div class="flex sm:absolute sm:left-0 sm:top-0">
                  <svg
                    aria-hidden="true"
                    class="h-9 w-9 rounded-lg p-[7.5px] transition duration-300 ease-in-out"
                    fill="#fff"
                    :viewBox="tab.viewbox"
                    v-html="tab.icon"
                    :class="[
                      tab.id === selectedExpTab
                        ? 'bg-secondary'
                        : 'bg-base-200',
                    ]"
                  ></svg>
                </div>
              </div>
              <div
                class="text-md font-mono font-medium transition duration-300 ease-in-out sm:pl-16"
                :class="[
                  tab.id === selectedExpTab ? 'text-secondary' : 'text-neutral',
                ]"
              >
                <div>
                  <span class="absolute inset-0"></span>
                  {{ tab.name }}
                </div>
              </div>
              <div
                class="font-display text-md mb-4 mt-0.5 text-accent sm:pl-16"
              >
                {{ tab.desc }}
              </div>
            </NuxtLink>
          </div>
        </div>

        <NuxtLink
          to="/radison-akerman-resume.pdf"
          target="_blank"
          class="mr-3 mt-4 inline-flex items-center"
        >
          <ButtonPillOutlineLarge>
            Resume
            <DocumentTextIcon class="-mr-1 mb-0.5 ml-1.5 h-4 w-4" />
          </ButtonPillOutlineLarge>
        </NuxtLink>
        <NuxtLink
          to="/radison-akerman-cv.pdf"
          target="_blank"
          class="mt-4 inline-flex items-center"
        >
          <ButtonPillOutlineLarge>
            Cirriculum Vitae
            <DocumentDuplicateIcon class="-mr-1 mb-0.5 ml-1.5 h-4 w-4" />
          </ButtonPillOutlineLarge>
        </NuxtLink>

        <!--  Logo Cloud  -->
        <div
          class="mt-10 grid grid-cols-2 items-center gap-x-7 gap-y-8 sm:gap-x-4 sm:gap-y-7 lg:max-w-none"
        >
          <NuxtImg
            v-for="url in ExperienceLogoWhiteSet"
            class="max-h-10 w-full object-contain object-left"
            :src="url"
            alt="Experience Logo White"
          />
        </div>
      </div>
    </div>

    <!--  Testimonials  -->
    <!--    <div class="pt-12 pb-8">-->
    <!--      <h6 class="text-3xl text-neutral font-bold leading-tight text-left">-->
    <!--        What Others Say-->
    <!--      </h6>-->
    <!--      <h6 class="pt-1 text-md text-secondary font-mono text-left">-->
    <!--        Don't take my word for it.-->
    <!--      </h6>-->
    <!--    </div>-->
    <!--    <ul role="list" class="grid grid-cols-1 -m-3 lg:grid-cols-2 list-none p-0">-->
    <!--      <li v-for="(group, index) in testimonials" class="space-y-6 pb-0 mb-3">-->
    <!--        <figure class="rounded-lg p-8 shadow-md ring-1 ring-base-100-focus m-3" v-for="testimonial in group" :class="index > 1 ? 'hidden lg:block' : ''">-->
    <!--          <blockquote>-->
    <!--            <h6 class="text-lg tracking-tight text-neutral">-->
    <!--              "{{ testimonial.quote }}"-->
    <!--            </h6>-->
    <!--          </blockquote>-->
    <!--          <figcaption class="mt-6 flex items-center">-->
    <!--            <div class="overflow-hidden rounded-full bg-secondary">-->
    <!--              <NuxtImg class="h-12 w-12 object-cover" :src="'https://imagedelivery.net/5zM6Rdl2uV8Hmr9WxRh20g/' + testimonial.img + '/sq'" alt="Image" />-->
    <!--            </div>-->
    <!--            <div class="ml-4">-->
    <!--              <div class="text-base font-medium leading-6 tracking-tight text-neutral">-->
    <!--                {{ testimonial.name }}-->
    <!--              </div>-->
    <!--              <div class="mt-0.5 text-sm text-accent">-->
    <!--                {{ testimonial.title }}-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </figcaption>-->
    <!--        </figure>-->
    <!--      </li>-->
    <!--    </ul>-->
  </HomeWrapper>
</template>

<script setup lang="ts">
import {
  DocumentTextIcon,
  DocumentDuplicateIcon,
} from "@heroicons/vue/24/solid";
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
        "Radison is not your typical web developer. He is experienced and knowledgeable enough to take your website ideas and turn them into a fast, attractive, and extremely functional online site, all at an affordable price.",
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
    id: "fullstack",
    name: "Full-stack Software Engineering",
    desc: "Proven experience in building high-quality web utilities that perform at scale.",
    icon: '<path d="M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z"/>',
    viewbox: "0 0 448 512",
  },
  {
    id: "network",
    name: "Network/IoT Software Engineering",
    desc: "Harnessing the power of the internet through specialized network protocol/security skills.",
    icon: '<path d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"/>',
    viewbox: "0 0 660 512",
  },
  {
    id: "teaching",
    name: "Mentoring & Teaching",
    desc: "Building connections, providing communal support, and fostering resilience.",
    icon: '<path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"/>',
    viewbox: "0 0 660 512",
  },
  //    {
  //        id: "eventops",
  //        name: "Event Operations Freelancing",
  //        desc: "Effectively ",
  //        icon: '<path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3c-95.73 0-173.3 77.6-173.3 173.3C0 496.5 15.52 512 34.66 512H413.3C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304zM479.1 320h-73.85C451.2 357.7 480 414.1 480 477.3C480 490.1 476.2 501.9 470 512h138C625.7 512 640 497.6 640 479.1C640 391.6 568.4 320 479.1 320zM432 256C493.9 256 544 205.9 544 144S493.9 32 432 32c-25.11 0-48.04 8.555-66.72 22.51C376.8 76.63 384 101.4 384 128c0 35.52-11.93 68.14-31.59 94.71C372.7 243.2 400.8 256 432 256z"/>',
  //        viewbox: "0 0 640 512",
  //    },
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
