<template>
  <HomeWrapper id="experience">
    <Header
      num="02."
      topic="Experience"
      title="Redefining <i>full-stack</i>."
      punchline="Quality, quantified."
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
            Cirriculum Vitae
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
              <div class="relative justify-start py-6">
                <div
                  class="bg-base-100-focus block w-9 rounded-lg transition duration-300 ease-in-out sm:mb-0"
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
                  class="text-md font-medium leading-[1.125em] tracking-[0.4px] text-primary transition duration-300 ease-in-out sm:pl-16"
                >
                  <div>
                    <span class="absolute inset-0"></span>
                    {{ tab.name }}
                  </div>
                </div>
                <div class="font-display text-md mt-0.5 text-neutral sm:pl-16">
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
      class="w-full pt-20 text-left text-2xl leading-tight text-neutral md:text-2xl"
    >
      <span class="text-primary"> Building products is my passion. </span>
      Growth happens at the intersection of curiosity, persistence, and
      practical problem-solving. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur.
    </div>
    <div
      class="grid w-full grid-cols-2 items-center gap-x-7 gap-y-8 pt-20 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-14 lg:max-w-none"
    >
      <NuxtImg
        v-for="url in ExperienceLogoWhiteSet"
        class="max-h-10 w-[9rem] object-contain object-left md:w-[11.5rem]"
        :src="url"
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
    id: "fullstack",
    name: "Full-stack Software Engineering",
    desc: "Proven ability to architect and implement robust web applications that scale efficiently to meet high-demand environments.",
    icon: '<path d="M160 80C160 112.8 140.3 140.1 112 153.3V241.1C130.8 230.2 152.7 224 176 224H272C307.3 224 336 195.3 336 160V153.3C307.7 140.1 288 112.8 288 80C288 35.82 323.8 0 368 0C412.2 0 448 35.82 448 80C448 112.8 428.3 140.1 400 153.3V160C400 230.7 342.7 288 272 288H176C140.7 288 112 316.7 112 352V358.7C140.3 371 160 399.2 160 432C160 476.2 124.2 512 80 512C35.82 512 0 476.2 0 432C0 399.2 19.75 371 48 358.7V153.3C19.75 140.1 0 112.8 0 80C0 35.82 35.82 0 80 0C124.2 0 160 35.82 160 80V80zM80 104C93.25 104 104 93.25 104 80C104 66.75 93.25 56 80 56C66.75 56 56 66.75 56 80C56 93.25 66.75 104 80 104zM368 56C354.7 56 344 66.75 344 80C344 93.25 354.7 104 368 104C381.3 104 392 93.25 392 80C392 66.75 381.3 56 368 56zM80 456C93.25 456 104 445.3 104 432C104 418.7 93.25 408 80 408C66.75 408 56 418.7 56 432C56 445.3 66.75 456 80 456z"/>',
    viewbox: "0 0 448 512",
  },
  {
    id: "network",
    name: "Network/IoT Software Engineering",
    desc: "Expertise in developing secure, optimized network protocols and IoT solutions that leverage cutting-edge internet technologies.",
    icon: '<path d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"/>',
    viewbox: "0 0 660 512",
  },
  {
    id: "ce",
    name: "Computer Engineering",
    desc: "Experience in designing and fabricating complete products from concept to prototype, utilizing self-taught skills in PCB design, CAD, 3D printing, and microcontroller programming.",
    icon: '<path d="M6 6v4h4V6H6Z" /><path fill-rule="evenodd" d="M5.75 1a.75.75 0 0 0-.75.75V3a2 2 0 0 0-2 2H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3v.75H1.75a.75.75 0 0 0 0 1.5H3a2 2 0 0 0 2 2v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13h.75v1.25a.75.75 0 0 0 1.5 0V13a2 2 0 0 0 2-2h1.25a.75.75 0 0 0 0-1.5H13v-.75h1.25a.75.75 0 0 0 0-1.5H13V6.5h1.25a.75.75 0 0 0 0-1.5H13a2 2 0 0 0-2-2V1.75a.75.75 0 0 0-1.5 0V3h-.75V1.75a.75.75 0 0 0-1.5 0V3H6.5V1.75A.75.75 0 0 0 5.75 1ZM11 4.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h6Z" clip-rule="evenodd" />',
    viewbox: "0 0 16 16",
  },
  {
    id: "teaching",
    name: "Mentoring & Teaching",
    desc: "Commitment to cultivating a supportive learning environment that empowers individuals, fosters resilience, and promotes collaborative growth within teams.",
    icon: '<path d="M8.5 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10.9 12.006c.11.542-.348.994-.9.994H2c-.553 0-1.01-.452-.902-.994a5.002 5.002 0 0 1 9.803 0ZM14.002 12h-1.59a2.556 2.556 0 0 0-.04-.29 6.476 6.476 0 0 0-1.167-2.603 3.002 3.002 0 0 1 3.633 1.911c.18.522-.283.982-.836.982ZM12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />',
    viewbox: "0 0 16 16",
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
