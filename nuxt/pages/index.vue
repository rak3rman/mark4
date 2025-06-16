<script lang="ts" setup>
definePageMeta({
  layout: "home",
});

// Set SEO meta
useSeoMeta({
  title: "Radison Akerman",
  description: "I lead and build exceptional software experiences.",
});

// Handle OG Image
defineOgImage({
  component: "Radical",
  props: {
    headline: "Personal Website",
    title: "Radison Akerman",
    description: "I lead and build exceptional software experiences.",
  },
});

// Lazy load below-the-fold components for better performance
const LazyHomeExperience = defineAsyncComponent(
  () => import("../components/Home/Experience.vue"),
);
const LazyHomeProjects = defineAsyncComponent(
  () => import("../components/Home/Projects.vue"),
);
const LazyHomeContact = defineAsyncComponent(
  () => import("../components/Home/Contact.vue"),
);
</script>

<template>
  <div>
    <HomeHero
      buttonText="Explore Changelog: What & How I Build"
      buttonTextShort="Explore Changelog: How I Build"
      buttonUrl="https://changelog.radison.io"
    >
      I lead and build exceptional software experiences. Currently, I'm
      responsible for all software initiatives at
      <ProseA href="https://vistapower.com">Vista Power</ProseA>
      (YC W24) and Section Leading Stanford's
      <ProseA href="https://codeinplace.stanford.edu">Code in Place</ProseA>.
      Previously at <ProseA href="https://spacex.com">SpaceX</ProseA>.
    </HomeHero>

    <HomeAbout>
      <template #default>
        <ProseP>
          Hey there! I'm Radison, a software engineer obsessed with building and
          leading quality software products. My interest in digital technology
          started back in middle school when I tinkered with microcontrollers
          and competed in FIRST LEGO League competitions — it turns out you can
          learn a lot from bits of plastic and expensive servos.
        </ProseP>

        <ProseP>
          I've worked across industries including commercial clean energy,
          spacecraft manufacturing, tech consulting, university administration,
          political campaigns, enterprise security systems, film + television
          production, and athletic special events. Through each experience, I've
          proven I can adapt quickly to new challenges, be industry agnostic,
          and deliver exceptional software.
        </ProseP>

        <ProseP>
          Nowadays, I lead all software engineering efforts at
          <ProseA href="https://vistapower.com">Vista Power</ProseA>. We deliver
          clean energy as a service for commercial, industrial, and municipal
          facilities at low or no upfront cost, powered by safe, modular, and
          cost-effective solar power and battery energy storage. We're moving
          incredibly fast and dangerously talent-dense (entire leadership team
          is ex-SpaceX).
        </ProseP>

        <ProseP>
          In 2024, I graduated from the
          <ProseA href="https://uic.edu">University of Illinois Chicago</ProseA>
          with a degree in Computer Science and Business. During my time at UIC,
          I project-managed and worked directly with 8+ software developers
          under the College of Engineering. Together we developed and shipped
          over 10 full-stack web applications used by 1000s on campus. I was
          also a member of the UIC SAE Formula E team.
        </ProseP>

        <ProseP>
          In 2023, I was a Software Engineering Intern on the
          <ProseA href="https://www.spacex.com/vehicles/starship/"
            >Starship Software</ProseA
          >
          team at
          <ProseA href="https://spacex.com">SpaceX</ProseA>! I demonstrated
          leadership and technical excellence by owning a critical flight
          reliability tool used to validate over 1,000,000 spacecraft
          configuration values.
        </ProseP>

        <ProseP>
          Making an impact is part of my DNA, especially with personal projects.
          I've given
          <NuxtLink
            to="/publications"
            class="underline decoration-secondary decoration-[1.5px] underline-offset-2"
            >3 distinct guest lectures at UIC and 1 lecture internally at
            SpaceX</NuxtLink
          >
          about
          <ProseA href="https://chickens.rakerman.com"
            >Exploding Chickens</ProseA
          >
          — a popular web-based card game I built with my friends during
          COVID-19 (with over 1,500 games played). We dove deep into project
          management, design patterns, test coverage, browser architecture, and
          software engineering basics.
        </ProseP>

        <ProseP>
          Exploding Chickens fanned the flames and acted as a springboard for
          both my professional skills and future projects. I now lead
          <ProseA href="https://radicalplatforms.org">Radical Platforms</ProseA
          >, a small group of highly motivated software engineers, project
          managers, and creatives developing incredible software products.
        </ProseP>

        <ProseP>
          In my spare time, I love to build things with my hands (woodworking,
          small electronics), volunteer in the community (Stanford's Code in
          Place, UIC Cities Project), and compete in endurance multisport
          events.
        </ProseP>
      </template>
    </HomeAbout>

    <!-- Lazy loaded components for better performance -->
    <Suspense>
      <LazyHomeExperience />
      <template #fallback>
        <div class="h-32 animate-pulse rounded bg-base-200"></div>
      </template>
    </Suspense>

    <Suspense>
      <LazyHomeProjects />
      <template #fallback>
        <div class="h-32 animate-pulse rounded bg-base-200"></div>
      </template>
    </Suspense>

    <Suspense>
      <LazyHomeContact />
      <template #fallback>
        <div class="h-32 animate-pulse rounded bg-base-200"></div>
      </template>
    </Suspense>
  </div>
</template>
