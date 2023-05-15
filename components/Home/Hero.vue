<template>
  <div class="container mx-auto flex items-center min-h-screen">
    <div class="mt-8 lg:grid lg:grid-cols-5 lg:gap-8 w-full">
      <div
        class="hidden lg:flex items-center justify-center lg:row-start-1 lg:col-start-4 lg:col-span-2 fade-in-hero"
        :style="{ 'transition-delay': 600 + 'ms' }"
      >
        <SvgPortrait1 class="max-w-full opacity-80" />
      </div>
      <div class="lg:col-span-3 flex items-center">
        <SvgPortrait1
          class="absolute left-[18%] w-[130%] pb-48 lg:hidden opacity-10"
          style="transform: rotateY(180deg)"
        />
        <div class="flex flex-col w-full justify-center overflow-y-hidden">
          <h6
            class="py-2 leading-normal text-secondary font-mono text-lg md:text-xl text-left fade-in-hero"
            :style="{ 'transition-delay': 300 + 'ms' }"
          >
            Hi there, my name is
          </h6>
          <h6
            class="pt-1 pb-1 text-4xl md:text-6xl text-neutral font-bold leading-tight text-left fade-in-hero"
            :style="{ 'transition-delay': 400 + 'ms' }"
          >
            Radison Akerman.
          </h6>
          <h6
            class="py-2 leading-normal text-accent text-[1.1rem] md:text-lg max-w-2xl text-left fade-in-hero"
            :style="{ 'transition-delay': 500 + 'ms' }"
          >
            <!--                        I lead teams who deliver exceptional digital experiences.-->
            I rapidly develop high-quality web utilities that perform at scale.
            Currently, I'm a Software Engineering Intern @
            <NuxtLink
              class="text-secondary underline underline-offset-2"
              to="https://spacex.com"
              >SpaceX</NuxtLink
            >, studying Computer Science + Business @
            <NuxtLink
              class="text-secondary underline underline-offset-2"
              to="https://uic.edu"
              >UIC</NuxtLink
            >, and co-building
            <NuxtLink
              class="text-secondary underline underline-offset-2"
              to="https://pulqra.com"
              >Pulqra</NuxtLink
            >
            – a creative marketing collective.
          </h6>
          <span
            class="py-3 inline-flex rounded-md shadow fade-in-hero"
            :style="{ 'transition-delay': 600 + 'ms' }"
          >
            <NuxtLink
              to="https://chickens.rakerman.com"
              class="inline-flex items-center"
            >
              <div
                class="p-[1px] bg-gradient-to-r from-red-600 via-red-500 to-yellow-500 rounded-md"
              >
                <div
                  class="bg-primary hover:bg-primary-focus px-4 py-2 rounded-md"
                >
                  <div
                    class="text-base font-mono leading-normal text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-yellow-500"
                  >
                    <div class="hidden md:block">
                      Exploding Chickens: Celebrating 1,000 games played!
                    </div>
                    <div class="block md:hidden text-[0.93rem]">
                      Exploding Chickens: <br />
                      Celebrating 1,000 games played!
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