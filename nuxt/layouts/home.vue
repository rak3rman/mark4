<template>
  <FadeInWrapper>
    <div class="h-full bg-primary">
      <div class="pb-16">
        <HomeNavbar />
        <main>
          <HomeHero
            class="relative container overflow-hidden max-w-7xl mx-auto px-4 sm:px-6"
          />
          <HomeAbout
            class="container mx-auto items-center max-w-7xl px-4 sm:px-6 snap-none"
          />
          <HomeExperience />
          <HomeProjects
            class="container mx-auto items-center max-w-7xl px-4 sm:px-6 snap-none"
          />
          <HomePhotography />
          <div
            class="container mx-auto items-center max-w-7xl px-4 sm:px-6 snap-none"
          >
            <HomeContact />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  </FadeInWrapper>
</template>
<script setup lang="ts"></script>