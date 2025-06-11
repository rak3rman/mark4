<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

// Set SEO meta
useSeoMeta({
  title: "Publications",
  description:
    "All academic materials authored or delivered by Radison Akerman.",
});

// Handle OG Image
defineOgImage({
  component: "Radical",
  props: {
    headline: "Radison Akerman",
    title: "Publications",
    description:
      "All academic materials authored or delivered by Radison Akerman.",
  },
});
</script>

<template>
  <div>
    <!-- Hero Section -->
    <DocsHero>
      <template #head>Publications</template>
      <template #desc
        >All academic materials authored or delivered by Radison
        Akerman.</template
      >
    </DocsHero>

    <!-- Guest Lectures Section -->
    <ContentContainer class="container my-10 md:my-12">
      <div>
        <ProseH1>Guest Lectures</ProseH1>

        <!-- Spring 2023 Lecture -->
        <div class="mb-6">
          <ProseH2>
            Exploding Chickens: UIC CS 342 Lecture, Spring 2023
          </ProseH2>

          <ProseP class="italic">
            Delivered April 27th, 2023 at the University of Illinois Chicago
            under supervision of Prof. Mark Hallenbeck
          </ProseP>

          <ProseP>
            Abstract: Explored the inner workings of Exploding Chickens, an
            ambitious personal project that expanded into a 30,000+ line code
            base with games played all over the world, daily. Discussed how the
            game is played, progress/success of project, hosted a live open demo
            of v2, high-level overview of v1 stack/design choices, the MVC
            (Model-View-Controller) pattern in action on v1, v1 data schema, v1
            websocket architecture (with its pitfalls), v1 code dive, high-level
            overview of v2 stack/design choices, v2 test coverage, v2 data
            schema, v2 code dive, v3 architecture, and v3 cloud implementation,
            along with a few key takeaways for better application design.
          </ProseP>

          <div class="space-y-4">
            <DocsBookmark
              link="/ec_slidedeck_april_2023.pdf"
              presentation="true"
            >
              <template #title>
                PDF Slidedeck | Exploding Chickens: UIC CS 342 Lecture, Spring
                2023
              </template>
              <template #desc>
                Designed in Keynote, distributed under "Personal Use License" as
                defined in radison.io/licensing
              </template>
            </DocsBookmark>

            <DocsBookmark link="https://chickens.rakerman.com">
              <template #title>
                Live Application | Exploding Chickens
              </template>
              <template #desc>
                Real application with 1,750+ games played by 600+ users, built
                on Node.js, MongoDB, Auth0
              </template>
            </DocsBookmark>
          </div>
        </div>

        <!-- Fall 2022 Lecture -->
        <div class="mb-6">
          <ProseH2> Exploding Chickens: UIC CS 342 Lecture, Fall 2022 </ProseH2>

          <ProseP class="italic">
            Delivered December 1st, 2022 at the University of Illinois Chicago
            under supervision of Prof. Mark Hallenbeck
          </ProseP>

          <ProseP>
            Abstract: Explored the inner workings of Exploding Chickens, an
            ambitious personal project that expanded into a 30,000+ line code
            base with games played all over the world, daily. Discussed how the
            game is played, progress/success of project, hosted a live open demo
            of v2, high-level overview of v1 stack/design choices, the MVC
            (Model-View-Controller) pattern in action on v1, v1 data schema, v1
            websocket architecture (with its pitfalls), high-level overview of
            v2 stack/design choices, v2 test coverage, v2 data schema, project
            management in relation to release scheduling, and potential v3
            architecture, along with a few key takeaways for better application
            design.
          </ProseP>

          <div class="space-y-4">
            <!-- YouTube Video -->
            <div class="flex justify-center">
              <div class="max-w-4xl flex-1">
                <div class="aspect-h-9 aspect-w-16 mb-6 mt-3">
                  <iframe
                    src="https://www.youtube.com/embed/3KE848Yj0g4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    class="h-full w-full"
                  />
                </div>
              </div>
            </div>

            <DocsBookmark
              link="/ec_slidedeck_october_2022.pdf"
              presentation="true"
            >
              <template #title>
                PDF Slidedeck | Exploding Chickens: UIC CS 342 Lecture, Fall
                2022
              </template>
              <template #desc>
                Designed in Keynote, distributed under "Personal Use License" as
                defined in radison.io/licensing
              </template>
            </DocsBookmark>

            <DocsBookmark link="https://chickens.rakerman.com">
              <template #title>
                Live Application | Exploding Chickens
              </template>
              <template #desc>
                Real application with 1,750+ games played by 600+ users, built
                on Node.js, MongoDB, Auth0
              </template>
            </DocsBookmark>
          </div>
        </div>

        <!-- Spring 2022 Lecture -->
        <div class="mb-6">
          <ProseH2>
            Exploding Chickens: UIC CS 342 Lecture, Spring 2022
          </ProseH2>

          <ProseP class="italic">
            Delivered April 21st, 2022 at the University of Illinois Chicago
            under supervision of Prof. Mark Hallenbeck
          </ProseP>

          <ProseP>
            Abstract: Explored the inner workings of Exploding Chickens, an
            ambitious personal project that expanded into a 30,000+ line code
            base with games played all over the world, daily. Discussed how the
            game is played, progress/success of project, high-level overview of
            v1 stack/design choices, the MVC (Model-View-Controller) pattern in
            action on v1, v1 data schema, v1 websocket architecture (with its
            pitfalls), source code complexity with v1 vs v2, high-level overview
            of v2 stack/design choices, project management in relation to
            release scheduling, v2 data schema, v2 test coverage, and closed
            live demo of v2, along with a few key takeaways for better
            application design.
          </ProseP>

          <div class="space-y-4">
            <!-- YouTube Video -->
            <DocsYoutube>
              <template #embed>
                <iframe
                  src="https://www.youtube.com/embed/cD53M7NHQoM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                  class="h-full w-full"
                />
              </template>
            </DocsYoutube>

            <DocsBookmark
              link="/ec_slidedeck_april_2022.pdf"
              presentation="true"
            >
              <template #title>
                PDF Slidedeck | Exploding Chickens: UIC CS 342 Lecture, Spring
                2022
              </template>
              <template #desc>
                Designed in Keynote, distributed under "Personal Use License" as
                defined in radison.io/licensing
              </template>
            </DocsBookmark>

            <DocsBookmark link="https://chickens.rakerman.com">
              <template #title>
                Live Application | Exploding Chickens
              </template>
              <template #desc>
                Real application with 1,750+ games played by 600+ users, built
                on Node.js, MongoDB, Auth0
              </template>
            </DocsBookmark>
          </div>
        </div>
      </div>
    </ContentContainer>
  </div>
</template>
