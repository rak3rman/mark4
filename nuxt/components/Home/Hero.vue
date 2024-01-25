<template>
  <div class="container mx-auto flex min-h-screen items-center">
    <div class="mt-8 w-full lg:grid lg:grid-cols-5 lg:gap-8">
      <div
        class="fade-in-hero hidden items-center justify-center lg:col-span-2 lg:col-start-4 lg:row-start-1 lg:flex"
        :style="{ 'transition-delay': 600 + 'ms' }"
      >
        <SvgPortrait1 class="max-w-full opacity-80" />
      </div>
      <div class="flex items-center lg:col-span-3">
        <SvgPortrait1
          class="absolute left-[18%] w-[130%] pb-48 opacity-10 lg:hidden"
          style="transform: rotateY(180deg)"
        />
        <div class="flex w-full flex-col justify-center overflow-y-hidden">
          <h6
            class="fade-in-hero py-2 text-left font-mono text-lg leading-normal text-secondary md:text-xl"
            :style="{ 'transition-delay': 300 + 'ms' }"
          >
            Hi there, my name is
          </h6>
          <h6
            class="fade-in-hero pb-1 pt-1 text-left text-4xl font-bold leading-tight text-neutral md:text-6xl"
            :style="{ 'transition-delay': 400 + 'ms' }"
          >
            Radison Akerman.
          </h6>
          <h6
            class="fade-in-hero max-w-2xl py-2 text-left text-[1.1rem] leading-normal text-accent md:text-lg"
            :style="{ 'transition-delay': 500 + 'ms' }"
          >
            <!--                        I lead teams who deliver exceptional digital experiences.-->
            I rapidly develop high-quality web utilities that perform at scale.
            Currently, I'm studying Computer Science + Business @
            <NuxtLink
              class="inline-block text-secondary underline underline-offset-2"
              to="https://uic.edu"
              >UIC
            </NuxtLink>
            , project managing a team of 7, and mentoring CPS students on behalf
            of the
            <NuxtLink
              class="inline-block text-secondary underline underline-offset-2"
              to="https://thecitiesproject.org"
              >UIC Cities Project
            </NuxtLink>
            .
          </h6>
          <span
            class="fade-in-hero inline-flex rounded-md py-3 shadow"
            :style="{ 'transition-delay': 600 + 'ms' }"
          >
            <NuxtLink
              to="https://chickens.rakerman.com"
              class="inline-flex items-center"
            >
              <div
                class="rounded-md bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 p-[1px]"
              >
                <div
                  class="rounded-md bg-primary px-4 py-2 hover:bg-primary-focus"
                >
                  <div
                    class="bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 bg-clip-text font-mono text-base leading-normal text-transparent"
                  >
                    <div class="hidden md:block">
                      Exploding Chickens: Celebrating 1,250+ games played!
                    </div>
                    <div class="block text-[0.93rem] md:hidden">
                      Exploding Chickens: <br />
                      Celebrating 1,250 games played!
                    </div>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
